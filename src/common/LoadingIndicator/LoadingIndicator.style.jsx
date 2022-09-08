import { keyframes } from 'styled-components';
import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

const animloader = keyframes`
  0%{
    transform: translate(-60%, -50%);
  }

  25%{
    transform: translate(-60%, -40%);
  }

  50%{
    transform: translate(-48%, -55%);
  }

  75%{
    transform: translate(-60%, -45%);
  }

  100%{
    transform: translate(-60%, -50%);
  }
`;

export const LoadingIndicatorWrapper = styled(Wrapper)`
  ${tw`
    pt-20
    h-[30rem] 
    w-full 
    items-center   
    flex-col
  `}
`;

export const IconWrapper = styled.div`
  ${tw`
    w-40 
    h-40
    relative
    mb-3
  `}

  svg{
    ${tw`
      text-[8rem]
      text-accent
      fill-current
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
    `}

    animation: ${animloader} 5s linear infinite;
  }
`;

export const LoadingText = styled.span`
  ${tw`
    text-xl
  `}
`;
