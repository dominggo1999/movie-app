import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import { MOVIE_DETAILS_BASE_URL, MOVIE_API_KEY } from '../constants/movieUrl';

const defaultParams = {
  api_key: MOVIE_API_KEY,
  adult: false,
};

const useMovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [details, setDetails] = useState({});
  const { movieID } = useParams();
  const abortController = new AbortController();

  const getDetails = async (id) => {
    setLoading(true);

    try {
      const url = `${MOVIE_DETAILS_BASE_URL}/${id}?${queryString.stringify(defaultParams)}`;

      const res = await fetch(url, { signal: abortController.signal });

      if (res.ok) {
        const data = await res.json();
        setDetails(data);
      }
    } catch (error) {
      if (!abortController.signal.aborted) {
        setError(error);
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 380);
    }
  };

  useLayoutEffect(() => {
    getDetails(movieID);

    return () => {
      abortController?.abort();
    };
  }, []);

  return {
    loading,
    error,
    details,
  };
};

export default useMovieDetails;
