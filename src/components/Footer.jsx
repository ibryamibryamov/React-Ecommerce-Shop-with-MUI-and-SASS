import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sections">
        <div className="section">
          <h6 className="heading">GET HELP</h6>
          <Link className="Link">Contact Us</Link>
          <Link className="Link">FAQs</Link>
          <Link className="Link">Track Order</Link>
          <Link className="Link">Support</Link>
          <Link className="Link">Shipping & Delivery</Link>
          <Link className="Link">Returns</Link>
        </div>
        <div className="section">
          <h6 className="heading">ABOUT COMBATCORE</h6>
          <Link className="Link">The Brand</Link>
          <Link className="Link">Find A Way</Link>
          <Link className="Link">Blog</Link>
          <Link className="Link">Sport is Love</Link>
          <Link className="Link">Careers</Link>
          <Link className="Link">Retail Enquieries</Link>
        </div>
        <div className="section">
          <h6 className="heading">YOUR ACCOUNT</h6>
          <Link className="Link">Black Card</Link>
          <Link className="Link" to="/login">
            Log in
          </Link>
          <Link className="Link" to="/register">
            Create Account
          </Link>
          <Link className="Link">Discounts</Link>
        </div>
      </div>
      <div className="social-media">
        <Link to="https://www.facebook.com/" className="Link">
          <Facebook className="icon" />
        </Link>
        <Link to="https://www.instagram.com/" className="Link">
          <Instagram className="icon" />
        </Link>
        <Link to="https://twitter.com/" className="Link">
          <Twitter className="icon" />
        </Link>
        <Link to="https://www.youtube.com/" className="Link">
          <YouTube className="icon" />
        </Link>
      </div>
      <div className="bottom-row">
        <label className="label">
          © 2024 COMBATCORE Ltd. All Rights Reserved.
        </label>
        <div className="links-container">
          <Link className="Link">Terms & Conditions</Link>
          <Link className="Link">Privacy Notice</Link>
          <Link className="Link">Cookie Policy</Link>
          <Link className="Link">Terms Of Use</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
