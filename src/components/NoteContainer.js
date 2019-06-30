import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: "100%",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function NoteContainer({promptContainer, promptToAddNoteText, selectedMood, setNote}) {
  const classes = useStyles();
  const placeholderText = `I feel ${selectedMood.toLowerCase()} because...`

  const handleChange = name => event => {
    setNote(event.target.value);
  };

  return (
    <div>
      {promptContainer}
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="note-textarea"
          label={promptToAddNoteText}
          placeholder={placeholderText}
          multiline
          className={classes.textField}
          onChange={handleChange('name')}
          margin="normal"
        />      
      </form>
    </div>
  );
}
