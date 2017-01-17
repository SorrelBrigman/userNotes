
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

function getUserInput() = {
  let email = $("input[type='email']").val();
  let password = $("input[type='password']").val();
  let userName = $("input[type='text']").val();
  return email, password, userName;
}


//store current user


function getCurrentUser() {
  let currentUser = firebase.auth().currentUser;
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
    let userName = $("input[type='text']").val();

    //

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
})

app.controller("ListCtrl", function($scope) {
  $scope.userName = ""
  $scope.notes = ""
})

app.controller("NewNoteCtrl", function($scope) {
  $scope.userName = ""
})
