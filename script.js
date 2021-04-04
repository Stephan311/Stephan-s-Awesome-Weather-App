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
    $(".subtitle").append("Showing Weather for " + userInput);

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
    var date = data.list[4].dt_txt;
    console.log(date);
    var temp = data.list[4].main.temp;
    console.log(temp);
    var humid = data.list[4].main.humidity;
    console.log(humid);
    var weathericon = "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png";
    console.log(weathericon);
    $('.date').append(date);
    $('.icon').attr('src', weathericon);
    $('.temp').append(temp +" C");
    $('.humidity').append(humid + "%");

    //day 2
    var date2 = data.list[12].dt_txt;
    console.log(date2);
    var temp2 = data.list[12].main.temp;
    console.log(temp2);
    var humid2 = data.list[12].main.humidity;
    console.log(humid2);
    var weathericon2 = "http://openweathermap.org/img/w/" + data.list[12].weather[0].icon + ".png";
    console.log(weathericon2);
    $('.date2').append(date2);
    $('.icon2').attr('src', weathericon2);
    $('.temp2').append(temp2 + " C");
    $('.humidity2').append(humid2 + "%");

     //day 3
     var date3 = data.list[20].dt_txt;
     console.log(date3);
     var temp3 = data.list[20].main.temp;
     console.log(temp3);
     var humid3 = data.list[20].main.humidity;
     console.log(humid3);
     var weathericon3 = "http://openweathermap.org/img/w/" + data.list[20].weather[0].icon + ".png";
     console.log(weathericon3);
     $('.date3').append(date3);
     $('.icon3').attr('src', weathericon3);
     $('.temp3').append(temp3 + " C");
     $('.humidity3').append(humid3 + "%");

     //day 4
     var date4 = data.list[28].dt_txt;
     console.log(date4);
     var temp4 = data.list[28].main.temp;
     console.log(temp4);
     var humid4 = data.list[28].main.humidity;
     console.log(humid4);
     var weathericon4 = "http://openweathermap.org/img/w/" + data.list[28].weather[0].icon + ".png";
     console.log(weathericon4);
     $('.date4').append(date4);
     $('.icon4').attr('src', weathericon4);
     $('.temp4').append(temp4 + " C");
     $('.humidity4').append(humid4 + "%");

     //day 5
     var date5 = data.list[36].dt_txt;
     console.log(date5);
     var temp5 = data.list[36].main.temp;
     console.log(temp5);
     var humid5 = data.list[36].main.humidity;
     console.log(humid5)
     var weathericon5 = "http://openweathermap.org/img/w/" + data.list[36].weather[0].icon + ".png";
     console.log(weathericon5);
     $('.date5').append(date5);
     $('.icon5').attr('src', weathericon5);
     $('.temp5').append(temp5 + " C");
     $('.humidity5').append(humid5 + "%");
 
 




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





