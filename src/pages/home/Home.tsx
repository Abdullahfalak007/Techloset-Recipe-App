import React from "react";

import HeroSection from "../../components/heroSection/HeroSection";
import PopularRecipes from "../../components/popularRecipes/PopularRecipes";
import RecentRecipes from "../../components/recentRecipes/RecentRecipes";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopularRecipes />
      <RecentRecipes />
    </div>
  );
};

export default Home;
