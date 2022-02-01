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

type skillsetProps = {
  icon: React.ReactElement<SvgIconProps>;
  category: String;
};

const SkillsetCard = ({ icon, category }: skillsetProps) => {
  return (
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
          <ListItemText secondary="NOSQL">MongoDB</ListItemText>
          <ListItemText secondary="SQL">MySQL</ListItemText>
          <ListItemText>MariaDB</ListItemText>
          <ListItemText secondary="SQL">Windows Server SQL</ListItemText>
        </List>
      </CardContent>
    </Card>
  );
};

export default SkillsetCard;
