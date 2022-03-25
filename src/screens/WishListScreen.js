import React from "react";
import { ProductCard } from "../components/ProductCard";
export const WishlistScreen = () => {
  return (
    <div id="wishlist-main-container">
      <div className="page-title-wrapper mv-20">
        <h1 className="h5 black-6">
          My Wishlist <span className="regular">(4 items)</span>
        </h1>
      </div>
      <div className="wishlist-cards-container">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <ProductCard
              key={item}
              prodcutName="Product Name"
              categoryName="Category Name"
              price="$100"
              cutoutPrice="$190"
              rating="4.5"
              imageUrl="https://i.ibb.co/gP3rQtr/jeans-1.png"
              discountPillText="20% off"
              offerPillText="New"
              onActionButtonClick={() => console.log("move to cart clicked")}
              onIconClick={() => console.log("icon clicked")}
              actionButtonText="Move to Cart"
              cardWithDismiss={true}
            />
          );
        })}
      </div>
    </div>
  );
};
