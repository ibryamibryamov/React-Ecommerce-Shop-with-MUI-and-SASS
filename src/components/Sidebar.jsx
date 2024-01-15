import {
  CloseRounded as Close,
  PersonOutlineOutlined as Account,
  SearchRounded as Search,
  Favorite as Wishlist,
} from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarIsOpen, toggleSidebar }) => {
  return (
    <Drawer
      className="sidebar"
      open={sidebarIsOpen}
      onClose={toggleSidebar}
      anchor="right"
    >
      <div className="content">
        <button className="button button--close" onClick={toggleSidebar}>
          <Close className="icon" />
        </button>
        <div className="links links--primary">
          <Link className="link" to="/men">
            MEN
          </Link>
          <Link className="link" to="/women">
            WOMEN
          </Link>
          <Link className="link" to="/equipment">
            EQUIPMENT
          </Link>
        </div>
        <div className="links links--secondary">
          <Link className="link link--jff" to="/register">
            JOIN FOR FREE
          </Link>
          <Link className="link link--sign-in" to="/login">
            SIGN IN
          </Link>
        </div>
        <div className="links links--tertiary">
          <Link className="link" to="/login">
            <Account className="icon" />
            <label className="label">Account</label>
          </Link>
          <button className="link link--search">
            <Search className="icon" to="/search" />
            <label className="label">Search</label>
          </button>
          <Link className="link" to="/wishlist">
            <Wishlist className="icon" />
            <label className="label">Wishlist</label>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
