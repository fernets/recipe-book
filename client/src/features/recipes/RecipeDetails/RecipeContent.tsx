import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Meal } from '../../../types';
import { IngredientList } from './IngredientList';

interface RecipeContentProps {
  recipe: Meal;
}

export const RecipeContent: React.FC<RecipeContentProps> = ({ recipe }) => {
  return (
    <Box flex={1} display="flex" flexDirection="column" alignItems="center">
      <Box
        component="img"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        sx={{
          width: { xs: '100%', md: '80%' },
          borderRadius: 2,
          maxWidth: 400,
        }}
      />
      <Typography variant="h4" align="center" mt={2}>
        {recipe.strMeal}
      </Typography>
      <Button
        component={Link}
        to={`/recipes?country=${recipe.strArea}`}
        variant="text"
        sx={{ mt: 1 }}
      >
        {recipe.strArea}
      </Button>
      <Typography variant="body1" mt={2} align="center">
        {recipe.strInstructions}
      </Typography>
      <IngredientList recipe={recipe} />
    </Box>
  );
};
