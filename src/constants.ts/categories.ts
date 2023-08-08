export type Category = {
    id: string;
    name: string;
}
export type Question = {
    id : number;
    category: string;
    correct_answer: string; 
    difficulty : string;
    incorrect_answers : string[];
    question: string;
    type: string;
}

export enum Difficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard'
}

export const CATEGORY_SEARCH_PARAM = "category";