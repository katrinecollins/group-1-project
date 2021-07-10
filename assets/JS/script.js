var historySearch =[]
if(localStorage.getItem("Movie History")){
    historySearch=JSON.parse(localStorage.getItem("Movie History"))
}

function searchMovie(){
    var searchText=document.querySelector("#searchText").value    
    historySearch.push(searchText)
    localStorage.setItem("Movie History", JSON.stringify(historySearch));

fetch(`http://www.omdbapi.com/?apikey=803bb7b9&s=${searchText}`)
.then(function(response){
    console.log("1st response",response)
    return response.json();
})

.then(function(response){
    console.log("OMDB response",response);
    provideData(response);
    console.log(searchText);
    // var Search = response.Search[0].Title
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=e03d31621bcab7d9194f6a08d1399d8f&language=en-US&query=${searchText}`)
})
.then(function(themoviedbResponse) {
    return themoviedbResponse.json();
})

.then(function(response){
    console.log("themoviedb Response",response);
    generateData(response);
    console.log(searchText);
})

function provideData(data){
    console.log("this is the data to provide data function",data.Search[0]);
    document.querySelector("#Title").textContent=data.Search[0].Title;
    document.querySelector("#Poster").src=data.Search[0].Poster;
    document.querySelector("#Year").textContent=data.Search[0].Year; 
}
function generateData(data){
    console.log("This is the data from generate data function",data.results[0]);
    console.log("This is the data from generate data function",data.results[0].poster_path);
    document.querySelector("#overview").textContent=data.results[0].overview;
    document.querySelector("#release_date").textContent=data.results[0].release_date;
    document.querySelector("#popularity").textContent=data.results[0].popularity;
    document.querySelector("#vote_count").textContent=data.results[0].vote_count;
    document.querySelector("#poster_path").src=`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
    document.querySelector("#original_title").textContent=data.results[0].original_title;
}
// var responseContainer=document.querySelector("#response-container")

// var text = document.createElement("text");
// //text.setAttribute('src', response.data[0]
// var TitleNameArr =[""];
// var ls=JSON.parse(localStorage.getItem("Title-list"));
// var movieBtns=document.querySelector("#Title-Btns");

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
}