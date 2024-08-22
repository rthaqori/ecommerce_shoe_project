import React from "react";
import HeroSection from "./HeroSection";
import CategoriesComponent from "./CategoriesComponent";
import NewArrivals from "./NewArrivals";
import WhyChooseUs from "./WhyChooseUs";
import WhatWeOffer from "./WhatWeOffer";
import SubBannerSection from "./SubBannerSection";
import BlogSectionComponent from "./BlogSectionComponent";
import BestSeller from "./BastSellerSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoriesComponent />
      <BestSeller />
      <SubBannerSection />
      <NewArrivals />
      <WhatWeOffer />
      <BlogSectionComponent />
    </>
  );
};

export default Home;
