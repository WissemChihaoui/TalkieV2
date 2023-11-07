import React from "react";
import { 
    Button,
    Avatar,
    Typography, } from "@material-tailwind/react";
import AddFriend from '../../icons/Outline/user-add.svg'
import SendMessage from '../../icons/Outline/paper-airplane.svg'
import { Link } from "react-router-dom";
const ProfilePopover = () => {
  return (
    <React.Fragment>
      <div className="mb-2 flex items-center gap-4">
        <Avatar
          size="md"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        {/* <Button variant="gradient" size="sm" className="font-medium capitalize">
          Follow
        </Button> */}
        <Typography
        variant="h5"
        
        className="mb-2 flex flex-col gap-1 font-medium text-primary"
      >
        <Link to={'/user/id'}>Tania Andrew</Link>
        <span className="text-sm font-medium text-secondary">
          Tunisia
        </span>
      </Typography>
      </div>
      
      <Typography
        variant="small"
        color="gray"
        className="font-normal text-secondary"
      >
        Frontend Developer • Major interest in Web Development: motivated to
        achieve measurable results, to deepen my knowledge and improve my
        skills.
      </Typography>
      <div className="mt-6 flex items-center justify-between  border-t border-blue-gray-50 pt-4">
        <Button
          variant="small"
          color="gray"
          className="flex items-center gap-2 text-sm font-normal text-secondary"
        >
          <img src={AddFriend} className="w-4"/>
          <span>Add Friend</span>
        </Button>
        <Button
          variant="small"
          color="gray"
          className="flex items-center gap-2 text-sm font-normal text-secondary"
        >
          <img src={SendMessage} className="w-4"/>
          <span>Message</span>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProfilePopover;
