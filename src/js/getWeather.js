import addElement from "./addElement";

export default async function getWeather(divName) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${divName.value.trim()}&lang=en&appid=db3aac137df7b67df636b858dd74c086&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod == 404) {
        addElement("City not found", divName);       
    } else { 
        let result = `     ${divName.value.toUpperCase()}
                    temperature: ${data.main.temp}°C
                    humidity: ${data.main.humidity} %
                    windSpeed: ${data.wind.speed} m/s`; 
        console.log(result); 
        addElement(result, divName);   
    }
          
};