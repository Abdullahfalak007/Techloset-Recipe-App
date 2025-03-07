import React from "react";
import { IMAGES } from "../../constants/images";
import { COLORS } from "../../constants/colors";
import { SearchBarProps } from "../../types/types";

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder,
  onChange,
  onKeyDown,
  variant = "recipe",
}) => {
  return (
    <div
      className={
        variant === "navbar"
          ? "hidden xl:block relative"
          : "relative w-full max-w-xl"
      }
    >
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <img
          src={IMAGES.search}
          alt="Search Icon"
          className={variant === "navbar" ? "w-4 h-4" : "w-5 h-5"}
          style={
            variant === "navbar"
              ? {
                  filter:
                    "brightness(0) saturate(100%) invert(41%) sepia(9%) saturate(0%) hue-rotate(191deg) brightness(93%) contrast(86%)",
                }
              : {}
          }
        />
      </div>
      <input
        type="text"
        placeholder={placeholder || "Search Recipes"}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={
          variant === "navbar"
            ? "pl-10 pr-3 py-1 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300"
            : "w-full pl-10 pr-3 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300"
        }
        style={
          variant === "navbar"
            ? { borderColor: COLORS.borderGray, backgroundColor: COLORS.Bg }
            : { backgroundColor: COLORS.Bg }
        }
      />
    </div>
  );
};

export default SearchBar;
