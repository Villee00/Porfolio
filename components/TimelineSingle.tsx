import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import React from 'react';

interface props {
  time?: String;
  content: String;
}

const TimelineSingle = ({ time, content }: props) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{content}</TimelineContent>
    </TimelineItem>
  );
};

export default TimelineSingle;
