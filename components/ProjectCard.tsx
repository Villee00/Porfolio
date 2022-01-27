import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { GithubRepo } from '../types';

interface RepoProps {
  repo: GithubRepo;
}

const ProjectCard = ({ repo }: RepoProps) => {
  const createDate = new Date(repo.created_at);
  const updateDate = new Date(repo.updated_at);
  const dateFormat = `${createDate.getDate()}.${createDate.getMonth()}.${createDate.getFullYear()}`;
  return (
    <Card
      sx={{
        width: 345,
        alignContent: 'center',
        m: 2,
      }}
      elevation={6}
    >
      <CardActionArea>
        <Link href={repo.html_url}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {repo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
              Updated on:{' '}
              {`${updateDate.getDate()}.${updateDate.getMonth()}.${updateDate.getFullYear()}`}
            </Typography>
            <Typography variant="body2">Created on: {dateFormat}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
