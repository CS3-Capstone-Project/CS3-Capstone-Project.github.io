import * as firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAgBZde7UIL6NM3iHJNNQ6ggxUZZjDWEnk",
  authDomain: "pycat-50c79.firebaseapp.com",
  databaseURL: "https://pycat-50c79.firebaseio.com",
  projectId: "pycat-50c79",
  storageBucket: "pycat-50c79.appspot.com",
  messagingSenderId: "119793574190",
  appId: "1:119793574190:web:cfec191d2142d54be81abf",
  measurementId: "G-17TDJR0PRT"
};
export const Fire = firebase.initializeApp(firebaseConfig);
export default Fire ;