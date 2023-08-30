/* Example: https://www.material-tailwind.com/docs/react/navbar# */
'use client'

import React, { useEffect, useState } from "react";
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
  ChevronUpIcon,
  Bars3Icon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import WeatherInfo from "./WeatherInfo";
import CustomModal from "./CustomModal";
import TodoList from "./TodoList";
 
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
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-auto"/* lg:ml-auto */
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
          <ChevronUpIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-2 bg-zinc-700 text-white border-0 ">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={` bg-zinc-700 flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : "hover:bg-zinc-500/10"
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
 
function Preferences() {
  return (
    <div>
      <h1>TESTEPreferences</h1>
      <p>Preferences</p>
    </div>
  );
}
 
function PopupCheckList() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

function PopupNotes() {
  return (
    <div>
      <h1>TESTE</h1>
      <p>checklist</p>
    </div>
  );
}

function PopupCalendar() {
  return (
    <div>
      <h1>TESTE</h1>
      <p>checklist</p>
    </div>
  );
}

function PopupTimer() {
  return (
    <div>
      <h1>TESTE</h1>
      <p>checklist</p>
    </div>
  );
}

function PopupChart() {
  return (
    <div>
      <h1>TESTE</h1>
      <p>checklist</p>
    </div>
  );
}

// nav list component
const navListItems = [
 /*  {
    label: "Próxima",
    icon: ForwardIcon,
  }, */
  {
    /* id: "Start", */
    label: "Start",
    icon: PlayCircleIcon,
  },
  {
   /*  id: "Start", */
    label: "Stop",
    icon: StopCircleIcon,
  },
  {
    /* id: "Next", */
    label: "Next",
    icon: ForwardIcon,
  },
  {
   /*  id: "s0", */
    label: "",
    icon: EllipsisVerticalIcon,
  },
  {
    /* id: "Preferences", */
    label: "Preferences",
    icon: AdjustmentsVerticalIcon,
  },
  {
   /*  id: "s1", */
    label: "",
    icon: EllipsisVerticalIcon,
  },
  {
    /* id: "CheckList", */
    label: "CheckList",
    icon: ClipboardIcon,
  },
  {
   /*  id: "Notes", */
    label: "Notes",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    /* id: "Calendar", */
    label: "Calendar",
    icon: CalendarIcon,
  },
  {
    /* id: "Timer", */
    label: "Timer",
    icon: ClockIcon,
  },
  {
   /*  id: "s2", */
    label: "",
    icon: EllipsisVerticalIcon,
  },
  {
    /* id: "Chart", */
    label: "Chart",
    icon: ChartBarIcon,
  },
  {
    /* id: "s3", */
    label: "",
    icon: EllipsisVerticalIcon,
  },
  {
    label: "FullScreen",
    icon: ViewfinderCircleIcon
  },
];

function NavList() {

  interface ModalItem {
    id: string;
    label: string;
    isOpen: boolean;
  }
  const [modals, setModals] = useState<ModalItem[]>([]); 
  const [isFullscreen, setIsFullscreen] = useState(false);

  
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(prevState => !prevState);
  };



  const openModal = (modalId: string) => {
    
    console.log(modalId)
    if (modalId === 'Start' || modalId === 'Stop' || modalId === 'Next' || modalId === '') {
      console.log(modalId);
    } else if (modalId === 'FullScreen') {
      toggleFullscreen();
    } else if (!modals.some(modal => modal.id === modalId)) {      
      setModals([...modals, { id: modalId, label: modalId, isOpen: true}]);
    }
  };
  
  const closeModal = (modalId: string) => {
    setModals(modals.filter(modal => modal.id !== modalId));
  };
  
    
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center"> 
      {navListItems.map(({ label, icon }, index) => (
        <Typography
          key={index}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="group/item flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[24px] w-[24px] hover:text-black",
                onClick: () => openModal(label), })}
                <div className="group/edit invisible group-hover/item:visible absolute bottom-9 mt-8 bg-gray-200 opacity-60 text-gray-900 font-bold p-2 rounded">
                   {label}
                </div>
          </MenuItem>
          
        </Typography>
      ))}
      
      {modals.map(modal => (
        <CustomModal
          key={modal.id}
          isOpen={modal.isOpen}
          closeModal={() => closeModal(modal.id)}
        >
          {/* Conteúdo do modal */}
          {/* <p> {modal.id}</p> */}
          {(() => {
            switch (modal.id) {
              case 'Preferences':
                return <Preferences />;
              case 'CheckList':
                return <PopupCheckList />;
              case 'Notes':
                return <PopupNotes />;
              case 'Calendar':
                return <PopupCalendar />;
              case 'Timer':
                return <PopupTimer />;
              case 'Chart':
                return <PopupChart />;
              /* case 'FullScreen':
                return <FullScreen />; */
              default:
                return null; 
            }
          })()}
        </CustomModal>
      ))}


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
        <p className=" lg:hidden"> PARA UMA MELHOR EXPERIÊNCIA, ACESSE EM UMA TELA MAIOR COMO UM TABLET, DESKTOP OU TV!</p>
        <EllipsisVerticalIcon
          className="h-6 w-6 absolute top-2/4 left-48 hidden -translate-x-2/3 -translate-y-2/4 lg:block" /* hidden */
        > </EllipsisVerticalIcon>
        <a href="https://caroldev.vercel.app/" target="blank">
          <HomeIcon
            className="h-6 w-6 absolute top-2/4 left-56 hidden -translate-x-2/3 -translate-y-2/4 lg:block"          
          >          
          </HomeIcon>
        </a>
        <EllipsisVerticalIcon
          className="h-6 w-6 absolute top-2/4 left-64 hidden -translate-x-2/3 -translate-y-2/4 lg:block"
        > </EllipsisVerticalIcon>
        <div className="absolute top-2/4 left-2/3 hidden -translate-x-2/3 -translate-y-2/4 lg:block">
          <NavList />
        </div>        
        <div className="h-6 w-6 absolute top-2/4 right-20 hidden -translate-x-2/3 -translate-y-2/4 lg:block">
          <a href="https://github.com/carolandreazza/flowdesk" target="blank">
            <CodeBracketIcon />
          </a>
        </div>        
        <div className="h-6 w-6 absolute top-2/4 right-8 hidden -translate-x-2/3 -translate-y-2/4 lg:block">
          <ProfileMenu />
        </div>        
        {/* <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-12 mb-6 lg:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </IconButton> */}
      </div>
      {/* <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse> */}
    </Navbar>
  );
}