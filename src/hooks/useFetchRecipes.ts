import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useStore";
import { fetchRecipes } from "../store/slices/recipesSlice";

export const useFetchRecipes = () => {
  const dispatch = useAppDispatch();
  const { recipes, loading, error } = useAppSelector((state) => state.recipes);

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipes.length]);

  return { recipes, loading, error };
};
