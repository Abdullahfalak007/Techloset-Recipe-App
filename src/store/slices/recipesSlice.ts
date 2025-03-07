import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";
import type { Recipe, RecipesState } from "../../types/types";

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
  searchResults: [],
};

export const fetchRecipes = createAsyncThunk<
  Recipe[],
  void,
  { rejectValue: string }
>("recipes/fetchRecipes", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=1000&tags=under_30_minutes",
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      }
    );
    return response.data.results as Recipe[];
  } catch (error: any) {
    return rejectWithValue("Network error");
  }
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    searchRecipes: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = state.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRecipes.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.loading = false;
          state.recipes = action.payload;
        }
      )
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error fetching recipes";
      });
  },
});

const selectRecipesState = (state: RootState) => state.recipes;

export const selectPopularRecipes = createSelector(
  selectRecipesState,
  (state) => {
    if (state.recipes.length <= 3) return state.recipes;
    const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }
);

export const selectRecentRecipes = createSelector(selectRecipesState, (state) =>
  [...state.recipes].slice(-3).reverse()
);

export const { searchRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
