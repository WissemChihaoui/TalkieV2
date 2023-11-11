import { Avatar } from "@material-tailwind/react";
import React from "react";
import Phone from "../../icons/Solid/phone.svg";
import User from "../../icons/Solid/user.svg";
import DotsVertical from "../../icons/Solid/dots-vertical.svg";
import Photograph from "../../icons/Solid/photograph.svg";
import Send from "../../icons/Solid/paper-airplane.svg";
import Microphone from "../../icons/Solid/microphone.svg";
import { Link } from "react-router-dom";
import MessageSent from "./ChatData/MessageSent";
import MessageReceived from "./ChatData/MessageReceived";
const ChatContent = () => {
  return (
    <React.Fragment>
      <div class="flex flex-col h-full w-full bg-transparent px-4 py-6">
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
                <a
                  href="#"
                  class="flex items-center justify-center bg-card hover:bg-hover h-10 w-10 rounded-full"
                >
                  <img src={DotsVertical} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="h-full overflow-hidden py-4">
          <div class="h-full overflow-y-auto">
            <div class="grid grid-cols-12 gap-y-2">
              
              <div class="col-start-1 col-end-8 p-3 rounded-lg">
                <MessageSent />
              </div>
              
              <div class="col-start-6 col-end-13 p-3 rounded-lg">
                <MessageReceived />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
            <button class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
              <img src={Microphone} />
            </button>
            <div class="w-full">
              <input
                type="text"
                class="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center bg-transparent text-primary"
                placeholder="Type your message...."
              />
            </div>
            <div class="flex flex-row">
              <button class="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
                <img src={Photograph} />
              </button>
            </div>
          </div>
          <div class="ml-6">
            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-card hover:bg-hover">
              <img src={Send} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatContent;
