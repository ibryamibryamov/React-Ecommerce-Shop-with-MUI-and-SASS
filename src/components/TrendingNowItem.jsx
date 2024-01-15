import { Link } from "react-router-dom";

const TrendingNowItem = ({ item }) => {
  return (
    <Link to="/view-item" className="tn-item">
      <div className="badge badge--new">NEW</div>
      <img className="image" src={item.images[0]} />
      <div className="information">
        <h5 className="title">{item.title}</h5>
        <label className="color">{item.color}</label>
        <label className="price">{item.price}</label>
      </div>
    </Link>
  );
};

export default TrendingNowItem;
