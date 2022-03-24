export const HeaderSearch = ({ size }) => {
  return (
    <div className={`search-container-${size}`}>
      <i className="search-icon uil uil-search pointer"></i>
      <input
        placeholder="Search here..."
        className="search-input-big"
        type="text"
      />
    </div>
  );
};
