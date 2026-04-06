import { useState, useEffect, useContext } from "react";
import RestaurantList from "./RestaurantList";
import ShimmerUI from "./ShimmerUI";
import jsonData from "../utils/restaurants.json";
// import { SWIGGY_BASE_URL } from "../utils/constants";

// Hooks
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/userContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurantState, setRestaurantState] = useState([]);
  const [filteredRestaurantState, setFilteredRestaurantState] = useState([]);

  // customHook
  const onlineStatus = useOnlineStatus();

  // useContext
  // const { loggedInUser, setUserName } = useContext(UserContext);

  const onChangeHandler = (e) => {
    const value = e.target.value?.trim().toLowerCase();
    setSearchInput(value);
  };

  const onClickHandler = () => {
    const filtered = filteredRestaurantState?.filter(({ name, cuisines }) => {
      return (
        name?.toLowerCase().includes(searchInput) ||
        cuisines?.join(", ").toLowerCase().includes(searchInput)
      );
    });

    setFilteredRestaurantState(() =>
      searchInput ? filtered : restaurantState,
    );
  };

  useEffect(() => {
    const mockAPI = setTimeout(() => {
      const [json] = jsonData;
      // console.log(json);

      const restaurants =
        json?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (res) => res.info,
        );

      // console.log(restaurants);

      setRestaurantState(restaurants);
      setFilteredRestaurantState(restaurants);
    }, 350);

    return () => {
      clearInterval(mockAPI);
    };
  }, []);

  if (onlineStatus == false) {
    return (
      <h1>Looks like you're offline. Please check your internet connection!</h1>
    );
  }

  return restaurantState?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search-input-container">
        <span>
          <input
            name="search"
            type="search"
            value={searchInput}
            placeholder="Search food/restaurant name..."
            onChange={onChangeHandler}
          />
          <button onClick={onClickHandler}>Search</button>
        </span>

        {/* Demo feature - Live edit context value */}

        {/* <label>Edit user name:</label>
        <input
          name="username"
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        /> */}
      </div>
      <RestaurantList data={filteredRestaurantState} />
    </div>
  );
};

export default Body;
