<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <LoginForm @login="login" v-if="!loggedIn" msg="Bitte einloggen" /> 
    <div v-else>
    Sie sind eingeloggt
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import * as fb from "./firebase";

export default {
  name: "App",
  components: {
    LoginForm,
  },
data() {
    return {
      loggedIn: false
    }
  },

  methods: {
    login(payload) {
     fb.auth.signInWithEmailAndPassword(payload.email,payload.password).then((userCredentials) => {
      var user = userCredentials.user;
       console.log("Logged in user:",user);
       this.loggedIn = true;
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Failed to login: ",errorCode,errorMessage);
      this.loggedIn = false;
    });
    }
  },

  mounted() {
    /*
    fb.auth.createUserWithEmailAndPassword("simon@codebrew.de","")
    .then((userCredentials) => {
      var user = userCredentials.user;
      console.log("Newly created user: ",user);
    })
    */
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
