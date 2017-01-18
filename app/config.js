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
