const RestaurantCard = ({ data }) => {
  console.log(data);

  return (
    <div className="restaurant-card">
      <img
        id="restaurant-logo"
        alt="restaurant-logo"
        src={data.image}
      />
      <h2>{data.name}</h2>
      <h5>{data.locality}, {data.areaName}</h5>
      <h3>{data.cuisines.join(", ")}</h3>

      <h4>Avg.rating: {data.avgRating}</h4>
      <h4>Estimated time: {data.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
