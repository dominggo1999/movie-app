import React from 'react';
import MovieDetails from '../layout/MovieDetails/MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails';
import LoadingIndicator from '../common/LoadingIndicator/LoadingIndicator';
import { ReactComponent as ErrorIcon } from '../icons/error.svg';
import { ReactComponent as NoResultIcon } from '../icons/no-result.svg';
import EmptyList from '../common/EmptyList/EmptyList';
import { parseDetails } from '../util/parseMovieDetails';

const Details = () => {
  const { details, loading, error } = useMovieDetails();
  const parsedDetails = parseDetails(details);

  if (loading) return <LoadingIndicator />;

  if (error) {
    return (
      <EmptyList
        icon={ErrorIcon}
        text="Oops, an error has occured"
      />
    );
  }

  return (
    <MovieDetails details={parsedDetails} />
  );
};

export default Details;
