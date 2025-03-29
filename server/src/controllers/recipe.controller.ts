import type { Request } from 'express';
import { getAvailableRecipes, getRecipeInfo } from '../services/mealdb.service';
import { Meal } from '../types';
import type { ApiResponseType } from '../types/api';
import { handleControllerError } from '../utils/errorUtils';
import { sendResponse } from '../utils/responseUtils';

export async function getAvailableRecipesHandler(
  req: Request,
  res: ApiResponseType<Meal[]>,
): Promise<void> {
  try {
    const { query } = req;
    const data = await getAvailableRecipes(query);

    if (!data.meals) {
      sendResponse(res, 404, null, 'No recipes found matching the query');
      return;
    }

    sendResponse(res, 200, data.meals, 'Recipes retrieved successfully');
  } catch (error: unknown) {
    handleControllerError(res, error, 'Error retrieving recipes: ');
    return;
  }
}

export async function getRecipeInfoHandler(
  req: Request,
  res: ApiResponseType<Meal>,
): Promise<void> {
  try {
    const { id } = req.params;
    const data = await getRecipeInfo(id);
    if (!data || !data.meals) {
      sendResponse(res, 404, null, 'Recipe not found');
      return;
    }
    sendResponse(res, 200, data.meals[0], 'Recipe info retrieved successfully');
  } catch (error: unknown) {
    handleControllerError(res, error, 'Error retrieving recipe info: ');
    return;
  }
}
