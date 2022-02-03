import React from 'react';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import animations from '../../../styles/animations.module.css';

const TopLinks = () => {
  return (
    <Box
      id="Home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: 850,
      }}
    >
      <Avatar
        className={animations.upDownAnimation}
        sx={{
          height: 100,
          width: 100,
          mb: 1,
          border: 1,
          borderColor: 'secondary.main',
          borderWidth: 4,
        }}
        alt="Profile picture"
        src="/Avatar.png"
      />
      <Typography variant="h4" component="h1" color="text.primary">
        Ville Haapamäki
      </Typography>
      <Box>
        <Link href="https://github.com/Villee00/" passHref>
          <IconButton aria-label="GitHub" color="primary">
            <GitHubIcon />
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/ville-haapamaki/" passHref>
          <IconButton aria-label="LinkedIn" color="primary">
            <LinkedInIcon />
          </IconButton>
        </Link>
      </Box>
      <Box>
        <Typography variant="h5" component="h2" color="text.primary">
          Software Developer
        </Typography>
      </Box>
    </Box>
  );
};
export default TopLinks;
