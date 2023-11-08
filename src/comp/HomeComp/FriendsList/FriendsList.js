import React from "react";
import { Link } from "react-router-dom";

import FriendItem from "./FriendItem/FriendItem";

const FriendsList = () => {
  return (
    <div className="flex flex-col gap-4 px-4 bg-card p-4 rounded-lg">
      <div className="flex justify-between items-center">
      <label className="text-primary text text-2xl font-semibold">
        Friends
      </label>
      <Link to={'/friends'} className="text-secondary text-sm">
        See all
      </Link>
      </div>
      
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-scroll overflow-hidden">
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
    </div>
  );
};

export default FriendsList;
