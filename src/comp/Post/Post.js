import { 
    Collapse,
    Popover,
    PopoverHandler,
    PopoverContent
 } from "@material-tailwind/react";
import React from "react";
import ChatSolid from "../../icons/Solid/chat.svg";
import Heart from "../../icons/Outline/heart.svg";
import Dots from "../../icons/Outline/dots-vertical.svg";
import Save from "../../icons/Outline/paper-clip.svg";
import CopyLink from "../../icons/Outline/link.svg";
import Report from "../../icons/Outline/exclamation-circle.svg";
import Block from "../../icons/Outline/ban.svg";
import { Link } from "react-router-dom";
import ProfilePopover from "../ProfilePopover/ProfilePopover";

const Post = () => {
    const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
 
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div>
      <div className="bg-card p-8 rounded-lg shadow-md max-w-lg">
      
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
          <Popover open={openPopover} handler={setOpenPopover}>
        <PopoverHandler {...triggers}>
            <img
              src="https://placekitten.com/40/40"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            </PopoverHandler>
            <PopoverContent {...triggers} className="z-50 max-w-[24rem] bg-card">
        <ProfilePopover />
      </PopoverContent>
    </Popover>
            <div>
              <Link className="text-primary font-semibold" to={'/user/id'}>John Doe</Link>
              <p className="text-secondary text-sm">Posted 2 hours ago</p>
            </div>
          </div>
          <div className="text-gray-500 cursor-pointer">
          <Popover placement="bottom-end">
          <PopoverHandler>
            <button className="hover:bg-hover rounded-full p-1">
              <img src={Dots} />
            </button>
            </PopoverHandler>
            <PopoverContent className="bg-hover z-20 flex flex-col gap-4 max-w-[300px] text-primary max-h-[600px] overflow-y-scroll border-none">
            <Link to={'#'} className='flex gap-4 items-center text-[12px]'>
            <img src={Save} className="w-5"/>
              <span>Save in your collections</span>
            </Link>
            <Link to={'#'} className='flex gap-4 items-center text-[12px]'>
            <img src={CopyLink} className="w-5"/>
              <span>Copy the post link</span>
            </Link>
            <Link to={'#'} className='flex gap-4 items-center text-[12px]'>
            <img src={Report} className="w-5"/>
              <span>Report the post</span>
            </Link>
            <Link to={'#'} className='flex gap-4 items-center text-[12px]'>
            <img src={Block} className="w-5"/>
              <span>Block this user</span>
            </Link>
            
          </PopoverContent>
        </Popover>
          </div>
        </div>
        
        
        <div className="mb-4">
          <p className="text-primary">
            Just another day with adorable kittens! 🐱{" "}
            <Link href="#" className="text-blue-600">
              #CuteKitten
            </Link>{" "}
            <Link href="#" className="text-blue-600">
              #AdventureCat
            </Link>
          </p>
        </div>

        <div className="mb-4">
          <img
            src="https://placekitten.com/400/300"
            alt="Post Image"
            className="w-full  rounded-md"
          />
        </div>

        <div className="flex items-center justify-between text-secondary">
          <div className="flex items-center space-x-2">
            <button className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1">
              <img src={Heart} />
              <span>42 Likes</span>
            </button>
          </div>
          <button
            className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1"
            onClick={toggleOpen}
          >
            <img src={ChatSolid} />
            <span>3 Comments</span>
          </button>
        </div>
        <Collapse open={open}>
          <hr className="mt-2 mb-2" />
          <p className="text-secondary font-semibold">Comment</p>
          <hr className="mt-2 mb-2" />
          <div className="mt-4">
            {/* Comment 1 */}
            <div className="flex items-center space-x-2">
              <img
                src="https://placekitten.com/32/32"
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-primary font-semibold">Jane Smith</p>
                <p className="text-gray-500 text-sm">Lovely shot! 📸</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <img
                src="https://placekitten.com/32/32"
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-primary font-semibold">Bob Johnson</p>
                <p className="text-gray-500 text-sm">
                  I can't handle the cuteness! Where can I get one?
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-2 ml-6">
              <img
                src="https://placekitten.com/40/40"
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-primary font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">
                  That little furball is from a local shelter. You should check
                  it out! 🏠😺
                </p>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Post;
