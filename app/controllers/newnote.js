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
