import React from "react";
import { CartCard } from "../components/CartCard";
import { PriceDetailCard } from "../components/PriceDetailCard";
import { useApi } from "../contexts/ApiContext";
import { useData } from "../contexts/DataContext";
export const CartScreen = () => {
  const { usegetCart, usedeleteFromCart, useupdateCart, useaddToWishlist } =
    useApi();
  const { loading: isLoadingCart } = usegetCart();
  const [removeFromCart, { loading: isDeletingFromCart }] = usedeleteFromCart();
  const [updateCart, { loading: isUpdatingCart }] = useupdateCart();
  const [addToWishlist, { loading: isAddingToCart }] = useaddToWishlist();
  const { state } = useData();

  const priceOfItems = state.cart.reduce(
    (acc, cr) => parseInt(cr.price) * cr.qty + parseInt(acc),
    0
  );
  const discount = priceOfItems * 0.1;
  const shipping = priceOfItems > 240 ? 0 : 10;
  const totalPrice = priceOfItems - discount + shipping;

  return (
    <div id="cart-main-container">
      <div class="page-title-wrapper mv-20">
        <h1 class="h5 black-6">
          My Cart <span class="regular">{`(${state.cart.length} items)`}</span>
        </h1>
      </div>
      <div class="cart-and-summary-container">
        <div class="cart-cards-container">
          {isLoadingCart ? (
            <h1>Loading...</h1>
          ) : (
            state.cart.map((item) => (
              <CartCard
                key={item._id}
                productName={item.name}
                categoryName={item.categoryName}
                price={item.price}
                cutoutPrice="$499.00"
                rating={item.rating}
                imageUrl={item.imageUrl}
                productCount={item.qty}
                onIncrement={() => updateCart({ type: "increment" }, item._id)}
                onDecrement={() => updateCart({ type: "decrement" }, item._id)}
                onMoveToWishlist={() => {
                  addToWishlist(item);
                  removeFromCart(item, item._id);
                }}
                onRemove={() => removeFromCart(item, item._id)}
              />
            ))
          )}
        </div>
        <PriceDetailCard
          priceOfItems={`$ ${priceOfItems}`}
          itemCount={5}
          discount={`-$${discount}`}
          shipping={`+$${shipping}`}
          deliveryCharges="FREE"
          totalPrice={`$${totalPrice}`}
          onActionButtonClick={() => console.log("Checkout clicked")}
        />
      </div>
    </div>
  );
};
