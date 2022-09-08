import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import {
  Card, CardPoster, CardRating, CardTitle, CardReleaseDate,
} from './MovieCard.style';
import { posterBaseUrl } from '../../constants/posterBaseUrl';
import { colors } from '../../constants/movieRateColors';

const data = {
  id: '610150',
  title: 'Samaritan',
  poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
  vote_average: 8,
  release_date: '2022-06-11',
};

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

const MovieCard = () => {
  return (
    <Card
      as={Link}
      to={`/${data.id}`}
    >
      <CardPoster>
        <LazyLoadImage
          src={posterBaseUrl + data.poster_path}
          effect="opacity"
        />
        <CardRating style={{ backgroundColor: getRatingColor(data.vote_average) }}>
          {data.vote_average?.toFixed(1) || 'NR'}
        </CardRating>
      </CardPoster>
      <CardTitle>
        {data.title}
      </CardTitle>
      <CardReleaseDate>
        {formatDate(data.release_date)}
      </CardReleaseDate>
    </Card>
  );
};

export default MovieCard;
