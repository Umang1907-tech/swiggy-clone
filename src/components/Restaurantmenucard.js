import React, { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { additem, removeitem } from "../utils/cartSlice";

const Restaurantmenucard = ({ item, index }) => {
  const { name, description, defaultPrice, price, imageId } = item;
  console.log(item);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  return (
    <div className="mt-10 flex justify-between px-3 pb-3">
      <div>
        <p className="font-bold">{name}</p>
        <p className="font-normal">
          <span className="rupee-icon text-md">&#8377;</span>
          {!defaultPrice ? price / 100 : defaultPrice / 100}
        </p>
        <p className="font-light text-sm">{description}</p>
      </div>
      <div className="">
        {imageId ? (
          <div className="">
            <div>
              <img
                src={IMG_CDN_URL + imageId}
                alt="menu_img"
                className="w-[118] rounded-md h-[96] object-cover"
              />
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <button
                className="px-4 py-1 bg-orange-500 text-white rounded-lg"
                onClick={() => {
                  handleDecrease();
                  dispatch(removeitem(index));
                }}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="px-4 py-1 bg-orange-500 text-white rounded-lg"
                onClick={() => {
                  handleIncrease();
                  dispatch(additem(item));
                }}
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-lg"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-lg"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurantmenucard;
