'use client'
import React, { useState, useEffect } from 'react';

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  UserIcon,
  HomeIcon,
  PlayCircleIcon,
  ClockIcon,
  CheckIcon,
  AdjustmentsVerticalIcon,
  CalendarIcon,
  BookOpenIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  ViewfinderCircleIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

const ItensNavbar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const navListItems = [
    {
      label: "Voltar",
      icon: PlayCircleIcon,
    },
    {
      label: "Start",
      icon: PlayCircleIcon,
    },
    {
      label: "Próxima",
      icon: PlayCircleIcon,
    },
    {
      label: "Preferências",
      icon: AdjustmentsVerticalIcon,
    },
    {
      label: "CheckList",
      icon: ClipboardIcon,
    },
    {
      label: "Notas",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      label: "Calendário",
      icon: CalendarIcon,
    },
    {
      label: "Timer",
      icon: ClockIcon,
    },
    {
      label: "Gráfico tempos",
      icon: ChartBarIcon,
    },
    {
      label: "Full screen",
      icon: ViewfinderCircleIcon,
    },
  ];

  return (
    <div className="relative">
      <ul className="mb-4 mt-2 flex flex-col gap-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
          {/* <NavListMenu /> */}
          {navListItems.map(({ label, icon }, key) => (
            <Typography
              key={label}
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              
              <span
                className="cursor-pointer p-2 rounded-md text-2xl pr-10"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                  <MenuItem className="flex items-center gap-2 lg:rounded-full">
                  {React.createElement(icon, { className: "h-[24px] w-[24px]" })}{" "}
                  {/* {label} */}
                </MenuItem>
              </span>
              {showTooltip && (
                <div className="absolute bottom-12 left-0 mt-8 bg-gray-200 opacity-60 text-gray-900 font-bold p-2 rounded">
                {label}
                </div>
              )}
              
            </Typography>
          ))}
        </ul>
      
    </div>
    
  );
};

export default ItensNavbar;
