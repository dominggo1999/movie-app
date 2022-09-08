import React from 'react';
import { ListWrapper } from './MovieList.style';
import MovieCard from '../../common/MovieCard/MovieCard';

const movies = Array.from(Array(12).keys());

const MovieList = () => {
  return (
    <ListWrapper>
      {
        movies.map((i) => {
          return (
            <MovieCard id={Math.random() + Math.random()} />
          );
        })
      }

    </ListWrapper>
  );
};

export default MovieList;
