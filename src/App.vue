<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <LoginForm @login="login" v-if="!user.uid" msg="Bitte einloggen" /> 
    <div v-else>
    Sie sind eingeloggt <button @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import {mapState} from "vuex";

export default {
  name: "App",
  components: {
    LoginForm,
  },
data() {
   return{}
  },  

  computed: {
    ...mapState(["user"])
  },
  methods: {
    login(payload) {
      this.$store.dispatch("login",payload)
    },  
    logout(){
      this.$store.dispatch("logout");
    },
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
