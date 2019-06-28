import * as firebase from 'firebase'
// import firestore from 'firebase/firestore'

const settings = {};

var config = {
  apiKey: 'AIzaSyBuKN2UlG28kt_ArN2qkQ7OxIDMLpoLhKQ',
  authDomain: 'moodtracker-3c9c8.firebaseapp.com',
  databaseURL: 'https://moodtracker-3c9c8.firebaseio.com',
  projectId: 'moodtracker-3c9c8',
  storageBucket: 'moodtracker-3c9c8.appspot.com',
  messagingSenderId: '741398182954',
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase