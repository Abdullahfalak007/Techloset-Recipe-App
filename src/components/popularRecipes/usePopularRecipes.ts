import { useAppSelector } from "../../hooks/useStoreHook";
import { selectPopularRecipes } from "../../store/slices/recipesSlice";

export const usePopularRecipes = () => {
  const popularRecipes = useAppSelector(selectPopularRecipes);
  return { popularRecipes };
};
