export const HeaderIcon = ({ iconName, onClick, badgeCount, withBadge }) => {
  return (
    <div className="badge-container" onClick={onClick}>
      <i className={`badge-icon uil ${iconName}`}></i>
      {withBadge ? <i className="badge">{badgeCount}</i> : null}
    </div>
  );
};
