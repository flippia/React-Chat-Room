import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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

const storage = firebase.storage();

export { storage, projectFirestore, projectAuth }


