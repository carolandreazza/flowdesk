'use client'
import MotivacionalQuote from "@/components/MotivacionalQuote";
import NavbarHome from "@/components/NavbarHome";
import { useState, useEffect } from "react";


export default function Home() {
  const [hi, setHi] = useState('');

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    /* console.log('HI: '+currentTime); */
    if(currentTime >= '01:00' && currentTime <= '12:59') {
      setHi('Bom dia!');
    } else if(currentTime >= '13:00' && currentTime <= '18:59') {
      setHi('Boa tarde!');
    } else {
      setHi('Boa noite!');
    }
  }, []);

  return (
    <div className="bg-nature min-h-screen flex flex-col items-center justify-center">
      {/* Conteúdo da página */}
      <h1 className="text-white text-4xl font-bold mb-7">{hi}</h1>
      {/* <p className="text-white mt-4">Esta é a sua página inicial.</p> */}
      <MotivacionalQuote />
     
      <NavbarHome />
    </div>
  )
}
