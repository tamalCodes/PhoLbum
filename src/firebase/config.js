import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVK1Zs1PpFVuaPrJ3aczpN48YHksQbO54",
  authDomain: "pholbum.firebaseapp.com",
  projectId: "pholbum",
  storageBucket: "pholbum.appspot.com",
  messagingSenderId: "951888532139",
  appId: "1:951888532139:web:f72770b5fae6c167eb9dee",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
