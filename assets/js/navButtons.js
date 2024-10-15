//Buttons
//Grabbing trigger items
const backButton = document.getElementById('back-scroller');
const nextButton = document.getElementById('forward-scroller');
const workButton = document.getElementById('work-button');
const panels = document.querySelectorAll('.panel');

//Function describing back button
function previousPanel(e) {
	//Determine location
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			//Find this panle
			var thisPanel = panels[i].id;
			//Find previous panel
			var previousPanel = panels[i-1].id;
		}
	}
	//Pull the switch
	panels.forEach(panel => panel.classList.add('inactive'));
	if(previousPanel === "home") {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(previousPanel).style.display = "flex";
		document.getElementById(previousPanel).classList.toggle('inactive');
	} else {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(previousPanel).style.display = "block";
		document.getElementById(previousPanel).classList.toggle('inactive');
	}
	//Set the navArrow
	if(previousPanel === "table-of-contents" || previousPanel === "foreword" || 
		previousPanel === "work1" || previousPanel === "work2" || previousPanel === "refrain" || previousPanel === "conclusion") {
			document.getElementById('contact-icon').classList.remove('active');
			document.getElementById('contents-icon').classList.add('active');
	} else {
		document.getElementById('contents-icon').classList.remove('active');
		document.getElementById('home-icon').classList.add('active');
	}
}

//Function describing forward button
function advancePanel(e) {
	//Determine location
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			//Find this panel
			var thisPanel = panels[i].id;
			//Find next panel
			var nextPanel = panels[i+1].id;
		}
	}
	//Pull the switch
	panels.forEach(panel => panel.classList.add('inactive'));
	if(nextPanel === "contact") {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(nextPanel).style.display = "block";
		document.getElementById(nextPanel).classList.toggle('inactive');
	} else {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(nextPanel).style.display = "block";
		document.getElementById(nextPanel).classList.toggle('inactive');
	}
	//Set the navArrow
	if(nextPanel === "table-of-contents" || nextPanel === "foreword" || 
		nextPanel === "work1" || nextPanel === "work2" || nextPanel === "refrain" || nextPanel === "conclusion") {
			document.getElementById('home-icon').classList.remove('active');
			document.getElementById('contents-icon').classList.add('active');
	} else {
		document.getElementById('contents-icon').classList.remove('active');
		document.getElementById('contact-icon').classList.add('active');
	}
}

//Function describng homepage forward button and moving the hash with the button
function landingPageHashChange(e) {
	window.scroll({
		top: 0, behavior: "smooth",
	});
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			var thisPanel = panels[i].id;
			var nextPanel = panels[i+1].id;			
		}
	}
	panels.forEach(panel => panel.classList.add('inactive'));
	document.getElementById(thisPanel).style.display = "none";
	document.getElementById(nextPanel).style.display = "block";
	document.getElementById(nextPanel).classList.toggle('inactive');
	document.getElementById('home-icon').classList.remove('active');
	document.getElementById('contents-icon').classList.add('active');
}

//Triggering your nav functions
backButton.addEventListener('click', previousPanel);
nextButton.addEventListener('click', advancePanel);
workButton.addEventListener('click', landingPageHashChange);


//Table of Contents navigation
const contentLinks = document.querySelectorAll('.content-link');

function openPanel(e) {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	if(this.id === "foreword-link") {
		document.getElementById("table-of-contents").style.display = "none";
		document.getElementById("foreword").style.display = "block";
	}
	if(this.id === "work1-link") {
		document.getElementById("table-of-contents").style.display = "none";
		document.getElementById("work1").style.display = "block";
	}
	if(this.id === "refrain-link") {
		document.getElementById("table-of-contents").style.display = "none";
		document.getElementById("refrain").style.display = "block";
	}
	if(this.id === "work2-link") {
		document.getElementById("table-of-contents").style.display = "none";
		document.getElementById("work2").style.display = "block";
	}
	if(this.id === "conclusion-link") {
		document.getElementById("table-of-contents").style.display = "none";
		document.getElementById("conclusion").style.display = "block";
	}
}

contentLinks.forEach(contentLink => contentLink.addEventListener('click', openPanel));



// Back to top hidden button
// Get the button
const previousButton = document.getElementById("previous-button");
const myButton = document.getElementById("top-button");
const forwardButton = document.getElementById("forward-button");
				
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
	scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
	previousButton.style.display = "flex";
	myButton.style.display = "flex";
	forwardButton.style.display = "flex";
  } else {
	previousButton.style.display = "none";
	myButton.style.display = "none";
	forwardButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
//Scroll to top button
myButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
};



//Goback a panel and scroll to top button
previousButton.onclick = () => {
	//Determine location
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			//Find this panle
			var thisPanel = panels[i].id;
			//Find previous panel
			var previousPanel = panels[i-1].id;
		}
	}
	//Pull the switch
	panels.forEach(panel => panel.classList.add('inactive'));
	if(previousPanel === "home") {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(previousPanel).style.display = "flex";
		document.getElementById(previousPanel).classList.toggle('inactive');
	} else {
		document.getElementById(thisPanel).style.display = "none";
		document.getElementById(previousPanel).style.display = "block";
		document.getElementById(previousPanel).classList.toggle('inactive');
	}
	//Set the navArrow
	if(previousPanel === "table-of-contents" || previousPanel === "foreword" || 
		previousPanel === "work1" || previousPanel === "work2" || previousPanel === "refrain" || previousPanel === "conclusion") {
			document.getElementById('contact-icon').classList.remove('active');
			document.getElementById('contents-icon').classList.add('active');
	} else {
		document.getElementById('contents-icon').classList.remove('active');
		document.getElementById('home-icon').classList.add('active');
	}
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
};



//Go forward a panel and scroll top top button
forwardButton.onclick = () => {
	//Determine location
	for(i=0; i<panels.length; i++) {
		if(!panels[i].classList.contains('inactive')) {
			//Find this panel
			var thisPanel = panels[i].id;
			//Find next panel
			var nextPanel = panels[i+1].id;
		}
	}
	//Pull the switch
	panels.forEach(panel => panel.classList.add('inactive'));
	document.getElementById(thisPanel).style.display = "none";
	document.getElementById(nextPanel).style.display = "block";
	document.getElementById(nextPanel).classList.toggle('inactive');
	//Set the navArrow
	if(nextPanel === "table-of-contents" || nextPanel === "foreword" || nextPanel === "work1" || 
		nextPanel === "work2" || nextPanel === "refrain" || nextPanel === "conclusion") {
			document.getElementById('home-icon').classList.remove('active');
			document.getElementById('contents-icon').classList.add('active');
	} else {
		document.getElementById('contents-icon').classList.remove('active');
		document.getElementById('contact-icon').classList.add('active');
	}
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
};