import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHook";
import { fetchRecipes, searchRecipes } from "../../store/slices/recipesSlice";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export const useSearchRecipe = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");

  const { recipes, searchResults, searchLoading, searchError } = useAppSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [recipes, dispatch]);

  useEffect(() => {
    if (searchQuery) {
      setSearchTerm(searchQuery);
      setSubmittedSearchTerm(searchQuery);
      dispatch(searchRecipes(searchQuery));
    }
  }, [searchQuery, dispatch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      toast.dismiss();
      const term = searchTerm.trim();
      setSearchParams({ search: term });
      dispatch(searchRecipes(term));
      setSubmittedSearchTerm(term);
    }
  };

  useEffect(() => {
    if (submittedSearchTerm && !searchLoading && !searchError) {
      toast.dismiss();
      if (searchResults.length === 0) {
        toast.error(`No recipes found matching "${submittedSearchTerm}"`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      setSubmittedSearchTerm("");
    }
  }, [submittedSearchTerm, searchResults, searchLoading, searchError]);

  return {
    searchTerm,
    setSearchTerm,
    handleKeyDown,
    searchResults,
    searchLoading,
    searchError,
  };
};
