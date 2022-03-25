import React from "react";
import { CartCard } from "../components/CartCard";
import { PriceDetailCard } from "../components/PriceDetailCard";
export const CartScreen = () => {
  return (
    <div id="cart-main-container">
      <div class="page-title-wrapper mv-20">
        <h1 class="h5 black-6">
          My Cart <span class="regular">(4 items)</span>
        </h1>
      </div>
      <div class="cart-and-summary-container">
        <div class="cart-cards-container">
          {[1, 2, 3, 4, 5].map((item) => (
            <CartCard
              key={item}
              productName="Product Name"
              categoryName="Category Name"
              price="$1299.00"
              cutoutPrice="$499.00"
              rating="4.5"
              imageUrl="https://i.ibb.co/gP3rQtr/jeans-1.png"
              productCount={5}
              onIncrement={() => console.log("Increment")}
              onDecrement={() => console.log("Decrement")}
              onMoveToWishlist={() => console.log("Move to wishlist")}
              onRemove={() => console.log("Remove")}
            />
          ))}
        </div>
        <PriceDetailCard
          priceOfItems="$1299.00"
          itemCount={5}
          discount="$499.00"
          shipping="$10.00"
          deliveryCharges="FREE"
          totalPrice="$1299.00"
          onActionButtonClick={() => console.log("Checkout clicked")}
        />
      </div>
    </div>
  );
};
