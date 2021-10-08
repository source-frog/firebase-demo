<template>
  <div id="app">
    <img class="image" alt="Vue logo" :src="image" />
    <br />
    Profilbild hochladen: <br />
    <input
      type="file"
      accept="image/*"
      @change="uploadProfilePicture($event)"
    />
    <br />
    <br />
    <br />
    <hr />
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
    ...mapState(["user", "image"]),
  },
  mounted() {
    this.$store.dispatch("fetchProfilePicture");
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
    uploadProfilePicture(event) {
      console.log("Upload image: ", event.target.files[0]);
      let payload = {
        uid: this.user.uid,
        image: event.target.files[0],
      };
      this.$store.dispatch("uploadProfilePicture", payload).then(() => {
        alert("Successfully uploaded profile picture");
      });
    },
  },
};
</script>

<style scoped>
.image {
  width: 300px;
  height: 300px;
}
</style>
