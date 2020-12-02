$(document).ready(function(){

    /* Add click event to button using button ID */

    $('#searchCity').click(function(){


    /* Getting input value using input ID and val method */
        
        var city = $("#yourCity").val();
      

    /* Use AJAX method to retrieve data*/

    
    
         $.ajax({

            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +  "&units=imperial" + 
            "&APPID=63d898fccb40c6189c8cd5093662abf9",

            method: "GET"
    
          }).then (function(response){

                var widget = show(response);
                $("#show").html(widget);

                console.log(response);
                console.log(response.list[0].weather)
              

                let results = response.list[0].weather;
                console.log(results)
            
         });   
       
        });
});


function show(response){
    return `<h2>${response.list[0].weather}</h2>`;
}
    