import React from "react";
export const Toast = ({ message, type, title }) => {
  const [showModal, setShowModal] = React.useState(true);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setShowModal(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });

  if (showModal) {
    return (
      <div className={`toast toast-${type} top-right bottom-center`}>
        <i
          className={`toast-icon uil 
        ${
          type === "success"
            ? "uil-check"
            : type === "danger"
            ? "uil-exclamation-circle"
            : type === "info"
            ? "uil-shield-exclamation"
            : ""
        }
        `}
        ></i>
        <div className="toast-body">
          <h5 className="toast-title">{title}</h5>
          <p className="toast-text">{message}</p>
        </div>
        <button className="close-btn">
          <i className="uil uil-times" onClick={() => setShowModal(false)}></i>
        </button>
      </div>
    );
  } else {
    return null;
  }
};
