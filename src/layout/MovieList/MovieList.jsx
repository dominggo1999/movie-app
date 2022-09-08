import React from 'react';
import { ListWrapper } from './MovieList.style';
import MovieCard from '../../common/MovieCard/MovieCard';

const MovieList = ({ movies }) => {
  return (
    <ListWrapper>
      {
        movies?.length > 0 && movies.map((details) => {
          return (
            <MovieCard
              details={details}
              key={details.id}
            />
          );
        })
      }
    </ListWrapper>
  );
};

export default MovieList;
