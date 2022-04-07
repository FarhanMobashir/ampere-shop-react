import React from "react";
import { CartCard } from "../components/CartCard";
import { EmptyState } from "../components/EmptyState";
import { PriceDetailCard } from "../components/PriceDetailCard";
import { useApi } from "../contexts/ApiContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/shopnow.png";
import { useNavigate } from "react-router-dom";
import { ProductLoader } from "../components/ProductLoader";
import { checkDb } from "../helpers/helperFuntions";
import { Toast } from "../components/Toast";

export const CartScreen = () => {
  const { usegetCart, usedeleteFromCart, useupdateCart, useaddToWishlist } =
    useApi();
  const { loading: isLoadingCart, data: cartData } = usegetCart();
  const [
    removeFromCart,
    { loading: isDeletingFromCart, data: deletedCartData },
  ] = usedeleteFromCart();
  const [updateCart, { loading: isUpdatingCart, data: updatedCartData }] =
    useupdateCart();
  const [
    addToWishlist,
    { loading: isAddingToWishlist, data: addedWishlistData },
  ] = useaddToWishlist();
  const { state } = useData();
  const navigate = useNavigate();

  const priceOfItems = state.cart.reduce(
    (acc, cr) => parseInt(cr.price) * cr.qty + parseInt(acc),
    0
  );
  const discount = priceOfItems * 0.1;
  const shipping = priceOfItems > 240 ? 0 : 10;
  const totalPrice = priceOfItems - discount + shipping;

  const moveToWishlistHandler = (product) => {
    if (checkDb(state.wishlist, product._id)) {
      return;
    } else {
      addToWishlist(product);
      removeFromCart(product, product._id);
    }
  };

  const moveToWishlistTextHandler = (product) => {
    if (checkDb(state.wishlist, product._id)) {
      return "Already in Wishlist";
    } else {
      return "Move to Wishlist";
    }
  };

  return (
    <div id="cart-main-container">
      <div class="page-title-wrapper mv-20">
        <h1 class="h5 black-6">
          My Cart <span class="regular">{`(${state.cart.length} items)`}</span>
        </h1>
      </div>
      <div class="cart-and-summary-container">
        <div class="cart-cards-container">
          {!isDeletingFromCart && deletedCartData && (
            <Toast
              type="success"
              title="Removed From Cart"
              message="Item removed from cart successfully"
            />
          )}
          {!isUpdatingCart && updatedCartData && (
            <Toast
              type="success"
              title="Quantity updated"
              message="Quantity of item updated successfully"
            />
          )}

          {isLoadingCart && <ProductLoader />}
          {!isLoadingCart &&
            cartData &&
            state.cart.map((item) => {
              return (
                <CartCard
                  key={item._id}
                  productName={`${item.name.slice(0, 20)}...`}
                  categoryName={item.categoryName}
                  price={`$${item.price}`}
                  cutoutPrice=""
                  rating={item.rating}
                  imageUrl={item.imageUrl}
                  productCount={item.qty}
                  onIncrement={() =>
                    updateCart({ type: "increment" }, item._id)
                  }
                  onDecrement={() =>
                    updateCart({ type: "decrement" }, item._id)
                  }
                  onMoveToWishlist={() => {
                    moveToWishlistHandler(item);
                  }}
                  onRemove={() => removeFromCart(item, item._id)}
                  moveToWishlistText={moveToWishlistTextHandler(item)}
                />
              );
            })}
        </div>

        {!isLoadingCart && cartData && cartData.cart.length === 0 && null}
        {!isLoadingCart && cartData && state.cart.length > 0 && (
          <PriceDetailCard
            priceOfItems={`$ ${priceOfItems}`}
            itemCount={5}
            discount={`-$${discount}`}
            shipping={`+$${shipping}`}
            deliveryCharges="FREE"
            totalPrice={`$${totalPrice}`}
            onActionButtonClick={() => console.log("Checkout clicked")}
          />
        )}
      </div>
      {!isLoadingCart && cartData && state.cart.length === 0 && (
        <EmptyState
          imageUrl={emptyImage}
          title="Your Cart is empty"
          description="Add items to your cart to see them here"
          buttonText="Continue Shopping"
          onButtonClick={() => navigate("/products")}
        />
      )}
    </div>
  );
};
