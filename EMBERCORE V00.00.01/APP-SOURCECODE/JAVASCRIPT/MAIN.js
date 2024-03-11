// ------------------------------------
// D:/APP-SOURCECODE/JAVASCRIPT/MAIN.js
// ------------------------------------

/*

window.onload = function() {
	// Get the divs
	var div1 = document.getElementById('Window-SplashScreen');
	var div2 = document.getElementById('Window-MainContainer');

	// Initially hide div2
	div2.style.display = 'none';

	// After 10 seconds, hide div1 and show div2
	setTimeout(function() {
		div1.style.display = 'none';
		div2.style.display = 'block';
		}, 10000); // 10000 milliseconds = 10 seconds
};

*/

// Get the div and button
var myDiv = document.getElementById('App-ContainerLeft');
var myButton = document.getElementById('MainMenu-IconBTN');

// Initially show the div
myDiv.style.display = 'block';

// Toggle the div visibility on button click
myButton.onclick = function() {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
};

/*
// Get the div and button
var myDiv = document.getElementById('SearchForm-Container');
var myButton = document.getElementById('MainMenu-SearchBTN');

// Initially show the div
myDiv.style.display = 'none';

// Toggle the div visibility on button click
myButton.onclick = function() {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
};
*/

// Get the input field
function filterFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("SearchForm-Search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("PortApps-List");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

// Get the divs and buttons
var div1 = document.getElementById('StartMenu-Wrapper1');
var div2 = document.getElementById('StartMenu-Wrapper2');
var div3 = document.getElementById('StartMenu-Wrapper3');
var button1 = document.getElementById('StartMenu-Button1');
var button2 = document.getElementById('StartMenu-Button2');
var button3 = document.getElementById('StartMenu-Button3');

// Initially hide the divs
div1.style.display = 'block';
div2.style.display = 'none';
div3.style.display = 'none';

// Show div1 and hide div2 when button1 is clicked
button1.onclick = function() {
  div1.style.display = 'block';
  div2.style.display = 'none';
  div3.style.display = 'none';
  
};

// Show div2 and hide div1 when button2 is clicked
button2.onclick = function() {
  div1.style.display = 'none';
  div2.style.display = 'block';
  div3.style.display = 'none';
};

button3.onclick = function() {
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'block';
};