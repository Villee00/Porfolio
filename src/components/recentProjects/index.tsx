import { Box, Typography, Paper } from '@mui/material';
import React from 'react';
import RecentProjectCard from './RecentProjectCard';
import { ReposProps } from '../../../types';

const RecentProjects = ({ repos }: ReposProps) => {
  return (
    <Box
      id="Projects"
      component={Paper}
      elevation={2}
      sx={{ mb: 2, p: 2, alignItems: 'stretch' }}
      data-testid="recentProjects"
    >
      <Typography variant="h2" component="h3">
        Most recent projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {repos.map((repo) => (
          <RecentProjectCard key={repo.id} repo={repo} />
        ))}
      </Box>
    </Box>
  );
};

export default RecentProjects;
