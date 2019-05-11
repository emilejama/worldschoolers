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
    window.location = 'index.html'; //After successful login, user will be redirected to home.html
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
	
	
	
