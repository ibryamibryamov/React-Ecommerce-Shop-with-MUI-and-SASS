import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import TrendingNow from "../components/TrendingNow";
import Footer from "../components/Footer";
import WishlistItem from "../components/WishlistItem";
import data from "../data/data.json";
import { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(data);

  return (
    <div className="Wishlist">
      <Navbar />
      <h1 className="heading">WISHLIST</h1>
      <div className="wishlist">
        {wishlist.map((item, index) => (
          <WishlistItem
            image={item.images[0]}
            title={item.title}
            color={item.color}
            price={item.price}
            key={index}
          />
        ))}
      </div>
      <TrendingNow />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Wishlist;
