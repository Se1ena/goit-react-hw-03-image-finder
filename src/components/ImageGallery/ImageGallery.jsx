import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Search } from './ImageGallery.styled';

export const ImageGallery = ({ galleryItems, ...otherProps }) => {
  return (
    <Search>
      {galleryItems.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem
        key={id} smallImg={webformatURL} largeImg={largeImageURL} {...otherProps} />)}
    </Search>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};
