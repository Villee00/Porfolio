import { Fade, Grow } from '@mui/material';
import React, { ReactComponentElement, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const FadeIn: React.FC<{}> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const onChange = (isVisible) => {
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
