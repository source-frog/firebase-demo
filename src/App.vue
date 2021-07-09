<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import * as fb from "./firebase";

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  mounted() {
    /*
    fb.auth.createUserWithEmailAndPassword("simon@codebrew.de","")
    .then((userCredentials) => {
      var user = userCredentials.user;
      console.log("Newly created user: ",user);
    })
    */
    let email = "simon@codebrew.de";
    let pwd = ""
    fb.auth.signInWithEmailAndPassword(email,pwd).then((userCredentials) => {
      var user = userCredentials.user;
       console.log("Logged in user:",user);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Failed to login: ",errorCode,errorMessage);
    });



    /*
    fb.demoCollection
      .doc("pbLh3aRXvxHzNCtp4QKb")
      .get()
      .then((doc) => {
        console.log(doc.data().hello);
      });
      */
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
