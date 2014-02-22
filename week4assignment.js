/**
 * @author Peterphobia
 */
//This will tell me when my page is loaded

function loadedJSON(myRecords){
console.log the "name" property of myRecords

console log statement should output Sgt. Pepper

console.log(myRecords.myRecords.name[0]);	


console.log ("Document is Loaded");	
	
}

//Set up a jquery div
var jqdiv = $("<div>");

//add record to div
$(jqdiv).html(myRecords.myRecords[0].name);


//Put jqdiv into html div
//I should see "jquery displayed"
$("#javaEndsUpHere").append(jqdiv);
//use the jquery function to get myRecords file
//get the name, function, and type of file

$.get("myRecords.json"), loadedJSON, "json"

$( document ).ready(dataLoaded);

//This will tell me that my java is being displayed
console.log("Javascript working");
