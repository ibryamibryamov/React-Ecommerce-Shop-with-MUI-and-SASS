import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Register = () => {
  return (
    <div className="register-page">
      <Navbar />
      <div className="register">
        <h2 className="heading">CREATE YOUR ACCOUNT</h2>
        <input className="input input--first-name" placeholder="First name" />
        <input className="input input--last-name" placeholder="Last name" />
        <input
          className="input input--email"
          type="email"
          placeholder="Email"
        />
        <input
          className="input input--password"
          type="password"
          placeholder="Password"
        />
        <button className="button button--register">CREATE MY ACCOUNT</button>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Register;
