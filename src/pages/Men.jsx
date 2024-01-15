import DisplayItems from "../components/DisplayItems";
import Navbar from "../components/Navbar";
import data from "../data/data.json";

const Men = () => {
  const productTypes = [
    "T-shirts",
    "Bottoms",
    "Shorts",
    "Hoodies",
    "Sweathshirts",
    "Tanks",
    "Sauna Suits",
    "Compression",
    "Underwear",
    "Headwear",
    "Socks",
    "Water Bottles",
    "Hand Wraps",
  ];

  const productSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  return (
    <div className="men">
      <Navbar />
      <DisplayItems
        heading="ALL MEN'S CLOTHING"
        subheading=" Explore COMBATCORE's entire men's range of clothing. The industry
          leader in comfort and quality."
        productTypes={productTypes}
        productSizes={productSizes}
        data={data.filter((element) => element.type === "Men")}
      />
    </div>
  );
};

export default Men;
