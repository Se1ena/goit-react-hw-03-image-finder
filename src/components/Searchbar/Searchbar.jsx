import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Search, SearchForm, SearchFormBtn, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Search>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormBtn type="submit"><BsSearch size="20px" /></SearchFormBtn>
          <Input
            name="search"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Search>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
