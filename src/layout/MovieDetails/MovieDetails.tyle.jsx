import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const MovieDetailsWrapper = styled(Wrapper)`
  ${tw`
    justify-between
    flex-col
    sm:flex-row
    mb-8
  `}
`;

export const Poster = styled.div`
  ${tw`
    sm:w-[28%]
    sm:mb-0 
    mb-6
  `}

  img{
    ${tw`
      w-full
      max-w-full
    `}
  }
`;

export const InfoWrapper = styled.div`
  ${tw`
    flex 
    flex-col
    sm:w-[65%]
    lg:pr-28
  `}
`;

export const Title = styled.h2`
  ${tw`
    text-3xl
    font-bold    
    text-accent
    mb-2
  `}
`;

export const Overview = styled.p`
  ${tw`
    mb-4
  `}
`;

export const SubContent = styled.div`
  ${tw`
    flex 
    flex-col
    mb-3
  `}
`;

export const SubTitle = styled.h3`
  ${tw`
    text-lg
    text-accent
    font-semibold
  `}
`;

export const SubText = styled.p`
  ${tw`
    text-base
  `}
`;
