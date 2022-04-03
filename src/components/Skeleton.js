export const CardSkeleton = ({}) => {
  return (
    <div className="card-container-small skeleton-container">
      <div className="skeleton-item-image skeleton"></div>
      <div className="skeleton-item-button skeleton"></div>
    </div>
  );
};

export const PriceDetailSkeleton = () => {
  return (
    <div className="skeleton-container">
      <div class="price-detail-wrapper"></div>
      <div className="skeleton-item-button skeleton"></div>
    </div>
  );
};
