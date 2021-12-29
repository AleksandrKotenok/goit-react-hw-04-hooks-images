import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

export const Modal = ({ large, modal }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeEsc);
    return () => {
      window.removeEventListener("keydown", closeEsc);
    };
  });

  const closeEsc = (event) => {
    if (event.code === "Escape") modal();
  };
  const closeBackdrop = (event) => {
    if (event.currentTarget === event.target) modal();
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
