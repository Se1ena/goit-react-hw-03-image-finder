import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    galleryItems: [],
    modalImg: '',
    page: 1,
  };

  handleFormSubmit = (value) => {
    this.setState({
      search: value.search,
      galleryItems: [],
      page: 1,
    });
  };

  render (){
    return (<Searchbar onSubmit={this.handleFormSubmit} />
    
    );
  };
};
