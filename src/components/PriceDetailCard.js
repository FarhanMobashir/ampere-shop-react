export const PriceDetailCard = ({
  priceOfItems,
  itemCount,
  discount,
  shipping,
  deliveryCharges,
  totalPrice,
  onActionButtonClick,
}) => {
  return (
    <div class="price-detail-wrapper">
      <div class="price-detail-container">
        <h2 class="price-detail-heading">PRICE DETAILS</h2>
        <div class="flex-column-container">
          <div class="flex-between-container">
            <h4 class="list-item">{`Price (${itemCount} items)`}</h4>
            <h4 class="list-value">{priceOfItems}</h4>
          </div>
          <div class="flex-between-container">
            <h4 class="list-item">Discout</h4>
            <h4 class="list-value">{discount}</h4>
          </div>
          <div class="flex-between-container">
            <h4 class="list-item">Shipping</h4>
            <h4 class="list-value">{shipping}</h4>
          </div>
          <div class="flex-between-container">
            <h4 class="list-item">Delivery Charges</h4>
            <h4 class="list-value">{deliveryCharges}</h4>
          </div>
        </div>
        <div class="price-total-container">
          <h4 class="list-item">Total</h4>
          <h4 class="list-value">{totalPrice}</h4>
        </div>
      </div>
      <button class="checkout-btn" onClick={onActionButtonClick}>
        Proceed to checkout
      </button>
    </div>
  );
};
