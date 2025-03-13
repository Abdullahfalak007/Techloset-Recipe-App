import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";
import { SOCIAL_LINKS } from "../../constants/socialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: COLORS.primary }}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src={IMAGES.logo} alt="Logo" className="h-6 w-auto" />
          <span
            style={{ color: COLORS.navbarText }}
            className="hidden md:inline-block text-[26px] font-medium font-inter"
          >
            Delícias à Mesa
          </span>
        </div>

        <div className="md:ml-[20%] lg:ml-[25%] xl:ml-[40%] 2xl:ml-[50%] flex flex-col items-center md:justify-around">
          <span
            style={{ color: COLORS.navbarText }}
            className="font-medium mb-2"
          >
            Redes sociais:
          </span>
          <div className="flex space-x-2">
            {SOCIAL_LINKS.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 rounded"
                style={{ backgroundColor: COLORS.secondaryColor }}
              >
                <img src={link.icon} alt={link.name} className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
