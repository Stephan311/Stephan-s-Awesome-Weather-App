var searchFormEl = document.querySelector("#user-form");

//prevents page from refreshing on button click
$("#user-form").submit(function (e) {
    e.preventDefault();
});

//weather results appear when button is clicked
function grabformSubmission() {
    console.log("hi");
    $(".weather").removeClass("hidden");
    var userInput = document.querySelector("#city").value;
    console.log(userInput);
    localStorage.setItem("Cityname", userInput);

    //gets weather icon from API
var Citystring1 = "http://api.openweathermap.org/data/2.5/forecast?q="
var Citystring3 = "&units=metric&appid=321743875c786c01219980579e46cc93"
var Citystring2 = localStorage.getItem("Cityname");
var Foo;
//inserts city into the area of the link so the city appears that is searched for
Foo = Citystring1 + Citystring2 + Citystring3;
console.log(Foo);
// debugger;
//$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Ottawa&units=metric&appid=321743875c786c01219980579e46cc93", function (data) {
$.getJSON(Citystring1 + Citystring2 + Citystring3, function (data) {
        console.log(data);

    // var weathericon = "http://openweathermap.org/img/w/" + data.list.main[0].icon + ".png";
    // //gets tempreture. math.floor takes decimal away from tempreture
    // var temp = Math.floor(data.list.temp);
    // //gets weather desecription
    // var weather = data.list[0].main;

    //weather icon displays inside its Div
    // $('.icon').attr('src', weathericon);
    // $(".temp").append(temp);
    // $(".weather").append(weather);

    //5 day forecast gets appeneded into each div block
    //variables for each (day 1 start)
    //day 1
    var date = data.list[0].dt_txt;
    console.log(date);
    var temp = data.list[0].main.temp;
    console.log(temp);
    var humid = data.list[0].main.humidity;
    console.log(humid);
    var weathericon = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
    console.log(weathericon);
    $('.icon').attr('src', weathericon);
    $('.temp').append(temp);
    $('.humidity').append(humid);



});
}

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Ottawa&units=metric&appid=321743875c786c01219980579e46cc93", function(Hi){
    console.log(Hi);
})






// //gets weather icon from API
// var Citystring1 = "https://api.openweathermap.org/data/2.5/weather?q="
// var Citystring3 = "&units=metric&appid=e7dc909ed8628bd75234061d0f993d99"
// var Citystring2 = localStorage.getItem("Cityname");
// var Foo;
// Foo = Citystring1 + Citystring2 + Citystring3;
// console.log(Foo);
// debugger;
// //$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Ottawa&units=metric&appid=e7dc909ed8628bd75234061d0f993d99", function (data) {
// $.getJSON(Citystring1 + Citystring2 + Citystring3, function (data) {
//         console.log(data);

//     var weathericon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
//     //gets tempreture. math.floor takes decimal away from tempreture
//     var temp = Math.floor(data.main.temp);
//     //gets weather desecription
//     var weather = data.weather[0].main;

//     //weather icon displays inside its Div
//     $('.icon').attr('src', weathericon);
//     $(".temp").append(temp);
//     $(".weather").append(weather);


// });





