import React from "react";

const SubBannerSection = () => {
  const banners = [
    {
      id: 1,
      title: "Men's Shoes",
      description:
        "Our beauty box is a set of best full-size products that are top sellers in out online shop.",
      image: "./assets/imgBannerMen.webp",
    },
    {
      id: 2,
      title: "Women's Shoes",
      description:
        "Our beauty box is a set of best full-size products that are top sellers in out online shop.",
      image: "./assets/imgBannerWomen.webp",
    },
  ];
  return (
    <div className="my-10 grid grid-cols-2 gap-8 px-5">
      {banners.map((banner) => {
        return (
          <div key={banner.id}>
            <Banner
              title={banner.title}
              description={banner.description}
              src={banner.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SubBannerSection;

const Banner = ({ title, description, src }) => {
  return (
    <div className="relative">
      <img src={src} alt={src} />
      <div className="absolute left-0 top-10 z-[10] flex w-full flex-col items-center">
        <h2 className="mb-4 text-2xl font-bold tracking-wide text-black transition-colors duration-300 ease-in-out hover:text-orange-600 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="w-96 text-center">{description}</p>
      </div>
    </div>
  );
};
