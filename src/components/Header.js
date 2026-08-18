const Header = () => {
  const logo = new URL(
    "../../assets/fooder_logo_transparent.png",
    import.meta.url,
  ).href;
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
