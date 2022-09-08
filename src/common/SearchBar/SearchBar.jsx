import React, { useContext, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBarWrapper, InputField, SubmitButton } from './SearchBar.style';
import { MoviesContext } from '../../context/MoviesContext';

const SearchBar = () => {
  const {
    goToParam,
  } = useContext(MoviesContext);
  const queryRef = useRef();

  const findMovies = (e) => {
    e.preventDefault();
    const query = queryRef.current.value;

    if (query) {
      goToParam('query', query);
      goToParam('page', 1);
    }
  };

  return (
    <SearchBarWrapper onSubmit={findMovies}>
      <InputField
        spellCheck={false}
        ref={queryRef}
        placeholder="Search movie"
        maxLength="200"
      />
      <SubmitButton>
        <AiOutlineSearch />
      </SubmitButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
