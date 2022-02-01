import { Box, IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      id="Contact"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: 200,
      }}
    >
      <Box>
        <Link href="https://github.com/Villee00/" passHref>
          <IconButton color="primary" size="large">
            <GitHubIcon sx={{ fontSize: 80 }} />
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/ville-haapamaki/" passHref>
          <IconButton color="primary" size="large">
            <LinkedInIcon sx={{ fontSize: 80 }} />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
