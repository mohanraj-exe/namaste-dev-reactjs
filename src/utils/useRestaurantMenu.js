import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "./menu.json";

const useRestaurantMenu = () => {
  const { resId } = useParams();

  const [resTitle, setResTitle] = useState("");
  const [groupedMenu, setGroupedMenu] = useState([]);

  useEffect(() => {
    // MOCK API
    setTimeout(() => {
      try {
        const json = jsonData;
        // console.log(json);

        const [restaurant] = json?.filter((menu) => menu.id == resId);
        // console.log(restaurant);

        setResTitle(restaurant?.cards[0].card?.card?.text);

        const [result] = restaurant?.cards?.filter((card) => card?.groupedCard);
        const menu = result?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) => card?.card?.card?.itemCards,
        );
        // console.log(menu);

        setGroupedMenu(menu);
      } catch (err) {
        console.error(err);
      }
    }, 0);
  }, []);

  return { resTitle, groupedMenu };
};

export default useRestaurantMenu;
