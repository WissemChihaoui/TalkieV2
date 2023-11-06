import React from "react";
import { Link } from "react-router-dom";
import Home from '../../../icons/Outline/home.svg'
import Chat from '../../../icons/Outline/chat-alt-2.svg'
import Match from '../../../icons/Outline/fire.svg'
import Users from '../../../icons/Outline/users.svg'
import Bell from '../../../icons/Outline/bell.svg'

import Logo from "../../../media/logo.png";
import Profile from "../../../media/eminem.jpg";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  IconButton,
} from "@material-tailwind/react";
const NavBar = () => {
   const path = window.location.pathname

  return (
    <div className="m-0 bg-card w-full">
      <div className="flex px-12 py-4 justify-between text-primary items-center">
        <div className="w-8">
          <img src={Logo} />
        </div>
        <div className="flex gap-10 items-center">
            <Link to={'/'} className={`w-[36px] h-[36px] p-2 rounded-[50%] ease-in duration-200 ${path === '/' ? 'bg-hover' : 'bg-transparent'}`}>
                <img src={Home} />
            </Link>
            <Link to={'/messages'} className={`p-2 rounded-full ${path === '/messages' ? 'bg-hover' : 'bg-transparent'}`}>
                <img src={Chat} />
            </Link>
            <Link to={'/match'} className={`p-2 rounded-full ${path === '/match' ? 'bg-hover' : 'bg-transparent'}`}>
                <img src={Match} />
            </Link>
            <Link to={'/users'} className={`p-2 rounded-full ${path === '/users' ? 'bg-hover' : 'bg-transparent'}`}>
                <img src={Users} />
            </Link>
        </div>
        <div className="gap-4 flex">
        {/* <Link to={'#'} className={`p-2 rounded-full ${path === '/users' ? 'bg-hover' : 'bg-transparent'}`}>
                <img src={Bell} />
            </Link> */}
            <Popover placement="bottom-end">
          <PopoverHandler>
            <img src={Bell} className="cursor-pointer"/>
          </PopoverHandler>
          <PopoverContent className="bg-hover flex flex-col gap-2 max-w-[300px] text-primary max-h-[600px] overflow-y-scroll border-none">
            
            
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              <span className="border-b-blue-gray-100 border-b-[1px] pb-1">This is a very beautiful popover, show some love.</span>
              
            

          </PopoverContent>
        </Popover>
          <img src={Profile} className="rounded-full w-10" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
