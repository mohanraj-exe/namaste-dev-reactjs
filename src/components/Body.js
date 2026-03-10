import { useState } from "react";
import RestaurantList from "./RestaurantList";
import { restaurantList } from "../utils/restaurantList";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurantState, setRestaurantState] = useState(restaurantList);

  const onChangeHandler = (e) => {
    const value = e.target.value?.trim().toLowerCase();

    setSearchInput(() => value);

    const filtered = restaurantList.filter(({ name, cuisines }) => {
      return (
        name.toLowerCase().includes(value) || cuisines.join(", ").toLowerCase().includes(value)
      );
    });

    setRestaurantState(() => value ? filtered : restaurantList);
  };

  return (
    <div className="body">
      <div className="search-input">
        <input
          name="search"
          type="search"
          value={searchInput}
          placeholder="Search food/restaurant/location..."
          // onChange={() => console.log("Changing...")}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <RestaurantList data={restaurantState} />
    </div>
  );
};

export default Body;
