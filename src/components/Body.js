import React, { useContext, useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import { Image_Carousel_URL, SWIGGY_API } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredrestaurant } from "../utils/helper";
import useOnline from "../utils/useOnline";
import Usercontext from "../utils/Usercontext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [filteredrestaurants, setFilteredrestaurants] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [Image_Carousel, setImageCarousel] = useState([]);
  const [Restauranttitle, setRestauranttitle] = useState("");
  const [Food_Carousel, setFoodCarousel] = useState([]);

  var settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var categorysettings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  const { user, setUser } = useContext(Usercontext);
  console.log(user);
  console.log(setUser);

  const getRestaurants = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const data = await response.json();

      console.log("API Response:", data);

      const cards = data?.data?.cards;

      const availableCard = cards
        .slice(2, 6)
        .find((card) => card?.card?.card?.gridElements);
      const imageCarousel = cards[0]?.card?.card?.imageGridCards?.info || [];

      const titleCard = cards
        .slice(1, 4)
        .find((card) => card?.card?.card?.title);
      const res_title = titleCard?.card?.card?.title || "";

      setRestauranttitle(res_title); // Set res_title immediately

      const restaurants =
        availableCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      if (!imageCarousel.length) {
        console.warn("No image_carousel found in the response");
        setImageCarousel([]);
      } else {
        setImageCarousel(imageCarousel); // Set imageCarousel if available
      }

      const foodCarouselInfo = cards[1]?.card?.card?.imageGridCards?.info || [];

      if (!foodCarouselInfo.length) {
        console.warn("No food_carousel data found in the response");
        setFoodCarousel([]); // Set an empty array as fallback
      } else {
        setFoodCarousel(foodCarouselInfo); // Set food_carousel only if it's confirmed
      }

      if (!restaurants.length) {
        console.warn("No restaurants data found in the response");
        setAllrestaurants([]);
        setFilteredrestaurants([]);
      } else {
        setAllrestaurants(restaurants);
        setFilteredrestaurants(restaurants);
      }

      console.log(imageCarousel);
      console.log("Restaurants " + restaurants);
      console.log("Food_Carousel " + foodCarouselInfo);
    } catch (error) {
      console.log("Error fetching or processing data:", error);
    }
  };

  // console.log(user);
  // console.log(setuser);

  const isonline = useOnline();

  if (!isonline) {
    return (
      <h1 className="text-center mt-6">
        🔴 Offline Please check your internet connection!!
      </h1>
    );
  }

  const extractCollectionId = (entityId) => {
    const regex = /collection_id=(\d+)/;
    const match = entityId.match(regex);
    return match ? match[1] : null;
  };

  console.log("render");
  // if(!allrestaurants) return null;

  return allrestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="mt-20">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 ml-9">Best Offers for you</h2>
        <Slider {...settings} className="mx-4">
          {Image_Carousel.map((value) => (
            <React.Fragment key={value.imageId}>
              {value.entityId ===
              "swiggy://fusion-landing?id=Knorr&show_location=true" ? (
                <img
                  src={Image_Carousel_URL + value.imageId}
                  alt="food logo"
                  className="px-4 cursor-pointer"
                />
              ) : (
                <Link
                  to={
                    value?.action?.link ==
                    `https://www.swiggy.com/menu/${value.entityId}`
                      ? `restaurants/${value.entityId}`
                      : `/collections/${
                          value.entityId.length > 8
                            ? extractCollectionId(value.entityId)
                            : value.entityId
                        }`
                  }
                >
                  <img
                    src={Image_Carousel_URL + value.imageId}
                    alt="food logo"
                    className="px-4"
                  />
                </Link>
              )}
            </React.Fragment>
          ))}
        </Slider>

        <h2 className="text-2xl font-bold my-6 ml-9">What's on your mind?</h2>
        <Slider {...categorysettings} className="mx-4">
          {Food_Carousel.map((value) => (
            <React.Fragment key={value.imageId}>
              <Link
                to={`/collections/${
                  value.entityId.length > 8
                    ? extractCollectionId(value.entityId)
                    : value.entityId
                }`}
              >
                <img
                  src={Image_Carousel_URL + value.imageId}
                  alt="food logo"
                  className="w-36 h-44"
                />
              </Link>
            </React.Fragment>
          ))}
        </Slider>

        <div className="w-full max-w-md mx-auto mt-9">
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow w-full md:w-auto px-4 py-2 mr-2 mb-4 md:mb-0 text-orange-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
              value={searchtext}
              onChange={(e) => {
                setSearchtext(e.target.value);
              }}
              onKeyDown={() => {
                const data = filteredrestaurant(allrestaurants, searchtext);
                console.log(data);
                console.log(searchtext);
                if (searchtext.length === 1) {
                  setFilteredrestaurants(allrestaurants);
                } else {
                  setFilteredrestaurants(data);
                }
              }}
            />
            <button
              className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none"
              type="submit"
            >
              Search
            </button>
            {/* <input
              type="text"
              placeholder="Search"
              className="flex-grow w-full md:w-auto px-4 py-2 mr-2 mb-4 md:mb-0 text-orange-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
              value={user.name}
              onChange={(e) => {
                setUser({
                  ...user,
                  name: e.target.value,
                });
              }}
            />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow w-full md:w-auto px-4 py-2 mr-2 mb-4 md:mb-0 text-orange-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
              value={user.email}
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            /> */}
          </form>
        </div>
      </div>
      {filteredrestaurants.length !== 0 ? (
        <div className="flex gap-6 flex-wrap justify-around">
          {filteredrestaurants.map((restaurant) => {
            return (
              <Link
                to={`/restaurants/${restaurant?.info?.id}`}
                key={restaurant?.info?.id}
                className="link"
              >
                <Restaurantcard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      ) : (
        <h1>No restaurants found</h1>
      )}
    </div>
  );
};

export default Body;
