import React from "react";
import { RadioButton } from "../components/RadioButton";
import { ProductCard } from "../components/ProductCard";
import { useApi } from "../contexts/ApiContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { Checkbox } from "../components/Checkbox";
import { Slider } from "../components/Slider";
import { useAuth } from "../contexts/AuthContex";
import { ProductLoader } from "../components/ProductLoader";
import { Toast } from "../components/Toast";
import { checkDb } from "../helpers/helperFuntions";

export const ProductsScreen = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const {
    useallProducts,
    useallCategories,
    useaddToWishlist,
    useaddToCart,
    usedeleteFromWishlist,
  } = useApi();

  const { state: globalState, dispatch: globalDispatch } = useData();

  const { data: productData, loading: productIsLoading } = useallProducts();

  const { data: categoryData, loading: categoriesIsLoading } =
    useallCategories();

  const [addToWishlist, { loading: isAddingToWishList, data: wishListData }] =
    useaddToWishlist();

  const [
    deleteFromWishlist,
    { loading: isRemovingFromWishlist, data: removedWishlistData },
  ] = usedeleteFromWishlist();

  const [
    addToCart,
    { loading: isAddingToCart, data: cartData, error: errorInAddingToCart },
  ] = useaddToCart();

  React.useEffect(() => {
    if (!productIsLoading && !categoriesIsLoading) {
      if (location.state) {
        globalDispatch({
          type: "setActiveCategory",
          payload: location.state.categoryIndex,
        });
      }
    }
  }, [categoriesIsLoading, productIsLoading]);

  // * local states for filters
  const [sortByPrice, setSortByPrice] = React.useState("");
  const [rating, setRating] = React.useState(0);
  // * filtering products
  let filteredData = [];
  if (productData && categoryData) {
    ///* sort by category
    filteredData = productData.products
      .filter((product) => {
        let activeCategories = [];
        globalState.activeCategories.forEach((item, idx) => {
          if (item === true) {
            activeCategories.push(globalState.categories[idx].categoryName);
          }
        });
        if (activeCategories.length === 0) {
          return product;
        }
        return activeCategories.indexOf(product.categoryName) > -1;
      })
      // * sort by price
      .sort((a, b) => {
        if (sortByPrice === "") {
          return a.price - b.price;
        } else if (sortByPrice === "lowToHigh") {
          return a.price - b.price;
        } else if (sortByPrice === "highToLow") {
          return b.price - a.price;
        }
      })
      // * sort by rating
      .filter((product) => {
        if (rating === 0) {
          return product;
        } else {
          return product.rating >= rating;
        }
      });
  }
  const addToCartHandler = (product) => {
    if (isAuthenticated()) {
      if (checkDb(globalState.cart, product._id)) {
        navigate("/user/cart");
      } else {
        addToCart(product);
      }
      if (!isAddingToCart) {
        setSelectedProduct(product._id);
      } else if (cartData) {
        setSelectedProduct(null);
      }
    } else {
      navigate("/auth");
    }
  };

  const addToWishlistHandler = (product) => {
    if (isAuthenticated()) {
      if (checkDb(globalState.wishlist, product._id)) {
        deleteFromWishlist(product, product._id);
      } else {
        addToWishlist(product);
      }
      if (!isAddingToWishList || isRemovingFromWishlist) {
        setSelectedProduct(product._id);
      } else if (wishListData) {
        setSelectedProduct(null);
      }
    } else {
      navigate("/auth");
    }
  };

  const showActionButtonText = (product) => {
    if (checkDb(globalState.cart, product._id)) {
      return "Go to cart";
    }
    return "Add to cart";
  };
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  return (
    <div id="product-screen-container">
      {!isAddingToCart && cartData && (
        <Toast
          type="success"
          title="Added to cart"
          message="Successfully added to cart"
        />
      )}
      {!isAddingToCart && errorInAddingToCart && (
        <Toast
          type="danger"
          title="Error"
          message="Please check your internet connection"
        />
      )}
      {!isAddingToWishList && wishListData && (
        <Toast
          type="success"
          title="Added to wishlist"
          message="Successfully added to wishlist"
        />
      )}
      {!isRemovingFromWishlist && removedWishlistData && (
        <Toast
          type="success"
          title="Removed from wishlist"
          message="Successfully removed from wishlist"
        />
      )}
      <form className="filter-container" name="filter-form">
        <div className="flex-between-container">
          <h1 className="h4 black-6">Filters</h1>
          <input
            className="btn btn-primary btn-sm red"
            type="reset"
            value="Clear"
            onClick={() => {
              setSortByPrice("");
              setRating(0);
              globalDispatch({
                type: "clearActiveCategory",
              });
            }}
          />
        </div>

        <div className="filter-box">
          <div action="" className="form-group">
            <div className="radio-checkbox-container">
              <h5 className="form-group-heading">Category</h5>
              {categoriesIsLoading && <h1>loading...</h1>}
              {!categoriesIsLoading &&
                globalState.activeCategories.map((item, idx) => {
                  return (
                    <Checkbox
                      key={categoryData.categories[idx]._id}
                      label={categoryData.categories[idx].categoryName}
                      value={categoryData.categories[idx].categoryName}
                      name="category"
                      onChange={(e) =>
                        globalDispatch({
                          type: "setActiveCategory",
                          payload: idx,
                        })
                      }
                      checked={item}
                    />
                  );
                })}
            </div>
            <div className="radio-checkbox-container">
              <h5 className="form-group-heading">Sort By Price</h5>
              <RadioButton
                label="High to Low"
                value="highToLow"
                name="sortBy"
                onChange={(e) => setSortByPrice(e.target.value)}
              />
              <RadioButton
                label="Low to High"
                value="lowToHigh"
                name="sortBy"
                onChange={(e) => setSortByPrice(e.target.value)}
              />
            </div>
            <div className="radio-checkbox-container">
              <h5 className="form-group-heading">Rating</h5>
              <Slider
                min={0}
                max={5}
                rangeValue={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </form>

      <div className="product-listing-wrapper">
        <div className="active-filter-container"></div>
        <div className="product-listing-container">
          {productIsLoading && <ProductLoader />}
          {productData &&
            productData.products.length > 0 &&
            !productIsLoading &&
            filteredData.map((item) => {
              return (
                <ProductCard
                  onImageClick={() => navigate(`/products/${item._id}`)}
                  key={item._id}
                  productName={item.name}
                  categoryName={item.categoryName.toUpperCase()}
                  price={`$ ${item.price}`}
                  cutoutPrice={`$ ${
                    Number(item.price) - Number(item.discountPercent)
                  }`}
                  rating={item.rating}
                  imageUrl={item.imageUrl}
                  discountPillText={`${item.discountPercent}%`}
                  offerPillText={item.tag}
                  onActionButtonClick={() => addToCartHandler(item)}
                  onIconClick={() => addToWishlistHandler(item)}
                  actionButtonText={showActionButtonText(item)}
                  isLoading={
                    selectedProduct === item._id ? isAddingToCart : false
                  }
                  isWishlishted={checkDb(globalState.wishlist, item._id)}
                />
              );
            })}
          {!productData && !productIsLoading && <h1>loading...</h1>}
        </div>
      </div>
    </div>
  );
};
