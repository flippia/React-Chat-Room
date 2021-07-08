import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZM_UeBul0WfHZKlre6qzR0CRDDUFfuS8",
    authDomain: "real-time-chat-room-for-react.firebaseapp.com",
    projectId: "real-time-chat-room-for-react",
    storageBucket: "real-time-chat-room-for-react.appspot.com",
    messagingSenderId: "344138517444",
    appId: "1:344138517444:web:90235cf6b4130cef9c7291"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }
