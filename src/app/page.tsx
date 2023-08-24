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
      {/* <h1 className="text-white text-4xl font-bold mb-7">{hi}</h1> */}
      <div className="time text-white flex items-center text-9xl font-semibold mb-7 pr-8">{time}</div> 
      <MotivacionalQuote />     
      <NavbarHome />
    </div>
  )
}
