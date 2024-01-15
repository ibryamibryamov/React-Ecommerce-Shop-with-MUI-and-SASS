import DisplayItems from "../components/DisplayItems";
import Navbar from "../components/Navbar";
import data from "../data/data.json";

const Equipment = () => {
  const productTypes = [
    "Sauna Suits",
    "Knuckle Guards",
    "Jump Ropes",
    "Water Bottles",
    "Punch Bags",
    "Rings",
    "Sweatbands",
    "Handwraps",
  ];

  const productSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  return (
    <div className="equipment">
      <Navbar />
      <DisplayItems
        heading="BOXING EQUIPMENT"
        subheading="Developed with Boxing’s Elite and designed with purpose, explore our full range of industry leading boxing equipment."
        productTypes={productTypes}
        productSizes={productSizes}
        data={data.filter((element) => element.type === "Equipment")}
      />
    </div>
  );
};

export default Equipment;
