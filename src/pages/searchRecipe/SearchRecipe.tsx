import React from "react";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import Loader from "../../components/loader/Loader";
import { useSearchRecipe } from "./useSearchRecipe";
import SearchBar from "../../components/searchBar/SearchBar";

const SearchRecipe: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    handleKeyDown,
    searchResults,
    searchLoading,
    searchError,
  } = useSearchRecipe();

  return (
    <div className="container w-[85%] mx-auto px-4">
      <div className="my-32 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Search Recipes
        </h1>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="container mx-auto py-8">
        {searchLoading && <Loader />}
        {searchError && (
          <p className="text-center text-red-500">Error: {searchError}</p>
        )}
        {!searchLoading && !searchError && searchResults.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-left mb-6">
              Search Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {searchResults.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} layout="vertical" />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
