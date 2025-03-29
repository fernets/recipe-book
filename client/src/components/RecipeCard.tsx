import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FilteredMeal, Meal } from '../types';

interface RecipeCardProps {
  recipe: Meal | FilteredMeal;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/recipe/${recipe.idMeal}`}>
        <CardMedia component="img" height="140" image={recipe.strMealThumb} alt={recipe.strMeal} />
        <CardContent>
          <Typography gutterBottom variant="h6" align="center">
            {recipe.strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
