//Function to run when website is loaded
$(document).ready(function () {
console.log("Ready Function Loads");
var nameArr = [];
var valuArr = [];
var alphanum = /^[0-9a-zA-Z]+$/;


	//When the Add button is pressed
	$("#add").click(function () {

		var nv = $("#nameval").val(); //Saves what was in the text box
		if(nv.length < 1) //Check to make sure something has been entered.
		{
			alert('Please enter something');
		}
		else if (nv.indexOf('=') > 0) //'nv.indexOf('=') > -1' checks where the '=' is. 
		{ 
			//This part splits the entry based on the '=' and puts it into two arrays
			var res = nv.split("=");
			nameArr.push(res[0]);
			valuArr.push(res[1]);
			console.log(nameArr, valuArr);

			//This part places those arrays into box in the HTML
			var arLen, i ,text;
			arLen = valuArr.length;

			for (i = 0; i < arLen; i++) {
    			text += "<option>" + nameArr[i] + "  " + valuArr[i] + "</option>";
			}
			document.getElementById("list1").innerHTML = text;
		}
		else //If no '=' is entered program will go here. 
		{
			alert('You need a = sign (eg. Name=Value)'); 
		}

	});

	$("#sortName").click(function () {
		//Create new array. Splice two arrays. Then sort by name.
		var sna = [];
		var arLen = nameArr.length;
		var text, i;

		for (i = 0; i < arLen; i++){
			sna[i] = nameArr[i] + "=" + valuArr[i];

		}
		
		sna.sort();
		
		for (i = 0; i < arLen; i++) {
    		text += "<option>" + sna[i] + "</option>";
		}
		document.getElementById("list1").innerHTML = text;
	});

});


