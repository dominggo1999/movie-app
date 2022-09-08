import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const DescriptionWrapper = styled(Wrapper)`
  ${tw`
    justify-between
    items-center
    mb-8
  `}
`;

export const Query = styled.span`
  ${tw`
    flex-1
    uppercase
    text-lg
    sm:text-2xl 
    font-semibold
    truncate
    pr-4
  `}
`;

export const PageIndicator = styled.span`
  ${tw`
    text-sm
    sm:text-lg
  `}
`;
