const api = {
    key : "317adcb23316cbbe32ef3274c2591a7e",
    base : "https://api.openweathermap.org/data/2.5/"
}

const submit = document.getElementById("submit");
let inputValue = document.getElementById("inputValue");




        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=b4757b81c74305575f9b10bef1a13d1e&units=metric`)
        .then(res => res.json())
        .then(data => {
    const city = document.getElementById("city");
    city.innerText = `${data.name}, ${data.sys.country}`;
  
  
    const temp = document.getElementById("temp");
    temp.innerHTML = `${Math.round(data.main.temp)}`;
  
    const weather_el = document.getElementById('weatherType');
    weather_el.innerText = `${data.weather[0].main}`;

      let icon = document.getElementById('pics');
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
})
    
    
submit.addEventListener("click", function(){
    getResults(inputValue.value);
});

function getResults(input){
        fetch(`${api.base}weather?q=${input}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(displayResults)
    }

    function displayResults(weather) {
    const city = document.getElementById("city");;
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  
    const temp = document.getElementById("temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}`;
  
    const weather_el = document.getElementById('weatherType');
    weather_el.innerText = `${weather.weather[0].main}`;

      let icon = document.getElementById('pics');
    icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    inputValue.value = "";
    
    }




    
