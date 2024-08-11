import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = ({ children, isOpen, onCloseClick }) => {
  const backgroundDivRef = useRef(null);

  return (
    isOpen && (
      <RemoveScroll>
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex items-start justify-end font-lato"
          ref={backgroundDivRef}
          onClick={(e) => {
            if (backgroundDivRef.current === e.target) {
              onCloseClick();
            }
          }}
        >
          {children}
          <button className="absolute top-7 right-5" onClick={onCloseClick}>
            <i className="fa-regular fa-circle-xmark  text-3xl text-green-50"></i>
          </button>
        </div>
      </RemoveScroll>
    )
  );
};

export default ModalWrapper;
