import Vuex from "vuex";
import Vue from "vue";
import * as fb from "../firebase";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        setUser(state,val) {
            state.user = val;
        }
    },
    actions: {
        async setAuthState({commit}, user) {
            console.log(user)
            commit("setUser",user);
        },
        async login({commit},payload) {
            return fb.auth.signInWithEmailAndPassword(payload.email,payload.password).then((userCredentials) => {
                var user = userCredentials.user;
                 console.log("Logged in user:",user);
                 commit("setUser",user);
              }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Failed to login: ",errorCode,errorMessage);
              });
        },
        async logout({commit}) {
            fb.auth.signOut();
            commit("setUser",{})
        }
    },
});

