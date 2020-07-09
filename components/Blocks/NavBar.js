const NavBar = () => {
  return (
    <nav className="w-full h-nav text-navLinksColor">
      <div className="wrapper flex justify-center items-center LTS:justify-between">
        <div id="logo-container" className="LTS:mr-20">
          <img src="assets/images/Logo.png" alt="Alivio Logo" />
        </div>
        <div id="nav-links" className="hidden LTS:block flex-1">
          <ul className="flex items-start h-full font-medium">
            <li className="mr-5">
              <a href="#">Why Alivio</a>
            </li>
            <li className="mr-5">
              <a href="#">Solutions</a>
            </li>
            <li className="mr-5">
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div
          id="cta-buttons"
          className="hidden LTS:flex justify-end items-center h-full"
        >
          <a className="mr-8 text-black">Sign in</a>
          <button className="btn-primary">Start Trial</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
