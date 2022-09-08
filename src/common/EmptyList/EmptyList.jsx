import React from 'react';
import { EmptyListWrapper, Message } from './EmptyList.style';

const EmptyList = ({ text, icon: Icon }) => {
  return (
    <EmptyListWrapper>
      {Icon && <Icon />}
      <Message>{text}</Message>
    </EmptyListWrapper>
  );
};

export default EmptyList;
