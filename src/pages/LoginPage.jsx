import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="login-page">
      <Navbar />
      <form className="login">
        <h3 className="heading">LOGIN TO YOUR ACCOUNT</h3>
        <input className="email" placeholder="Email" />
        <input className="password" type="password" placeholder="Password" />
        <button className="button button--login">LOGIN</button>
        <Link to="/register" className="link link--register">
          Don't have an account? <span>Create one!</span>
        </Link>
      </form>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LoginPage;
