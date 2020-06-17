var select = document.querySelector("select");
 var input = document.querySelector(".text");
var button = document.querySelector("button");

//var options = document.getElementsByTagName("option")[0];
//var place = document.getElementById("place");
//var result = place.options[place.selectedIndex].value;
var document;
var console;
var $;
var value,input,requestedValue,url;
const triggered=[];


function dataSelect()
{
	var d=document.getElementById('datalist1');
	var displayText=d.options[d.selectedIndex].text;
	document.getElementById("txtvalue").value=displayText;
}

function myFunction(){
    input=document.querySelector("#txtvalue").value;
	var d=document.getElementById('datalist1');
	value=d.options[d.selectedIndex].value;	
	triggered.push(value);
	requestedValue=triggered.pop();	
	url="http://node.uttarakhandtraveller.com/places/"+requestedValue;
    console.log(url);
    
    if(input===undefined){
        alert("Sorry :(");
    }
}



button.addEventListener("click",function(){
    var newP = myFunction();
     
    
});

//function findplace(newp){
//    for(var i = 0; i < 43 ;i++ ){
//        
//    }
//}
var land = document.querySelector(".land");
$(land).hide();
var about = document.querySelector(".sbout");
$(about).show();


    console.log("reached");
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		var posts = JSON.parse(xhr.responseText);
		// Runs when the request is successful
		var detailr = posts.place.detail;
        var image = posts.place.image;
        var name = posts.place.name;
        $("h4").text(name);
		$("#para").text(detailr);
        $("#img").attr('src',image);
		console.log(posts.place.detail);
	} else {
		// Runs when it's not
		console.log(JSON.parse(xhr.responseText));
	}

};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL

function apiCall(){
xhr.open('GET', url);
xhr.send();

var land = document.querySelector(".land");
$(land).show();
var about = document.querySelector(".sbout");
$(about).hide();
    
$(input).keyup(function(){
    $(select).show();
});
$(select).hide();
}





$(input).keyup(function(){
    $(select).show();
});
$(select).hide();
