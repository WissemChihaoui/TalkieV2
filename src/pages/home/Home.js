import React from "react";
import FriendsList from "../../comp/HomeComp/FriendsList/FriendsList";
import PostField from "../../comp/InputFields/PostField/PostField";
import NavBar from "../../comp/NavBar/NavBar/NavBar";
import NavBarHome from "../../comp/NavBar/NavBarHome/NavBarHome";
import Post from "../../comp/Post/Post";
import Updates from "../../comp/Updates/Updates";

import posts from "../../lib/postsExample";
const Home = () => {
  return (
    <div>
      {/* <NavBarHome /> */}
      <NavBar />
      <div className="py-4 relative top-[77px]">
        <div className="grid grid-cols-4 mx-0">
          <div className="text-primary">
            <div className="fixed w-[20%]">
              <Updates />
            </div>
            
          </div>
          <div className="col-span-2 flex justify-center">
            <div className="w-[60%] flex items-center justify-center flex-col gap-4 ">
              <PostField />
              {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          avatar={post.avatar}
          postedTime={post.postedTime}
          content={post.content}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
            </div>
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
