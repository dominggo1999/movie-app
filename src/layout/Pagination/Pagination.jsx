import React from 'react';
import { HiArrowRight as RightArrow, HiArrowLeft as LeftArrow } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { PaginationWrapper, PaginationButton, Icon } from './Pagination.style';

const Pagination = ({
  nextPage,
  prevPage,
  goToParam,
}) => {
  return (
    <PaginationWrapper>
      {
        prevPage ? (
          <PaginationButton onClick={() => goToParam('page', prevPage)}>
            <Icon>
              <LeftArrow />
            </Icon>
            Prev
          </PaginationButton>
        ) : null
      }

      {
        nextPage ? (
          <PaginationButton onClick={() => goToParam('page', nextPage)}>
            Next
            <Icon>
              <RightArrow />
            </Icon>
          </PaginationButton>
        ) : null
      }

    </PaginationWrapper>
  );
};

export default Pagination;
