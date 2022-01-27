import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { GithubRepo } from '../types';
import pic from '../assets/F1-history.png';

interface RepoProps {
  repo: GithubRepo;
}

const RecentProjectCard = ({ repo }: RepoProps) => {
  const createDate = new Date(repo.created_at);
  const updateDate = new Date(repo.updated_at);
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia sx={{ width: 400 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={pic}
            alt="Project screenshot"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {repo.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {repo.description}
          </Typography>
          <Chip label={repo.language} sx={{ m: 0.5 }} />
          <Box>
            {repo.topics.length > 0 ? (
              <Typography variant="body2">Topics:</Typography>
            ) : null}
            {repo.topics.map((topic) => (
              <Chip
                key={topic}
                variant="outlined"
                label={topic}
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>
          {/* TODO: Change format */}
          <Typography variant="body2">
            Updated on:
            {` ${updateDate.getDate()}.${
              updateDate.getMonth() + 1
            }.${updateDate.getFullYear()}`}
          </Typography>
          <Typography variant="body2">
            Created on:{' '}
            {`${createDate.getDate()}.${
              createDate.getMonth() + 1
            }.${createDate.getFullYear()}`}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default RecentProjectCard;
