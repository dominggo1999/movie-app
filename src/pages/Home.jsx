import React from 'react';
import ListDescription from '../common/ListDescription/ListDescription';
import MovieList from '../layout/MovieList/MovieList';
import Pagination from '../layout/Pagination/Pagination';

const Home = () => {
  return (
    <>
      <ListDescription />
      <MovieList />
      <Pagination />
    </>
  );
};

export default Home;
