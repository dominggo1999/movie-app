import React from 'react';
import {
  MovieDetailsWrapper,
  Poster,
  InfoWrapper,
  Title,
  Overview,
  SubContent,
  SubTitle,
  SubText,
} from './MovieDetails.tyle';
import RateMovie from '../../common/RateMovie/RateMovie';

const MovieDetails = ({ details }) => {
  const {
    genres, runtime, spokenLanguages, status, releasedDate, productionCountries, title, overview, posterUrl, id,
  } = (details);

  return (
    <MovieDetailsWrapper>
      <Poster>
        <img
          src={posterUrl}
          alt="details"
        />
      </Poster>
      <InfoWrapper>
        <Title>
          {title}
        </Title>
        <Overview>
          {overview}
        </Overview>
        <SubContent>
          <SubTitle>
            Genres
          </SubTitle>
          <SubText>
            {genres}
          </SubText>
        </SubContent>

        <SubContent>
          <SubTitle>
            Runtime
          </SubTitle>
          <SubText>
            {runtime || '0'} min
          </SubText>
        </SubContent>

        <SubContent>
          <SubTitle>
            Spoken Languages
          </SubTitle>
          <SubText>
            {spokenLanguages}
          </SubText>
        </SubContent>

        <SubContent>
          <SubTitle>
            Status
          </SubTitle>
          <SubText>
            {status}
          </SubText>
        </SubContent>

        <SubContent>
          <SubTitle>
            Released Date
          </SubTitle>
          <SubText>
            {releasedDate}
          </SubText>
        </SubContent>

        <SubContent>
          <SubTitle>
            Production Countries
          </SubTitle>
          <SubText>
            {productionCountries}
          </SubText>
        </SubContent>

        <RateMovie id={id} />
      </InfoWrapper>
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;
