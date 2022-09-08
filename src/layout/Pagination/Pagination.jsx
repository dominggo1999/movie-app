import React from 'react';
import { HiArrowRight as RightArrow, HiArrowLeft as LeftArrow } from 'react-icons/hi';
import { PaginationWrapper, PaginationButton, Icon } from './Pagination.style';

const Pagination = () => {
  return (
    <PaginationWrapper>
      <PaginationButton>
        <Icon>
          <LeftArrow />
        </Icon>
        Prev
      </PaginationButton>

      <PaginationButton>
        Next
        <Icon>
          <RightArrow />
        </Icon>
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
