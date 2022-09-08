import { keyframes } from 'styled-components';
import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const ListWrapper = styled(Wrapper)`
  ${tw`
    grid
    sm:grid-cols-2
    md:grid-cols-3 
    lg:grid-cols-4
    gap-9
    mb-8
  `}
`;
