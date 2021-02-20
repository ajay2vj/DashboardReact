import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5vKjnn3l0mD9X2q9izyxwFmUSpxmyenQ",
    authDomain: "blog-crud-fedc0.firebaseapp.com",
    databaseURL: "https://blog-crud-fedc0-default-rtdb.firebaseio.com",
    projectId: "blog-crud-fedc0",
    storageBucket: "blog-crud-fedc0.appspot.com",
    messagingSenderId: "1042386517149",
    appId: "1:1042386517149:web:71a8f46afb574f2df56874"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();
