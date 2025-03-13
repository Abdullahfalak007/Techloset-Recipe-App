import React from "react";
import { RecipeCardProps } from "../../types/types";
import Button from "../button/Button";
import { COLORS } from "../../constants/colors";
import { useRecipeCard } from "./useRecipeCard";

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  layout = "vertical",
  onViewRecipe,
}) => {
  const { handleViewRecipe } = useRecipeCard({ recipe, onViewRecipe });

  return (
    <div
      className={`shadow-md rounded-3xl flex flex-col ${
        layout === "vertical" ? "w-full max-w-xs h-full" : "md:flex-row"
      }`}
      style={{ backgroundColor: COLORS.Bg }}
    >
      <div
        className={`w-full aspect-[403/212] overflow-hidden rounded-t-3xl ${
          layout !== "vertical" &&
          "md:aspect-auto md:w-60 md:h-52 flex-none md:rounded-l-3xl md:rounded-t-none"
        }`}
      >
        <img
          src={recipe.thumbnail_url}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3
            className="text-lg font-semibold mb-2 leading-6 overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              minHeight: "3rem",
            }}
          >
            {recipe.name}
          </h3>

          <p
            className="text-sm text-gray-600 mb-4 leading-5 overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              minHeight: "2.5rem",
            }}
          >
            {recipe.description || "No description available."}
          </p>
        </div>

        <div>
          <Button label="View Recipe" onClick={handleViewRecipe} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
