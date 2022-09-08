import React, { useContext } from 'react';
import ListDescription from '../common/ListDescription/ListDescription';
import MovieList from '../layout/MovieList/MovieList';
import Pagination from '../layout/Pagination/Pagination';
import LoadingIndicator from '../common/LoadingIndicator/LoadingIndicator';
import { MoviesContext } from '../context/MoviesContext';
import EmptyList from '../common/EmptyList/EmptyList';
import { ReactComponent as ErrorIcon } from '../icons/error.svg';
import { ReactComponent as NoResultIcon } from '../icons/no-result.svg';

const Home = () => {
  const {
    loading, movies, currentPage, query, nextPage, prevPage, goToParam, totalPages, error,
  } = useContext(MoviesContext);

  if (loading) return <LoadingIndicator />;

  if (error) {
    return (
      <EmptyList
        icon={ErrorIcon}
        text="Oops, an error has occured"
      />
    );
  }

  if (movies?.length === 0) {
    return (
      <EmptyList
        icon={NoResultIcon}
        text="No Result Found"
      />
    );
  }

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
