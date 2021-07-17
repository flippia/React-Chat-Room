import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

//My own google account
// const firebaseConfig = {
//     apiKey: "AIzaSyBZM_UeBul0WfHZKlre6qzR0CRDDUFfuS8",
//     authDomain: "real-time-chat-room-for-react.firebaseapp.com",
//     projectId: "real-time-chat-room-for-react",
//     storageBucket: "real-time-chat-room-for-react.appspot.com",
//     messagingSenderId: "344138517444",
//     appId: "1:344138517444:web:90235cf6b4130cef9c7291"
// };

//javaknight account
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxwF_s_Svw8mEnoBmZ5hixXLkQcHHUb20",
    authDomain: "react-chat-room-5c68f.firebaseapp.com",
    projectId: "react-chat-room-5c68f",
    storageBucket: "react-chat-room-5c68f.appspot.com",
    messagingSenderId: "965436119856",
    appId: "1:965436119856:web:58ccfdd2ad7aa2748086f5",
    measurementId: "G-8X6N1HRYE7"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

const projectAuth = firebase.auth();

const projectStorage = firebase.storage();

export { projectStorage, projectFirestore, projectAuth }


