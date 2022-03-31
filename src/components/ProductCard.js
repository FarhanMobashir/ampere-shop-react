import React from "react";

export const ProductCard = ({
  productName,
  categoryName,
  price,
  cutoutPrice,
  rating,
  discountPillText,
  offerPillText,
  imageUrl,
  onActionButtonClick,
  onIconClick,
  cardWithDismiss,
  actionButtonText,
  isLoading,
}) => {
  return (
    <div className="card-container-small">
      <div className="card-img-grid">
        <img
          className="card-img img-with-icon"
          //   src="https://i.ibb.co/gP3rQtr/jeans-1.png"
          src={imageUrl}
          alt=""
        />
        {cardWithDismiss ? (
          <i
            onClick={onIconClick}
            className="uil uil-times card-icon-small icon-on-image pointer"
          ></i>
        ) : (
          <i
            onClick={onIconClick}
            className={`uil uil-heart card-icon-small icon-on-image pointer`}
          ></i>
        )}
      </div>
      <div className="content-container-small">
        <h2 className="card-title-small">{`${productName.slice(0, 16)}...`}</h2>
        <h4 className="card-subtitle-small">{categoryName}</h4>
        <div className="bottom-container">
          <div className="price-container">
            <h3 className="price-text-small">{price}</h3>
            <small className="cutout-price-small">{cutoutPrice}</small>
          </div>
          <div className="rating-container">
            <i className="fa fa-star tx-16 yellow-4"></i>
            <small className="rating-text-small">{rating}</small>
          </div>
        </div>
        <div className="pill-container">
          <small className="pill pill-sm orange">{discountPillText}</small>
          <small className="pill pill-sm grey">{offerPillText}</small>
        </div>
        <button
          onClick={onActionButtonClick}
          className="btn btn-primary wp-100"
          disabled={isLoading}
        >
          {actionButtonText}
        </button>
      </div>
    </div>
  );
};
