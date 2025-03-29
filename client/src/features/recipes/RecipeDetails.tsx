import { CircularProgress, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { RecipeContent } from './RecipeDetails/RecipeContent';
import { RecipeSidebar } from './RecipeDetails/RecipeSidebar';
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
      <RecipeContent recipe={recipe} />
      <RecipeSidebar recipe={recipe} />
    </Box>
  );
};
