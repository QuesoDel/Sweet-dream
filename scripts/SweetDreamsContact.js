// This JavaScript makes a button at the top of the page that links whoever clicks on it to the direction  page on google maps.

var MyWindow;
function openpopup()
{
    MyWindow = window.open('https://www.google.com/maps/place/373+E+Brown+St,+East+Stroudsburg,+PA+18301/@40.9967311,-75.1645701,17z/data=!3m1!4b1!4m5!3m4!1s0x89c4888719938851:0x83beb382974401a!8m2!3d40.9967311!4d-75.1623814', '_blank');
}

function closepopup() {
    MyWindow.close();
}