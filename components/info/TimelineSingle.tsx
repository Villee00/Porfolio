import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import React from 'react';
import FadeIn from '../common/FadeIn';

interface props {
  time?: string;
  content: string;
}

const TimelineSingle = ({ time, content }: props) => {
  return (
    <FadeIn>
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
    </FadeIn>
  );
};

export default TimelineSingle;
