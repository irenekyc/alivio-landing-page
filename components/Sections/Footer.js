import Section from "../../layout/Section";

const Footer = () => {
  return (
    <Section bg="bg-darkGreen">
      <div id="footer-main-container">
        <div id="footer-logo" className="mb-16">
          <img src="assets/images/Alivio_logo_white.png" alt="Alivio Logo" />
        </div>
        <div id="footer-links">
          <ul className="font-semiBold text-xl text-white">
            <li className="mb-16">
              <a href="#">Why Alivio</a>
            </li>
            <li className="mb-16">
              <a href="#">Solutions</a>
            </li>
            <li className="mb-16">
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
