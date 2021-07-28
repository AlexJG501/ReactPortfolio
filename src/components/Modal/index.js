import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, liveUrl, github, category, index  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <p>
          {description}
        </p>
        <p>
          <a href={liveUrl}>
            Deployed Site
          </a> <a href={github}>
            GitHub
          </a>
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;