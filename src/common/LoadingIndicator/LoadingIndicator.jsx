import React from 'react';
import { LoadingIndicatorWrapper, IconWrapper, LoadingText } from './LoadingIndicator.style';
import { ReactComponent as CameraIcon } from '../../icons/camera.svg';

const LoadingIndicator = () => {
  return (
    <LoadingIndicatorWrapper>
      <IconWrapper>
        <CameraIcon />
      </IconWrapper>
      <LoadingText>
        Loading ....
      </LoadingText>
    </LoadingIndicatorWrapper>
  );
};

export default LoadingIndicator;
