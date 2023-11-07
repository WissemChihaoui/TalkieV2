import React from "react";
import { Link } from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const FriendsList = () => {
  
  return (
    <div className="flex flex-col gap-4">
      <label className="text-primary text text-2xl font-semibold">
        Friends
      </label>
      <div className="flex flex-col gap-2">
    
        
            <Link to={"/user/id"}>
              <FriendItem />
            </Link>
            <Link to={"/user/id"}>
              <FriendItem />
            </Link>
            <Link to={"/user/id"}>
              <FriendItem />
            </Link>
            <Link to={"/user/id"}>
              <FriendItem />
            </Link>
            <Link to={"/user/id"}>
              <FriendItem />
            </Link>
          
        
      </div>
    </div>
  );
};

export default FriendsList;
