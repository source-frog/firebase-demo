import Vue from "vue";
import App from "./App.vue";

import firebase from "firebase/app";
import "firebase/firestore";

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
const demoCollection = db.collection("demo");

demoCollection
  .doc("pbLh3aRXvxHzNCtp4QKb")
  .get()
  .then((doc) => {
    console.log(doc.data().hello);
  });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
