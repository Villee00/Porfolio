import { Box, Typography, Paper } from '@mui/material';
import React from 'react';
import { ReposProps } from '../../../types';
import ProjectCard from './ProjectCard';

const OtherProjects = ({ repos }: ReposProps) => {
  return (
    <Box component={Paper} elevation={2} p={1}>
      <Typography variant="h4" component="h4">
        Other project/course repositories
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </Box>
    </Box>
  );
};

export default OtherProjects;
