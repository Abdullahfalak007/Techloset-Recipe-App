// src/pages/Navbar.tsx
import React from "react";
import { IMAGES } from "../../constants/images";
import { MENUITEMS } from "../../constants/menu";
import { COLORS } from "../../constants/colors";
import { useNavbar } from "./useNavbar";
import SearchBar from "../../components/searchBar/SearchBar";

const Navbar: React.FC = () => {
  const {
    searchTerm,
    isMenuOpen,
    setSearchTerm,
    setIsMenuOpen,
    handleKeyDown,
  } = useNavbar();

  return (
    <>
      <div
        style={{
          backgroundColor: COLORS.primary,
          height: "1.5rem",
          width: "100%",
        }}
      ></div>

      <nav className="px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={IMAGES.logo} alt="Logo" className="h-5 w-auto" />
            <span
              style={{ color: COLORS.navbarText }}
              className="hidden md:inline-block text-[26px] font-inter"
            >
              Delícias à Mesa
            </span>
          </div>

          <ul className="hidden md:flex space-x-6">
            {MENUITEMS?.map((item, index) => (
              <li
                key={index}
                style={{ color: COLORS.navbarText }}
                className="font-bold hover:underline"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {/* Use the SearchBar with variant "navbar" */}
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              variant="navbar"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden"
            >
              <img src={IMAGES.hamburgerIcon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="mt-4 space-y-2 xl:hidden">
            {MENUITEMS?.map((item, index) => (
              <li
                key={index}
                style={{ color: COLORS.navbarText }}
                className="font-medium hover:underline"
              >
                <a href={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item?.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
