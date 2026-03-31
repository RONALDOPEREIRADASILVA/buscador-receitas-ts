// Importando o CSS do Bootstrap instalado via NPM
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { mockRecipes } from './data/mockRecipes';
import type { Recipe } from "../src/types/Recipe";


// Selecionando os elementos que vamos usar
const gridReceitas = document.querySelector<HTMLElement>('#lista-receitas');
const inputBusca = document.querySelector<HTMLInputElement>('#input-busca');
let receitasAtuais:Recipe[]=[...mockRecipes];
// Função que limpa o grid e coloca as receitas na tela 
function renderizarReceitas(lista = receitasAtuais){
    if(!gridReceitas) return;

    gridReceitas.innerHTML="";//limpa o que tem hoje (aquele html estático)

   lista.forEach(receita => { 
  gridReceitas.innerHTML += `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
        <img src="${receita.image}" class="card-img-top" alt="${receita.title}" style="height:150px; object-fit:cover;">
        <div class="card-body p-2">
          <h6 class="card-title fw-bold mb-1" style="font-size: 0.9rem;">${receita.title}</h6>
          <div class="d-flex align-items-center text-muted" style="font-size: 0.75rem;">
            <i class="bi bi-clock me-1"></i> ${receita.prepTime}
            <i class="bi bi-bar-chart-fill ms-2 me-1"></i> ${receita.difficulty}
          </div>
          <button class="btn btn-success w-100 btn-detalhes" data-id="${receita.id}" data-bs-target="#recipeModal" data-bs-toggle="modal">Ver Detalhes</button>
        </div>
      </div>
    </div>`;
});
};

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('btn-detalhes')) {
    const id = Number(target.getAttribute('data-id'));
    
    // Procura a receita no seu arquivo de dados
    const receita = receitasAtuais.find(r => r.id === id);

    if (receita) {
      // Preenche o que aparece no Modal
      document.getElementById('modalTitle')!.innerText = receita.title;
      document.getElementById('modalInstructions')!.innerText = receita.instructions;

      // Limpa a lista de ingredientes antes de adicionar os novos
      const lista = document.getElementById('modalIngredients')!;
      lista.innerHTML = ''; 

      receita.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.innerText = ing;
        lista.appendChild(li);
      });
    }
  }
});
// 1. Ouvinte de digitação no campo de busca
inputBusca?.addEventListener('input', (evento) => {
  const termo = (evento.target as HTMLInputElement).value.toLowerCase();

  // Se o usuário apagar tudo, voltamos para a busca padrão (ex: pasta)
  if (termo.length === 0) {
    buscarReceitasDaInternet('pasta');
    return;
  }

  // 1. FILTRO LOCAL (Rápido): Filtra o que já carregamos na variável receitasAtuais
  const receitasFiltradas = receitasAtuais.filter(receita => {
    return receita.title.toLowerCase().includes(termo) || 
           receita.category.toLowerCase().includes(termo);
  });

  // 2. RENDERIZAÇÃO: Mostra o que encontrou localmente
  renderizarReceitas(receitasFiltradas);

  // 3. BUSCA NA API (Opcional): Se quiser que ele busque coisas novas na internet 
  // enquanto o usuário digita (dica: use após 3 letras para não sobrecarregar)
  if (termo.length > 3) {
    buscarReceitasDaInternet(termo);
  }
});
// Lógica para os botões de categoria
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('btn-categoria')) {
    const categoria = target.getAttribute('data-categoria')?.toLowerCase();

    if (categoria === 'tudo' || !categoria) {
      renderizarReceitas(receitasAtuais);
    } else {
      const filtradas = receitasAtuais.filter(r => 
        r.category.toLowerCase() === categoria
      );
      renderizarReceitas(filtradas);
    }
    
    // Opcional: Mudar a cor do botão ativo
    document.querySelectorAll('.btn-categoria').forEach(b => {
        b.classList.replace('btn-success', 'btn-outline-secondary');
    });
    target.classList.replace('btn-outline-secondary', 'btn-success');
  }
});
async function buscarReceitasDaInternet(termo ='pasta') {
  try {
    // 1. Fazendo o "frete" (pedido ao servidor)
    const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${termo}`);
    const dados = await resposta.json();

    // 2. "Traduzindo" o que a API manda para o seu formato Recipe
    const receitasDaAPI: Recipe[] = dados.meals.map((item: any): Recipe => ({
    id: Number(item.idMeal),
    title: item.strMeal,
    category: "Massas", 
    prepTime: "20-30 min",
    difficulty: "Média",
    image: item.strMealThumb,
    ingredients:Object.keys(item).filter(key =>  key.startsWith('strIngredient') && item[key]).map(key => item[key]), 
    instructions: item.strInstructions
   }));
    receitasAtuais =[ ...receitasDaAPI , ...mockRecipes];
    renderizarReceitas(receitasAtuais);
    // 3. Renderiza as receitas que vieram da internet!

  } catch (erro) {
    console.error("Erro ao buscar receitas:", erro);
  }
}
// Para testar, você pode comentar o 'renderizarReceitas()' antigo 
// e chamar esse novo aqui:
 buscarReceitasDaInternet();
//renderizarReceitas();//chama a função para as receitas aparecerem assim que a página carregar 
console.log("Sistema de receitas inicializado com sucesso! 👨‍🍳");