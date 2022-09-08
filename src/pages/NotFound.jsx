import React from 'react';
import EmptyList from '../common/EmptyList/EmptyList';
import { ReactComponent as FourZeroFourIcon } from '../icons/404.svg';

const NotFound = () => (
  <EmptyList
    icon={FourZeroFourIcon}
    text="Oops, Page not found"
  />
);

export default NotFound;
