<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <LoginForm @login="login" v-if="!user.uid" msg="Bitte einloggen" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Dashboard",

  components: {
    LoginForm,
  },

  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    login(payload) {
      this.$store.dispatch("login", payload).then(() => {
        this.$router.push("/dashboard");
      });
    },
  },
};
</script>
