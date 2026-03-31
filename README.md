# 👨‍🍳 Buscador de Receitas (Recipe Finder)

Um aplicativo dinâmico de busca de receitas que combina dados locais (Mock) com dados reais vindos de uma API externa. Este projeto foi focado em praticar o fluxo assíncrono de dados e a tipagem rigorosa com TypeScript.

![Preview do Projeto](https://via.placeholder.com/800x400?text=Sua+Print+Aqui) <!-- Dica: Substitua pelo link de uma print do seu projeto -->

## 🚀 Tecnologias e Ferramentas

*   **TypeScript**: Tipagem de interfaces para garantir a consistência dos dados das receitas.
*   **Vite**: Ferramenta de build para um ambiente de desenvolvimento rápido.
*   **Bootstrap 5**: Layout responsivo, Grid system, Cards e Modais.
*   **TheMealDB API**: Consumo de dados reais de culinária via Fetch API.
*   **JavaScript (ES6+)**: Manipulação avançada de arrays e funções assíncronas.

## 💡 Principais Desafios Superados

Neste projeto, foquei em resolver problemas reais de desenvolvimento front-end:

1.  **Sincronização de Dados**: Implementei uma variável global `receitasAtuais` que unifica os dados do arquivo `mockRecipes.ts` com os resultados do `fetch`, garantindo que a busca e o modal funcionem independente da origem do dado.
2.  **Tratamento de API**: Como a API retorna ingredientes em campos separados (`strIngredient1`, `strIngredient2`...), criei uma lógica dinâmica usando `Object.keys` e `.filter` para limpar e mapear apenas os ingredientes preenchidos.
3.  **Busca em Tempo Real**: O campo de busca filtra os resultados na tela instantaneamente e dispara novas requisições para a API conforme a digitação.

## 🛠️ Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/buscador-receitas-ts.git](https://github.com/seu-usuario/buscador-receitas-ts.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Rode o projeto localmente:**
    ```bash
    npm run dev
    ```

## 📂 Estrutura do Código

*   `src/main.ts`: Lógica principal (Fetch, Renderização, Filtros e Eventos).
*   `src/types/Recipe.ts`: Definição da interface `Recipe`.
*   `src/data/mockRecipes.ts`: Dados iniciais para testes e fallback.
*   `index.html`: Estrutura base com os modais do Bootstrap.

---
Projetado e codificado por **Ronaldo** 🚀