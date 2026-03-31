import type { Recipe } from "../types/Recipe";


export const mockRecipes: Recipe[]=[
    {
        id:1,
        title: "Macarrão à Carbonara",
        category: "Massas",
        prepTime: "25 min",
       difficulty: "Médio",
       image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500",
       ingredients: ["Espaguete", "Ovo", "Pancetta", "Queijo Pecorino"],
       instructions: "Cozinhe o macarrão, frite a pancetta e misture tudo com os ovos batidos..."
  },
  {
    id: 2,
    title: "Salada Caesar",
    category: "Saudável",
    prepTime: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500",
    ingredients: ["Alface", "Croutons", "Frango", "Molho Caesar"],
    instructions: "Higienize as folhas e monte as camadas com o frango grelhado."
  }

    
]
 