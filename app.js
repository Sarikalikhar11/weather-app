const API_KEY = '1159b4961afaf3fcfbb653434108d710'
// const API= `https://api.openweathermap.org/data/2.5/weather?
//     q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form");
const search = form.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city)=>{
     weather.innerHTML = `<h2>Loading.....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    return showWeather(data);
}

const showWeather = (data)=>{
    if(data.cod == '404'){
         weather.innerHTML = `<h2>City not found</h2>`;
         return;
    }
    weather.innerHTML = `
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4> ${data.weather[0].main} </h4>
            </div>
    `
}

form.addEventListener(
    "submit",function(e){
        getWeather(search.value)
        e.preventDefault();
    }
)