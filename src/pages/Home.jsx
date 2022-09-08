import React from 'react';
import Header from '../layout/Header/Header';
import ListDescription from '../common/ListDescription/ListDescription';
import MovieList from '../layout/MovieList/MovieList';

const Home = () => {
  return (
    <>
      <ListDescription />
      <MovieList />
    </>
  );
};

export default Home;
