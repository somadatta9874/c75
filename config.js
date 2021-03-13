import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB2HX4nFkV-aGfSFDKwBNy-qzm-NEczz6w",
  authDomain: "booksanta-8f405.firebaseapp.com",
  projectId: "booksanta-8f405",
  storageBucket: "booksanta-8f405.appspot.com",
  messagingSenderId: "700016676502",
  appId: "1:700016676502:web:c12890f674cba00eeefcb7"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
