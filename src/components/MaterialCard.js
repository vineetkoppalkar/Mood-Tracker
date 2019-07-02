import React from 'react';

import '../assets/stylesheets/MaterialCard.css';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';
import EmotionIconButtons from './EmotionIconButtons';
import CauseContainer from '../components/CauseContainer';
import NoteContainer from '../components/NoteContainer';
import CauseIconList from '../components/CauseIconList';

class MaterialCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodName: '',
      causeArray: [],
      note: ''
    };
  }

  setMoodName = (moodName) => {
    this.setState({moodName});
    this.props.handleNext();
  }

  setCauseArray = (causeArray) => {
    this.setState({causeArray});
  }

  setNote = (note) => {
    this.setState({note});
  }

  submitMoodEntry = () => {
    this.props.moodEntryHandler(
      this.state.moodName,
      this.state.causeArray,
      this.state.note
    );
    this.props.handleNext();
  }

  render() {
    let {promptText, activeStep, handleBack, handleNext, steps} = this.props;

    let inputContainer;
    let promptContainer;
    const selectedMoodTextInfo = `Feeling ${this.state.moodName.toLowerCase()}`;
    switch(activeStep) {
      case 0:          
        promptContainer = <Typography className={"instructions mb-2"}>{promptText}</Typography>
        inputContainer = <EmotionIconButtons
                            promptContainer = {promptContainer}
                            setMoodName = {this.setMoodName}
                          />;
        break;
      case 1:        
        promptContainer = <div>
          <Typography className="instructions">{selectedMoodTextInfo}</Typography>
          <Typography className="instructions">{promptText}</Typography>
        </div>
        
        inputContainer = <CauseContainer
                            promptContainer = {promptContainer}
                            setCauseArray = {this.setCauseArray}
                          />;
        break;
      case 2:
        promptContainer = <div>
          <Typography className="instructions">{selectedMoodTextInfo} because of</Typography>
          <CauseIconList selectedCauses={this.state.causeArray} />
        </div>

        inputContainer = <NoteContainer
                            promptContainer = {promptContainer}
                            promptToAddNoteText = {promptText}
                            selectedMood = {this.state.moodName}
                            setNote = {this.setNote}
                          />;
        break;
      default:
        // This should never show
        inputContainer = <p>Invalid step</p>
        break;
    }

    return (
      <Card className="card">
        <CardHeader
          avatar={
            <Avatar aria-label="initials" className="avatar">
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
          {inputContainer}

          {activeStep > 0 ? (
            <div>
              <hr />
              
              <Button disabled={activeStep === 0} onClick={handleBack} className="button">
                Back
              </Button>
 
              <Button
                variant="contained"
                color="primary"
                onClick={activeStep === steps.length - 1 ? () => this.submitMoodEntry() : handleNext}
                className="button"
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
           ) : null
          }

        </CardContent>
      </Card>
    );
  }
}

export default MaterialCard;
