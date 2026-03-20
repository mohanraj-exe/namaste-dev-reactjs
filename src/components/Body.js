import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
// import { SWIGGY_BASE_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import jsonData from "../utils/restaurants.json";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurantState, setRestaurantState] = useState([]);
  const [filteredRestaurantState, setFilteredRestaurantState] = useState([]);

  const onChangeHandler = (e) => {
    const value = e?.target?.value?.trim()?.toLowerCase();
    setSearchInput(value);
  };

  const onClickHandler = () => {
    const filtered = filteredRestaurantState.filter(({ name, cuisines }) => {
      return (
        name?.toLowerCase()?.includes(searchInput) ||
        cuisines?.join(", ")?.toLowerCase()?.includes(searchInput)
      );
    });

    setFilteredRestaurantState(() =>
      searchInput ? filtered : restaurantState,
    );
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        const [json] = jsonData;
        // console.log(json);

        const restaurants =
          json?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (res) => res.info,
          );
        // console.log(restaurants);

        setRestaurantState(restaurants);
        setFilteredRestaurantState(restaurants);
      } catch (err) {
        console.error(`An error has occurred: ${err.message}`);
      }
    }, 350);
  }, []);

  return restaurantState?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search-input">
        <input
          name="search"
          type="search"
          value={searchInput}
          placeholder="Search food/restaurant/location..."
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>Search</button>
      </div>
      <RestaurantList data={filteredRestaurantState} />
    </div>
  );
};

export default Body;
