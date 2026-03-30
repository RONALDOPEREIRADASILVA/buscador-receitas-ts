// Importando o CSS do Bootstrap instalado via NPM
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Selecionando os elementos que vamos usar
const gridReceitas = document.querySelector<HTMLElement>('#lista-receitas');
const inputBusca = document.querySelector<HTMLInputElement>('#input-busca');

console.log("Sistema de receitas inicializado com sucesso! 👨‍🍳");