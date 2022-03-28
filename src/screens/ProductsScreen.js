import React from "react";
import { RadioButton } from "../components/RadioButton";
import { ProductCard } from "../components/ProductCard";
import { useApi } from "../contexts/ApiContext";
import { useNavigate } from "react-router-dom";

export const ProductsScreen = () => {
  const navigate = useNavigate();
  const { useallProducts, useallCategories, useaddToWishlist, dispatch } =
    useApi();
  const { data: productData, loading: productIsLoading } = useallProducts();
  const { data: categoryData, loading: categoriesIsLoading } =
    useallCategories();
  const [addToWishlist, { loading: isAddingToWishList, data: wishListData }] =
    useaddToWishlist();

  // const setProductState = (dispatch) => {
  //   dispatch({ type: "allProducts", payload: productData.products });
  // };

  // const addToWishlistUI = (dispatch) => {
  //   dispatch({ type: "addToWishlist", payload: wishListData.wishlist });
  // };

  // if (!productIsLoading) {
  //   setProductState(dispatch);
  // }

  const addToWishlistHandler = (product) => {
    addToWishlist(product);
  };
  // if (!isAddingToWishList) {
  //   addToWishlistUI(dispatch);
  // }

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
              {categoriesIsLoading ? (
                <h1>loading...</h1>
              ) : (
                categoryData.categories.map((item) => {
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
                })
              )}
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
          {productIsLoading ? (
            <h1>loading...</h1>
          ) : (
            productData.products.map((item) => {
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
                  onActionButtonClick={() => navigate(`/products/${item._id}`)}
                  onIconClick={() => addToWishlistHandler(item)}
                  actionButtonText={"Add To Cart"}
                  isWishlisted={item % 2 === 0 ? true : false}
                  isLoading={isAddingToWishList}
                  loadingText={"Adding to wishlist..."}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
