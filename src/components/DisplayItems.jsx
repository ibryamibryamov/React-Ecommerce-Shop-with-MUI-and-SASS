import {
  GridViewSharp as Grid,
  AppsSharp as Compact,
  ExpandMore,
  DoneRounded as Selected,
  TuneRounded as Filter,
} from "@mui/icons-material";
import Item from "./Item";
import { useEffect, useState } from "react";
import { Popover } from "@mui/material";

const DisplayItems = ({
  heading,
  subheading,
  productTypes,
  productSizes,
  data,
}) => {
  const [productsData, setProductsData] = useState(data);
  const [colorFilter, setColorFilter] = useState("All");
  const [sizeFilter, setSizeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [gridViewOn, setGridViewOn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortingMethod, setSorthingMethod] = useState("Featured");
  const [mobileFilters, setMobileFilters] = useState(true);

  const sortingMenuOpen = Boolean(anchorEl);
  const sortingMenuId = sortingMenuOpen ? "simple-popover" : undefined;

  const selectSortingMethod = (method) => {
    setSorthingMethod(method);
    handleCloseSortingMenu();
  };

  const selectColor = (color) => {
    if (colorFilter === color) {
      setColorFilter("All");
    } else {
      setColorFilter(color);
    }
  };

  const handleSortingMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSortingMenu = () => {
    setAnchorEl(null);
  };

  const selectSize = (size) => {
    if (sizeFilter === size) {
      setSizeFilter("All");
    } else {
      setSizeFilter(size);
    }
    console.log(sizeFilter);
  };

  const selectCategory = (category) => {
    if (categoryFilter.includes(category)) {
      const updatedCategoryFilter = categoryFilter.filter(
        (item) => item !== category
      );
      setCategoryFilter(updatedCategoryFilter);
    } else {
      const updatedCategoryFilter = [...categoryFilter, category];
      setCategoryFilter(updatedCategoryFilter);
    }
    console.log(categoryFilter);
  };

  const filterProducts = () => {
    return productsData.filter((product) => {
      const colorCondition =
        colorFilter === "All" || product.color === colorFilter;

      const sizeCondition = sizeFilter === "All" || product.size === sizeFilter;

      const categoryCondition =
        categoryFilter.length === 0 ||
        categoryFilter.includes(product.category);

      return colorCondition && sizeCondition && categoryCondition;
    });
  };

  const changeView = (view) => {
    if (view === "grid") {
      setGridViewOn(true);
    } else {
      setGridViewOn(false);
    }
  };

  const handleMobileFilters = () => {
    setMobileFilters((previousValue) => !previousValue);
  };

  const filteredProducts = filterProducts();

  const filteredAndSortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortingMethod) {
      case "Featured":
        break;
      case "Bestsellers":
        break;
      case "Price : Low to High":
        return a.price - b.price;
      case "Price : High to Low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="display-items">
      <div className="header">
        <h2 className="heading">{heading}</h2>
        <h5 className="subheading">{subheading}</h5>
      </div>
      <div className="sorting">
        <div className="content content--left">
          <button
            className={`${gridViewOn ? "button" : "button--inactive"}`}
            onClick={() => {
              changeView("grid");
            }}
          >
            <Grid />
          </button>
          <button
            className={`${gridViewOn ? "button--inactive" : "button"}`}
            onClick={() => {
              changeView("compact");
            }}
          >
            <Compact />
          </button>
          <button
            className="filters-button"
            onClick={() => {
              handleMobileFilters();
            }}
          >
            <Filter />
          </button>
        </div>
        <div className="content content--center"></div>
        <div className="content content--right">
          <div className="button button--sort" onClick={handleSortingMenu}>
            SORT <ExpandMore />
          </div>
          <Popover
            id={sortingMenuId}
            open={sortingMenuOpen}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            onClose={handleCloseSortingMenu}
          >
            <div className="sorting-menu">
              <div
                className={
                  sortingMethod === "Featured" ? "item--active" : "item"
                }
                onClick={() => {
                  selectSortingMethod("Featured");
                }}
              >
                Featured
              </div>
              <div
                className={
                  sortingMethod === "Bestsellers" ? "item--active" : "item"
                }
                onClick={() => {
                  selectSortingMethod("Bestsellers");
                }}
              >
                Bestsellers
              </div>
              <div
                className={
                  sortingMethod === "Price : Low to High"
                    ? "item--active"
                    : "item"
                }
                onClick={() => {
                  selectSortingMethod("Price : Low to High");
                }}
              >
                Price: Low to High
              </div>
              <div
                className={
                  sortingMethod === "Price : High to Low"
                    ? "item--active"
                    : "item"
                }
                onClick={() => {
                  selectSortingMethod("Price : High to Low");
                }}
              >
                Price: High to Low
              </div>
            </div>
          </Popover>
        </div>
      </div>
      <div className="main">
        <div className={mobileFilters ? "filters" : "filters--collapsed"}>
          <div className="filter filter--type">
            <h4 className="heading">PRODUCT</h4>
            {productTypes.map((type, index) => (
              <div className="filter-item filter-item--type" key={index}>
                <input
                  type="checkbox"
                  className={`checkbox checkbox--${type}`}
                  onChange={() => {
                    selectCategory(type);
                  }}
                />
                <label className="label">{type}</label>
              </div>
            ))}
          </div>
          <div className="filter filter--size">
            <h4 className="heading">SIZE</h4>
            {productSizes.map((size, index) => (
              <div
                key={index}
                className={`filter-item ${
                  sizeFilter === size
                    ? "filter-item--size--active"
                    : "filter-item--size"
                }`}
                onClick={() => {
                  selectSize(size);
                }}
              >
                {size}
              </div>
            ))}
          </div>
          <div className="filter filter--color">
            <h4 className="heading">COLOR</h4>

            <div className="filter-item filter-item--color">
              <div
                className="color color--black"
                onClick={() => selectColor("Black")}
              >
                <div
                  className={
                    colorFilter.includes("Black")
                      ? "selected"
                      : "selected--hidden"
                  }
                >
                  <Selected sx={{ color: "green" }} />
                </div>
              </div>
              <label className="label">Black</label>
            </div>
            <div className="filter-item filter-item--color">
              <div
                className="color color--white"
                onClick={() => selectColor("White")}
              >
                <div
                  className={
                    colorFilter.includes("White")
                      ? "selected"
                      : "selected--hidden"
                  }
                >
                  <Selected sx={{ color: "green" }} />
                </div>
              </div>
              <label className="label">White</label>
            </div>
          </div>
        </div>
        <div className="products">
          {filteredAndSortedProducts.map((item, index) => (
            <Item
              key={index}
              images={item.images}
              title={item.title}
              color={item.color}
              price={item.price}
              size={item.size}
              category={item.category}
              type={item.type}
              gridViewOn={gridViewOn}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayItems;
