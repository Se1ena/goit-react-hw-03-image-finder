import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Wrapper } from './App.styled';

import { fetchImages } from '../services/api-service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    search: '',
    galleryItems: [],
    modalImg: '',
    page: 1,
    status: 'start',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    try {
      if (prevState.search !== search || prevState.page !== page) {
        this.setState({ status: 'loading' });
        const res = await fetchImages(search, page);
        if (!search) {
          return;
        }
        if (page === 1) {
          toast.info(`Hooray! We found ${res.data.total} image(s).`);
          this.calculateTotalPages(res.data.total);
        }
        if (res.data.total === 0) {
          throw new Error('Images with your querry was not found');
        }
        this.setState(prevState => ({
          galleryItems: [
            ...prevState.galleryItems,
            ...this.getGalleryItems(res.data.hits),
          ],
          status: 'loaded',
        }));
      }
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      this.setState({ status: 'start' });
    }
  }

  handleFormSubmit = value => {
    this.setState({
      search: value.search,
      galleryItems: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModal = image => {
    this.setState({ modalImg: image });
  };

  getGalleryItems = data => {
    return data.map(el => ({
      id: el.id,
      webformatURL: el.webformatURL,
      largeImageURL: el.largeImageURL,
    }));
  };

  calculateTotalPages(total) {
    this.setState({ totalPages: Math.ceil(total / 12) });
  }

  render() {
    const { status, modalImg, galleryItems } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {galleryItems.length > 0 && (
          <ImageGallery
            galleryItems={galleryItems}
            onClick={this.handleModal}
          />
        )}
        {status === 'loading' && <Loader />}
        {status === 'loaded' && <Button loadMore={this.loadMore} />}
        {modalImg && <Modal image={modalImg} onModalClose={this.handleModal} />}
        <ToastContainer />
      </Wrapper>
    );
  }
}
