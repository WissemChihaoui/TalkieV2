import React from "react";
import FriendsList from "../../comp/HomeComp/FriendsList/FriendsList";
import NavBar from "../../comp/NavBar/NavBar/NavBar";
import NavBarHome from "../../comp/NavBar/NavBarHome/NavBarHome";
import Post from "../../comp/Post/Post";
import Updates from "../../comp/Updates/Updates";
const Home = () => {
  return (
    <div>
      {/* <NavBarHome /> */}
      <NavBar />
      <div className="py-4 relative top-[77px]">
        <div className="grid grid-cols-4 mx-0">
          <div className="text-primary">
            <div className="fixed w-[25%]">
              <Updates />
            </div>
            
          </div>
          <div className="flex items-center col-span-2 justify-center flex-col gap-4">
            <Post />
            <Post />
            <Post />
          </div>
          <div className="text-primary">
            <div className="fixed w-[20%] right-0">
              <FriendsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
