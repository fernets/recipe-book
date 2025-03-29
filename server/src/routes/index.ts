import { Router } from 'express';
import recipe from './recipe.routes';

const router = Router({ mergeParams: true });

// /api/v1

router.use('/recipes', recipe);

export default router;
