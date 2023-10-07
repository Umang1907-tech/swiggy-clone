import React, { useEffect, useState } from "react";

const useRestaurant = (resid) => {
  const [restaurantinfo, setRestaurantinfo] = useState({});
  const [itemcard, setItemcard] = useState([]);
  const [categories, setCategories] = useState([]);

  console.log(restaurantinfo);
  console.log(itemcard);
  console.log(categories);

  useEffect(() => {
    getrestaurantinfo();
    window.scrollTo(0, 0);
  }, []);

  const getrestaurantinfo = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0783783&lng=72.594049&restaurantId=${resid}&submitAction=ENTER`
      );
      console.log(data);
      const json = await data.json();
      console.log(json);
      setRestaurantinfo(json?.data?.cards[0]?.card?.card?.info);
      const items =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      console.log(items);

      const itemcards = items.filter((value) => value?.card?.card?.itemCards);
      setItemcard(itemcards);
      const categories = items.filter((value) => value?.card?.card?.categories);
      setCategories(categories);
    } catch (e) {
      console.log(e);
    }
  };

  return [restaurantinfo, itemcard, categories];
};

export default useRestaurant;
