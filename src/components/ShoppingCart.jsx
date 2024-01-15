import { CloseRounded } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import CartItem from "./CartItem";
import data from "../data/data.json";

const ShoppingCart = ({ shoppingCartIsOpen, toggleShoppingCart }) => {
  return (
    <Drawer
      open={shoppingCartIsOpen}
      onClose={toggleShoppingCart}
      anchor="right"
      className="shopping-cart"
    >
      <div className="content">
        <header className="header">
          <h2 className="heading">REVIEW YOUR CART</h2>
          <button className="button button--close" onClick={toggleShoppingCart}>
            <CloseRounded />
          </button>
        </header>
        <div className="products">
          {data.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default ShoppingCart;
