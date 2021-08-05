import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, FormButton } from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.info('Введите название фильма');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="Search movies"
          type="text"
          value={query}
        ></Input>
        <FormButton type="submit">
          <span>Search</span>
        </FormButton>
      </Form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
