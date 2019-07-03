
import React from 'react';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HorizontalStepper from './components/HorizontalStepper';
import { MyResponsivePie } from './components/PieChart';
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

  sortByDatesDesc = (array) => {
    array.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
    return array;
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

        this.sortByDatesDesc(entries);
        this.setState({ moodEntries: entries });
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
    let selectedCauseIds = [];
    causeArray.forEach((cause) => {
      selectedCauseIds.push(cause.id);
    });

    const customNote = (note != null && note.length > 0) ? note : null;

    const moodEntry = {
      moodName: selectedMood,
      userName: "Vineet",
      timestamp: Date(),
      note: customNote,
      causeArray: selectedCauseIds
    }

    firebase.firestore().collection("moodEntries").add(moodEntry)
    .then((docRef) => {
      let { moodEntries } = this.state;
      moodEntry['id'] = docRef.id;
      moodEntries.unshift(moodEntry);
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
          <Row style={{height: "500px"}}>
            <Col lg={{span: 8, offset: 2}}>
              <SimpleTable moodEntries={this.state.moodEntries} />
            </Col>
          </Row>
          <br />
          <Row style={{height: "500px"}}>
            <Col lg={{span: 6, offset: 3}}>
              <MyResponsivePie />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
