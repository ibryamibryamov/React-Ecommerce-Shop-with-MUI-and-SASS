import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((previousValue) => previousValue + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity((previousValue) => previousValue - 1);
    }
  };

  return (
    <Link to="/view-item" className="cart-item">
      <img className="image" src={item.images[0]} />
      <div className="content">
        <h4 className="title">{item.title}</h4>
        <label className="color">{item.color}</label>
        <label className="price">{item.price}</label>
        <div className="controls">
          <button className="button button--remove">Remove</button>
          <div className="quantity">
            <button
              className="button button--decrement"
              onClick={decrementQuantity}
            >
              -
            </button>
            <label className="value">{quantity}</label>
            <button
              className="button button--increment"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
