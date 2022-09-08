import React, { useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBarWrapper, InputField, SubmitButton } from './SearchBar.style';

const SearchBar = () => {
  const queryRef = useRef();

  const findMovies = (e) => {
    e.preventDefault();
    const query = queryRef.current.value;

    if (query) {
      console.log('Searching movies with query : ', query);
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
