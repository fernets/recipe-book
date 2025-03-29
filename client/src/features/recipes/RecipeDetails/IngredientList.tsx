import { Box, Button } from '@mui/material';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Meal } from '../../../types';

interface IngredientListProps {
  recipe: Meal;
}

export const IngredientList: React.FC<IngredientListProps> = ({ recipe }) => {
  const ingredients = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const ingredientKey = `strIngredient${i + 1}` as keyof Meal;
      const ingredient = recipe[ingredientKey];
      return ingredient ? ingredient : null;
    }).filter(Boolean);
  }, [recipe]);

  return (
    <Box mt={2} display="flex" flexWrap="wrap" justifyContent="center">
      {ingredients.map((ingredient, idx) => (
        <Button
          key={idx}
          component={Link}
          to={`/recipes?ingredient=${ingredient}`}
          variant="outlined"
          size="small"
          sx={{ m: 0.5 }}
        >
          {ingredient}
        </Button>
      ))}
    </Box>
  );
};
