import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVFoOhFYY1zqDcSrgd05IVbonbcSE0AAk",
  authDomain: "fire-demo-1338.firebaseapp.com",
  projectId: "fire-demo-1338",
  storageBucket: "fire-demo-1338.appspot.com",
  messagingSenderId: "731841145932",
  appId: "1:731841145932:web:8d7878440eaa9e54e618e9",
  measurementId: "G-V7K65JK8W0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const demoCollection = db.collection("demo");

export { db, auth, storage, demoCollection };
