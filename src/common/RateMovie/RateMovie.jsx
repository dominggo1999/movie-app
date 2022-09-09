import React, { useLayoutEffect, useState } from 'react';
import Rate from 'rc-rate';
import queryString from 'query-string';
import {
  RateMovieWrapper,
  Title,
  RateValue,
  RateBottom,
  RateMessage,
} from './RateMovie.style';
import { GUESS_SESSION_URL, MOVIE_RATING_URL, MOVIE_API_KEY } from '../../constants/movieUrl';

const useGuessSessionId = () => {
  const getSession = async () => {
    try {
      const res = await fetch(GUESS_SESSION_URL);
      const data = await res.json();
      const ses = data.guest_session_id;
      localStorage.setItem('sessionId', ses);

      return ses;
    } catch (error) {
      return null;
    }
  };

  useLayoutEffect(() => {
    const storedSessionId = localStorage.getItem('sessionId');
    if (!storedSessionId) {
      getSession();
    }
  }, []);

  return { getSession };
};

const RateMovie = ({ id }) => {
  const { getSession } = useGuessSessionId();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const changeRating = async (type, val) => {
    setRating(val);
    const sessionId = localStorage.getItem('sessionId') || await getSession();

    const params = queryString.stringify(
      {
        api_key: MOVIE_API_KEY,
        guest_session_id: sessionId,
      },
    );

    const url = `${MOVIE_RATING_URL}/${id}/rating?${params}`;

    const res = await fetch(url, {
      method: type === 'rate' ? 'POST' : 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: val.toFixed(1) }),
    });
  };

  return (
    <RateMovieWrapper>
      <Title>Rate This Movie</Title>
      <Rate
        defaultValue={0}
        count={10}
        value={rating}
        onChange={(val) => changeRating('rate', val)}
        allowHalf={false}
      />
      <RateBottom>
        <RateValue>
          {rating}
        </RateValue>
        {
          rating !== 0 && (
            <RateMessage onClick={() => changeRating('delete', 0)}>
              Cancel your rating
            </RateMessage>
          )
        }
      </RateBottom>
    </RateMovieWrapper>
  );
};

export default RateMovie;
