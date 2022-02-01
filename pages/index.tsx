import { Container } from '@mui/material';
import type { GetServerSideProps } from 'next';

import { GithubRepo } from '../types';
import Navigation from '../src/components/common/Navigation';
import Footer from '../src/components/common/Footer';
import Info from '../src/components/info/Info';

import TopLinks from '../src/components/top';
import SkillSet from '../src/components/skillset';
import RecentProjects from '../src/components/recentProjects';
import OtherProjects from '../src/components/otherProjects';

const recentProjects = ['Villee00/F1-history', 'Villee00/Portfolio'];
export const getServerSideProps: GetServerSideProps = async () => {
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
    <Container
      maxWidth="lg"
      sx={{
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'background.default',
      }}
    >
      <TopLinks />
      <Navigation />
      <Info />
      <SkillSet />
      <RecentProjects repos={recentRepos} />
      <OtherProjects repos={otherRepos} />
      <Footer />
    </Container>
  );
};

export default Home;
