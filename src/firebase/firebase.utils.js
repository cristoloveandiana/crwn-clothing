import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBcRE-Bj-tD4gKL87Db2EQsKlC6J5t_0kY',
  authDomain: 'proj-crwn-db.firebaseapp.com',
  databaseURL: 'https://proj-crwn-db.firebaseio.com',
  projectId: 'proj-crwn-db',
  storageBucket: 'proj-crwn-db.appspot.com',
  messagingSenderId: '288454585381',
  appId: '1:288454585381:web:2517648037be0ab586a3cc',
  measurementId: 'G-2JPNPE9Y8Q',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;