import {
  Avatar,
  Container,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import type { GetStaticProps, NextPage } from 'next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import animations from '../styles/animations.module.css';
import { GithubRepo } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/Villee00/repos', {
    Accept: 'application/vnd.github.v3+json',
  });
  const data = await res.json();

  return {
    props: {
      repos: data,
    },
  };
};

interface propsRepos {
  repos: GithubRepo[];
}
const Home: NextPage = ({ repos }: propsRepos) => {
  const test = 'test';
  return (
    <Container
      maxWidth="lg"
      sx={{
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          height: 500,
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
          src="https://avatars.githubusercontent.com/u/22426370"
        />
        <Typography variant="h4" component="h1">
          Ville Haapamäki
        </Typography>
        <Box>
          <Link href="https://github.com/Villee00/">
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/ville-haapamaki/">
            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Box>
        <Box>
          <Typography variant="h5" component="h2">
            Fullstack developer
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h2" component="h3">
          Projects
        </Typography>
      </Box>
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
    </Container>
  );
};

export default Home;
