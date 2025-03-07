import { useNavigate } from "react-router-dom";
import { UseRecipeCardProps } from "../../types/types";

export const useRecipeCard = ({ recipe, onViewRecipe }: UseRecipeCardProps) => {
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    if (onViewRecipe) {
      onViewRecipe(recipe.id);
    } else {
      navigate(`/recipe/${recipe.id}`);
    }
  };

  return { handleViewRecipe };
};
