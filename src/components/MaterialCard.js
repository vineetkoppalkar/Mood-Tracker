import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import EmotionIconButtons from './EmotionIconButtons';
import CauseContainer from '../components/CauseContainer';

const useStyles = makeStyles(theme => ({
  card: {
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

export default function RecipeReviewCard({clickHandler}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            VK
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mood Tracker"
        subheader={new Date().toDateString()}
      />
      
      <CardContent>
        <EmotionIconButtons clickHandler={clickHandler} />
        <hr />
        <CauseContainer />
      </CardContent>
    </Card>
  );
}