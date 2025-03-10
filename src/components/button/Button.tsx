import React from "react";
import { COLORS } from "../../constants/colors";
import { ButtonProps } from "../../types/types";
import { useButton } from "./useButton";

const Button: React.FC<ButtonProps> = (props) => {
  const { hover, setHover, handleClick } = useButton(props);

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? COLORS.secondaryColor : COLORS.primary,
      }}
      className={`transition-colors duration-100 w-full sm:w-40 md:w-34 lg:w-40 xl:w-44
        h-8 rounded-full flex items-center justify-center gap-2 font-bold  text-black`}
    >
      {props.label}
    </button>
  );
};

export default Button;
