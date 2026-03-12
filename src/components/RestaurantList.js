import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ data }) => {  
  return (
    <div className="restaurant-list">
      {data?.map((restaurant) => (
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
