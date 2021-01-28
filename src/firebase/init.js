// const firebase = require("firebase");
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDyWDBR5QzJY9HgGNRwtc7XyFl_2b7Y8j0",
  authDomain: "chat-app-4f26c.firebaseapp.com",
  databaseURL: "https://chat-app-4f26c-default-rtdb.firebaseio.com",
  projectId: "chat-app-4f26c",
  storageBucket: "chat-app-4f26c.appspot.com",
  messagingSenderId: "972565099600",
  appId: "1:972565099600:web:4decfd77f3724fa9bd8d55"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;