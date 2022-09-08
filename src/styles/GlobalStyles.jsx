import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased 
      font-primary 
      bg-primary 
      text-white
      w-full 
      min-h-screen
    `}
  }

  /* Scrollbar */
  /* width */
  ::-webkit-scrollbar {
    ${tw`
      w-[8px]
    `}
  }

  /* Track */
  ::-webkit-scrollbar-track {
    ${tw`
      bg-primary
    `}
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    ${tw`rounded-full bg-accent`}
  }
  ::-webkit-scrollbar-thumb:hover {
    ${tw`bg-accent`}
  }

  /* Firefox */
  :root{
    scrollbar-color: ${theme`colors.accent`};
    scrollbar-width: thin;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
