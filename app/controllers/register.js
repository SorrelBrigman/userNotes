
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
