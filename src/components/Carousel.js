import React, { useEffect } from "react";
import useCarousel from "../utils/useCarousel";
import { Link, useParams } from "react-router-dom";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";

const Carousel = () => {
  const { resid } = useParams();
  const [carouselCard, carouselCardInfo] = useCarousel(resid);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!carouselCard.length) {
    return <Shimmer />;
  }

  return (
    <div className="mt-28">
      <h2 className="my-8 text-3xl font-semibold ml-3">
        {carouselCardInfo.title}
      </h2>
      <div className="flex gap-6 flex-wrap justify-around">
        {carouselCard.map((carousel) => (
          <Link
            to={`/restaurants/${carousel.card.card.info.id}`}
            key={carousel.card.card.info.id}
            className="link"
          >
            <RestaurantCard {...carousel.card.card.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
