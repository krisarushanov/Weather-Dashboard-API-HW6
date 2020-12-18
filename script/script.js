/* Setting HTML element variables */
var cityName = $(".cityName");
var MainTemp = $(".MainTemp");    
var WeatherMain = $(".WeatherMain");
var WeatherDescription = $(".WeatherDescription");
var MainHumidity = $(".MainHumidity");
var WindSpeeed = $(".WindSpeed");
var forecast =$(".forecast")
/* Code written inside method will run once page DOM is ready to execute */

$(document).ready(function(){

/* Add click event to button using button ID */

    $('#searchCity').click(function(){

/* Getting input value using input ID and val method */
     var city = $("#yourCity").val();

/* Use AJAX method to retrieve data for CURRENT WEATHER*/

   $.ajax({

    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city +  "&units=imperial" +    "&APPID=63d898fccb40c6189c8cd5093662abf9",
    method: "GET",
         
    }).then (function(response){
              
/* Render response data to HTML elements  */

      console.log(response);
        /*listWeatherIcon.attr ("src", "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon +".png");  */
        cityName.text("Current Weather In: " + response.name);
        MainTemp.text(response.main.temp + "F");
        WeatherMain.text("Condition: " + response.weather[0].main);
        WeatherDescription.text("Description: " + response.weather[0].description);
        MainHumidity.text("Humidity: " + response.main.humidity + "%");
        WindSpeeed.text("Wind Speed: " + response.wind.speed +" m/hr")

/* Display icon response by concatenating var iconcode with icon URL */
        var iconcode = response.weather[0].icon;
                
        $(".listWeatherIcon").html("<img src='http://openweathermap.org/img/w/" + iconcode + ".png' alt='Icon depicting current weather.'>");
                         
     
            
    });   
       
 });

/*Setting variables for Forecast */
var dayOneCard = $(".dayOneCard");
var dayTwoCard = $(".dayTwoCard");
var dayThreeCard = $(".dayThreeCard");
var dayFourCard = $(".dayFourCard");
var dayFiveCard = $(".dayFiveCard");


/*2nd API CALL For FORECAST */

$('#searchCity').click(function(){

  /* Getting input value using input ID and val method */
       var city = $("#yourCity").val();
  
  /* Use AJAX method to retrieve data*/
  
     $.ajax({
  
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +  "&units=imperial" +    "&APPID=63d898fccb40c6189c8cd5093662abf9",
      method: "GET",
           
      }).then (function(response){

        console.log(response);
            
          var iconCodeOne = response.list[0].weather[0].icon;
          var iconCodeTwo = response.list[8].weather[0].icon;
          var iconCodeThree = response.list[16].weather[0].icon;
          var iconCodeFour = response.list[24].weather[0].icon;
          var iconCodeFive = response.list[32].weather[0].icon;

          $(".iconCodeOne").html("<img src='http://openweathermap.org/img/w/" + iconCodeOne + ".png' alt='Icon depicting current weather.'>"); 
          $(".iconCodeTwo").html("<img src='http://openweathermap.org/img/w/" + iconCodeTwo + ".png' alt='Icon depicting current weather.'>"); 
          $(".iconCodeThree").html("<img src='http://openweathermap.org/img/w/" + iconCodeThree + ".png' alt='Icon depicting current weather.'>"); 
          $(".iconCodeFour").html("<img src='http://openweathermap.org/img/w/" + iconCodeFour + ".png' alt='Icon depicting current weather.'>"); 
          $(".iconCodeFive").html("<img src='http://openweathermap.org/img/w/" + iconCodeFive + ".png' alt='Icon depicting current weather.'>"); 

        dayOneCard.text("Date: " + response.list[0].dt_txt + " " + "Condition: " + response.list[0].weather[0].main);
        dayTwoCard.text("Date: " + response.list[8].dt_txt + " " + "Condition: " + response.list[8].weather[0].main);
        dayThreeCard.text("Date: " + response.list[16].dt_txt + " " + "Condition: " + response.list[16].weather[0].main);
        dayFourCard.text("Date: " + response.list[24].dt_txt + " " + "Condition: " + response.list[24].weather[0].main);
        dayFiveCard.text("Date: " + response.list[32].dt_txt + " " + "Condition: " + response.list[32].weather[0].main);
      
          


      });
    });
  });
 