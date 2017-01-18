app.controller("ListCtrl", function($scope, $http) {

  getCurrentUser();

  $http.get(`https://classprojectusernotes.firebaseio.com/${currentUser.uid}/notes.json`)
  .then((val) => {
    let myNotes = []
    for(var key in val) {
      if (val.data[key] !== undefined ) {
        myNotes.push(val.data[key])
        console.log("val.data[key]", val.data[key])
      }
    }

    console.log("val: ", val)
    console.log("myNotes: ", myNotes)
    $scope.notes = myNotes;

  })

})
