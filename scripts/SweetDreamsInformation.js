//This is a simple slideshow we have to show the patients what the bedrooms look like on the aside under Bedroom
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "images/BedroomTwoPic1.jpg";
images[1] = "images/BedroomThreePic1.jpg";
images[2] = "images/BedroomOnePic1.jpg";
images[3] = "images/BedroomThreePic2.jpg";
         
// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;