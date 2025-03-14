export type Recipe = {
  id: number;
  name: string;
  thumbnail_url: string;
  description?: string;
  sections: {
    components: {
      raw_text: string;
    }[];
  }[];
  instructions: {
    display_text: string;
  }[];

  tips_and_ratings_enabled?: boolean;
  tips_summary?: {
    by_line?: string;
    content?: string;
    header?: string;
  };
  total_time_minutes?: number;
  total_time_tier?: {
    display_tier?: string;
    tier?: string;
  };
  user_ratings?: {
    count_negative?: number;
    count_positive?: number;
    score?: number;
  };
  yields?: string;
  topics?: {
    name: string;
    slug: string;
  }[];
};

export type RecipesState = {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  searchResults: Recipe[];
  searchLoading?: boolean;
  searchError?: string | null;
  searchTerm?: string;
};

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export type RecipeCardProps = {
  recipe: Recipe;
  layout?: "vertical" | "horizontal";
  onViewRecipe?: (id: number) => void;
};

export type UseRecipeCardProps = {
  recipe: Recipe;
  onViewRecipe?: (id: number) => void;
};

export type SearchBarProps = {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  variant?: "navbar" | "recipe";
};
