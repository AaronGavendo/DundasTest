//Function to run when website is loaded
$(document).ready(function () {
var nameArr = [];
var valuArr = [];
var alphanum = /^[0-9a-zA-Z]+$/;
var selectedOption = 7;



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

			//This part places those arrays into box in the HTML
			var arLen, i ,text;
			arLen = valuArr.length;

			for (i = 0; i < arLen; i++) {
				text += "<option id=\"option" + i +  "\">" + nameArr[i] + "=" + valuArr[i] + "</option>";
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

	$("#sortVal").click(function () {
		//1. Create Need variables
		var sva = [];
		var newNameArr = [];
		var newValuArr = [];
		var arLen = nameArr.length;
		var text, res, i, j, k;

		//2. Combine Arrays so that Value is in the front of the new array.
		for (i = 0; i < arLen; i++){
			sva[i] = valuArr[i] + "=" + nameArr[i];
		}

		//3. Sort new array.
		sva.sort();

		//4. Break down new array
		for (j = 0; j < arLen; j++){
			res = sva[j].split("=");
			newNameArr.push(res[0]);
			newValuArr.push(res[1]);

		}

		//5. Put new array on the screen.
		for (k = 0; k < arLen; k++) {
    		text += "<option>" + newValuArr[k] + "=" + newNameArr[k] + "</option>";
		}
		document.getElementById("list1").innerHTML = text;	
	});

	$("#delete").click(function () {

		//$("#option0").remove(); //Removes first entry

		var text, i, j; 
		var deleteArr = [];
		var arLen = nameArr.length;


		for (i = 0; i < arLen; i++){
			deleteArr[i] = nameArr[i] + "=" + valuArr[i];
			console.log(deleteArr[i]);
		}

		var index = deleteArr.indexOf($("#list1").val()); //Get selected value as store in index

		console.log(index);

		deleteArr.splice(0, 1);

		for (j = 0; j < arLen; j++) {
			text += "<option id=\"option" + j +  "\">" + deleteArr[j] + "</option>";
		}
		document.getElementById("list1").innerHTML = text;

	});

	//This function is used to get the option number from the clicked item.
	$("#list1").click(function () {
		var i;
		var arLen = valuArr.length;
		var arOptions = [];
		//Get the value of what's written in the option
		var selectedValue = $("#list1").val();
		//Combine values to get the options on the screen
		for (i = 0; i < arLen; i++){
			arOptions[i] = "\"" + nameArr[i] + "=" + valuArr[i] + "\"";
		}
		
		//Search the array to find out the matching strings position
		//If not match is found it will be '-1'
		//If there are more than one entry of the same Name=Value, expect an error for now.
		selectedOption = arOptions.indexOf("\"" + selectedValue + "\"");

		console.log("Selected Value: " + selectedValue);
		console.log(selectedOption);

	});
});


