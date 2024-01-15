import { Favorite as Wishlist } from "@mui/icons-material";
import { Link } from "react-router-dom";

const WishlistItem = ({ image, title, color, price }) => {
  return (
    <Link to="/view-item" className="wl-item">
      <button className="button button--remove">
        <Wishlist className="icon" />
      </button>
      <img className="image" src={image} />
      <h4 className="title">{title}</h4>
      <label className="color">{color}</label>
      <label className="price">{price}</label>
      <button className="button button--add-to-cart">ADD TO CART</button>
    </Link>
  );
};

export default WishlistItem;
