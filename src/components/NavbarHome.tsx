/* Example: https://www.material-tailwind.com/docs/react/navbar# */
'use client'

import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  HomeIcon,
  PlayCircleIcon,
  ClockIcon,
  AdjustmentsVerticalIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardIcon,
  ViewfinderCircleIcon,
  EllipsisVerticalIcon,
  StopCircleIcon,
  ForwardIcon,
} from "@heroicons/react/24/outline";
import WeatherInfo from "./WeatherInfo";
import CustomModal from "./CustomModal";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
         {/*  <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          /> */}
          <UserCircleIcon
          strokeWidth={1.5}
          className="w-6 h-6"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
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
 
// nav list component
const navListItems = [
 /*  {
    label: "Próxima",
    icon: ForwardIcon,
  }, */
  {
    label: "Start",
    icon: PlayCircleIcon,
  },
  {
    label: "Stop",
    icon: StopCircleIcon,
  },
  {
    label: "Next",
    icon: ForwardIcon,
  },
  {
    label: "Sep",
    icon: EllipsisVerticalIcon,
  },
  {
    label: "Preferences",
    icon: AdjustmentsVerticalIcon,
  },
  {
    label: "Sep1",
    icon: EllipsisVerticalIcon,
  },
  {
    label: "CheckList",
    icon: ClipboardIcon,
  },
  {
    label: "Notes",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    label: "Calendar",
    icon: CalendarIcon,
  },
  {
    label: "Timer",
    icon: ClockIcon,
  },
  {
    label: "Sep2",
    icon: EllipsisVerticalIcon,
  },
  {
    label: "Chart",
    icon: ChartBarIcon,
  },
  {
    label: "Sep3",
    icon: EllipsisVerticalIcon,
  },
  {
    label: "FullScreen",
    icon: ViewfinderCircleIcon,
  },
];

function NavList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (icon:any) => {
    setModalContent(icon);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalIsOpen(false);
  };
  
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[24px] w-[24px] hover:text-black",
              onClick: () => openModal(label), })}
            {/*{" "} {label} */}
          </MenuItem>
          
        </Typography>
      ))}
      
      <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
        {modalContent}
      </CustomModal>

    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className=" border-0 fixed bottom-10 w-full xl:mx-auto max-w-screen-xl p-2 lg:rounded-md lg:pl-6 bg-zinc-700 md:max-w-screen-lg sm:max-w-screen-sm">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <WeatherInfo />
        <EllipsisVerticalIcon
          className="h-6 w-6 absolute top-2/4 left-48 hidden -translate-x-2/3 -translate-y-2/4 lg:block"
        > </EllipsisVerticalIcon>
        <HomeIcon
          className="h-6 w-6 absolute top-2/4 left-56 hidden -translate-x-2/3 -translate-y-2/4 lg:block"
        >          
        </HomeIcon>         
        <EllipsisVerticalIcon
          className="h-6 w-6 absolute top-2/4 left-64 hidden -translate-x-2/3 -translate-y-2/4 lg:block"
        > </EllipsisVerticalIcon>
        <div className="absolute top-2/4 left-2/3 hidden -translate-x-2/3 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}