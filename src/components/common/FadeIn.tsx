import { Grow } from '@mui/material';
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const FadeIn = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  const onChange = (isVisible: boolean) => {
    setVisible(isVisible);
  };
  console.log(typeof children);
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 50, top: 100 }}
      onChange={onChange}
    >
      <Grow in={visible}>{children}</Grow>
    </VisibilitySensor>
  );
}; // eslint-disable-line no-use-before-define

export default FadeIn;
