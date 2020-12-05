/* Render to HTML on listWeather div */
/*var listWeatherIcon = $(".listWeatherIcon"); */
var listMainTemp = $(".listMainTemp");    
var listWeatherMain = $(".listWeatherMain");
var listWeatherDescription =$(".listWeatherDescription");

/* Code written inside method will run once page DOM is ready to execute */

$(document).ready(function(){

    /* Add click event to button using button ID */

    $('#searchCity').click(function(){


    /* Getting input value using input ID and val method */
        
     var city = $("#yourCity").val();


      

    /* Use AJAX method to retrieve data*/

    
    
         $.ajax({

            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +  "&units=imperial" + 
            "&APPID=63d898fccb40c6189c8cd5093662abf9",

            method: "GET",

    
          }).then (function(response){
              


                console.log(response);
                /*listWeatherIcon.attr ("src", "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon +".png");  */
                listMainTemp.text("Temp:" + response.list[0].main.temp + "F");
                listWeatherMain.text(response.list[0].weather[0].main);
                listWeatherDescription.text("Description:" + response.list[0].weather[0].description);

                var iconcode = response.list[0].weather[0].icon;
                
                
                $(".listWeatherIcon").html("<img src='http://openweathermap.org/img/w/" + iconcode + ".png' alt='Icon depicting current weather.'>");
                
                
                
                /*$(".listWeatherIcon").attr('src', iconurl);*/

                
            
         });   

         
       
        });

});


