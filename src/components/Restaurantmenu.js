import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Restaurantmenucard from "./Restaurantmenucard";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const Restaurantmenu = () => {
  const { resid } = useParams();

  const restaurantmenu = useRestaurant(resid);
  const [restaurantinfo, itemcard, categories] = restaurantmenu;

  return (
    <>
      <div className="mx-96 mt-32">
        <div className="flex justify-between ms-3 me-3">
          <div className="">
            <h2 className="text-lg font-bold">{restaurantinfo?.name}</h2>
            <p className="font-light text-sm mt-3">
              {restaurantinfo?.cuisines?.join(", ")}
            </p>
            <p className="font-light text-sm">
              {restaurantinfo?.areaName},{" "}
              {restaurantinfo?.sla?.lastMileTravelString}
            </p>
          </div>
          <div className="mt-5 border-[1px] border-gray-300 rounded-md p-2">
            <button className="rating-btn">
              <p> {restaurantinfo?.avgRatingString}⭐</p>
              <hr />
              <p>{restaurantinfo?.totalRatingsString}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-96 mt-10">
        <div className="">
          <span className="ml-3 font-medium">
            {restaurantinfo?.sla?.slaString}
          </span>
          <span className="ml-3 font-medium">
            {restaurantinfo?.costForTwoMessage}
          </span>
        </div>
      </div>
      <div className="mx-96 mt-10">
        {itemcard.length == 0 ? (
          <Shimmer />
        ) : (
          <div>
            {itemcard.map((value, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div>
                    <h3 className="ml-3 font-bold text-xl mt-6">
                      {value?.card?.card?.title}(
                      {value?.card?.card?.itemCards.length})
                    </h3>
                  </div>
                  <div className="">
                    {value?.card?.card?.itemCards.map((item,index) => {
                      return (
                        <React.Fragment key={item?.card?.info?.id}>
                          <Restaurantmenucard item={item?.card?.info} index={index} />
                          <hr />
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Restaurantmenu;
