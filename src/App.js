import React from 'react';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HorizontalStepper from './components/HorizontalStepper';
import MaterialCard from './components/MaterialCard';
import SimpleTable from './components/SimpleTable';

import firebase from './firebase';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodEntries: [],
    }
  }
  
  retrieveMoodEntries = () => {
    let entries = [];
    firebase
      .firestore()
      .collection('moodEntries')
      .get()
      .then((docs) => {
        docs.forEach(docRef => {
          let data = docRef.data();
          data['id'] = docRef.id;
          data['timestampModified'] = new Date(docRef.timestamp * 1000).toDateString()
          entries.push(data);
        });
        this.setState({ moodEntries: entries });
        localStorage.setItem('moodEntries', entries);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  componentDidMount() {
    this.retrieveMoodEntries();

    if (!navigator.onLine) {
      this.setState({ moodEntries: localStorage.getItem('moodEntries') });
    }
  }

  moodEntryHandler = (selectedMood, causeArray, note) => {
    console.log("inside moodEntryHandler");
    console.log(causeArray);
    let selectedCauseNames = [];

    causeArray.forEach((cause) => {
      console.log("moodEntryHandler: " + cause.name);
      selectedCauseNames.push(cause.name);
    });
    const customNote = (note != null && note.length > 0) ? note : null;

    const moodEntry = {
      moodName: selectedMood,
      userName: "Vineet",
      timestamp: Date(),
      note: customNote,
      causeArray: selectedCauseNames
    }

    firebase.firestore().collection("moodEntries").add(moodEntry)
    .then((docRef) => {
      let { moodEntries } = this.state;
      moodEntry['id'] = docRef.id;
      moodEntries.push(moodEntry);
      this.setState({moodEntries});
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    window.appState = this.state;
    return (
      <div className="App mt-5">
        <Container>
          <Row>
            <Col lg={{span: 8, offset: 2}}>
              <HorizontalStepper moodEntryHandler={this.moodEntryHandler} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg={{span: 8, offset: 2}} >
              <SimpleTable moodEntries={this.state.moodEntries} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
