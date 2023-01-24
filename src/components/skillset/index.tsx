import { Box, Typography } from '@mui/material';
import React from 'react';
import SkillsetCard from './SkillsetCard';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import WebIcon from '@mui/icons-material/Web';
import { Skillset } from '../../../types';
import { data } from '../../data/data';

const SkillSet = () => {
  const { databases, languages, tools, web }: Skillset = data;
  return (
    <Box sx={{ mt: 2, mb: 2 }} id="Skills">
      <Typography variant="h3">Development skills</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        data-testid="SkillsContainer"
      >
        <SkillsetCard
          icon={<StorageIcon />}
          category="Databases"
          data={databases}
        />
        <SkillsetCard
          icon={<CodeIcon />}
          category="Languages"
          data={languages}
        />

        <SkillsetCard icon={<WebIcon />} category="Tools" data={tools} />

        <SkillsetCard
          icon={<WebIcon />}
          category="Front-end"
          data={web.frontend}
        />
        <SkillsetCard
          icon={<DnsOutlinedIcon />}
          category="Back-end"
          data={web.backend}
        />
      </Box>
    </Box>
  );
};

export default SkillSet;
