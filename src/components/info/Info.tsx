import {Timeline} from '@mui/lab';
import {Avatar, Box, Typography} from '@mui/material';
import React from 'react';
import TimelineSingle from './TimelineSingle';

const Info = () => {
    return (
        <Box
            id="About"
            sx={{
                display: 'flex',
                mt: 5,
                mb: 5,
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
            test-dataid="infoContainer"
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
                    alt="Profile picture"
                    sx={{display: 'block', m: 'auto', width: 150, height: 150}}
                />
                <Typography variant="h2">Who am I?</Typography>
                <Typography variant="body1">
                    I&apos;m a 22-year-old second-year student at Metropolia UAS in
                    Helsinki majoring in Software Engineering. I started my programming
                    career in 2016 and it became my passion instantly. After that, I have
                    done multiple projects with different languages and frameworks.
                </Typography>
            </Box>
            <Box sx={{width: 500}}>
                <Timeline position="right" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
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
                        content="Programmed mostly with C# .NET Forms, Console programs and Unity projects"
                    />
                    <TimelineSingle
                        time="2019"
                        content="Internship at Aditro Oy Jyväskylä where I worked mostly with ASP.Net/C#. But most importantly got to experience working as a programmer for a big company."
                    />
                    <TimelineSingle
                        time=""
                        content="I started learning Python and making different applications with it"
                    />
                    <TimelineSingle
                        time=""
                        content="Graduated from Lyseon lukio and Vocational school with vocational subjects GPA. 3.0/3.0  "
                    />
                    <TimelineSingle
                        time="2020"
                        content="Started school at Metropolia UAS and did different projects with Java, C and JavaScript"
                    />
                    <TimelineSingle
                        time="2021"
                        content="Majoring in Software Engineering at Metropolia UAS. First year GPA. 5.0/5.0"
                    />
                    <TimelineSingle
                        time=""
                        content="Attended Open University course Full Stack Open (11 ECTS) + Full Stack project (10 ECTS) at University of Helsinki where I learned a lot about Web development"
                    />
                    <TimelineSingle
                        time=""
                        content="Started making Full stack Web applications"
                    />
                    <TimelineSingle time="2022" content="Started working at Nordea as a IT developer "/>
                    <TimelineSingle time="2023" content="Continuing"/>
                </Timeline>
            </Box>
        </Box>
    );
};

export default Info;
