console.log("Test JavaScript");

//Function to run when website is loaded
$(document).ready(function () {
console.log("Ready Function Loads");
var nameArr = [];
var valuArr = [];


	//When the Add button is pressed
	$("#add").click(function () {

		var nv = $("#nameval").val(); //Saves what was in the text box
		if(nv.length < 1) //Check to make sure something has been entered.
		{
			alert('Please enter something');
		}
		else if (nv.indexOf('=') > 0) //'nv.indexOf('=') > -1' checks where the '=' is. 
		{ 
			var res = nv.split("=");
			nameArr.push(res[0]);
			valuArr.push(res[1]);

			console.log(nameArr, valuArr);
		}
		else //If no '=' is entered program will go here. 
		{
			alert('You need a = sign (eg. Name=Value)'); 
		}

	});

});


