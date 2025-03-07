import { useAppSelector } from "../../hooks/useStore";
import { selectPopularRecipes } from "../../store/slices/recipesSlice";

export const usePopularRecipes = () => {
  const popularRecipes = useAppSelector(selectPopularRecipes);
  return { popularRecipes };
};
