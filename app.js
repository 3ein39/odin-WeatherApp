
let btn = document.querySelector('button');
let location_header = document.getElementById('location');
let temp_p = document.getElementById('temperature');
let condition_p = document.getElementById('condition');
let humidty_p = document.getElementById('humidity');

btn.addEventListener('click',async (e) => {
    let location = document.querySelector('input').value;
    let data = await getWeatherData(location);

    location_header.innerText = data.location.name;
    temp_p.innerText = data.current.temp_c;
    condition_p.innerText = data.current.condition.text;
    humidty_p.innerText = data.current.humidity;

})
let getWeatherData = async function(location) {
    try {

        let result = await fetch(`http://api.weatherapi.com/v1/current.json?key=47b055d4faf8406fb7f152406230809&q=${location}`);

        return await result.json();
    }
    catch (err) {
        console.log(err);
    }
}
