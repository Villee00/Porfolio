import {
  Avatar,
  Container,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import type { GetStaticProps } from 'next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import animations from '../styles/animations.module.css';
import { GithubRepo } from '../types';
import Navigation from '../components/Navigation';
import RecentProjectCard from '../components/RecentProjectCard';
import Footer from '../components/Footer';
import Info from '../components/Info';

const recentProjects = ['Villee00/F1-history', 'Villee00/Porfolio'];
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/Villee00/repos?sort=created&accept=application/vnd.github.v3+json'
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
const Home: React.FC<propsRepos> = ({
  recentRepos,
  otherRepos,
}: propsRepos) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          bgcolor: 'background.default',
        }}
      >
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
            src="/Avatar.png"
          />
          <Typography variant="h4" component="h1" color="text.primary">
            Ville Haapamäki
          </Typography>
          <Box>
            <Link href="https://github.com/Villee00/" passHref>
              <IconButton color="primary">
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/ville-haapamaki/" passHref>
              <IconButton color="primary">
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
        <Navigation />
        <Box>
          <Info />
        </Box>
        <Box id="Projects" component={Paper} elevation={2} sx={{ mb: 2, p: 2 }}>
          <Typography variant="h2" component="h3">
            Most recent projects
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {recentRepos.map((repo) => (
              <RecentProjectCard key={repo.id} repo={repo} />
            ))}
          </Box>
        </Box>
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
            {otherRepos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </Box>
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
