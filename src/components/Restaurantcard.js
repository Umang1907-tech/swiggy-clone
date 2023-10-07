import React from "react";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  costForTwo,
}) => {
  return (
    <div className="w-64 border-solid border-2 rounded border-black-100 p-2 hover:shadow-lg transition-transform transform hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="mb-4">
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="food logo"
            className="w-full h-32 md:h-40 md:w-full object-cover rounded-t-lg"
          />
        </div>
        <h3 className="text-lg md:text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2 text-sm md:text-base">
          {cuisines?.join(", ")}
        </p>
        <div className="flex justify-around">
          <span className="text-yellow-500">⭐{avgRating}</span>
          <span className="text-sm md:text-base">{sla?.slaString}</span>
          <span className="text-sm md:text-base">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
