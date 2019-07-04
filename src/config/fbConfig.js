import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId:  process.env.PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId:  process.env.APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Setting up Firestore
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;
