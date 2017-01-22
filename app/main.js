
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcHonJ1FdSFlQFW2E6cUJgjy2fUH4R2Xo",
    authDomain: "classprojectusernotes.firebaseapp.com",
    databaseURL: "https://classprojectusernotes.firebaseio.com",
    storageBucket: "classprojectusernotes.appspot.com",
    messagingSenderId: "611152019166"
  };

  firebase.initializeApp(config);


// global functions

function getUserInput() {
  let email = $("input[type='email']").val();
  let password = $("input[type='password']").val();
  let userName = $("input[type='text']").val();
  return email, password, userName;
}

//log user out on click of logout button
  $(".logout").click(()=>{
    firebase
    .auth()
    .signOut()
  })



//store current user

var currentUser;

function getCurrentUser() {
  currentUser = firebase.auth().currentUser;
}

function showLogInPage() {
  if (currentUser !== null) {
//show rest of site
  } else {
//keep them locked out on the login/reg page
  }
}


firebase.auth().onAuthStateChanged(getCurrentUser);
firebase.auth().onAuthStateChanged(getCurrentUser);







const app = angular.module("noteApp", ["ngRoute"]);
