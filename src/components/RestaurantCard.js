import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resobj } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    sla,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resobj?.info;

  return (
    <div
      className="relative w-52 h-auto rounded-lg hover:scale-95 transition-transform duration-200"
      // style={{ backgroundColor: theme.backgroundColor }}
    >
      {/* Image Section with Discount Badge */}
      <div className="relative w-full h-32 overflow-hidden">
        <img
          className="w-full h-40 object-cover"
          alt="Restaurant Logo"
          src={CDN_URL + cloudinaryImageId}
        />
        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold rounded px-3 py-1 shadow-md">
            {aggregatedDiscountInfoV3.header}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h4 className="font-semibold text-lg text-gray-800 truncate">{name}</h4>
        <p className="text-sm text-gray-500 mt-1">
          {cuisines.slice(0, 2).join(", ")}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center text-yellow-500">
            <span className="font-semibold text-sm">{avgRatingString}</span>
            <i className="ri-star-fill text-yellow-500 text-xs ml-1"></i>
          </div>
          <p className="text-sm text-gray-600">{costForTwo}</p>
        </div>

        <div className="flex justify-between mt-2 text-gray-500 text-sm border-t pt-2">
          <span>{sla?.slaString}</span>
          <span>{sla?.lastMileTravel} km</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
