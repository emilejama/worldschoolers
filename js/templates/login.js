
var logintemplate = `

<div class="desktop-intro">
	<div class="logo">
	<img class="logo-img" src="img/logo-vivaldi.png">
	</div>
	
	<div class="login-page-header">
	<p>Welcome to <a class="button" href="#popup1">Homeschoolers Worldwide</a>! Log in or Register your account to find like-minded people in all parts of the planet Earth!</p>
	</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h3>What's that?</h3>
		<a class="close" href="#">&times;</a>
		<div class="content">
			Homeschoolers Worldwide is a map based platform for all the homeschoolers, worldschoolers, unschoolers and traveling families as well as traveling teachers to help find each other, to create lifelong friendships and to make a homeschooling journey even more amusing and fun.<hr> This is a beta version of this app therefore more features and functionality is in development process. Stay tuned! 
		</div>
	</div>
</div>

		</div>
		<div class="desktop-login">
			
	<div id="login_div" class="main-div">
      <input class="main-div-item email-input" type="text" placeholder="Enter Email" name="email" required id="email_field">
      <input class="main-div-item pass-input" type="password" placeholder="Enter Password" name="psw" required  id="password_field">
      <button class="main-div-item login-btn" onClick="login()">Log in</button>
      <button class="main-div-item createaccount-btn" onclick="create_account()">Create a new account</button>
      <button class="main-div-item forgotpass-btn" onclick="forgot_password()">Forgot password?</button>
	</div>
	
			</div>
	
	<div id="user_div" class="loggedin-div">
		<h3>welcome user</h3>
		<p id="user_para">you are logged in</p>
		<button onClick="logout()">logout</button>
		 <button id="verify_btn" onclick="send_verification()">Send verification</button>
	</div>


`
