import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const EmptyListWrapper = styled(Wrapper)`
  ${tw`
    flex-col 
    items-center
    pt-20
  `}

  svg{
    ${tw`
      text-[6rem]
      fill-current 
      text-accent
    `}
  }
`;

export const Message = styled.span`
  ${tw`
    mt-6
    text-2xl
  `}
`;
