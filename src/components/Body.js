import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { SWIGGY_BASE_URL } from "../utils/constants";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurantState, setRestaurantState] = useState([]);
  const [filteredRestaurantState, setFilteredRestaurantState] = useState([]);

  const onChangeHandler = (e) => {
    const value = e.target.value?.trim().toLowerCase();

    setSearchInput(value);

    const filtered = filteredRestaurantState.filter(({ name, cuisines }) => {
      return (
        name.toLowerCase().includes(value) ||
        cuisines.join(", ").toLowerCase().includes(value)
      );
    });

    setFilteredRestaurantState(() => (value ? filtered : restaurantState));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_BASE_URL);
    // console.log(data);

    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info,
      );

    setRestaurantState(restaurants);
    setFilteredRestaurantState(restaurants);
  };

  // console.log(restaurantState);

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
      <RestaurantList data={filteredRestaurantState} />
    </div>
  );
};

export default Body;
