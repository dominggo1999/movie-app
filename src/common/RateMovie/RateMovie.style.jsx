import tw, { styled } from 'twin.macro';

export const RateMovieWrapper = styled.div`
  .rc-rate{
    ${tw`
      flex
      text-2xl
      gap-x-1
      md:(gap-x-2 text-4xl)
    `}
  }

  .rc-rate-star div{
    ${tw`
      relative
      cursor-pointer
    `}
  }

  .rc-rate-star div .rc-rate-star-second{
    ${tw`
      absolute
      top-0
      left-0
      text-primary-dimmed
    `}
  }

  .rc-rate-star div[aria-checked="true"] .rc-rate-star-second {
    ${tw`
      text-accent
    `}
  }
`;

export const Title = styled.span`
  ${tw`
    text-lg
    text-accent
    font-semibold
  `}
`;

export const RateBottom = styled.div`
  ${tw`
    mt-2
    flex
    items-center
  `}
`;

export const RateValue = styled.span`
  ${tw`
    inline-flex 
    items-center 
    justify-center
    font-bold 
    text-2xl
    w-12
    h-12 
    rounded-full 
    border 
    border-white
  `}
`;

export const RateMessage = styled.button`
  ${tw`
    ml-2
    underline 
    text-accent
  `}
`;
