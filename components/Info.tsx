import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const Info = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flexGrow: 0, maxWidth: '50%' }}>
        <Typography variant="h2">Who am I?</Typography>
        <Typography variant="body1">
          Im a second year stundet at Metropolia UAS. I started programming on
          2016 with Unity projects and with it came C# knowlage.
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, flexShrink: 0, p: 10 }}>
        <Avatar sx={{ width: '75%', height: '75%' }} src="/Avatar.png" />
      </Box>
    </Box>
  );
};

export default Info;
