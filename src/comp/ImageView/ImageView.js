import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ImageView = ({
    avatar,
    username,
    imageUrl,
    likes,
    numberComments
  }) => {
  const handleDownloadClick = () => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "talkie-image.jpg";
        link.click();
      });
  };
  return (
    <React.Fragment>
      <DialogHeader className="justify-between bg-card">
        <div className="flex items-center gap-3">
          <Avatar
            size="sm"
            variant="circular"
            alt={username}
            src={avatar}
          />
          <div className="-mt-px flex flex-col">
            <Link to={"/user/id"}>
              <Typography
                variant="small"
                color=""
                className="font-medium text-primary"
              >
                {username}
              </Typography>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button color="blue" size="sm" onClick={handleDownloadClick}>
            Download
          </Button>
        </div>
      </DialogHeader>
      <DialogBody className="bg-card">
        <img
          alt="nature"
          className="h-[48rem] w-full rounded-lg object-cover object-center"
          src={imageUrl}
        />
      </DialogBody>
      <DialogFooter className="justify-between bg-card">
        <div className="flex items-center gap-16">
          <div>
            <Typography variant="small" color="white" className="font-normal">
              Likes
            </Typography>
            <Typography color="blue-white" className="font-medium">
              {likes}
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="white" className="font-normal">
              Comments
            </Typography>
            <Typography color="blue-white" className="font-medium">
              {numberComments}
            </Typography>
          </div>
        </div>
        <Button
          size="sm"
          variant="outlined"
          color="blue-gray"
          className="mr-5 flex items-center text-secondary"
        >
          Save into collections
        </Button>
      </DialogFooter>
    </React.Fragment>
  );
};

export default ImageView;
