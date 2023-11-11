import React from "react";
import { Avatar } from "@material-tailwind/react";
const MessageReceived = ({content}) => {
  return (
    <div class="col-start-6 col-end-13 p-1 rounded-lg">
    <div class="flex items-center justify-start flex-row-reverse">
      <Avatar
        size="sm"
        variant="circular"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="tania andrew"
      />
      <div class="relative mr-3 text-sm bg-blue-800 text-primary py-2 px-4 shadow rounded-xl">
        <div>
            {content}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MessageReceived;
