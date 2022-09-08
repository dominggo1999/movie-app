import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const PageTitle = styled(Link)`
  ${tw`
    text-2xl
    md:text-3xl
    font-bold
  `}
`;
