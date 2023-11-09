import React, { useState } from "react";

import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

import Photograph from "../../../icons/Solid/photograph.svg";
import Hashtag from "../../../icons/Solid/hashtag.svg";
import XMark from '../../../icons/Outline/x.svg'

import { topicsHashtag } from "../../../lib/hashtag.js";
import DragDropImage from "../DragDropImage/DragDropImage";

const PostField = () => {
  const [textareaContent, setTextareaContent] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(topicsHashtag);
  const [displayLimit, setDisplayLimit] = useState(5);
  const totalItems = topicsHashtag.length;

  // Function to handle search input changes and filter the items
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filtered = topicsHashtag.filter((item) =>
      item.toLowerCase().includes(inputValue)
    );
    setSearchValue(inputValue);
    setFilteredItems(filtered);
  };
  const [openPickImage, setOpenPickImage] = useState(false);

  const handleOpenPickImage = () => setOpenPickImage(!openPickImage);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleRemoveImage = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow-md w-full flex flex-col gap-4">
      <textarea
        maxLength={1000}
        placeholder="Say Somthing"
        rows={4}
        name="password"
        className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-none  bg-hover bg-clip-padding px-3 py-2 font-normal text-primary transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow resize-none"
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
      ></textarea>
      <div className="flex justify-between">
        <div className="flex  gap-4">
          <Button className="p-3 bg-transparent" onClick={handleOpenPickImage}>
            <img src={Photograph} />
          </Button>

          <Dialog open={openPickImage} handler={handleOpenPickImage} className='bg-bg'>
            <DialogHeader>
              <Typography variant="h5" className="text-primary">
                Pick images for your post
              </Typography>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
              <DragDropImage onImagesChange={setSelectedImages}/>
              <div className="w-full">
              <Typography color="white" variant="p">
                Your Picks
              </Typography>
              <div className="flex gap-1">
              {selectedImages.map((image, index) => (
                <div className="relative">
                  <img src={XMark} className="absolute right-0 bg-hover rounded-full cursor-pointer" onClick={() => handleRemoveImage(index)}/>
                  <img key={index} src={image} alt={`Selected Image ${index}`} className="mb-2 rounded-lg w-full h-14 object-cover" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
            ))}
              </div>
              </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="gradient" onClick={handleOpenPickImage} color="blue">
                Submit
              </Button>
            </DialogFooter>
          </Dialog>

          <Menu
            dismiss={{
              itemPress: false,
            }}
          >
            <MenuHandler>
              <Button className="p-3 bg-transparent">
                <img src={Hashtag} />
              </Button>
            </MenuHandler>
            <MenuList className="bg-card text-primary">
              <Input
                label="Search"
                value={searchValue}
                onChange={handleSearchInputChange}
                className="text-primary bg-hover bg-opacity-100"
                containerProps={{
                  className: "mb-4",
                }}
              />
              {filteredItems.slice(0, displayLimit).map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setTextareaContent(
                      (prevContent) => prevContent + `#${item} `
                    );
                  }}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
        <Button color="blue">Post</Button>
      </div>
    </div>
  );
};

export default PostField;
