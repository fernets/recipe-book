import { CircularProgress, Grid, Typography } from '@mui/material';
import { RecipeCard } from '../../components/RecipeCard';
import { FilteredMeal, Meal, RecipeQuery } from '../../types';
import { useGetAllRecipesQuery, useGetFilteredRecipesQuery } from './recipesApi';

interface RecipesListProps {
  filter?: RecipeQuery;
  value?: string;
}

export const RecipesList: React.FC<RecipesListProps> = ({ filter, value }) => {
  const { data, error, isLoading } =
    filter && value ? useGetFilteredRecipesQuery({ filter, value }) : useGetAllRecipesQuery();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error loading recipes</Typography>;

  const recipes = data?.data || [];

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe: FilteredMeal | Meal) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={recipe.idMeal}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};
