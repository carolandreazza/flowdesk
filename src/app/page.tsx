'use client'
import MotivacionalQuote from "@/components/MotivacionalQuote";
import NavbarHome from "@/components/NavbarHome";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React from "react";
import { useState, useEffect } from "react";

const profileMenuItems = [
  {
    label: "My Profile",
  },
  {
    label: "Edit Profile",
  },
  {
    label: "Inbox",
  },
  {
    label: "Help",
  },
  {
    label: "Sign Out",
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
          <h1 className="text-white">Links</h1>
          <ChevronUpIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-2 bg-zinc-700 text-white border-0  opacity-10 ml-2">
        {profileMenuItems.map(({ label }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={` bg-zinc-700 flex items-center gap-2 rounded hover:bg-zinc-500/10 }`}
            >
              {/* {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })} */}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color="inherit"
              >
                {label}
              </Typography>
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
        <div>
          <Links />
        </div>
        <div className=" flex flex-col items-center justify-center mt-32"> 
          <div className=" bg-black bg-opacity-20 p-8 rounded-xl">
            <div className="time text-white flex items-center text-9xl font-medium mb-7 pr-8 justify-around">
              <p className="drop-shadow-lg shadow-black">{time}</p>
            </div> 
            <MotivacionalQuote /> 
          </div>    
          <NavbarHome />
        </div>
      </div>
    /* </div> */
  )
}
