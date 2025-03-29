import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Meal } from '../../types';
import { useGetRecipeDetailsQuery } from './recipesApi';

export const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetRecipeDetailsQuery(id!);

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Typography color="error" align="center">
        Error loading recipe details
      </Typography>
    );

  const recipe = data?.data;
  if (!recipe) return <Typography align="center">Recipe not found</Typography>;

  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} p={2} gap={2}>
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
        <Box mt={2} display="flex" flexWrap="wrap" justifyContent="center">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            const ingredientKey = `strIngredient${num}` as keyof Meal;
            const ingredient = recipe[ingredientKey];
            if (ingredient) {
              return (
                <Button
                  key={num}
                  component={Link}
                  to={`/recipes?ingredient=${ingredient}`}
                  variant="outlined"
                  size="small"
                  sx={{ m: 0.5 }}
                >
                  {ingredient}
                </Button>
              );
            }
            return null;
          })}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: 300 },
          mt: { xs: 2, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" align="center">
          Recipes in category: {recipe.strCategory}
        </Typography>
        <Button
          component={Link}
          to={`/recipes?category=${recipe.strCategory}`}
          variant="outlined"
          fullWidth
          sx={{ mt: 1 }}
        >
          Show category recipes
        </Button>
      </Box>
    </Box>
  );
};
