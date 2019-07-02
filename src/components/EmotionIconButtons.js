import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

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
  
  negativeOnHover: {
    "&:hover": {
      backgroundColor: indigo[300]
    }
  },
  veryDissatisfied: {
    backgroundColor: indigo[900],
  },
  dissatisfied: {
    backgroundColor: indigo[700],
  },
  sad: {
    backgroundColor: indigo[500],
  },

  positiveOnHover: {
    "&:hover": {
      backgroundColor: blue[300]
    }
  },
  happy: {
    backgroundColor: blue[800],
  },
  satisfied: {
    backgroundColor: blue[600],
  },
  verySatisfied: {
    backgroundColor: blue[400],
  },
}));

export default function FloatingActionButtons({promptContainer, setMoodName}) {
  const classes = useStyles();
  const veryDissatisfiedClassName = `${classes.fab} ${classes.veryDissatisfied} ${classes.negativeOnHover}`;
  const dissatisfiedClassName = `${classes.fab} ${classes.dissatisfied} ${classes.negativeOnHover}`;
  const sadClassName = `${classes.fab} ${classes.sad} ${classes.negativeOnHover}`;
  const happyClassName = `${classes.fab} ${classes.happy} ${classes.positiveOnHover}`;
  const satisfiedClassName = `${classes.fab} ${classes.satisfied} ${classes.positiveOnHover}`;
  const verySatisfiedClassName = `${classes.fab} ${classes.verySatisfied} ${classes.positiveOnHover}`;

  return (
    <div>
      {promptContainer}
      <Fab color="primary" size="small" className={veryDissatisfiedClassName} aria-label="VeryDissatisfied" onClick={() => setMoodName('Very Dissatisfied')}>
        <SentimentVeryDissatisfied />
      </Fab>
      <Fab color="primary" size="small" className={dissatisfiedClassName} aria-label="Dissatisfied" onClick={() => setMoodName('Dissatisfied')}>
        <MoodBad />
      </Fab>
      <Fab color="primary" size="small" className={sadClassName} aria-label="Sad" onClick={() => setMoodName('Sad')}>
        <SentimentDissatisfied />
      </Fab>
      <Fab color="primary" size="small" className={happyClassName} aria-label="Happy" onClick={() => setMoodName('Happy')}>
        <SentimentSatisfied />
      </Fab>
      <Fab color="primary" size="small" className={satisfiedClassName} aria-label="Satisfied" onClick={() => setMoodName('Satisfied')}>
        <Mood />
      </Fab>
      <Fab color="primary" size="small" className={verySatisfiedClassName} aria-label="VerySatisfied" onClick={() => setMoodName('Very Satisfied')}>
        <SentimentVerySatisfied />
      </Fab>
    </div>
  );
}