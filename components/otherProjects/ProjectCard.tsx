import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Fade,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { GithubRepo } from '../../types';
import FadeIn from '../common/FadeIn';

interface RepoProps {
  repo: GithubRepo;
}

const ProjectCard = ({ repo }: RepoProps) => {
  const createDate = new Date(repo.created_at);
  const updateDate = new Date(repo.updated_at);
  const dateFormat = `${createDate.getDate()}.${
    createDate.getMonth() + 1
  }.${createDate.getFullYear()}`;
  return (
    <FadeIn>
      <Card
        sx={{
          width: 345,
          alignContent: 'center',
          m: 2,
          alignSelf: 'stretch',
        }}
        elevation={6}
      >
        <CardActionArea sx={{ width: '100%', height: '100%' }}>
          <Link href={repo.html_url} passHref>
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
                Updated on:
                {` ${updateDate.getDate()}.${
                  updateDate.getMonth() + 1
                }.${updateDate.getFullYear()}`}
              </Typography>
              <Typography variant="body2">Created on: {dateFormat}</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </FadeIn>
  );
};

export default ProjectCard;
