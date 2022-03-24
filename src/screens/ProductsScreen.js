import React from "react";
import { RadioButton } from "../components/RadioButton";
import { ProductCard } from "../components/ProductCard";

export const ProductsScreen = () => {
    const [productData, setProductData] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProductData(data.products);
            });
        
            fetch("http://localhost:3000/api/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.categories);
            }
            );
            
    }, []);

  return (
    <div id="product-screen-container">
      <div className="filter-container">
        <div className="flex-between-container">
          <h1 className="h4 black-6">Filters</h1>
          <h5 className="tx-underline tx-14 black-4 pointer">Clear</h5>
        </div>
        <div className="filter-box">
          <form action="" className="form-group">
            <div className="radio-checkbox-container">
              <h5 className="form-group-heading">Category</h5>
              {categories.map((item) => {
                return (
                  <RadioButton
                    key={item.id}
                    label={item.categoryName.toUpperCase()}
                    value={item.categoryName}
                    name="category"
                    onChange={(e) =>
                      console.log(e.target.value, e.target.checked)
                    }
                  />
                );
              })}
            </div>
            {/* <div className="radio-checkbox-container">
              <h5 className="form-group-heading">Sort By</h5>

              <Checkbox
                label="Price"
                value="price"
                name="sortBy"
                onChange={() => console.log("Heelo")}
              />
              <Checkbox
                label="Discount"
                value="discount"
                name="sortBy"
                onChange={() => console.log("Heelo")}
              />
              <Checkbox
                label="New Arrivals"
                value="newArrivals"
                name="sortBy"
                onChange={() => console.log("Heelo")}
              />
            </div>
            <div className="radio-checkbox-container">
              <h5 className="form-group-heading">Rating</h5>
              <Checkbox
                label="1-star"
                value="1"
                name="rating"
                onChange={() => console.log("Heelo")}
              />
              <Checkbox
                label="3-star"
                value="3"
                name="rating"
                onChange={() => console.log("Heelo")}
              />
              <Checkbox
                label="5-star"
                value="5"
                name="rating"
                onChange={() => console.log("Heelo")}
              />
            </div> */}
          </form>
        </div>
      </div>
      <div className="product-listing-wrapper">
        <div className="active-filter-container">
          <small className="pill grey">
            party <i className="uil uil-times pointer"></i>
          </small>
        </div>
        <div className="product-listing-container">
           {
               productData.map((item) => {
              return (
                <ProductCard
                  key={item.name}
                  productName={item.name}
                  categoryName={item.categoryName.toUpperCase()}
                  price={`₹ ${item.price}`}
                  cutoutPrice={`₹ ${
                    Number(item.price) - Number(item.discountPercent)
                  }`}
                  rating={item.rating}
                  imageUrl={item.imageUrl}
                  discountPillText={`${item.discountPercent}%`}
                  offerPillText={item.tag}
                  onActionButtonClick={() => console.log("add to cart clicked")}
                  onIconClick={() => console.log("icon clicked")}
                  actionButtonText="Add to Cart"
                  isWishlisted={item % 2 === 0 ? true : false}
                />
              );
            })
           }
            
        </div>
      </div>
    </div>
  );
};
