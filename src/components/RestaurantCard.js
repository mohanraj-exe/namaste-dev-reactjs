import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  // console.log(BASE_URL + data?.cloudinaryImageId);

  return (
    <div className="restaurant-card">

      <div className="restaurant-logo-container">
        <img
          id="restaurant-logo"
          alt="restaurant-logo"
          src={IMAGE_BASE_URL + data?.cloudinaryImageId}
        />
      <h4 className="card-cost">{data?.costForTwo}</h4>
      </div>

      <h3 className="card-title">{data?.name}</h3>

      <div className="card-main">
        <h4>Rating: {data?.avgRating}</h4>
        <h4>Delivery: {data?.sla?.slaString}</h4>
      </div>

      <div className="card-footer">
        <p className="cuisines">{data?.cuisines?.join(", ")}</p>
        <p>
          {data?.areaName}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
