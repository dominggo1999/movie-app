import React, { useContext } from 'react';
import ListDescription from '../common/ListDescription/ListDescription';
import MovieList from '../layout/MovieList/MovieList';
import Pagination from '../layout/Pagination/Pagination';
import LoadingIndicator from '../common/LoadingIndicator/LoadingIndicator';
import { MoviesContext } from '../context/MoviesContext';

const Home = () => {
  const {
    loading, movies, currentPage, query, nextPage, prevPage, goToParam, totalPages,
  } = useContext(MoviesContext);

  if (loading) return <LoadingIndicator />;

  return (
    <>
      <ListDescription
        query={query}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <MovieList movies={movies} />
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        goToParam={goToParam}
      />
    </>
  );
};

export default Home;
