export type Category = {
    id: string;
    name: string;
}

export enum Difficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard'
}

export const CATEGORY_SEARCH_PARAM = "category";
export const DIFFICULTY_SEARCH_PARAM = "difficulty";
export const NUMBER_OF_QUESTIONS_SEARCH_PARAM = "amount";