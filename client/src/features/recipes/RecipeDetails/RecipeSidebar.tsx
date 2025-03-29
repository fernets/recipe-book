import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Meal } from '../../../types';

interface RecipeSidebarProps {
  recipe: Meal;
}

export const RecipeSidebar: React.FC<RecipeSidebarProps> = ({ recipe }) => {
  return (
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
  );
};
