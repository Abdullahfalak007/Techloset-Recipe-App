import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/recipes?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return {
    searchTerm,
    isMenuOpen,
    setSearchTerm,
    setIsMenuOpen,
    handleKeyDown,
  };
};
