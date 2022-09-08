import React from 'react';
import { DescriptionWrapper, Query, PageIndicator } from './ListDescription.style';
import { Highlight } from '../Typography';

const ListDescription = ({ query, currentPage, totalPages }) => {
  return (
    <DescriptionWrapper>
      <Query>
        {query || 'Popular'}
      </Query>
      <PageIndicator>
        Page <Highlight>{currentPage}</Highlight> of {totalPages}
      </PageIndicator>
    </DescriptionWrapper>
  );
};

export default ListDescription;
