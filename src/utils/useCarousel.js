import { useEffect, useState } from "react";

const useCarousel = (id) => {
  const [carouselCard, setCarouselCard] = useState([]);
  const [carouselCardInfo, setCarouselCardInfo] = useState({});

  useEffect(() => {
    getCarouselCardInfo();
  }, []);

  const getCarouselCardInfo = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0398899&lng=72.645422&collection=${id}&isNewCollectionFlow=true&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );

      if (response.ok) {
        const json = await response.json();
        const cards = json?.data?.cards;

        if (cards) {
          const modifiedCards = cards.slice(2);
          setCarouselCard(modifiedCards);
          setCarouselCardInfo(cards[0]?.card?.card);
        }
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return [carouselCard, carouselCardInfo];
};

export default useCarousel;
