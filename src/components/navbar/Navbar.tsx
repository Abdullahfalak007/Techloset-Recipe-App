import React from "react";
import { IMAGES } from "../../constants/images";
import { MENUITEMS } from "../../constants/menu";
import { COLORS } from "../../constants/colors";
import { useNavbar } from "./useNavbar";
import SearchBar from "../../components/searchBar/SearchBar";
import { Link } from "react-router-dom";

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

      <nav className="py-4 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={IMAGES.logo} alt="Logo" className="h-6 w-auto" />
              <span
                style={{ color: COLORS.navbarText }}
                className="hidden md:inline-block text-[26px] font-inter"
              >
                Delícias à Mesa
              </span>
            </div>

            <ul className="hidden lg:flex space-x-6">
              {MENUITEMS?.map((item, index) => (
                <li
                  key={index}
                  style={{ color: COLORS.navbarText }}
                  className="font-bold hover:underline"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <SearchBar
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                variant="navbar"
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <img
                  src={IMAGES.hamburgerIcon}
                  alt="Menu"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <ul className="absolute top-full left-0 w-full bg-white space-y-2 md:hidden z-50 p-4">
              {MENUITEMS?.map((item, index) => (
                <li
                  key={index}
                  style={{ color: COLORS.navbarText }}
                  className="font-medium hover:underline"
                >
                  <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
