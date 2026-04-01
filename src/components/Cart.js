import { useDispatch, useSelector } from "react-redux";
import RestaurantGroupedMenuItemList from "./RestaurantGroupedMenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="body">
      <div className="grouped-menu-card">
        <span className="accordion-span">
          <h2 id="card-title">Cart</h2>
          <span>
            <button className="clear-cart-btn" onClick={handleClear}>
              Clear cart
            </button>
          </span>
        </span>

        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            <RestaurantGroupedMenuItemList
              key={index}
              data={item}
            />
          ))
        ) : (
          <h3 className="empty-cart">Your cart is empty!</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
