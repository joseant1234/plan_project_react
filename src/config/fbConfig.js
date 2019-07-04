import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: ENV['APIKEY'],
  authDomain: "planprojectreact.firebaseapp.com",
  databaseURL: "https://planprojectreact.firebaseio.com",
  projectId: "planprojectreact",
  storageBucket: "",
  messagingSenderId: "941829892019",
  appId: ENV['APPID']
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Setting up Firestore
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;
