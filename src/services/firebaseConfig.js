import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpqbFEQd6TqqdxYJCgBCVCLj1hQjmuFNc",

  authDomain: "vue3-login-practise.firebaseapp.com",

  projectId: "vue3-login-practise",

  storageBucket: "vue3-login-practise.appspot.com",

  messagingSenderId: "475656262228",

  appId: "1:475656262228:web:252d76e0a4adf124fd93c1",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
