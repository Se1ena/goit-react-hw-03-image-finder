import React from 'react';
import PropTypes from 'prop-types';
import { GalleryImg, ItemGallery } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({ smallImg, largeImg, onClick }) => {
  return (
    <ItemGallery className='gallery-item'>
      <GalleryImg src={smallImg} onClick={() => onClick(largeImg)} alt='' />
    </ItemGallery>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
