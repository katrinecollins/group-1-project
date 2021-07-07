function searchMovie(){
    var searchText=document.querySelector("#searchText").value    
    
fetch(`http://www.omdbapi.com/?apikey=803bb7b9&s=${searchText}`)
.then(function(response){
    console.log("1st response",response)
    return response.json();
})

.then(function(response){
    console.log("OMDB response",response);
    provideData(response);
    var Search = response.Search[0].Title
    return fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=${Search}`)
})

.then(function(wikiResponse) {
    return wikiResponse.json();
})

.then(function(response){
    console.log("Wikipedia Response",response);
})

}

// fetch(`http://www.omdbapi.com/?apikey=803bb7b9&s=flash`)
// .then(function(response){
//     console.log("1st response",response)
//     return response.json();
// })
// // .then(function(response){
// //     console.log("2nd response",response);
// //     provideData(response);
// // })

// .then(function(response){
//     console.log("OMDB response",response);
//     provideData(response);
//     var Search = response.Search[0].Title
//     return fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=${Search}`)
// })

// .then(function(wikiResponse) {
//     return wikiResponse.json();
// })

// .then(function(response){
//     console.log("Wikipedia Response",response);
// })

function provideData(data){
    console.log("this is the data to provide data function",data.Search[0]);
    document.querySelector("#Title").textContent=data.Search[0].Title;
    // document.querySelector("#Title").textContent=search
    document.querySelector("#Poster").src=data.Search[0].Poster;
    // document.querySelector("#Poster").textContent=search
    document.querySelector("#Year").textContent=data.Search[0].Year;
    // document.querySelector("#Year").textContent=search
}
var responseContainer=document.querySelector("#response-container")

var text = document.createElement("text");
//text.setAttribute('src', response.data[0]
var TitleNameArr =[""];
var ls=JSON.parse(localStorage.getItem("Title-list"));
var movieBtns=document.querySelector("#Title-Btns");

// if(ls) {console.log("there is no localstorage");
// }else {
//     movieNameArr.push();
// }
// function submitForm(event) {
//     event.preventDeFault();
//     console.log("submitting form");

// var movieEl =document.querySelector("movie-name");
// var movie=movieEl.value;
// console.log("movie is:", movie);
// }