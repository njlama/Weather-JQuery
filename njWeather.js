
const $row = "<div class = row></div>";
$(".container").append($row);

const $leftColumn = "<div class=col-4></div>";
const $rightColumn = "<div class=col-8></div>";
$(".row").append($leftColumn);
$(".row").append($rightColumn);

//  Setting background img on leftColumn 
$(".col-4").css("backgroundImage", "url(weather.jpg)");

//Nesting div in col-4 
$(".col-4").append("<div class=text></div>");

// Adding <p> on text div 
$(".text").append("<p>NJ's</br>Weather App</p>");

// Creating and appending forms on Right column 
$(".col-8").append("<form id='formContainer'></form>");
$("#formContainer").append("<div class='form-inline getWeatherDiv'></div>")
$(".getWeatherDiv").append("<div class='form-group mb-2 mr-2' id='cityDiv'></div>");
$("#cityDiv").append("<input type='text' class='form-control-plaintext' id='city' placeholder='city...'>");
$(".getWeatherDiv").append("<div class='form-group mb-2 mr-4' id='countryDiv'></div>");
$("#countryDiv").append("<input type='text' class='form-control-plaintext' id='country' placeholder='country'>");
$(".getWeatherDiv").append("<button type='submit' class='btn btn-danger mb-2 mr-5'>Get Weather</button>");


$("#formContainer").append("<div class='form-inline weatherDiv'></div>");

$("#formContainer").append("<div class='weatherDisplay'></div>");

$(".weatherDisplay").append("<div class='form-group locationDiv'></div>");
$(".locationDiv").css("width", "50%");
$(".locationDiv").append("<label id='location' class='text-danger ml-4'>Location : </label>");
$(".locationDiv").append("<input type='text' readonly class='staticInput' id='inputLocation' value=''>");
$(".locationDiv").append("<hr>");

$(".weatherDisplay").append("<div class='form-group temperatureDiv'></div>");
$(".temperatureDiv").css("width", "50%");
$(".temperatureDiv").append("<label id='temperature' class='text-danger ml-4'>Temperature : </label>");
$(".temperatureDiv").append("<input type='text' readonly class='staticInput' id='inputTemp' value=''>");
$(".temperatureDiv").append("<hr>");

$(".weatherDisplay").append("<div class='form-group humidityDiv'></div>");
$(".humidityDiv").css("width", "50%");
$(".humidityDiv").append("<label id='humidity' class='text-danger ml-4'>Humidity : </label>");
$(".humidityDiv").append("<input type='text' readonly class='staticInput' id='inputHumidity' value=''>");
$(".humidityDiv").append("<hr>");

$(".weatherDisplay").append("<div class='form-group conditionDiv'></div>");
$(".conditionDiv").css("width", "50%");
$(".conditionDiv").append("<label id='condition' class='text-danger ml-4'>Condition : </label>");
$(".conditionDiv").append("<input type='text' readonly class='staticInput' id='inputCondition' value=''>");





 // $(".weatherDiv").append("<label class='text-danger ml-5'>Temperature : </label>");
// $(".weatherDiv").append("<div class='form-group temperatureDiv'></div>");
// $(".temperatureDiv").append("<input type='text' readonly class='form-control-plaintext ml-2' id='staticPlace' value='87 F'>");

// $(".weatherDiv").append("<label class='text-danger ml-5'>Humidity : </label>");
// $(".weatherDiv").append("<div class='form-group humidityDiv'></div>");
// $(".humidityDiv").append("<input type='text' readonly class='form-control-plaintext ml-2' id='staticPlace' value='94%'>");

// $(".weatherDiv").append("<label class='text-danger ml-5'>Conditions: </label>");
// $(".weatherDiv").append("<div class='form-group conditionDiv'></div>");
// $(".conditionDiv").append("<input type='text' readonly class='form-control-plaintext ml-2' id='staticPlace' value='cloudy'>"); */} */}

$(".weatherDisplay").hide();

$("button").on("click", function(e){
    e.preventDefault();
    let city = $("#city").val();
    let country = $("#country").val();
    console.log(city);
    console.log(country);
    if (city != "" && country != "") {
        $(".weatherDisplay").show();
        let countryName;
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=7bf9a316b8bd44f473112322e71eaa14&units=metric")
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                let cityName = data["name"];
                countryName = data["sys"]["country"];
                $("#inputLocation").val(cityName+", " + countryName);

                let temperature = data["main"]["temp"];
                $("#inputTemp").val(temperature + " C ");

                let humidity = data["main"]["humidity"];
                $("#inputHumidity").val(humidity);

                for ( let i = 0; i < data["weather"].length; i++){
                    let condition = data["weather"][i]["description"];
                    $("#inputCondition").val(condition);
                }
               
            })
        
    } else {
        alert("Need city and country name");
    }
    
})





