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
