
var myprofiletemplate = `


	
		
 <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit">Search &#128269;</button>
    </form>
  </div>



	<!--<div class="card">
  <img src="/w3images/team2.jpg" alt="John" style="width:100%">
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div  class="userprofile-icons"style="margin: 24px 0;">
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button class="userprofile-btn">Contact</button></p>
</div> -->


<div class="user-profile" >
	           <img src="img/europe.jpg"  class="responsive europe user-profile-img" href="region/europe.htm" > 
               <div class="user-profile-info" >
					<h2>User Name</h2>
					<div class="location-markers">
									<div class="location"><!-- laikas kada pridetas markeris-->(marker icon)las palmas de gran canaria, 28 Oct 2019</div>
									 <div id="map" style=" width:30%;
									 height:400px;
									"></div>
									<div class="location-history-dropbar ">
												<p>Location history: </p>
												<p>recent places: </p>
									<div class="all-locations"> 
												<ul>
														<li> Vilnius, 20 sep 2019</li>
														<li> London, 20 sep 2019</li>
														<li> italy, 20 sep 2019</li>
												</ul>
									</div>
									<button>showmore/less</button>
									</div>
					</div>
					
					<div class="description">
							<p>Description:<p>
							<p>Lorem ipsum dolor sit amet, consectetur adipi iki 400 simboliu</p>
					</div>
			</div>				
					<div>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-linkedin"></i></a>
						<a href="#"><i class="fa fa-facebook"></i></a>
								
					</div>


	
</div>
<div>
	<button onclick="editProfile()">Edit</button>
</div>




<script>

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  //q: "lietuva",
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("map"),mapProp);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=&callback=myMap"></script>

`;
