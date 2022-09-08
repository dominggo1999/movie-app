import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const PaginationWrapper = styled(Wrapper)`
  ${tw`
    justify-end
    mb-8
    gap-x-3
  `}
`;

export const PaginationButton = styled.button`
  ${tw`
    bg-accent 
    rounded-full 
    text-primary 
    font-semibold 
    flex 
    gap-x-2
    px-4
    py-1
    flex
    items-center
  `}
`;

export const Icon = styled.span`
  ${tw`
    text-lg 
  `}
`;
