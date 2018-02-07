$(document).ready(function() { 
	$('#fullpage').fullpage({
    	navigation: true,
    });
		// Initialize Firebase
		// var config = {
		// apiKey: "AIzaSyD4yXeThDS8mZawlH8WV30Y6G_zWFoE_5k",
		// authDomain: "group-project-1-4003d.firebaseapp.com",
		// databaseURL: "https://group-project-1-4003d.firebaseio.com",
		// projectId: "group-project-1-4003d",
		// storageBucket: "group-project-1-4003d.appspot.com",
		// messagingSenderId: "801684537187"
		// };
		// firebase.initializeApp(config);

		// var roverPhotosURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&page=1&api_key=NmKeMjPtnfZwr62CCkpaHzcy3OVNrb1v0Wi9RB1M";

		// $.ajax({
		// 	url: roverPhotosURL,
		// 	method: "GET"
		// }).then(function(response) {
		// 	console.log(response);
		// 	for (var i = 0; i < response.photos.length; i++) {
		// 		var pictureURL = response.photos[i].img_src;
		// 		// console.log(pictureURL)
		// 		var roverImage = $("<img>").attr("src", pictureURL);
		// 		// $("#map").append(roverImage);
		// 		}
		// })

		var map;
		var issNowURL = "http://api.open-notify.org/iss-now.json";
		// var markerImage = "<img src='spaceship.png'/>"

		function getCoords() {

			$.ajax({    
				url: issNowURL,
				method: "GET"
			}).then(function(response) {
				console.log(response);
				const latitude = parseFloat(response.iss_position.latitude)
				const long = parseFloat(response.iss_position.longitude)
				console.log(latitude)
				console.log(long)
				var newUluru = {lat: latitude, lng: long};
				var markerImage = "https://cdn1.iconfinder.com/data/icons/all_google_icons_symbols_by_carlosjj-du/35/spaceship.png"
				var newMarker = new google.maps.Marker({
					position: newUluru,
					map: map,
					icon: markerImage
				});
				$("#latBox").html("Current Latitude and Longitude that the ISS is above. <br> Latitude: " + latitude + ", Longitude: " + long);
			})
		}

		setInterval(getCoords, 3000)

		function initMap() {
			$.ajax({    
				url: issNowURL,
				method: "GET"
			}).then(function(response) {
				console.log(response);
				const latitude = parseFloat(response.iss_position.latitude)
				const long = parseFloat(response.iss_position.longitude)
				console.log(latitude)
				console.log(long)
				// initMap(latitude, long)
				var uluru = {lat: latitude, lng: long};
				map = new google.maps.Map(document.getElementById('map'), {
					zoom: 5,
					mapTypeId: 'satellite',
					center: uluru
				});
				var markerImage = "https://cdn1.iconfinder.com/data/icons/all_google_icons_symbols_by_carlosjj-du/35/spaceship.png"
				var marker = new google.maps.Marker({
					position: uluru,
					map: map,
					icon: markerImage
				});
				$("#latBox").html("Current Latitude and Longitude that the ISS is above. <br> Latitude: " + latitude + ", Longitude: " + long);
			})
		}

		initMap()

		var inSpaceURL = "http://api.open-notify.org/astros.json";

		$.ajax({
		  url: inSpaceURL,
		  method: "GET"
		}).then(function(response) {
		  	console.log(response);
		  	var numOfPeople = response.number;
		  	$("#issText1").text("The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component launched into orbit in 1998, the last pressurised module was fitted in 2011, and the station is expected to be used until 2028. Development and assembly of the station continues, with components scheduled for launch in 2018 and 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised modules, external trusses, solar arrays, and other components. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.")
			$("#issText2").text("The ISS serves as a microgravity and space environment research laboratory in which crew members conduct experiments in biology, human biology, physics, astronomy, meteorology, and other fields. The station is suited for the testing of spacecraft systems and equipment required for missions to the Moon and Mars. The ISS maintains an orbit with an altitude of between 330 and 435 km (205 and 270 mi) by means of reboost manoeuvres using the engines of the Zvezda module or visiting spacecraft. It completes 15.54 orbits per day. There are currently " + numOfPeople + " people aboard the station.")
		})

		var api_key = "xY06mF2u9EK3PyQ1DVmfelmYhIuDhNmePy05t9kn"

      	var nasaURL = "https://api.nasa.gov/planetary/apod?api_key=" + api_key;

      	$.ajax({    
        	url: nasaURL,
        	method: "GET"
      	}).then(function(response) {
          	console.log(response);
          	var nasaHeader = $("<h2 id='apodHeader'>Today's Astronomy Picture of the Day</h2>");
          	var nasaTitle = $("<div>" + response.title + "</div>");
          	var nasaImage = $("<img src='" + response.url + "' width=500px height=500px id='apodImage'>");
          	$("#nasaHeader").append(nasaHeader)
          	$("#nasaText").text(response.explanation);
          	$("#nasaInfo").append(nasaTitle, nasaImage);
          	
      	})
	
})