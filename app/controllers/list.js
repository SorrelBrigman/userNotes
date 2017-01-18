app.controller("ListCtrl", function($scope, $http) {

  getCurrentUser();

  $http.get(`https://classprojectusernotes.firebaseio.com/${currentUser.uid}/notes.json`)
  .then((val) => {
    let myNotes = []
    for(var obj in val.data) {
              console.log("obj", obj)
      if (val.data[obj] !== undefined ) {
        myNotes.push(val.data[obj])

        console.log("val.data[obj]", val.data[obj])
      }
    }

    console.log("val: ", val)
    console.log("val.data", val.data)
    console.log("myNotes: ", myNotes)
    $scope.notes = myNotes;

  })

})
