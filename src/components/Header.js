import { Link } from "react-router-dom";

const logo = new URL("../../assets/logo-2.png?as=webp", import.meta.url);

const Header = () => {
  return (
    <div className="header">
      <span className="logo-title">
        <Link to={"/"}>
          <img id="logo" alt="logo" src={logo} />
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
      </ul>
    </div>
  );
};

export default Header;
