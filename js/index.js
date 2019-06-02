//var mainText = document.getElementById("mainText");
//var submitBtn = document.getElementById("submitBtn");

//function submitClick() {
	
	//var firebaseRef = firebase.database().ref();
	
//	var messageText = mainText.value;
	
//	firebaseRef.push().set(messageText);
	
//}


var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    
    var user = firebase.auth().currentUser;

	if(user != null){
		
		var email_id =user.email;
		var email_verified = user.emailVerified;
		
	if(email_verified){
		document.getElementById("verify_btn").style.display = "none";
	} else {
		
		document.getElementById("verify_btn").style.display = "block";
	}
		
		document.getElementById("user_para").innerHTML = "Welcome : " + email_id + 
															"<br/> Verified : " + email_verified;
		
	}
    
  } else {
    // No user is signed in.
     document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block"; //can be initial insted of block
    
  }
});


function login(){
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  
	  window.alert("Error : " + errorMessage);
	  
	  // ...
	});

}

firebase.auth().onAuthStateChanged(user => {
  if(user) {
	  console.log(user);
				var user = firebase.auth().currentUser;
		var name, email, photoUrl, emailVerified;

		if (user != null) {
//		  name = user.displayName;
		  email = user.email;
	//	  photoUrl = user.photoURL;
	//	  emailVerified = user.emailVerified;
		  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
						   // this value to authenticate with your backend server, if
						   // you have one. Use User.getToken() instead.
						   console.log('aaaa',email)
						   
				
		document.getElementById("profilius").innerHTML = myprofiletemplate;
		console.log('spelioju');
		document.getElementById("profilius").style.display = "block";
		console.log('spelioju');
			   
//console.log('kviechia,',uid);
//writeUserData(uid, "name", "email", "imageUrl");
		}
    //window.location = 'index.html'; //After successful login, user will be redirected to home.html
  }
});

function create_account() {
	
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
		
		
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  
	  window.alert("Error : " + errorMessage);
	  
	  // ...
	}).then(function(){
		document.getElementById("profilius").style.display = "block";
		console.log('spelioju');
	});	
}
	

// re-autentification nesigauna, jei antra karta noriu keist passworda laiskas buna su nuoroda, kuri sako, kad jau panaudota.

function forgot_password(){


	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	
	var auth = firebase.auth();
	var emailAddress = document.getElementById("email_field").value;

	auth.sendPasswordResetEmail(emailAddress).then(function() {
	// Email sent.
		window.alert('Email Sent');
	}).catch(function(error) {
	// An error happened.
		var errorCode = error.code;
		var errorMessage = error.message;
		if(errorCode =="auth/invalid-email") {
			alert(errorMessage);
		} else if (errorCode == "auth/user-not-found") {
			alert(errorMessage);
			
		}
		console.log(error);
	});

	
}

//bandau padaryt fckin google login


var provider = new firebase.auth.FacebookAuthProvider();
var provider = new firebase.auth.TwitterAuthProvider();

function googleLogin() {
	
	provider = new firebase.auth.GoogleAuthProvider();
	
	firebase.auth().signInWithPopup(provider).then(function(result) {
  console.log(result)
  console.log("success")
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  console.log(error)
  console.log("failed")
  var errorCode = error.code;
  var errorMessage = error.message;
  
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});


function logout(){
	
	firebase.auth().signOut();

	document.getElementById("profilius").innerHTML = "tests";
		console.log('spelioju');
		document.getElementById("profilius").style.display = "none";
		console.log('spelioju');
}

function send_verification() {
	
	var user = firebase.auth().currentUser;

	user.sendEmailVerification().then(function() {
	  // Email sent.
	  window.alert("Verification sent")
	}).catch(function(error) {
	  // An error happened.
	   window.alert(" Error : " + error.message);
	});

	
}
	



///////////////BANDAU GAUT USERIO PROFILI


// Get a reference to the database service

var initialInput; 
var submitButton;
var database; 



function setup() {
	initialInput = createInput('initials');
	submitButton = createButton('submit');
	submitButton.mousePressed('submitScore')
	
}

//function submitScore() {
	//var data = {
		//initials = initialInput.value(),
		//score: score
		
	//}
	
//var ref = database.ref('scores');
 
 //ref.push(data);


/*function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    address: name,
    email: email,
    picture : imageUrl
  });
}*/
/////////////edit profile
function editProfile() {
  document.getElementById("edit-profile").innerHTML = editprofiletemplate;
  console.log('spelioju');
  document.getElementById("edit-profile").style.display = "block";
  console.log('spelioju');
}


