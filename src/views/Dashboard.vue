<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />
    Sie sind eingeloggt <button @click="logout()">Logout</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Dashboard",

  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
