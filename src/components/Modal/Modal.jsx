import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

export const Modal = ({ large, setModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeEsc);
    return () => {
      window.removeEventListener("keydown", closeEsc);
    };
  });

  const closeEsc = (event) => {
    if (event.code === "Escape") setModal();
  };
  const closeBackdrop = (event) => {
    if (event.currentTarget === event.target) setModal();
  };
  const point = document.querySelector("#modal");
  return createPortal(
    <div className={s.overlay} onClick={closeBackdrop}>
      <div className={s.modal}>
        <img src={large} alt="" />
      </div>
    </div>,
    point
  );
};
Modal.propTypes = {
  large: PropTypes.string,
  modal: PropTypes.func,
};
