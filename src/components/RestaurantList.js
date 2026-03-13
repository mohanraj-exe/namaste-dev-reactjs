import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ data }) => {
  return (
    <div className="restaurant-list">
      {/* Parent JSX element should contain key attribute while map */}
      {data?.map((restaurant) => (
        <Link key={restaurant.id} to={"/restaurants/" + restaurant.name + restaurant.id}>
          <RestaurantCard data={restaurant} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
