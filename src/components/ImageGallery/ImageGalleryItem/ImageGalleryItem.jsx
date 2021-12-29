import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ web, large }) => {
  const [state, setState] = useState(false);
  const modal = () => setState(!state);
  return (
    <li className={s.item}>
      <img onClick={modal} className={s.image} src={web} alt="" />
      {state && <Modal large={large} modal={modal} alt="" />}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  web: PropTypes.string,
  large: PropTypes.string,
};
