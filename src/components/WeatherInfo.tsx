'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiWeatherSunny, TiWeatherShower, TiWeatherCloudy, TiWeatherPartlySunny } from 'react-icons/ti';
import { MdAccessTime } from 'react-icons/md';

const WeatherInfo = () => {
  const [time, setTime] = useState('');
  const [temperature, setTemperature] = useState<number>(0);
  const [cityName, setCityName] = useState('');
  const [weatherType, setWeatherType] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getLocation();
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=1a88a5cb2ed5692e4c95f995f3dfa551&units=metric`
        );
        const data = response.data;
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });;
        /* const currentTemperature = data.main.temp.toFixed(1); */
        const currentTemperature = Math.round(data.main.temp.toFixed(1));
        const city = data.name;
        const weather = data.weather[0].main.toLowerCase();

        setTime(currentTime);
        setTemperature(currentTemperature);
        setCityName(city);
        setWeatherType(weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
    
    // Atualiza a hora a cada minuto
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });;
      setTime(currentTime);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getLocation = () => {
    return new Promise<{ latitude: number; longitude: number }>(
      (resolve, reject) => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject(new Error('Geolocation is not available.'));
        }
      }
    );
  };

  const getWeatherIcon = () => {
    switch (weatherType) {
      case 'clear':
        return <TiWeatherSunny />;
      case 'rain':
        return <TiWeatherShower />;
      case 'clouds':
        return <TiWeatherCloudy />;
      default:
        return <TiWeatherPartlySunny />;
    }
  };

  return (
    <div className="weather-widget">{/* className="weather-widget p-4 rounded-lg bg-gray-100" */}  
      <div className="flex items-center">  
        <div className="time flex items-center text-2xl pr-8">{time}</div>{/* font-semibold  */}
        <div className="weather-icon text-2xl">{getWeatherIcon()}</div>
        {/* <div className="weather-info ml-4">
            <div className="temperature text-2xl font-semibold">{temperature}&deg;C</div>
            <div className="city text-gray-800 mt-1">{cityName}</div>
        </div> */}

       
        <div className="relative">
          <span
            className="cursor-pointer p-2 rounded-md text-2xl pr-7"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {temperature}&deg;
          </span>
          {showTooltip && (
            <div className="absolute bottom-10 left-0 mt-8 bg-gray-200 opacity-60 text-gray-900 font-bold p-2 rounded">
             {cityName}
            </div>
          )}
        </div>

      </div>      
    </div>
    
  );
};

export default WeatherInfo;
