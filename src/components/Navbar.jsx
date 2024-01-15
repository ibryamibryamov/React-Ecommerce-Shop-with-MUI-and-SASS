import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

import {
  PersonOutlineOutlined as Account,
  SearchOutlined as Search,
  FavoriteBorderOutlined as Wishlist,
  WorkOutlineOutlined as Cart,
  MenuRounded,
  SearchRounded,
  CloseRounded,
} from "@mui/icons-material";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Modal } from "@mui/material";

const Navbar = () => {
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);

  const popularKeywords = ["T-shirts", "Shorts", "Hoodies", "Sauna Suits"];

  const toggleSearchModal = () => {
    setSearchModalIsOpen((previousValue) => !previousValue);
  };

  const toggleShoppingCart = () => {
    setShoppingCartIsOpen((previousValue) => !previousValue);
  };

  const toggleSidebar = () => {
    setSidebarIsOpen((previousValue) => !previousValue);
  };

  return (
    <div className="navbar">
      <div className="container container--left">
        <NavLink
          to="/men"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending-nav-link"
              : isActive
              ? "active-nav-link"
              : "nav-link"
          }
        >
          MEN
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending-nav-link"
              : isActive
              ? "active-nav-link"
              : "nav-link"
          }
        >
          WOMEN
        </NavLink>
        <NavLink
          to="/equipment"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending-nav-link"
              : isActive
              ? "active-nav-link"
              : "nav-link"
          }
        >
          EQUIPMENT
        </NavLink>
      </div>
      <div className="container container--center">
        <Link to="/" className="link">
          <img className="logo" src={Logo} />
        </Link>
      </div>
      <div className="container container--right">
        <Link to="/login" className="link link-account">
          <Account />
        </Link>
        <button
          onClick={() => {
            toggleSearchModal();
          }}
          className="link link--search"
        >
          <Search />
        </button>
        <Link to="/wishlist" className="link link-wishlist">
          <Wishlist />
        </Link>
        <button
          className="button button--cart"
          onClick={() => {
            toggleShoppingCart();
          }}
        >
          <Cart />
        </button>
        <button
          className="button button--menu"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <MenuRounded />
        </button>
      </div>
      <ShoppingCart
        shoppingCartIsOpen={shoppingCartIsOpen}
        toggleShoppingCart={() => {
          toggleShoppingCart();
        }}
      />
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        toggleSidebar={() => {
          toggleSidebar();
        }}
      />
      <Modal className="search-modal-wrapper" open={searchModalIsOpen}>
        <div className="modal">
          <button
            className="button button--close"
            onClick={() => {
              toggleSearchModal();
            }}
          >
            <CloseRounded />
          </button>
          <input className="searchbar" placeholder={"Search for products..."} />
          <div className="popular-keywords">
            <h3 className="heading">POPULAR SEARCH TERMS</h3>
            {popularKeywords.map((keyword, index) => (
              <label key={index} className="keyword">
                {keyword}
              </label>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
