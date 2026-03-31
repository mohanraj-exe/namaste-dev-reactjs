import { Link } from "react-router-dom";
import logo from "url:../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);
  
  return (
    <div className="header">
      <span className="logo-title">
        <Link to={"/"}>
          <img id="logo" alt="logo" src={logo} />
        </Link>
        <h2>Food order app</h2>
      </span>

      <span className="online-status">
        <h5>Online status: {onlineStatus ? "🟢" : "🛑"}</h5> 
      </span>

      <ul className="nav-items">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
        <li>
          <Link to={"/contactus"}>Contact us</Link>
        </li>
        <li>
          <Link to={"/grocery"}>Grocery</Link>
        </li>

        <li><h5>Cart ({cartItems?.length})</h5></li>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
