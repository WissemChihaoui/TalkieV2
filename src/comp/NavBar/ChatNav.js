import React from "react";
import Phone from "../../icons/Solid/phone.svg";
import User from "../../icons/Solid/user.svg";
import DotsVertical from "../../icons/Solid/dots-vertical.svg";
import Trash from "../../icons/Outline/trash.svg";
import Report from "../../icons/Outline/exclamation-circle.svg";
import Block from "../../icons/Outline/exclamation.svg";
import { 
    Avatar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
     } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ChatNav = () => {
  return (
    <div>
      <div class="flex flex-row items-center py-4 px-6 rounded-2xl shadow bg-card">
        <Avatar
          size="sm"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div class="flex flex-col ml-3">
          <Link to={"/user/id"} class="font-semibold text-sm text-primary">
            Flo Steinle
          </Link>
          <div class="text-xs text-secondary">Active</div>
        </div>
        <div class="ml-auto">
          <ul class="flex flex-row items-center space-x-2">
            <li>
              <a
                href="#"
                class="flex items-center justify-center bg-card hover:bg-hover h-10 w-10 rounded-full"
              >
                <img src={Phone} />
              </a>
            </li>
            <li>
              <Link
                to={"/user/id"}
                class="flex items-center justify-center bg-card hover:bg-hover h-10 w-10 rounded-full"
              >
                <img src={User} />
              </Link>
            </li>
            <li>
              
              <Menu placement="bottom-start">
      <MenuHandler>
        <a class="flex items-center justify-center bg-card hover:bg-hover h-10 w-10 rounded-full cursor-pointer"><img src={DotsVertical} /></a>
      </MenuHandler>
      <MenuList className="bg-card border-hover text-primary ">
        <MenuItem className="flex gap-2  items-center hover:bg-blue-500">
            <img src={Report}/>
            <label>Report</label>
        </MenuItem>
        <MenuItem className="flex gap-2 hover:bg-hover items-center">
            <img src={Trash}/>
            <label>Delete</label>
        </MenuItem>
        <MenuItem className="flex gap-2 hover:bg-hover items-center">
            <img src={Block}/>
            <label>Block</label>
        </MenuItem>
      </MenuList>
    </Menu>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatNav;
