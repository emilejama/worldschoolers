

// Get input from user
var usernameInput;
var descriptionInput;
var locationInput;
var fileInput;
// Keep list of DOM elements for clearing later when reloading
var listItems = [];
var database;

function setup() {

  var config = {
    apiKey: "AIzaSyDUPsVJQgLHBRrdpL94Bn3RI7ZnHYgVg68",
    authDomain: "worldschoolers-1556417648836.firebaseapp.com",
    databaseURL: "https://worldschoolers-1556417648836.firebaseio.com",
    projectId: "worldschoolers-1556417648836",
    storageBucket: "worldschoolers-1556417648836.appspot.com",
    messagingSenderId: "361556651392"
  };
  firebase.initializeApp(config);
  database = firebase.database();

 

  // Input fields
  usernameInput = select('#username');
  descriptionInput = select('#description');
  locationInput = select('#location');
  fileInput = select('#file');

  // Submit button
  var submit = select('#submit');
  submit.mousePressed(sendToFirebase);
  

  // Start loading the data
  loadFirebase();
}

function loadFirebase() {
  var ref = database.ref("users");
  ref.on("value", gotData, errData);
}



function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}

// The data comes back as an object
function gotData(data) {
  var users = data.val();
  // Grab all the keys to iterate over the object
  var keys = Object.keys(users);
  

  // clear previous HTML list
  clearList();

  // Make an HTML list
  var list = createElement('ol');
  list.parent('data');

  // Loop through array
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var user = users[key];
    var li = createElement('li', user.username + ': ' + user.description + ': ' + user.location + ", key: " + key);
    li.parent(list);
    listItems.push(li);
  }
}

// Clear everything
function clearList() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].remove();
  }
}

// This is a function for sending data
function sendToFirebase() {
  var users = database.ref('users');

  // Make an object with data in it
  var data = {
    username: usernameInput.value(),
    description: descriptionInput.value(),
    location: locationInput.value()
  }

  var user = users.push(data, finished);
  console.log("Firebase generated key: " + user.key);

  // Reload the data for the page
  function finished(err) {
    if (err) {
      console.log("ooops, something went wrong.");
      console.log(err);
    } else {
      console.log('Data saved successfully');
    }
  }
}
   /*var storage = firebase.storage();
   var storage = firebase.app().storage("gs://my-custom-bucket");
   var storageRef = storage.ref();
   var imagesRef = storageRef.child('images');
   */
   
   //$( document ).ready(function() {
	   //$("#uploadButton").hide();
	   //$(".upload-group").hide();
	   document.getElementById("upload").addEventListener('change', handleFileSelect, false);
   //});
   
   function handleFileSelect(event) {
	$(".upload-group").show();
	selectedFile = event.target.files[0];
};
   
  var selectedFile;
  
   $("file").on("change", function(event) {
	   selectedFile = event.target.files[0];
	  //$("#uploadButton").show(); 
   });
   
   function uploadFile() {
	   console.log('fi',fileInput);
	   var fullPath = document.getElementById('file').value;
		var filename;
		if (fullPath) {
			var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
			filename = fullPath.substring(startIndex);
			if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
				filename = filename.substring(1);
			}
			alert(filename);
		}
	   //var filename = selectedFile.name;
	   var storageRef = firebase.storage().ref('/userProfile/' + filename);
	   var uploadTask = storageRef.put(selectedFile);
	   
	   // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
	  // Observe state change events such as progress, pause, and resume
	  // See below for more detail
  }, function(error) {
	  //Handle unsuccessful uploads
  }, function() {
	  //Handle successfuul uploads on complete
	  //For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  var postKey = firebase.database().ref('Posts/').push().key;
	  var downloadURL = uploadTask.snapshot.downloadURL;
	  var updates = {};
	  var postData = {
		  url: downloadURL,
		  caption: $("#imageCaption").val(),
		  user: user.uid
	  }
	  updates['/Posts/' + postKey]= postData;
	  firebase.database().ref().update(updates);
	  
	});
   }
   

