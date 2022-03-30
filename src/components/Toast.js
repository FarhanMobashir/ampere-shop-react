import React from "react";
export const Toast = ({ message, type, title, onClose, position }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isClosing, setIsClosing] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState(null);

  React.useEffect(() => {
    let timeoutId;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        setIsClosing(true);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  }, [isClosing]);

  return (
    <div className={`toast toast-${type} ${position}`}>
      <i className="uil uil-check toast-icon"></i>
      <div className="toast-body">
        <h5 className="toast-title">{title}</h5>
        <p className="toast-text">{message}</p>
      </div>
      <button className="close-btn" onClick={onClose}>
        <i className="uil uil-times"></i>
      </button>
    </div>
  );
};
