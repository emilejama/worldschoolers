//var mainText = document.getElementById("mainText");
//var submitBtn = document.getElementById("submitBtn");

//function submitClick() {
	
	//var firebaseRef = firebase.database().ref();
	
//	var messageText = mainText.value;
	
//	firebaseRef.push().set(messageText);
	
//}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    
    var user = firebase.auth().currentUser;

	if(user != null){
		
		var email_id =user.email;
		var email_verified = user.emailVerified;
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

	function create_account() {
		
		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;
		
		
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  
	  window.alert("Error : " + errorMessage);
	  
	  // ...
	});
		
	}

	function logout(){
		
		firebase.auth().signOut();

		
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
