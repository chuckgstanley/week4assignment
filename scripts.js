/**
 * @author Peterphobia
 */
//this will be the function to bring myRecords in
function beginJSON(jsonData){
	//I should be able to find myRecords in console log
	console.log(jsonData);
	//This will be a div for my records
	var myRecordsDiv = $("<div>");
	//add the records to div
	$(myRecordsDiv).html(jsonData.Records[0].name);
	//put the div in my html page div
	$("#jsonGoesHere").append(myRecordsDiv);
	
}
//This will tell me when my page is loaded
function dataLoaded(){

//create a json div
var jqdiv = $("<div>");
//Let me know that this is my jquery div
$(jqdiv).html("jquery div");
//put the div in html file
$("#jsonGoesHere").append(jqdiv);
//this shows my doc is loaded, my function is working and 
//script is going to my html page
console.log ("Document is Loaded");
	
}


//use the jquery function to get myRecords file
//get the name, function, and type of file
$.get("myRecords.json", beginJSON, "json" )

$(document).ready(dataLoaded);


//This will tell me that my java is being displayed
console.log("Javascript working");
