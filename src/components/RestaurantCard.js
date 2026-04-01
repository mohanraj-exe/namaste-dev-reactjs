import { IMAGE_BASE_URL } from "../utils/constants";
// import { useContext } from "react";
// import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  // console.log(BASE_URL + props?.cloudinaryImageId);
  // console.log(props);
  // const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  return (
    <div className="restaurant-card">
      <div className="restaurant-logo-container">
        <img
          id="restaurant-logo"
          alt="restaurant-logo"
          src={IMAGE_BASE_URL + props.cloudinaryImageId}
        />
        <h4 className="card-cost">{props.costForTwo}</h4>
      </div>

      <h3 className="card-title">{props.name}</h3>

      <div className="card-main">
        <h4>Rating: {props.avgRating}</h4>
        <h4>Delivery: {props.sla?.slaString}</h4>
      </div>

      <div className="card-footer">
        <p className="cuisines">{props.cuisines?.join(", ")}</p>
        <p>{props.areaName}</p>

        {/* Demo feature - Displaying context value */}
        {/* <p>user: {loggedInUser}</p> */}
      </div>
    </div>
  );
};

const withPromotedLabel = (RestaurantCard) => {
  // console.log("rendered");
  return (props) => {
    return (
      <div className="promoted-card">
        <h5 className="title">Promoted</h5>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export { withPromotedLabel };

export default RestaurantCard;
