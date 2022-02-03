import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { GithubRepo } from '../../../types';
import PublicIcon from '@mui/icons-material/Public';
import GitHub from '@mui/icons-material/GitHub';
import FadeIn from '../common/FadeIn';

interface RepoProps {
  repo: GithubRepo;
}

const RecentProjectCard = ({ repo }: RepoProps) => {
  const createDate = new Date(repo.created_at);
  const updateDate = new Date(repo.pushed_at);
  return (
    <FadeIn>
      <Card sx={{ display: 'flex', m: 1, flexWrap: 'wrap' }}>
        <CardMedia sx={{ width: 200 }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={`/${repo.name.replace('-', '')}.png`}
              alt="Project screenshot"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </CardMedia>
        <CardContent
          sx={{
            flex: '1 0 auto',
            alignSelf: 'center',
            width: 300,
            flexWrap: 'wrap',
          }}
        >
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
          <Box sx={{ pt: 1 }}>
            <Link href={repo.html_url}>
              <IconButton aria-label="GitHub" color="primary">
                <GitHub />
              </IconButton>
            </Link>
            {repo.homepage ? (
              <Link href={repo.homepage}>
                <IconButton aria-label="Website" color="primary">
                  <PublicIcon />
                </IconButton>
              </Link>
            ) : null}
          </Box>
        </CardContent>
      </Card>
    </FadeIn>
  );
};

export default RecentProjectCard;
