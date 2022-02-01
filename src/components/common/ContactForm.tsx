import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <form>
        <Typography variant="h2" paragraph={true}>
          CONTACT
        </Typography>
        <TextField placeholder="Name" />
        <TextField placeholder="Enter email" />
        <TextField placeholder="Your Message" />
      </form>
    </Box>
  );
};

export default ContactForm;
