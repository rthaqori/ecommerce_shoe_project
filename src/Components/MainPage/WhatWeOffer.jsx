import React from "react";

const WhatWeOffer = () => {
  const weOffer = [
    {
      img: "abc",
      title: "Free Consultation",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut voluptas necessitatibus provident saepe ipsum!",
    },
    {
      img: "abc",
      title: "Cash Back",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut voluptas necessitatibus provident saepe ipsum!",
    },
    {
      img: "abc",
      title: "Monthly Offer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut voluptas necessitatibus provident saepe ipsum!",
    },
    {
      img: "abc",
      title: "Membership",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut voluptas necessitatibus provident saepe ipsum!",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl bg-gray-100 py-10">
      <div className="mb-4 flex items-center justify-center text-4xl font-bold">
        <h2>
          What We <span className="text-orange-600">Offer</span>
        </h2>
      </div>
      <div className="flex h-fit snap-x snap-mandatory grid-cols-4 gap-2 overflow-x-scroll py-5 md:grid md:gap-5 lg:px-20">
        {weOffer.map((offer, index) => {
          return (
            <div
              key={index}
              className="group shrink-0 basis-1/2 snap-start rounded bg-white p-4 transition-colors duration-300 ease-in-out hover:bg-[#111111]"
            >
              <div className="flex h-2/5 items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-300 md:h-32 md:w-32">
                  <img src={weOffer[0].img} alt="image" />
                </div>
              </div>
              <div className="flex h-3/5 flex-col items-center justify-between p-2">
                <h3 className="text-center text-lg font-semibold text-orange-600 md:text-xl">
                  {offer.title}
                </h3>
                <p className="line-clamp-4 text-center text-base text-gray-700 group-hover:text-white lg:line-clamp-6">
                  {offer.description}
                </p>
                <span className="group-hover:text-white">xx</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeOffer;
