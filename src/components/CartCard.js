import React from "react";
export const CartCard = ({
  productName,
  categoryName,
  price,
  cutoutPrice,
  rating,
  imageUrl,
  productCount,
  onIncrement,
  onDecrement,
  onMoveToWishlist,
  onRemove,
}) => {
  return (
    <div class="card-container-horizontal horizontal-card-height">
      <img class="card-img card-img-horizontal" src={imageUrl} alt="" />
      <div class="content-container pd-10">
        <h2 class="card-title tx-20">{productName}</h2>
        <h2 class="card-subheading">{categoryName}</h2>

        <div class="bottom-container">
          <div class="price-container">
            <h3 class="price-text-small">{price}</h3>
            <small class="cutout-price-small">{cutoutPrice}</small>
          </div>
          <div class="rating-container">
            <i class="fa fa-star tx-16 yellow-4"></i>
            <small class="rating-text-small">{rating}</small>
          </div>
        </div>
        <div class="qty-container">
          <button class="qty-btn" onClick={onDecrement}>
            <i class="uil uil-minus"></i>
          </button>
          <div class="qty-display">{productCount}</div>
          <button class="qty-btn" onClick={onIncrement}>
            <i class="uil uil-plus"></i>
          </button>
        </div>
        <div class="bottom-container">
          <button class="btn btn-text btn-sm" onClick={onMoveToWishlist}>
            MOVE TO WISHLIST
          </button>
          <button class="btn btn-text btn-sm" onClick={onRemove}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};
