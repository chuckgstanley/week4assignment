/**
 * @author Peterphobia
 */
//This will tell me when my page is loaded
function dataLoaded(){
console.log ("Document is Loaded");	
	
}

//Set up a jquery div
var jqdiv = $("<div>");

//This lets me know that I can see the text in my jquery div
$(jqdiv).html("Jquery Displayed.");


//Put jqdiv into html div
//I should see "jquery displayed"
$("#javaEndsUpHere").append(jqdiv);


$( document ).ready(dataLoaded);

//This will tell me that my java is being displayed
console.log("Javascript working");
