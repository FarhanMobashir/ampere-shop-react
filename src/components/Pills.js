export const Pill = ({ label, onClick }) => {
  return (
    <small className="pill grey">
      {label} <i className="uil uil-times pointer" onClick={onClick}></i>
    </small>
  );
};
