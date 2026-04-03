export interface Recipe{
    id :Number;
    title:string;
    category :string;
    prepTime :string;
    difficulty:'Fácil'|'Médio' | 'Difícil';
    image : string;
    ingredients:string[];
    instructions:string;
}