<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="email" v-model="email" placeholder="Email Adresse" />
      <br />
      <input type="password" v-model="password" placeholder="Passwort" />
      <br />
      <input type="button" value="LOG IN" @click="login" />
      <input type="button" value="RESET PASSWORD" @click="resetPassword" />
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    msg: String,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      this.$emit("login", {
        email: this.email,
        password: this.password,
      });
    },
    resetPassword() {
      this.$emit("resetPassword", this.email);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
