import Navbar from "../components/Navbar";
import DisplayItems from "../components/DisplayItems";
import data from "../data/data.json";

const Women = () => {
  const productTypes = [
    "T-shirts",
    "Bottoms",
    "Shorts",
    "Hoodies",
    "Sweathshirts",
    "Jackets",
    "Tanks",
    "Sauna Suits",
    "Headwear",
    "Leggings",
    "Sports Bras",
    "Bodysuits",
    "Socks",
    "Sweatbands",
  ];

  const productSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  return (
    <div className="women">
      <Navbar />
      <DisplayItems
        heading="ALL WOMEN'S CLOTHING"
        subheading="Explore the entire COMBATCORE Women's range. Where fashion meets performance."
        productTypes={productTypes}
        productSizes={productSizes}
        data={data.filter((element) => element.type === "Women")}
      />
    </div>
  );
};

export default Women;
