import { Router } from 'express';
import { getAvailableRecipesHandler, getRecipeInfoHandler } from '../controllers/recipe.controller';
import validateResource from '../middleware/validateResource.middleware';
import { getRecipeInfoSchema, getRecipesSchema } from '../schemas/recipe.schema';

const router = Router();

// Get available recipes
router.get('/', validateResource(getRecipesSchema), getAvailableRecipesHandler);

// Get recipe info
router.get('/:id', validateResource(getRecipeInfoSchema), getRecipeInfoHandler);

export default router;
