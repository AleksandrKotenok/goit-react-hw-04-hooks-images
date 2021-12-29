import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import s from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ image }) => {
  return (
    <ul className={s.gallery}>
      {image.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id} web={webformatURL} large={largeImageURL} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.array,
};
