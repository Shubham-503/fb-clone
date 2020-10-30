import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgpq2Ig6AL_m3bLHlj9lJFw7KFpQp6j3E",
  authDomain: "fb-clone-6498e.firebaseapp.com",
  databaseURL: "https://fb-clone-6498e.firebaseio.com",
  projectId: "fb-clone-6498e",
  storageBucket: "fb-clone-6498e.appspot.com",
  messagingSenderId: "596246681238",
  appId: "1:596246681238:web:51d0ced21b7d57d5f654b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
