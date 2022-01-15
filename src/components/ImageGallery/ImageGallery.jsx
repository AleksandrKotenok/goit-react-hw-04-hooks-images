import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import s from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ image }) => {
  return (
    <ul className={s.gallery}>
      {image.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem key={id} web={webformatURL} large={largeImageURL} alt={tags} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.array,
};
