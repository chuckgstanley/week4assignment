/**
 * @author Peterphobia
 */
//this will be the function to bring myRecords in
function beginJSON(jsonData){
	console.log(jsonData);
	
	
}
//This will tell me when my page is loaded
function dataLoaded(){

//create a json div
var jqdiv = $("<div>");
$(jqdiv).html("this is my jQuery div.");
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
