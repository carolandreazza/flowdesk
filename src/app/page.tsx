'use client'
import MotivacionalQuote from "@/components/MotivacionalQuote";
import NavbarHome from "@/components/NavbarHome";
import { ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React from "react";
import { useState, useEffect } from "react";

const links = [
  {
    label: "Link 1",
    link: "https://caroldev.vercel.app/"
  },
  {
    label: "Link 2",
    link: "https://caroldev.vercel.app/"
  },
  {
    label: "Link 3",
    link: "https://caroldev.vercel.app/",
  },
];
 

function Links() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full pt-4 pl-6"
        >
          <h1 className="text-white font-semibold">Links</h1>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform text-white ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-2 bg-zinc-700 text-white border-0  opacity-10 ml-2">
        {links.map(({ label, link }, key) => {
          const isLastItem = key === links.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={` bg-zinc-700 flex items-center gap-2 rounded hover:bg-zinc-500/10 }`}
            >
              <a href={link} target="blank">
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color="inherit"                
                >
                  {label}
                </Typography>
              </a>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

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
  /*   <div className="relative bg-nature min-h-screen flex flex-col">      
      <div>
        <Links />
      </div> */
      <div className="relative bg-nature min-h-screen">    
        <div className=" flex">
          <Links />
          <div className="relative group/search">
            <div className=" mt-3.5 ml-8 w-6 text-white">
              <a href="https://www.google.com.br/" target="blank">
                <MagnifyingGlassIcon />
              </a>
              <div className="group/edit invisible group-hover/search:visible absolute ">
                <p>Google Search</p>
              </div>
            </div>
          </div>
        </div>
         
        <div className=" flex flex-col items-center justify-center mt-32 p-8"> 
          <div className=" bg-black bg-opacity-20 p-8 rounded-xl">
            <div className="time text-white flex items-center text-9xl font-medium mb-7 pr-8 justify-around">
              <p className="drop-shadow-lg shadow-black">{time}</p>
            </div> 
            <MotivacionalQuote /> 
           {/*  <p className="lg:hidden text-white text-2xl font-medium drop-shadow-lg shadow-black">
              ATENÇÃO: desing criado para utilização em telas</p> */}
          </div>    
          <NavbarHome />
        </div>
      </div>
    /* </div> */
  )
}
