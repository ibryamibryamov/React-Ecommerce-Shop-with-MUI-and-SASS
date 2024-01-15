import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="content content--left">
        <h1 className="heading">JOIN OUR NEWSLETTER</h1>
        <h3 className="subheading">
          Subscribe to receive updates, access to exclusive deals, and more.
        </h3>
      </div>
      <div className="content content--right">
        <label className="label">EMAIL</label>
        <form className="form">
          <input className="input" placeholder="Enter your email adress" />
          <button className="button button--sign-up">SIGN UP</button>
        </form>
        <label className="label">CLOTHING PREFERENCE</label>
        <div className="checkboxes">
          <div className="checkbox">
            <input type="checkbox" />
            <label>Men's</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <label>Women's</label>
          </div>
        </div>
        <p>
          By submitting this form, you agree to our{" "}
          <Link className="Link">Privacy Policy</Link> and to receive Email
          Marketing from COMBATCORE.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
