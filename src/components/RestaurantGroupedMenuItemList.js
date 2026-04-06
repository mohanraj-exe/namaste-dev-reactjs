import { useDispatch } from "react-redux";
import { MENU_ITEMS_IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurantGroupedMenuItemList = ({ data }) => {
  //  console.log(data);
  const dispatch = useDispatch();

  const handlerFunction = (foodItem) => {
    dispatch(addItem(foodItem));
  }

  return (
    <div className="food-item">
      <span className="left">
        <h3 id="title">{data.card.info.name}</h3>
        <h4>
          ₹{data.card.info.price / 100 || data.card.info.defaultPrice / 100}
        </h4>

        {data.card.info.ratings.aggregatedRating?.rating ? (
          <span>
            <span className="star-rating">
              ★ {data.card.info.ratings.aggregatedRating.rating}{" "}
            </span>
            ({data.card.info.ratings.aggregatedRating.ratingCountV2})
          </span>
        ) : (
          <></>
        )}

        <p>{data.card.info.description}</p>
      </span>

      {data.card.info?.imageId ? (
        <div className="right-container">
          <img src={MENU_ITEMS_IMAGE_URL + data.card.info.imageId} />
          <button onClick={() => handlerFunction(data)}>Add +</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RestaurantGroupedMenuItemList;
