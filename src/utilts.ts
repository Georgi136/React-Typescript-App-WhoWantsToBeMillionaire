import { Question } from "./constants.ts/categories";
import { Category } from "./constants.ts/options";

export const getCategoryIdFromSelectedCategory = (
  categories: Category[],
  categoryName: string
): string => {
  return categories.find((c) => c.name === categoryName)!.id;
};
export const getQuestionById = (
  questions:Question[],
  roundCount: number
): string => {
  return questions.find((q) => q.id === roundCount)!.question;
};

