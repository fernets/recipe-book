import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RecipeInfoPage } from './pages/RecipeInfoPage';
import { RecipeListPage } from './pages/RecipeListPage';

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/recipes" element={<RecipeListPage />} />
        <Route path="/recipe/:id" element={<RecipeInfoPage />} />
        <Route path="*" element={<RecipeListPage />} />
      </Routes>
    </Layout>
  );
};
