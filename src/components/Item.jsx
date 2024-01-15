import {
  FavoriteBorderOutlined as AddToWishlistIcon,
  Favorite as RemoveFromWishlist,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({
  images,
  title,
  color,
  price,
  size,
  category,
  type,
  item,
  gridViewOn,
}) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const addToWishlist = () => {
    setIsInWishlist((previousValue) => !previousValue);
  };
  return (
    <Link to="/view-item" className={gridViewOn ? "item--oversized" : "item"}>
      <div className="badge badge--new">NEW</div>
      <button
        className="button button--add-to-wishlist"
        onClick={() => {
          addToWishlist();
        }}
      >
        {isInWishlist ? <RemoveFromWishlist /> : <AddToWishlistIcon />}
      </button>
      <img className="image" src={images[0]} />
      <div className="information">
        <h5 className="title">{title}</h5>
        <label className="color">{color}</label>
        <label className="price">{price} BGN</label>
      </div>
    </Link>
  );
};

export default Item;
