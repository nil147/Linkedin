import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCYop7IdAWn7PGYjwFEQk9nI2XxvVK38g0",
    authDomain: "linkedin-6940b.firebaseapp.com",
    projectId: "linkedin-6940b",
    storageBucket: "linkedin-6940b.appspot.com",
    messagingSenderId: "929933418581",
    appId: "1:929933418581:web:8f68c9d221721fb00174dc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };