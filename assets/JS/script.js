var SearchTerm=document.querySelector("#searchTerm").value
fetch(`http://www.omdbapi.com/?apikey=803bb7b9&s=flash`)
.then(function(response){
    console.log("1st respone",response)
    return response.json();
})
.then(function(response){
    console.log("2nd response",response);
})
var responseContainer=document.querySelector("#response-container")

var text = document.createElement("text");
//text.setAttribute('src', response.data[0]