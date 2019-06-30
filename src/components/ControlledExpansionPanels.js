import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: "left"
  },
  expansionPanel: {
    borderRadius: "0 !important",
    boxShadow: "none"
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    flexBasis: '33.33%',
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  note: {
    padding: "0 30px",
    color: theme.palette.text.secondary,
    fontStyle: "italic"
  }
}));

export default function ControlledExpansionPanels({moodName, date, icons, note}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel 
        className={classes.expansionPanel}
        expanded={expanded === 'panel1'}
        onChange={note != null ? handleChange('panel1') : null}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={note != null ? "visible" : "invisible"} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{moodName}</Typography>
          <Typography className={classes.secondaryHeading}>{date}</Typography>
          {icons}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.note}>
            {note}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
