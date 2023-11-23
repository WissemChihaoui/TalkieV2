import {
  Collapse,
  Popover,
  PopoverHandler,
  PopoverContent,
  Dialog,
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
import ImageView from "../ImageView/ImageView";

import { formatHashtags } from "../../lib/hashtagUtils";

// import comment input
import CommentField from "../InputFields/Comment/Comment";

const Post = ({
  username,
  avatar,
  postedTime,
  content,
  imageUrl,
  likes,
  comments,
}) => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  //Dialog
  const [openImageView, setOpenImageView] = React.useState(false);

  const handleOpenImageView = () => setOpenImageView((cur) => !cur);

  return (
    <div className="bg-card p-4 rounded-lg shadow-md w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Popover
            open={openPopover}
            handler={setOpenPopover}
            placement={"bottom"}
          >
            <PopoverHandler {...triggers}>
              <img
                src={avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </PopoverHandler>
            <PopoverContent
              {...triggers}
              className="z-50 max-w-[24rem] bg-card"
            >
              <ProfilePopover />
            </PopoverContent>
          </Popover>
          <div>
            <Link
              className="text-primary font-semibold"
              to={`/user/${username}`}
            >
              {username}
            </Link>
            <p className="text-secondary text-sm">{postedTime}</p>
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
              <Link to={"#"} className="flex gap-4 items-center text-[12px]">
                <img src={Save} className="w-5" />
                <span>Save in your collections</span>
              </Link>
              <Link to={"#"} className="flex gap-4 items-center text-[12px]">
                <img src={CopyLink} className="w-5" />
                <span>Copy the post link</span>
              </Link>
              <Link to={"#"} className="flex gap-4 items-center text-[12px]">
                <img src={Report} className="w-5" />
                <span>Report the post</span>
              </Link>
              <Link to={"#"} className="flex gap-4 items-center text-[12px]">
                <img src={Block} className="w-5" />
                <span>Block this user</span>
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-primary">{formatHashtags(content)}</p>
      </div>

      <div className="mb-4">
        <img
          onClick={handleOpenImageView}
          src={imageUrl}
          alt="Post Image"
          className="w-full  rounded-md h-full"
        />
      </div>
      <Dialog size="xl" open={openImageView} handler={handleOpenImageView}>
        <ImageView avatar={avatar} username={username} imageUrl={imageUrl} likes={likes} numberComments={comments.length}/>
      </Dialog>
      <div className="flex items-center justify-between text-secondary">
        <div className="flex items-center space-x-2">
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1">
            <img src={Heart} />
            <span>{likes} Likes</span>
          </button>
        </div>
        <button
          className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1"
          onClick={toggleOpen}
        >
          <img src={ChatSolid} />
          <span>{comments.length} Comments</span>
        </button>
      </div>
      <Collapse open={open}>
        <hr className="mt-2 mb-2" />
        <CommentField />
        <p className="text-secondary font-semibold">Comments</p>
        <hr className="mt-2 mb-2" />
        <div className="mt-4">
          {comments.map((comment, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <img
                src={comment.avatar}
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-primary font-semibold">{comment.username}</p>
                <p className="text-gray-500 text-sm">{comment.commentText}</p>
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default Post;
