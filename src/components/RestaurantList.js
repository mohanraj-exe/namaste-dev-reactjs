import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { withPromotedLabel } from "./RestaurantCard";

const RestaurantList = ({ data }) => {

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log(RestaurantCardPromoted);
  
  return (
    <div className="restaurant-list">
      {/* Parent JSX element should contain key attribute while map */}
      {data?.map((restaurant) => ( 
        <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
          {/* {console.log(restaurant)} */}
          {restaurant?.promoted ? <RestaurantCardPromoted {...restaurant}/> : <RestaurantCard {...restaurant} />}
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
