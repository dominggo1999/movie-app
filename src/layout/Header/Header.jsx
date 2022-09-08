import React from 'react';
import { HeaderWrapper } from './Header.style';
import Brand from '../../common/Brand/Brand';
import SearchBar from '../../common/SearchBar/SearchBar';

const Header = () => {
  return (
    <HeaderWrapper>
      <Brand />
      <SearchBar />
    </HeaderWrapper>
  );
};

export default Header;
