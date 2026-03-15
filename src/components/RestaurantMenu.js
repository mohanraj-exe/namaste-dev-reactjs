import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MENU_ITEMS_IMAGE_URL,
  SWIGGY_RESTAURANT_MENU_URL,
} from "../utils/constants";
import jsonData from "../utils/menu.json";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const [resTitle, setResTitle] = useState("");
  const [groupedMenu, setGroupedMenu] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const json = jsonData;
      // console.log(json);

      const [restaurant] = json.filter((menu) => menu.id == resId);
      // console.log(restaurant);

      setResTitle(restaurant?.cards[0].card?.card?.text);

      const [result] = restaurant?.cards?.filter((card) => card?.groupedCard);
      const menu = result?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) => card?.card?.card?.itemCards,
      );
      // console.log(menu);

      setGroupedMenu(menu);
    });
  }, []);

  return groupedMenu?.length === 0 ? <ShimmerUI /> : (
    <div className="restaurant-menu">
      <h1 id="title">{resTitle}</h1>

      {groupedMenu?.map((group) => (
        <div key={group.card.card.categoryId} className="grouped-menu-card">
          {/* title */}
          <h2 id="card-title">{group.card.card.title} ({group.card.card.itemCards.length})</h2>

          {/* card */}
            {group.card.card.itemCards?.map((item) => (
              <div key={item.card.info.id} className="food-item">

                {/* left */}
                <span className="left">
                  <h3>{item.card.info.name}</h3>
                  <h4>
                    Rs.
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </h4>
                  <p>
                    Rating: {item.card.info.ratings.aggregatedRating.rating || ""} (
                    {item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </p>
                  <p>{item.card.info.description}</p>
                </span>

                {/* Right */}
                <img src={(MENU_ITEMS_IMAGE_URL + item.card.info.imageId) || ""} />
              </div>
            ))}

        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
