
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

firebase.auth().onAuthStateChanged(getCurrentUser);







const app = angular.module("noteApp", ["ngRoute"]);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/register", {
    controller : "RegCtrl",
    templateUrl : "partials/reg.html"
  })
  .when("/login", {
    controller : "LoginCtrl",
    templateUrl : "partials/login.html"
  })
  .when("/notes", {
    controller : "ListCtrl",
    templateUrl : "partials/list.html"
  })
  .when("/new", {
    controller : "NewNoteCtrl",
    templateUrl : "partials/newnote.html"
  })
  .otherwise({
    redirectTo: "/register"
  })
});


app.controller("RegCtrl", function($scope, $http) {


  //get user name
  $scope.registerUser = function() {
    let email = $("input[type='email']").val();
    let password = $("input[type='password']").val();
    let userName = $("input[type='text']").val();

    //

      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((e)=>{
        console.log(e)})
      .catch((e)=>{
        alert(e)
      })
    }

})


app.controller("LoginCtrl", function($scope) {
  $scope.loginUser = function() {
    let email = $("input[type='email']").val();
    let password = $("input[type='password']").val();

    //
      console.log("email", email);

      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((e)=>{
        console.log(e)})
      .catch((e)=>{
        alert(e)
      })
    }

})

app.controller("ListCtrl", function($scope) {
  $scope.userName = ""
  $scope.notes = ""
})

app.controller("NewNoteCtrl", function($scope, $http) {
  $scope.saveNote = function() {
    let newNote = $scope.newNote;
    console.log($scope.newNote)
    $http.post(`https://classprojectusernotes.firebaseio.com/${currentUser.uid}/notes.json`, newNote)
    .then((e)=>{
      console.log("success, new note saved", e)
    })
    .catch((e)=>{
      alert(e)
    })
  }
})
