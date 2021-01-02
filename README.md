# Weather-Dashboard-API-HW6

## Description

Weather Dashboard features search box used to explore weather conditions and forecast for your city. 

## Technology

### API
Weather Dashboard uses [OpenWeather API](https://openweathermap.org/api) by making two calls. One call is made with the 5 Day forecast API and the other using Current weather Data API.

Here is an example of the 5 Day forecast API call which will use the search box input to generate the city data.

<img width="600" alt="weather app snip" src="https://user-images.githubusercontent.com/70172286/103453629-ab6d4a00-4c90-11eb-8884-af68dc1508e8.PNG">

## Code
The weather icons were generating by creating variables to hold the icon code provided by the API. Then concatenating the icon code and icon URL like so.
<img width="600" alt="Weather app snip code" src="https://user-images.githubusercontent.com/70172286/103453755-110e0600-4c92-11eb-962d-952601c776fa.PNG">

