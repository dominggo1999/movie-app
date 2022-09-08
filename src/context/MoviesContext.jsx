import React, {
  createContext, useLayoutEffect, useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { MOVIE_API_BASE_URL, MOVIE_API_KEY } from '../constants/movieUrl';

export const MoviesContext = createContext({});

const parseSearchParams = (pathname, params) => {
  if (pathname === '/') {
    const currentPage = Math.abs(parseInt(params.page, 10));
    const query = params.query;

    if (!params || Number.isNaN(currentPage)) {
      return {
        nextPage: 2,
        prevPage: 0,
        currentPage: 1,
        query,
      };
    }

    return {
      nextPage: currentPage + 1,
      prevPage: currentPage > 1 ? currentPage - 1 : 0,
      currentPage,
      query,
    };
  }
};

const createUrl = (page, query) => {
  const params = {
    page,
    sort_by: 'popularity.desc',
    api_key: MOVIE_API_KEY,
    adult: false,
  };

  if (query) {
    params.query = query;
    return `${MOVIE_API_BASE_URL}/search/movie?${queryString.stringify(params)}`;
  }
  return `${MOVIE_API_BASE_URL}/movie/popular?${queryString.stringify(params)}`;
};

const MoviesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { pathname, search } = useLocation();
  const params = queryString.parse(search);
  const navigate = useNavigate();

  const {
    nextPage, prevPage, currentPage, query,
  } = parseSearchParams(pathname, params) || {};

  const url = createUrl(currentPage, query);

  const abortController = new AbortController();

  const getMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { signal: abortController.signal });
      if (res.ok) {
        const data = await res.json();
        setTotalPages(data.total_pages);
        setMovies(data.results);
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

  const goToParam = (key, value) => {
    params[key] = value;

    navigate(`${pathname}?${queryString.stringify(params)}`);
  };

  useLayoutEffect(() => {
    getMovies();

    return () => {
      abortController?.abort();
    };
  }, [currentPage, query]);

  return (
    <MoviesContext.Provider
      value={{
        loading,
        error,
        movies,
        totalPages: query ? totalPages : 500,
        currentPage,
        nextPage: currentPage === totalPages ? 0 : nextPage,
        prevPage,
        query,
        goToParam,

      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
