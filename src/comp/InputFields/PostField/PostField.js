import React, { useState } from "react";

import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";

import Photograph from "../../../icons/Solid/photograph.svg";
import Hashtag from "../../../icons/Solid/hashtag.svg";
import {topicsHashtag} from '../../../lib/hashtag.js'


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
          <Button className="p-3 bg-transparent">
            <img src={Photograph} />
          </Button>
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
