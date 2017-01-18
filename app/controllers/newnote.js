app.controller("NewNoteCtrl", function($scope, $http) {
  $scope.saveNote = function() {
    let newNote = $scope.newNote;
    let currentUrl = `https://classprojectusernotes.firebaseio.com/${currentUser.uid}/notes.json`;
    console.log("current URL", currentUrl)
    console.log($scope.newNote)
    $http.post(currentUrl, JSON.stringify(newNote))
    .then((e)=>{
      console.log("success, new note saved", e)
    })
    .catch((e)=>{
      alert(e)
    })
  }
})
