var url = "https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=metric&mode=xml%2C%20html&";
$.ajax({
    url: url + "q=London",
    method: "GET",
    headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "340f980fabmsh265640d0f27ab91p161f7bjsn4ac5e58409f3"
    },
    success: function(data){
        $("#first-temp").text(data.main.temp + " °C");
        if(data.clouds.all == 1){
            $("#first-clouds").text("Ясно");
        }
        else if(data.clouds.all == 2){
            $("#first-clouds").text("Местами облачно");
        }
        else{
            $("#first-clouds").text("Облачно");
        }
        $("#first-humidity").text("Влажность - " + data.main.humidity + "%");
    }
})

$.ajax({
    url: url + "&q=Astana",
    method: "GET",
    headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "340f980fabmsh265640d0f27ab91p161f7bjsn4ac5e58409f3"
    },
    success: function(data){
        $("#second-temp").text(data.main.temp + " °C");
        if(data.clouds.all == 1){
            $("#second-clouds").text("Ясно");
        }
        else if(data.clouds.all == 2){
            $("#second-clouds").text("Местами облачно");
        }
        else{
            $("#second-clouds").text("Облачно");
        }
        $("#second-humidity").text("Влажность - " + data.main.humidity + "%");
    }
})

$.ajax({
    url: url + "q=Moscow",
    method: "GET",
    headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "340f980fabmsh265640d0f27ab91p161f7bjsn4ac5e58409f3"
    },
    success: function(data){
        $("#third-temp").text(data.main.temp + " °C");
        if(data.clouds.all == 1){
            $("#third-clouds").text("Ясно");
        }
        else if(data.clouds.all == 2){
            $("#third-clouds").text("Местами облачно");
        }
        else{
            $("#third-clouds").text("Облачно");
        }
        $("#third-humidity").text("Влажность - " + data.main.humidity + "%");
    }
})