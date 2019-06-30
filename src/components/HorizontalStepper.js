import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MaterialCard from './MaterialCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  button: {
    marginRight: theme.spacing(1),
  }
}));

function getSteps() {
  return ['Select a mood', 'Cause of mood', 'Additional details'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'How are you feeling?';
    case 1:
      return 'Why do you feel this way?';
    case 2:
      return 'Would you like to leave a note?';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper({moodEntryHandler}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Paper className="p-3">
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          </div>
        ) : (
          <div>
            <MaterialCard 
              moodEntryHandler={moodEntryHandler}
              promptText={getStepContent(activeStep)}
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
              steps={steps}
            />
          </div>
        )}
      </div>
    </div>
  );
}
