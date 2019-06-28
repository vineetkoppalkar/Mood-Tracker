import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const renderMoodEntries = (moodEntries) => {
  if (!Array.isArray(moodEntries) || moodEntries.length === 0) {
    return null;
  }

  return (moodEntries.map((moodEntry) => (
    <TableRow key={moodEntry.id}>
      <TableCell component="th" scope="row">
        {moodEntry.moodName}
      </TableCell>
      <TableCell>{new Date(moodEntry.timestamp).toDateString()}</TableCell>
      <TableCell>{moodEntry.causeArray}</TableCell>
    </TableRow>
  )));
}

export default function SimpleTable({moodEntries}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Mood Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Cause</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderMoodEntries(moodEntries)}
          {/* {console.log({moodEntries})} */}
          
        </TableBody>
      </Table>
    </Paper>
  );
}
