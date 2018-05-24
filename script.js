function initMap() {
	// Map options
	var options = {
		zoom: 11,
		center: {
			lat: 40.686001,
			lng: -73.915744
		}
	}

	// New map
	var map = new google.maps.Map(document.getElementById('map'), options);



	/*
	// Add marker
	var marker = new google.maps.Marker({
	  position:{lat:42.4668,lng:-70.9495},
	  map:map,
	  icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});

	var infoWindow = new google.maps.InfoWindow({
	  content:'<h3>Lynn MA</h1>'
	});

	marker.addListener('click', function(){
	  infoWindow.open(map, marker);
	});
	*/

	// Array of markers
	var markers = [{
			coords: {
				lat: 40.599735,
				lng: -73.995826
			},
			content: '<h3>8705 Bay Parkway</h3><p>Daniel Wong, 62, fell from a makeshift scaffold according to the Department of Investigations.</p>'
      },
		{
			coords: {
				lat: 40.710625,
				lng: -73.951708
			},
			content: '<h3>391 Hooper Street</h3><p>An unnamed construction worker went into cardiac arrest after being struck in the head by a beam.</p>'
      },
		{
			coords: {
				lat: 40.711243,
				lng: -73.945567
			},
			content: '<h3>223 Manhattan Avenue</h3><p>Worker Roberto Mital reportedly fainted from heat exhaustion and was taken to the hospital where he later succumbed to his injuries, including blunt force trauma to the torso. An DOH investigation is still ongoing.</p>'
	      },
		{
			coords: {
				lat: 40.746074,
				lng: -73.982294
			},
			content: '<h3>2 Park Avenue</h3><p>A worker was exposed to a high voltage electrical conduit and was taken to the hospital where they later succumbed to their injuries.</p>'
						},
		{
			coords: {
				lat: 40.760640,
				lng: -73.983912
			},
			content: '<h3>1604 Broadway</h3><p>Jose Cruz, 59 fell from an I-beam on the second floor.</p>'
				},
		{
			coords: {
				lat: 40.754243,
				lng: -73.995221
			},
			content: '<h3>400 W 35th Street</h3><p>Roger Vail, 62 reportedly fell ten stories after a makeshift platform he was working on collapsed on the 16th floor.</p>'
						},
		{
			coords: {
				lat: 40.730281,
				lng: -73.864663
			},
			content: '<h3>62-98 Saunders Street</h3><p>John Davie, 26, fell six stories out of a window where he later succumbed to his injuries at the scene.</p>'
						},
		{
			coords: {
				lat: 40.705059,
				lng: -73.804736
			},
			content: '<h3>150-13 89 Avenue</h3><p>Edgar Pazmino, 34, died at the scene after an accident involving a forklift.</p>'
						},
		{
			coords: {
				lat: 40.752920,
				lng: -73.996510
			},
			content: '<h3>400 W 33rd Street</h3><p>The Site Safety Manager reported that two electricians were involved in an accident in a manlift. One of the workers died at the scene, the other was taken to the hospital with serious injuries.</p>'
						},
		{
			coords: {
				lat: 40.740919,
				lng: -73.984340
			},
			content: '<h3>111 E 24th Street</h3><p>Ju Cong Wu, 33, fell nine stories in an elevator shaft where he died at the scene.</p>'
						},
		{
			coords: {
				lat: 40.705710,
				lng: -74.004217
			},
			content: '<h3>161 Maiden Lane</h3><p>Juan Chonillo, 43, died at the scene after falling 27 stories from the luxury highrise construction site.</p>'
						},
		{
			coords: {
				lat: 40.745845,
				lng: -73.985740
			},
			content: '<h3>281 5th Avenue</h3><p>Jonathan Lupinsky, 22, fell two stories down an elevator shaft after the platform he was working on collapsed.</p>'
						},
	];

	// Loop through markers
	for (var i = 0; i < markers.length; i++) {
		// Add marker
		addMarker(markers[i]);
	}

	// Add Marker Function
	function addMarker(props) {
		var marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			//icon:props.iconImage
		});

		// Check for customicon
		if (props.iconImage) {
			// Set icon image
			marker.setIcon(props.iconImage);
		}

		// Check content
		if (props.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: props.content
			});

			marker.addListener('click', function () {
				infoWindow.open(map, marker);
			});
		}
	}
}