import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, FilteredMeal, Meal, RecipeQuery } from '../../types';

const apiUrl = import.meta.env.VITE_API_URL;

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query<ApiResponse<Meal[]>, void>({
      query: () => 'recipes',
    }),
    getFilteredRecipes: builder.query<
      ApiResponse<FilteredMeal[]>,
      { filter: RecipeQuery; value: string }
    >({
      query: ({ filter, value }) => `recipes?${filter}=${value}`,
    }),
    getRecipeDetails: builder.query<ApiResponse<Meal>, string>({
      query: (id) => `recipes/${id}`,
    }),
  }),
});

export const { useGetAllRecipesQuery, useGetFilteredRecipesQuery, useGetRecipeDetailsQuery } =
  recipesApi;
