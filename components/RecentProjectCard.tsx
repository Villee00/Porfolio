import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { GithubRepo } from '../types';

interface RepoProps {
  repo: GithubRepo;
}

const RecentProjectCard = ({ repo }: RepoProps) => {
  const createDate = new Date(repo.created_at);
  const updateDate = new Date(repo.updated_at);
  return (
    <Card sx={{ display: 'flex', m: 1, flexWrap: 'wrap' }}>
      <CardMedia sx={{ width: 200 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={`/${repo.name.replace('-', '')}.png`}
            alt="Project screenshot"
            objectFit="cover"
            layout="fill"
            width={200}
            height={200}
          />
        </div>
      </CardMedia>
      <CardContent sx={{ flex: '1 0 auto', width: 300, flexWrap: 'wrap' }}>
        <Typography component="div" variant="h5">
          {repo.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
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
        {repo.homepage ? <Link href={repo.homepage}>Website</Link> : null}
      </CardContent>
    </Card>
  );
};

export default RecentProjectCard;
