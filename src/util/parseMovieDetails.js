/* eslint-disable camelcase */
import dayjs from 'dayjs';
import { POSTER_BASE_URL } from '../constants/movieUrl';

export const arrayToString = (arr, key) => {
  if (!arr) return '';

  return arr.map((i) => i[key]).join(', ');
};

export const parseDetails = ({
  genres,
  status,
  spoken_languages,
  runtime,
  release_date,
  production_countries,
  title,
  overview,
  poster_path,
  id,
}) => {
  return {
    genres: arrayToString(genres, 'name'),
    spokenLanguages: arrayToString(spoken_languages, 'english_name'),
    runtime: runtime || '',
    status: status || '',
    releasedDate: release_date ? dayjs(release_date).format('MMMM DD, YYYY') : '',
    productionCountries: arrayToString(production_countries, 'name'),
    title,
    overview,
    posterUrl: poster_path ? POSTER_BASE_URL + poster_path : '/failed-image.png',
    id,
  };
};
