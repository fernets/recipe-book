import { CircularProgress, Grid, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { RecipeCard } from '../../components/RecipeCard';
import { RecipeQuery } from '../../types';
import { useGetAllRecipesQuery, useGetFilteredRecipesQuery } from './recipesApi';

interface RecipesListProps {
  filter?: RecipeQuery;
  value?: string;
}

export const RecipesList: React.FC<RecipesListProps> = ({ filter, value }) => {
  const allRecipes = useGetAllRecipesQuery();
  const filteredRecipes = useGetFilteredRecipesQuery(
    { filter: filter!, value: value! },
    { skip: !(filter && value) },
  );

  const { data, error, isLoading } = useMemo(() => {
    return filter && value ? filteredRecipes : allRecipes;
  }, [filter, value, filteredRecipes, allRecipes]);

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Typography color="error" align="center">
        Error loading recipes
      </Typography>
    );

  const recipes = data?.data || [];

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={recipe.idMeal}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};
