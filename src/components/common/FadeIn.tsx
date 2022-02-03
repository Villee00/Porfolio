import { Grow } from '@mui/material';
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const FadeIn = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  const onChange = (isVisible: boolean) => {
    setVisible(isVisible);
  };
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 50, top: 100 }}
      onChange={onChange}
    >
      <Grow in={visible}>{children}</Grow>
    </VisibilitySensor>
  );
};

export default FadeIn;
