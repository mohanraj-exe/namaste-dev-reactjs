const logo = new URL("../../assets/logo-2.png?as=webp", import.meta.url);

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      {/* Nav items */}
      {/* Cart */}

      <span className="logo-title">
        <img id="logo" alt="logo" src={logo} />
        <h2>Food order app</h2>
      </span>

      <ul className="nav-items">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
