// Initialize Firebase
  var config = {
    apiKey: "",
    authDomain: "worldschoolers-1556417648836.firebaseapp.com",
    databaseURL: "https://worldschoolers-1556417648836.firebaseio.com",
    projectId: "worldschoolers-1556417648836",
    storageBucket: "worldschoolers-1556417648836.appspot.com",
    messagingSenderId: "361556651392"
  };
  firebase.initializeApp(config);



//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//
document.getElementById('registrationform').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;
  
   //Show Alert Message
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);
  
  //Form Reset After Submission
  document.getElementById('registrationform').reset();


//send message values
  sendMessage(name, email, password, bio, job, interest);

}



//Send Message to Firebase(4)
function sendMessage(name, email, password, bio, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  });
}
