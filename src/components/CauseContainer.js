import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Chip"
        onClick={handleClick}
        className={classes.chip}
        color="primary"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Chip"
        onClick={handleClick}
        className={classes.chip}
        color="primary"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Chip"
        onClick={handleClick}
        className={classes.chip}
        color="primary"
      />       
    </div>
  );
}