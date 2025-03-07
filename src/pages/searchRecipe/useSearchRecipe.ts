import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHook";
import { searchRecipes } from "../../store/slices/recipesSlice";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const useSearchRecipe = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");

  const { searchResults, searchLoading, searchError } = useAppSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    const state: any = location.state;
    if (state && state.searchTerm) {
      setSearchTerm(state.searchTerm);
      setSubmittedSearchTerm(state.searchTerm);
    }
  }, [location.state]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      toast.dismiss();
      dispatch(searchRecipes(searchTerm.trim()));
      setSubmittedSearchTerm(searchTerm.trim());
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
