import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import MoodBad from '@material-ui/icons/MoodBadOutlined';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfiedOutlined';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfiedOutlined';
import Mood from '@material-ui/icons/MoodOutlined';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfiedOutlined';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(0.5),
  },
}));

export default function FloatingActionButtons({clickHandler}) {
  const classes = useStyles();
  return (
    <div>
      <Fab color="secondary" size="small" className={classes.fab} onClick={() => clickHandler('veryDissatisfied')}>
        <SentimentVeryDissatisfied />
      </Fab>
      <Fab color="secondary" size="small" className={classes.fab} onClick={() => clickHandler('dissatisfied')}>
        <MoodBad />
      </Fab>
      <Fab color="secondary" size="small" className={classes.fab} onClick={() => clickHandler('sad')}>
        <SentimentDissatisfied />
      </Fab>
      <Fab color="secondary" size="small" className={classes.fab} onClick={() => clickHandler('happy')}>
        <SentimentSatisfied />
      </Fab>
      <Fab color="secondary" size="small" className={classes.fab} onClick={() => clickHandler('satisfied')}>
        <Mood />
      </Fab>
      <Fab color="secondary" size="small" className={classes.fab} onClick={() => clickHandler('verySatisfied')}>
        <SentimentVerySatisfied />
      </Fab>
    </div>
  );
}