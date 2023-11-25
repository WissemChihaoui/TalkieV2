import React from "react";

import { Link } from "react-router-dom";
const hashtags = [
  "Travel",
  "Work",
  "Bayern Munich",
  "Sports",
  "League of legends",
  "e-sports",
  "Tunisia",
  "Travel",
  "Work",
  "Bayern Munich",
  "Sports",
  "League of legends",
  "e-sports",
  "Tunisia",
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
      <div className="flex flex-wrap pt-4 gap-y-2 justify-between">
        {hashtags.map((hashtag, index) => (
          <Link key={index} to={`/hashtag/${hashtag}`}>
            <div className={`py-1 px-2 rounded-full ${getColorGradientClass(index)}`}>
              {hashtag}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularHashtags;
