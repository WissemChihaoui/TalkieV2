import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../comp/NavBar/NavBar/NavBar";
import ChatContent from "./ChatContent";
import { Avatar } from "@material-tailwind/react";

import Plus from "../../icons/Outline/plus.svg";

const Chat = () => {
  return (
    <div>
      <NavBar />

      {/* Edit */}

      <div class="flex flex-row antialiased text-gray-800 relative top-[77px] h-[calc(100vh-77px)]">
        <div class="flex flex-row w-96 flex-shrink-0 bg-card p-4">
          <div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
            <div class="flex flex-row items-center">
              <div class="flex flex-row items-center">
                <div class="text-xl font-semibold text-primary">Messages</div>
                <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
                  5
                </div>
              </div>
              <div class="ml-auto">
                <button class="flex items-center justify-center h-7 w-7 bg-hover text-gray-500 rounded-full">
                  <svg
                    class="w-4 h-4 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-5">
              <ul class="flex flex-row items-center justify-between">
                <li>
                  <Link
                    href="#"
                    class="flex items-center pb-3 text-xs font-semibold relative text-primary"
                  >
                    <span>All Conversations</span>
                    <span class="absolute left-0 bottom-0 h-1 w-6 bg-primary rounded-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="flex items-center pb-3 text-xs text-gray-700 font-semibold"
                  >
                    <span>Archived</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="flex items-center pb-3 text-xs text-gray-700 font-semibold"
                  >
                    <span>Starred</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div class="h-full overflow-hidden relative pt-2">
              <div class="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                <Link class="flex flex-row items-center p-4 relative ">
                  <div class="absolute text-xs text-primary right-0 top-0 mr-4 mt-3">
                    2 hours ago
                  </div>
                  <Avatar
                    size="md"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                  />
                  <div class="flex flex-col flex-grow ml-3">
                    <div class="text-sm font-medium text-primary">
                      Flo Steinle
                    </div>
                    <div class="text-xs truncate w-40 text-secondary">
                      Good after noon! how can i help you?
                    </div>
                  </div>
                  <div class="flex-shrink-0 ml-2 self-end mb-1">
                    <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                      3
                    </span>
                  </div>
                </Link>
                <Link class="flex flex-row items-center p-4">
                  <Avatar
                    size="md"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                  />
                  <div class="flex flex-col flex-grow ml-3">
                    <div class="flex items-center">
                      <div class="text-sm font-medium text-primary ">
                        Sarah D
                      </div>
                      <div class="h-2 w-2 rounded-full bg-green-500 ml-2 "></div>
                    </div>
                    <div class="text-xs truncate w-40 text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </Link>
              </div>
              <div class="absolute bottom-0 right-0 mr-2">
                <button class="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <img src={Plus} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ChatContent />
      </div>
    </div>
  );
};

export default Chat;
