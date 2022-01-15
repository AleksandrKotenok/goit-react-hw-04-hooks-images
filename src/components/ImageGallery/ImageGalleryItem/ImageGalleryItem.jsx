import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ web, large, alt }) => {
  const [state, setState] = useState(false);
  const setModal = () => setState(!state);
  return (
    <li className={s.item}>
      <img onClick={setModal} className={s.image} src={web} alt={alt} />
      {state && <Modal large={large} modal={setModal} alt="" />}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  web: PropTypes.string,
  large: PropTypes.string,
};
