app.controller("ListCtrl", function($scope, $http) {

  getCurrentUser();

  $http.get(`https://classprojectusernotes.firebaseio.com/${currentUser.uid}/notes.json`)
  .then((val) => {
    let myNotes = []
    for(var obj in val.data) {
      myNotes.push(val.data[obj])
    }

    $scope.notes = myNotes;

  })

})
