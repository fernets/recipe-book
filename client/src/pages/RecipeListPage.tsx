import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterBar } from '../components/FilterBar';
import { RecipesList } from '../features/recipes/RecipesList';
import { RecipeQuery } from '../types';

export const RecipeListPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<RecipeQuery | undefined>(undefined);
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const country = searchParams.get('country');
    const ingredient = searchParams.get('ingredient');
    const category = searchParams.get('category');

    if (country) {
      setFilter('country');
      setValue(country);
    } else if (ingredient) {
      setFilter('ingredient');
      setValue(ingredient);
    } else if (category) {
      setFilter('category');
      setValue(category);
    } else {
      setFilter(undefined);
      setValue(undefined);
    }
  }, [searchParams]);

  return (
    <Container>
      <Typography variant="h3" align="center" mt={4}>
        {filter ? `Recipes: ${filter} - ${value}` : 'All Recipes'}
      </Typography>
      <FilterBar />
      <RecipesList filter={filter} value={value} />
    </Container>
  );
};
