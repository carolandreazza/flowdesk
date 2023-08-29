'use client'
import MotivacionalQuote from "@/components/MotivacionalQuote";
import NavbarHome from "@/components/NavbarHome";
import { useState, useEffect } from "react";


export default function Home() {
  const [time, setTime] = useState(''); 

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTime(currentTime);

    // Atualiza a hora a cada minuto
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(currentTime);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative bg-nature min-h-screen flex flex-col items-center justify-center">
      <div className=" bg-black bg-opacity-20 p-8 rounded-xl">
        <div className="time text-white flex items-center text-9xl font-medium mb-7 pr-8 justify-around">
          <p className="drop-shadow-lg shadow-black">{time}</p>
        </div> 
        <MotivacionalQuote /> 
      </div>    
      <NavbarHome />
    </div>
  )
}
