import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "url:../assets/images/logo.png";

const Header = () => {
  const [login, setLogin] = useState(false);

  console.log(logo, typeof(logo));

  // useEffect(() => {
  //   debugger;
  // }, []);

  // debugger;

  console.log(useState());
  
  return (
    <div className="header">
      <span className="logo-title">
        <Link to={"/"}>
          <img src={logo} id="logo" alt="logo" />
        </Link>
        <h2>Food order app</h2>
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
        <li>Cart</li>

        <li>
          <button
            onClick={() => {
              setLogin(!login);
            }}
          >
            {!login ? "Login" : "Logout"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
