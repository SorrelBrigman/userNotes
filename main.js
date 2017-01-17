
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcHonJ1FdSFlQFW2E6cUJgjy2fUH4R2Xo",
    authDomain: "classprojectusernotes.firebaseapp.com",
    databaseURL: "https://classprojectusernotes.firebaseio.com",
    storageBucket: "classprojectusernotes.appspot.com",
    messagingSenderId: "611152019166"
  };
  firebase.initializeApp(config);














var app = angular.module("noteApp", ["ngRoute"])

app.config($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/register", {
    controller = "RegCtrl",
    templateUrl = "partials/reg.html"
  })
  .when("/login", {
    controller = "LoginCtrl",
    templateUrl = "partials/login.html"
  })
  .when("/notes", {
    controller = "ListCtrl",
    templateUrl = "partials/list.html"
  })
  .when("/new", {
    controller = "NewNoteCtrl",
    templateUrl = "partials/newnote.html"
  })
  .otherwise({
    redirectTo: "/register"
  })
}
