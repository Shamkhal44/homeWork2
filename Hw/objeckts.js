var temp = 17;
var b = "Baki"


var WeatherForBaku = {

    region : "Baki",
    temperature : 17,
    unit : 'C'
};




var WeatherForSheki = {

    region : "Sheki",
    temperature : 20,
    unit : 'C'
}

var weatherDaily = [
    WeatherForBaku,
    weatherForSheki
]
for ( var i = 0; i < 2; i++){

    console.log(weatherDaily[i].region);
}