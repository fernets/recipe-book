import { RecipeQuery } from '../types/recipe';

const BASE_URL = process.env.MEALDB_BASE_URL || 'https://www.themealdb.com/api/json/v1/1';

export function buildAvailableRecipeUrl(query: RecipeQuery): string {
  if (query.ingredient) {
    return `${BASE_URL}/filter.php?i=${encodeURIComponent(query.ingredient)}`;
  } else if (query.country) {
    return `${BASE_URL}/filter.php?a=${encodeURIComponent(query.country)}`;
  } else if (query.category) {
    return `${BASE_URL}/filter.php?c=${encodeURIComponent(query.category)}`;
  }
  // Default – return all recipes
  return `${BASE_URL}/search.php?s=`;
}

export function buildRecipeInfoUrl(recipeID: string): string {
  return `${BASE_URL}/lookup.php?i=${encodeURIComponent(recipeID)}`;
}
