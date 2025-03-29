import { object, string, TypeOf } from 'zod';

export const getRecipesSchema = object({
  query: object({
    ingredient: string().optional(),
    country: string().optional(),
    category: string().optional(),
  }),
});

export const getRecipeInfoSchema = object({
  params: object({
    id: string({
      required_error: 'Recipe ID is required',
    }),
  }),
});

export type GetRecipesInput = TypeOf<typeof getRecipesSchema>['query'];
export type GetRecipeInfoInput = TypeOf<typeof getRecipeInfoSchema>['params'];
