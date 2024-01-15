import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div
      className="promo-banner"
      style={{
        backgroundImage:
          "url(https://boxraw.com/cdn/shop/files/genaro-desktop_x1440.jpg?v=1702651309)",
      }}
    >
      <h4 className="heading">EXCLUSIVE SPORTS GEAR SALE!</h4>
      <h2 className="subheading">
        Elevate your game with our premium collection of sports clothing and
        equipment! Whether you're a fitness enthusiast or a seasoned athlete,
        we've got you covered in style and performance.
      </h2>
      <div className="link-container">
        <Link to="/men" className="link link--men">
          SHOP MEN
        </Link>
        <Link to="/women" className="link link--women">
          SHOP WOMEN
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
