import {
  ChevronLeft as ArrowLeft,
  ChevronRight as ArrowRight,
} from "@mui/icons-material";
import TrendingNowItem from "./TrendingNowItem";
import { useRef, useState } from "react";
import data from "../data/data.json";

const TrendingNow = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollStep = 800;

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;

    if (container) {
      const newScrollPosition =
        direction === "left"
          ? scrollPosition - scrollStep
          : scrollPosition + scrollStep;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <div className="trending-now">
      <div className="header">
        <h2 className="heading">TRENDING NOW</h2>
        <div className="controls-box">
          <button
            className="button button--left"
            onClick={() => handleScroll("left")}
            disabled={scrollPosition === 0}
            style={
              scrollPosition === 0
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
          >
            <ArrowLeft />
          </button>
          <button
            className="button button--right"
            onClick={() => handleScroll("right")}
            disabled={
              scrollPosition + scrollContainerRef.current?.clientWidth >=
              scrollContainerRef.current?.scrollWidth
            }
            style={
              scrollPosition + scrollContainerRef.current?.clientWidth >=
              scrollContainerRef.current?.scrollWidth
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="scrollable-container" ref={scrollContainerRef}>
        {data.map((item, index) => (
          <TrendingNowItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
