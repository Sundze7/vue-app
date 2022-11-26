<template>
  <section>
    <div class="hello">
      <h1>Google Log In</h1>
      <h2 v-if="user">Signed In User: {{ user }}</h2>
    </div>
    <div id="logout" v-if="isSignedIn">
      <button @click="handleSignOut">log out</button>
    </div>
    <br />
    <div id="GoogleSignIn" v-if="!isSignedIn">
      <h2>Google SignIn</h2>
      <button @click="googleSignIn" class="border bg-gray-100">login</button>
    </div>
    <br />
    <div id="TwitterSignIn" v-if="!isSignedIn">
      <h2>Twitter SignIn</h2>
      <button @click="twitterSignIn" class="border bg-gray-100">login</button>
    </div>
    <br />
    <div id="GithubSignIn" v-if="!isSignedIn">
      <h2>Github SignIn</h2>
      <button
        @click="githubSignIn({ prompt: 'select_account' })"
        class="border bg-gray-100"
      >
        login
      </button>
    </div>
  </section>
</template>

<script>
//import firebase from "firebase";
import { firebaseConfig } from "/src/services/firebaseConfig.js";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

firebaseConfig;

const provider = new GoogleAuthProvider();
//const providerTwitter = new TwitterAuthProvider();
const providerGithub = new GithubAuthProvider();
const auth = getAuth();

export default {
  name: "GoogleLogin",
  props: {
    msg: String,
  },
  data() {
    return {
      user: "",
      isSignedIn: false,
    };
  },
  methods: {
    googleSignIn() {
      signInWithPopup(auth, provider)
        .then((result) => {
          //const user = result.user;
          //console.log(result.user.displayName);
          this.use = result.user.displayName;
          this.isSignedIn = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // twitterSignIn() {
    //   signInWithPopup(auth, providerTwitter)
    //     .then((result) => {
    //       this.use = result.user.displayName;
    //       this.isSignedIn = true;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    githubSignIn() {
      signInWithPopup(auth, providerGithub)
        .then((result) => {
          this.use = result.user.displayName;
          this.isSignedIn = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleSignOut() {
      signOut(auth)
        .then(() => {
          this.user = "";
          this.isSignedIn = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
