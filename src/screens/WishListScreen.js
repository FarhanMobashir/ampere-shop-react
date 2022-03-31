import React from "react";
import { EmptyState } from "../components/EmptyState";
import { ProductCard } from "../components/ProductCard";
import { useApi } from "../contexts/ApiContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/boating.png";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";
export const WishlistScreen = () => {
  const { usegetWishlist, usedeleteFromWishlist, useaddToCart } = useApi();
  const { data: wishlistData, loading: wishlistIsLoading } = usegetWishlist();
  const { state } = useData();
  const [
    deleteFromWishlist,
    { loading: isDeletingFromWishList, data: wishListData },
  ] = usedeleteFromWishlist();
  const [addToCart, { loading: isAddingToCart }] = useaddToCart();
  const navigate = useNavigate();
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
        {wishlistIsLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => <Skeleton />)}
        {!wishlistIsLoading &&
          wishlistData &&
          wishlistData.wishlist.map((item) => {
            return (
              <ProductCard
                key={item._id}
                productName="Product Name Goes Here"
                categoryName="Category Name"
                price="$100"
                cutoutPrice="$190"
                rating="4.5"
                imageUrl="https://i.ibb.co/gP3rQtr/jeans-1.png"
                discountPillText="20% off"
                offerPillText="New"
                onActionButtonClick={() => {
                  addToCart(item);
                  deleteFromWishlist(item, item._id);
                }}
                onIconClick={() => deleteFromWishlist(item, item._id)}
                actionButtonText={"MOVE TO CART"}
                cardWithDismiss={true}
              />
            );
          })}
        {!wishlistIsLoading &&
          wishlistData &&
          wishlistData.wishlist.length === 0 && (
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
