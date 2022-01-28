import { Timeline } from '@mui/lab';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import TimelineSingle from './TimelineSingle';

const Info = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mt: 5 }}>
        About
      </Typography>
      <Box
        id="About"
        sx={{
          display: 'flex',
          mt: 5,
          mb: 5,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: 350,
            justifyContent: 'center',
            height: '100%',
            position: 'sticky',
            top: 100,
          }}
        >
          <Avatar
            src="/Avatar.png"
            sx={{ display: 'block', m: 'auto', width: 150, height: 150 }}
          />
          <Typography variant="h2">Who am I?</Typography>
          <Typography variant="body1">
            I'm a 21-year-old developer in Helsinki, Finland. I started
            programming in 2016 with Unity and fell in love with programming.
            After that, I have done multiple projects with different languages
            and frameworks.
          </Typography>
        </Box>
        <Box sx={{ width: 500 }}>
          <Timeline position="right">
            <TimelineSingle
              time="2016-2017"
              content="Started making Unity projects with C# and attended game jams"
            />
            <TimelineSingle
              time=""
              content="Started school at Jyväskylän Lyseon lukio and Vocational qualification in Information and Communications Technology."
            />
            <TimelineSingle
              time="2018"
              content="Programmed mostly with C# .NET WinForms, Console programs and Unity projects"
            />
            <TimelineSingle
              time=""
              content="Attended Open University courses on Data Networks at University of Jyväskylä "
            />
            <TimelineSingle
              time="2019"
              content="Internship at Aditro Oy Jyvaskyla where I worked mostly with ASP.NET. But most importantly got to experience working as a programmer for a big company."
            />
            <TimelineSingle
              time=""
              content="Started to learn and make different bots more with Python"
            />
            <TimelineSingle
              time=""
              content="Graduated from Lukio and Vocational school with vocational subjects GPA. 3.0/3.0  "
            />
            <TimelineSingle
              time="2020"
              content="Started school at Metropolia UAS and did different projects with Java, C and JavaScript"
            />
            <TimelineSingle
              time="2021"
              content="Orientation to Software Engineering at Metropolia UAS, first year GPA. 5.0/5.0"
            />
            <TimelineSingle
              time=""
              content="Attended Open University course Full Stack Open (10 ECTS) at University of Helsinki where I learned a lot about Web development"
            />
            <TimelineSingle
              time=""
              content="Started to make Full stack Web applications with Node.js and React"
            />
            <TimelineSingle time="2022" content="Continuing..." />
          </Timeline>
        </Box>
      </Box>
    </>
  );
};

export default Info;
