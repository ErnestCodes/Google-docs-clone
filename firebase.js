// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeWmqUXmzkFGSqtR8GUED0jgdZlh6p3YU",
  authDomain: "docs-clone-587f3.firebaseapp.com",
  projectId: "docs-clone-587f3",
  storageBucket: "docs-clone-587f3.appspot.com",
  messagingSenderId: "506171202143",
  appId: "1:506171202143:web:760a9c15052c539ca899ea",
  measurementId: "G-SMDQHC1G89",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
