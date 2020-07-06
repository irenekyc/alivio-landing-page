const NavBar = () => {
  return (
    <nav className="w-full h-nav text-navLinksColor">
      <div className="wrapper flex justify-between items-center">
        <div id="logo-container" className="mr-20">
          <img src="assets/images/Logo.png" alt="Alivio Logo" />
        </div>
        <div id="nav-links">
          <ul className="flex items-start h-full font-medium">
            <li className="mr-8">
              <a href="#">Why Alivio</a>
            </li>
            <li className="mr-8">
              <a href="#">Solutions</a>
            </li>
            <li className="mr-8">
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div id="cta-buttons flex items-end h-full">
          <a className="mr-8 text-black">Sign in</a>
          <button className="btn-primary">Start Trial</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
