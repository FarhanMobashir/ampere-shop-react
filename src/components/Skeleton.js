export const Skeleton = ({}) => {
  return (
    <div className="card-container-small skeleton-container">
      <div className="skeleton-item-image skeleton"></div>
      <div className="skeleton-item-button skeleton"></div>
    </div>
  );
};

export const SkeletonRect = () => {
  return <div className="skeleton-container"></div>;
};
