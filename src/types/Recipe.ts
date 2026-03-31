export interface Recipe{
    id :Number;
    title:string;
    category :string;
    prepTime :string;
    difficulty:'Fácil'|'Média' | 'Difícil';
    image : string;
    ingredients:string[];
    instructions:string;
}