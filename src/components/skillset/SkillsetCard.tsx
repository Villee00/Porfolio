import {
  Box,
  Card,
  CardContent,
  List,
  ListItemText,
  SvgIconProps,
  Typography,
} from '@mui/material';
import React from 'react';
import FadeIn from '../common/FadeIn';
import { SkillData } from '../../../types';

type skillsetProps = {
  icon: React.ReactElement<SvgIconProps>;
  category: string;
  data: SkillData[];
};

const SkillsetCard = ({ icon, category, data }: skillsetProps) => {
  return (
    <FadeIn>
      <Card sx={{ width: 275, textAlign: 'left', m: 2 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {icon}
            <Typography variant="h5">{category}</Typography>
          </Box>
          <List>
            {data.map((skill) => (
              <ListItemText key={skill.id} secondary={skill.secondary}>
                {skill.value}
              </ListItemText>
            ))}
          </List>
        </CardContent>
      </Card>
    </FadeIn>
  );
};

export default SkillsetCard;
