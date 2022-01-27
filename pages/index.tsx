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
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import RecentProjectCard from '../components/RecentProjectCard';

const recentProjects = ['Villee00/F1-history'];
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/Villee00/repos?sort=created',
    {
      Accept: 'application/vnd.github.v3+json',
    }
  );
  const data: GithubRepo[] = await res.json();
  const recentRepos = data.filter((repo) =>
    recentProjects.includes(repo.full_name)
  );
  const otherRepos = data.filter(
    (repo) => !recentProjects.includes(repo.full_name)
  );
  return {
    props: {
      recentRepos,
      otherRepos,
    },
  };
};

interface propsRepos {
  recentRepos: GithubRepo[];
  otherRepos: GithubRepo[];
}
const Home: NextPage = ({ recentRepos, otherRepos }: propsRepos) => {
  return (
    <>
      <Navigation />
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
            Most recent projects
          </Typography>
          {recentRepos.map((repo) => (
            <RecentProjectCard repo={repo} />
          ))}
        </Box>
        <Box bgcolor="secondary.main">
          <Typography variant="h2" component="h3">
            Other projects
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
          {otherRepos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </Box>
        <ContactForm />
      </Container>
    </>
  );
};

export default Home;
