import React from 'react';
import { DescriptionWrapper, Query, PageIndicator } from './ListDescription.style';
import { Highlight } from '../Typography';

const ListDescription = () => {
  return (
    <DescriptionWrapper>
      <Query>
        Popular
      </Query>
      <PageIndicator>
        Page <Highlight>12</Highlight> of 500
      </PageIndicator>
    </DescriptionWrapper>
  );
};

export default ListDescription;
