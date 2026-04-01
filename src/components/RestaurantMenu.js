import ShimmerUI from "./ShimmerUI";
import { useState } from "react";

// Hooks
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantGroupedMenu from "./RestaurantGroupedMenu";

const RestaurantMenu = () => {
  const { resTitle, groupedMenu } = useRestaurantMenu();
  const [activeIndex, setActiveIndex] = useState(0);

  return groupedMenu?.length === 0 ? (
    <ShimmerUI />
  ) : (
      <div className="body restaurant-menu">
        <h1 id="title">{resTitle}</h1>

        {groupedMenu?.map((group, index) => (
          <RestaurantGroupedMenu
            key={group.card.card.categoryId}
            data={group}
            isActive={activeIndex === index}
            onShow={() => setActiveIndex(index)}
          />
        ))}
      </div>
  );
};

export default RestaurantMenu;
