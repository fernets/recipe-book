import { Box, Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FilterBar: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [filterType, setFilterType] = useState<'ingredient' | 'country' | 'category'>('ingredient');
  const navigate = useNavigate();

  const handleFilterTypeChange = useCallback((e: SelectChangeEvent) => {
    const newFilterType = e.target.value as 'ingredient' | 'country' | 'category';
    setFilterType(newFilterType);
    setFilter('');
  }, []);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    navigate(`/recipes?${filterType}=${filter}`);
    setFilter('');
  }, [filterType, filter, navigate]);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" my={2}>
      <Select value={filterType} onChange={handleFilterTypeChange} sx={{ mr: 2 }}>
        <MenuItem value="ingredient">Ingredient</MenuItem>
        <MenuItem value="country">Country</MenuItem>
        <MenuItem value="category">Category</MenuItem>
      </Select>
      <TextField
        variant="outlined"
        placeholder="Enter filter value"
        value={filter}
        onChange={handleFilterChange}
      />
      <Button variant="contained" onClick={handleSearch} sx={{ ml: 2 }}>
        Search
      </Button>
    </Box>
  );
};
