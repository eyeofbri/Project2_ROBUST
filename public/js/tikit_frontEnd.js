


var debugging = true;



window.onload = function() {
	console.log("(◕_◕) Hello World!");

	// closeAll_NavModules();

	Initialize();
};




function Initialize() {

	if(debugging)
	{console.log("frontEnd INITIALIZING...");}



	//load up the UI interactions for....


	//NAV & NAV MODULES


	//...open modules - with li a links
	var t = document.querySelector(".topnav");
	var tl = t.children;
	for (var tl_i = 0; tl_i < tl.length; tl_i++) {
	  	tl[tl_i].firstChild.addEventListener('click', function(event) {
			
			var name = event.target.innerHTML.toLowerCase();

			if(name == "settings" 
			|| name == "search" 
			|| name == "sort"){ name = name+"-holder"; }

			if(name == "new task"){ name = "newTask-holder"; }

			if(name != ""
			&& event.target.className != "active"){
				closeAll_NavModules();
				event.target.className = "active";
				document.querySelector("."+name).className=name;
			}

		});
	}

	//...close modules - with X button
	var x = document.querySelectorAll(".nav-close");
	for (x_i = 0; x_i < x.length; x_i++) {
		x[x_i].addEventListener('click', function(event) {
			var x_parentModule = event.target.parentNode;

			var x_parentName = x_parentModule.className.split( )[0];

			if(debugging)
			{console.log(x_parentName +" closed with x button");}

			x_parentModule.className = x_parentName+ " hide";

			//reset top nav button's active status
			var x_parentName = x_parentName.split("-")[0];
			if(x_parentName == "newTask"){ x_parentName = "new task"; }
			x_parentName = x_parentName.toUpperCase();

			var t = document.querySelector(".topnav");
			var tl = t.children;
			for (var tl_i = 1; tl_i < tl.length; tl_i++) {
				if(tl[tl_i].firstChild.innerHTML == x_parentName){
					tl[tl_i].firstChild.className = null;
				}
			}

		});
	}



	if(debugging)
	{console.log("frontEnd INITIALIZED!!!");}
}





function closeAll_NavModules() {
	// close all nav modules
	var a = document.querySelectorAll("aside");
	for (a_i = 0; a_i < a.length; a_i++) {
		var a_name = a[a_i].className.split( )[0];
		a[a_i].className = a_name+ " hide";
	}

	//reset all nav buttons, except #1
	var t = document.querySelector(".topnav");
	var tl = t.children;
	for (var tl_i = 1; tl_i < tl.length; tl_i++) {
		tl[tl_i].firstChild.className = null;
	}

	if(debugging)
	{console.log("All Nav Modules Closed!");}
}





function UI_Btn(toggle, more) {

	if(!more)
	openClose(toggle.parentNode, 1);

	if(more == "outer")
	openClose(  toggle.parentNode.parentNode, 1);
	
	if(more == "inner")
	openClose( toggle.parentNode.parentNode.parentNode, 1);

	if(more == "draw")
	openClose(toggle, 2);

}

// sets an element style to open
function openClose(element, version) {
	var toggleName = element.className;
	var status;

	if(version == 1){
		status = getReverse(toggleName.split("-")[2]);

		toggleName = 
			toggleName.split("-")[0]
			+"-"+toggleName.split("-")[1]
			+ status;
	}
	if(version == 2){
		status = getReverse(toggleName.split("-")[1]);

		toggleName = 
			toggleName.split("-")[0]
			+ status;
	}

	element.className = toggleName;

	if(debugging)
	console.log(toggleName);
}

function getReverse(argument) {
	if(argument == "open"){ 
		argument = "-closed";}
	else{ argument = "-open";}
	return argument;
}




// This is a log testing function
function LogTest(argument) {
	var maybe = "";
	if(argument){maybe = ": "+ argument; }
	console.log("TEST_LOG"+ maybe);
}