var editprofiletemplate = `

<div class="user-profile" >
	           <img src="img/europe.jpg"  class="responsive europe user-profile-img" href="region/europe.htm" > 
	           <p>Upload picture</p>
<form action="/action_page.php">
  Select a file: <input type="file" name="myFile"><br><br>
 
</form>
               <div class="user-profile-info" >
					<label for="username"><b>User Name</b></label>
                   <input type="username" placeholder="Enter User Name" name="username" required>
                   
					<div class="location-markers">
									<label for="location"><b>Location</b></label>
									<input type="location" id="pac-input" placeholder="Enter Location" name="location">
									<p><button>Save</button></p>
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
									<label>
        <input type="checkbox" checked="checked" name="show/hide" style="margin-bottom:10px"> Hide recent places
      </label>
					</div>
					
					<div class="description">
							<p>Description:<p>
							<textarea rows="10" cols="50" maxlength="400">
Enter text here...</textarea>
							
					</div>
			</div>	
			
			<div class="contacts">
					<label for="sociallinks"><b>Add links</b></label>
					   <input id="twitter" type="sociallinks" placeholder="Enter Twitter link" name="sociallinks" >
					  </i><input id="linkedin" type="sociallinks" placeholder="Enter Linkedin link" name="sociallinks" >
					   </i><input id="facebook" type="sociallinks" placeholder="Enter Facebook link" name="sociallinks" >
			</div> 
			
					<form class="social-icons-input">
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-linkedin"></i></a>
						<a href="#"><i class="fa fa-facebook"></i></a>
								
					</form>
					

<p><button>Save</button></p>
							<input type="submit" value="Submit">
	
</div>




							
									
<script>
      // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=&callback=initAutocomplete"
         async defer></script>





`;
