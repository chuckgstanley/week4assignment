/**
 * @author Peterphobia
 */
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

//Set up a jquery div



//Put jqdiv into html div
//I should see "jquery displayed"

//use the jquery function to get myRecords file
//get the name, function, and type of file


$(document).ready(dataLoaded);


//This will tell me that my java is being displayed
console.log("Javascript working");
