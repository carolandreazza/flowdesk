'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiWeatherSunny, TiWeatherShower, TiWeatherCloudy, TiWeatherPartlySunny } from 'react-icons/ti';

const WeatherInfo = () => {
  const [hi, setHi] = useState('');
  const [temperature, setTemperature] = useState<number>(0);
  const [cityName, setCityName] = useState('');
  const [weatherType, setWeatherType] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getLocation();
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=1a88a5cb2ed5692e4c95f995f3dfa551&units=metric`
        );
        const data = response.data;        
        /* const currentTemperature = data.main.temp.toFixed(1); */
        const currentTemperature = Math.round(data.main.temp.toFixed(1));
        const city = data.name;
        const weather = data.weather[0].main.toLowerCase();

        setTemperature(currentTemperature);
        setCityName(city);
        setWeatherType(weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
    
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if(currentTime >= '01:00' && currentTime <= '12:59') {
      setHi('Bom dia!');
    } else if(currentTime >= '13:00' && currentTime <= '18:59') {
      setHi('Boa tarde!');
    } else {
      setHi('Boa noite!');
    }

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
        <div className="flex items-center text-lg pr-6">{hi}</div>
        <div className="weather-icon text-2xl">{getWeatherIcon()}</div>

       
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
