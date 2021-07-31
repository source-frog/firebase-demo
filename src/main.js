import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import { auth } from "./firebase";

Vue.config.productionTip = false;

let app;

auth.onAuthStateChanged((user) => {
  if(!app) {
    app = new Vue({
      store,
      render: (h) => h(App),
    }).$mount("#app");
    store.$app = app;

    if(user) {
     store.dispatch("setAuthState",user);
    }
    else {
      store.dispatch("setAuthState",{});
    }
  } else {
    store.$app = app;
    app.$mount("#app");
  }
  console.log("Auth state changed")

})
