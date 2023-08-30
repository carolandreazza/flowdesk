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

    // Configuração do intervalo para chamar a API a cada 30 minutos
    const interval = setInterval(fetchData, 30 * 60 * 1000); // 30 minutos

    // Função de limpeza que é executada quando o componente é desmontado
    return () => clearInterval(interval);    

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
    <div className="weather-widget ">
      <div className="flex items-center"> 
        <div className="flex items-center text-lg pr-6">{hi}</div>
        <div className="weather-icon text-2xl sm:hidden lg:block">{getWeatherIcon()}</div>

       
        <div className="relative group/item sm:hidden lg:block">
          <span
            className="cursor-pointer p-2 rounded-md text-2xl pr-7"
          >
            {temperature}&deg;
          </span>
          <div className="group/edit invisible group-hover/item:visible absolute bottom-10 mt-8 bg-gray-200 opacity-60 text-gray-900 font-bold p-2 rounded">
              {cityName}
          </div>
        </div>

      </div>      
    </div>
    
  );
};

export default WeatherInfo;
