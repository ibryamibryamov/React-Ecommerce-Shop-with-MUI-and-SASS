import { Favorite as Wishlist, Star } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import TrendingNow from "../components/TrendingNow";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ViewItem = () => {
  return (
    <div className="view-item">
      <Navbar />
      <div className="content">
        <h5 className="breadcrumbs">
          HOME / ALL MEN'S CLOTHING / HAGLER SAUNA SUIT 2.0
        </h5>
        <div className="sections">
          <div className="section section--left">
            <img
              className="image"
              src="https://boxraw.com/cdn/shop/files/BOXRAW_Mens_Saunasuit_Charcoal-1_x1440.jpg?v=1702561984"
            />
            <img
              className="image"
              src="https://boxraw.com/cdn/shop/files/BOXRAW_Mens_Saunasuit_Charcoal-2_x1440.jpg?v=1703261463"
            />
            <img
              className="image"
              src="https://boxraw.com/cdn/shop/files/BOXRAW_Mens_Saunasuit_Charcoal-3_x1440.jpg?v=1703261463"
            />
            <img
              className="image"
              src="https://boxraw.com/cdn/shop/files/BOXRAW_Mens_Saunasuit_Charcoal-4_x1440.jpg?v=1703261463"
            />
          </div>
          <div className="section section--right">
            <h2 className="title">HAGLER SAUNA SUIT 2.0</h2>
            <label className="color">COLOR : BLACK</label>
            <h4 className="price">216 BGN</h4>
            <label className="short-description">
              Innovated over countless hours for maximum heat retention to aid
              weight loss, reduce injury risk and increase muscular hypertrophy.
            </label>
            <div className="rating">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <label>(1178)</label>
            </div>
            <div className="sizes">
              <label className="label">SELECT SIZE:</label>
              <div className="size-item">M</div>
              <div className="size-item">L</div>
              <div className="size-item">XL</div>
              <div className="size-item">XXL</div>
              <div className="size-item">XXXL</div>
            </div>
            <div className="buttons">
              <button className="button button--atc">ADD TO CART</button>
              <button className="button button--wl">
                <Wishlist />
              </button>
            </div>
            <p className="description">
              Developed with Boxing's Elite, the Hagler Sauna Suit 2.0 is the
              perfected weight cutting tool chosen by World Champions.
              Re-engineered with a lighter, more durable fabric to maximise
              training benefits, assuring optimal heat retention, improved range
              of motion and reduced risk of injury. The Hagler Sauna Suit 2.0
              has been proven to raise blood temperature; increasing circulation
              and warming muscles. This aids weight loss through a prolonged fat
              burning zone whilst increasing muscular hypertrophy. Refined
              rubberised velcro wrist straps retain heat while providing
              adjustable support and are complemented with elasticated ribs and
              woven BOXRAW taping. Upgraded reflective zipped-pocket and Strike
              logo details allow visibility in the dark for training at any time
              of day.
            </p>
          </div>
        </div>
      </div>
      <TrendingNow />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ViewItem;
