import tw, { styled } from 'twin.macro';

export const Card = styled.div`
  ${tw`
    flex
    flex-col
  `}
`;

export const CardPoster = styled.div`
  ${tw`
    relative
  `}

  aspect-ratio: 270 / 380;

  span.lazy-load-image-background{
    ${tw`
      w-full 
      h-full
    `}
  }

  img{
    ${tw`
      inline-block
      w-full
      h-full
      object-center
      object-cover
    `}

    aspect-ratio: 270 / 380;
  }
`;

export const CardRating = styled.span`
  ${tw`
    flex 
    items-center 
    justify-center 
    rounded-full
    absolute 
    w-13
    h-13
    text-primary
    right-2
    bottom-2
    text-xl 
    font-bold
  `}
`;

export const CardTitle = styled.span`
  ${tw`
    text-lg 
    font-bold
    mt-2
  `}
`;

export const CardReleaseDate = styled.span`
  ${tw`
    font-bold 
    text-lg
    opacity-30
  `}
`;
