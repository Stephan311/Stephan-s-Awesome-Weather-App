var searchFormEl = document.querySelector("#user-form");

//prevents page from refreshing on button click
// $("#user-form").submit(function (e) {
//    e.preventDefault();
// });

var searchtermArray = [];

// var history = localStorage.getItem("Cityname");
// $(".history1").append(history);

//weather results appear when button is clicked
//turn this into a function that takes 1 argument
//Feed function value that is inside the div onclick
//Or, you can grab value from input box and re-use the function
function grabformSubmission() {
    // debugger;

    //function to store area

    console.log("hi");

    $(".weather2").removeClass("hidden");
    var userInput = document.querySelector("#city").value;
    console.log(userInput);
   // location.reload();
   // $(".city-input").append(userInput);
    localStorage.setItem("Cityname", userInput);
    $(".subtitle").empty();
    var history = localStorage.getItem("Cityname");
    $(".history1").append(history);

        //saves the search history after reload
        var taskRead = localStorage.getItem("Cityname");
        var TaskDiv = document.querySelector("#searchhistory")
        console.log(taskRead);
        TaskDiv.textContent = taskRead;

     //gets current weather
var Currentstring1 = "http://api.openweathermap.org/data/2.5/weather?q="
var Currentstring3 = "&units=metric&appid=321743875c786c01219980579e46cc93"
var Currentstring2 = localStorage.getItem("Cityname");
var Poo;
//inserts city into the area of the link so the city appears that is searched for
Poo = Currentstring1 + Currentstring2 + Currentstring3;
console.log(Poo);

//$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Ottawa&units=metric&appid=321743875c786c01219980579e46cc93", function (data) {
$.getJSON(Currentstring1 + Currentstring2 + Currentstring3, function (currentweatha) {
        console.log(currentweatha);

        var currenticon = "http://openweathermap.org/img/w/" + currentweatha.weather[0].icon + ".png";
        var currenttemp = currentweatha.main.temp + "C";
        var currentweather = currentweatha.weather[0].main;
        var currenthumid = currentweatha.main.humidity;
        var currentwind = currentweatha.wind.speed;
        $(".currentweather").empty();
        $(".currenttemp").empty();
        $(".currenticon").empty();
        $(".currenthumid").empty();
        $(".currentweather").append(currentweather);
        $(".currenttemp").append("Temp " + currenttemp);
        $(".currenticon").attr("src", currenticon);
        $(".currenthumid").append("Humidity: " + currenthumid + "%")
        $(".currentwind").append("Wind: " + currentwind + " km/h")

        //Get UV Index

}
);



        

    //gets weather icon from API
var Citystring1 = "http://api.openweathermap.org/data/2.5/forecast?q="
var Citystring3 = "&units=metric&appid=321743875c786c01219980579e46cc93"
var Citystring2 = localStorage.getItem("Cityname");
var Foo;
//inserts city into the area of the link so the city appears that is searched for
Foo = Citystring1 + Citystring2 + Citystring3;
console.log(Foo);

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
    var temp = Math.floor(data.list[4].main.temp);
    console.log(temp);
    var humid = data.list[4].main.humidity;
    console.log(humid);
    var weathericon = "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png";
    console.log(weathericon);
    $(".date").empty();
    $(".temp").empty();
    $(".humidity").empty();
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
    $(".date2").empty();
    $(".temp2").empty();
    $(".humidity2").empty();   $('.date2').append(date2);
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
     $(".date3").empty();
     $(".temp3").empty();
     $(".humidity3").empty(); $('.date3').append(date3);
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
     $(".date4").empty();
     $(".temp4").empty();
     $(".humidity4").empty(); $('.date4').append(date4);
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
     $(".date5").empty();
     $(".temp5").empty();
     $(".humidity5").empty(); $('.date5').append(date5);
     $('.icon5').attr('src', weathericon5);
     $('.temp5').append(temp5 + " C");
     $('.humidity5').append(humid5 + "%");

     

    //  location.reload();

    //array that saves search terms
    // var searchtermArray = [];
    // searchtermArray.push($("#city").val());
    // console.log(searchtermArray);

    $(".subtitle").append("Showing Weather for " + userInput );


     //array that saves search terms
     searchtermArray.push($("#city").val());
     console.log(searchtermArray);
     $("#city").val(""); //clear textbox
     $("#searchhistory").text("");
     $.each(searchtermArray, function (index, value) {
         $("#searchhistory")
            .append("<li class='historyitem' onclick='addcity("+index+")'>" + value + '</li>');
               
     })
 
    
 




});
}
grabformSubmission()

function addhistoryitem(index, value) {
    $("#searchhistory")
        .append("<li class='historyitem' onclick='addcity("+index+")'>" + value + '</li>');
        
}

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Ottawa&units=metric&appid=321743875c786c01219980579e46cc93", function(data){
    console.log(data);
})

//////////////////////////////////////////////////////////////////////////////////////////////
//changes display city name
function addcity(id) {
    $(".historyitem").val(searchtermArray[id]);

    $(".subtitle").empty();
    $(".subtitle").append("Showing Weather for " + (searchtermArray[id]));


    // //stores name to local storage
    // var taskWrite = (searchtermArray[id]);
    // console.log(taskWrite);
    // localStorage.setItem("textarea9", taskWrite );


// $.getJSON(Citystring1 + Citystring2 + Citystring3, function (data) {
//     console.log(data); 

var Searchstring1 = "http://api.openweathermap.org/data/2.5/forecast?q="
var Searchstring3 = "&units=metric&appid=321743875c786c01219980579e46cc93"
// var Searchstring2 = $(".historyitem").val(searchtermArray[id]);
var Searchstring2 = searchtermArray[id];
var Foo;
//inserts city into the area of the link so the city appears that is searched for
Foo = Searchstring1 + Searchstring2 + Searchstring3;
console.log(Foo);

$.getJSON(Searchstring1 + Searchstring2 + Searchstring3, function (data) {
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
var temp = Math.floor(data.list[4].main.temp);
console.log(temp);
var humid = data.list[4].main.humidity;
console.log(humid);
var weathericon = "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png";
console.log(weathericon);
$(".date").empty();
$(".temp").empty();
$(".humidity").empty();
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
$(".date2").empty();
$(".temp2").empty();
$(".humidity2").empty();   $('.date2').append(date2);
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
 $(".date3").empty();
 $(".temp3").empty();
 $(".humidity3").empty(); $('.date3').append(date3);
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
 $(".date4").empty();
 $(".temp4").empty();
 $(".humidity4").empty(); $('.date4').append(date4);
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
 $(".date5").empty();
 $(".temp5").empty();
 $(".humidity5").empty(); $('.date5').append(date5);
 $('.icon5').attr('src', weathericon5);
 $('.temp5').append(temp5 + " C");
 $('.humidity5').append(humid5 + "%");

//  location.reload();

//array that saves search terms
// var searchtermArray = [];
// searchtermArray.push($("#city").val());
// console.log(searchtermArray);
           
 })







}









