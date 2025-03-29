import { RecipeQuery, Recipes } from '../types';
import { handleServiceError } from '../utils/errorUtils';
import { buildAvailableRecipeUrl, buildRecipeInfoUrl } from '../utils/recipeUtils';

export async function getAvailableRecipes(query: RecipeQuery): Promise<Recipes> {
  try {
    const url = buildAvailableRecipeUrl(query);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`MealDB API responded with status ${response.status}`);
    }
    const data = (await response.json()) as Recipes;
    return data;
  } catch (error: unknown) {
    handleServiceError(error, 'Error fetching recipes from MealDB: ');
  }
}

export async function getRecipeInfo(recipeID: string): Promise<Recipes> {
  try {
    const url = buildRecipeInfoUrl(recipeID);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`MealDB API responded with status ${response.status}`);
    }
    const data = (await response.json()) as Recipes;
    return data;
  } catch (error: unknown) {
    handleServiceError(error, 'Error fetching recipe info from MealDB: ');
  }
}
