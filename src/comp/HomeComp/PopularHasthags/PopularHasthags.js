import React from "react";

import { Link } from "react-router-dom";
const hashtags = [
  "Travel",
  "Work",
  "Bayern_Munich",
  "Sports",
  "League_of_legends",
  "e-sports",
  "Travel",
  "Work",
  "Bayern_Munich",
  "Sports",
  "League_of_legends",
  "e-sports",
  
];
const getColorGradientClass = (index) => {
  const colors = [
    ['from-blue-500', 'to-blue-700'],
    ['from-red-500', 'to-red-700'],
    ['from-green-500', 'to-green-700'],
    ['from-orange-500', 'to-orange-700'],
    ['from-purple-500', 'to-purple-700'],
    ['from-indigo-500', 'to-indigo-700'],
    ['from-pink-500', 'to-pink-700'],
    ['from-blue-500', 'to-blue-700'],
    ['from-red-500', 'to-red-700'],
    ['from-green-500', 'to-green-700'],
    ['from-orange-500', 'to-orange-700'],
    ['from-purple-500', 'to-purple-700'],
    ['from-indigo-500', 'to-indigo-700'],
    ['from-pink-500', 'to-pink-700'],
  ];

  const [fromColor, toColor] = colors[index % colors.length];
  return `bg-gradient-to-br ${fromColor} ${toColor}`;
};

const PopularHashtags = () => {
  return (
    <div className="p-4 pr-0">
      <label className="text-primary text text-2xl font-semibold">
        Popular Hashtags
      </label>
      <div className="grid grid-cols-2 gap-2 flex-wrap pt-4 gap-y-2 justify-between">
        {hashtags.map((hashtag, index) => (
          <Link key={index} to={`/hashtag/${hashtag}`} className={`${getColorGradientClass(index)} py-1 px-2 cursor-pointer  rounded-md hover:scale-105 transition duration-500`}>
            <div className={`flex flex-col cursor-pointer`}>
              <label className="font-bold cursor-pointer">{hashtag}</label>
              <span className="text-left text-primary cursor-pointer text-xs">244 Posts</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularHashtags;
