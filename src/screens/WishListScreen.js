import React from "react";
import { EmptyState } from "../components/EmptyState";
import { ProductCard } from "../components/ProductCard";
import { useApi } from "../contexts/ApiContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/boating.png";
import { useNavigate } from "react-router-dom";
import { ProductLoader } from "../components/ProductLoader";
import { checkDb } from "../helpers/helperFuntions";
import { Toast } from "../components/Toast";
export const WishlistScreen = () => {
  const { usegetWishlist, usedeleteFromWishlist, useaddToCart } = useApi();
  const { data: wishlistData, loading: wishlistIsLoading } = usegetWishlist();
  const { state } = useData();
  const [
    deleteFromWishlist,
    { loading: isDeletingFromWishList, data: wishListData },
  ] = usedeleteFromWishlist();
  const [addToCart, { loading: isAddingToCart, data: cartData }] =
    useaddToCart();
  const navigate = useNavigate();

  const actionButtonClickHandler = (product) => {
    if (checkDb(state.cart, product._id)) {
      return;
    } else {
      deleteFromWishlist(product, product._id);
      addToCart(product);
    }
  };

  const showActionButtonText = (product) => {
    if (checkDb(state.cart, product._id)) {
      return "Already In Cart";
    } else {
      return "Move To Cart";
    }
  };

  return (
    <div id="wishlist-main-container">
      <div className="page-title-wrapper mv-20">
        <h1 className="h5 black-6">
          My Wishlist
          <span className="regular">
            {!wishlistIsLoading && state.wishlist.length} Item
          </span>
        </h1>
      </div>
      <div className="wishlist-cards-container">
        {!isDeletingFromWishList && wishListData && !cartData && (
          <Toast
            title={cartData ? `Moved to Cart` : "Removed from Wishlist"}
            message="The item is successfully removed from wishlist"
            type="success"
          />
        )}

        {wishlistIsLoading && <ProductLoader />}
        {!wishlistIsLoading &&
          wishlistData &&
          state.wishlist.map((item) => {
            return (
              <ProductCard
                key={item._id}
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
                onActionButtonClick={() => actionButtonClickHandler(item)}
                onIconClick={() => deleteFromWishlist(item, item._id)}
                actionButtonText={showActionButtonText(item)}
                cardWithDismiss={true}
              />
            );
          })}
        {!wishlistIsLoading && wishlistData && state.wishlist.length === 0 && (
          <EmptyState
            imageUrl={emptyImage}
            title="Your Wishlist is empty"
            description="Add items to your wishlist to see them here"
            buttonText="Add to Wishlist"
            onButtonClick={() => navigate("/products")}
          />
        )}
      </div>
    </div>
  );
};
