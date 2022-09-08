/* eslint-disable camelcase */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import {
  Card, CardPoster, CardPosterShadow, CardRating, CardTitle, CardReleaseDate,
} from './MovieCard.style';
import { POSTER_BASE_URL } from '../../constants/movieUrl';
import { colors } from '../../constants/movieRateColors';

const formatDate = (date) => {
  if (!date) {
    return 'UNKNOWN';
  }

  return date.split('-')[0];
};

const getRatingColor = (rate) => {
  if (rate === 0) {
    return colors.mid;
  }

  if (rate >= 7) {
    return colors.high;
  }

  if (rate >= 6 && rate < 7) {
    return colors.mid2;
  }

  if (rate >= 4 && rate < 6) {
    return colors.mid;
  }

  if (rate >= 3 && rate < 4) {
    return colors.low2;
  }

  return colors.low;
};

const MovieCard = ({ details }) => {
  const {
    id, poster_path, vote_average, release_date, title,
  } = details;

  return (
    <Card
      as={Link}
      to={`/${id}`}
    >
      <CardPoster>
        <CardPosterShadow />
        <LazyLoadImage
          src={poster_path ? POSTER_BASE_URL + poster_path : '/failed-image.png'}
          effect="opacity"
        />
        <CardRating style={{ backgroundColor: getRatingColor(vote_average) }}>
          {vote_average?.toFixed(1) || 'NR'}
        </CardRating>
      </CardPoster>
      <CardTitle>
        {title}
      </CardTitle>
      <CardReleaseDate>
        {formatDate(release_date)}
      </CardReleaseDate>
    </Card>
  );
};

export default MovieCard;
