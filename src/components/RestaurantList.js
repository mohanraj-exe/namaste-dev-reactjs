import { restaurantList } from "../utils/restaurantList";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {/* {console.log(restaurantList)} */}
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
