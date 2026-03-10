import { restaurantList } from "../utils/restaurantList";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {/* {console.log(restaurantList)} */}
      {restaurantList.map((restaurant) => (
        <RestaurantCard data={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
