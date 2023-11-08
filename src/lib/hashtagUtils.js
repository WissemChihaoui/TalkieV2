import React from "react";
import { Link } from "react-router-dom";

function formatHashtags(text) {
  if (typeof text !== "string") {
    return text;
  }

  const words = text.split(" ");
  const formattedText = words.map((word, index) => {
    if (word.startsWith("#")) {
      // Remove any punctuation from the hashtag
      const hashtag = word.replace(/[^a-zA-Z0-9_]/g, "");

      return (
        <Link to={`/hashtag/${hashtag}`} className="text-blue-600" key={index}>
          {word}{" "}
        </Link>
      );
    } else {
      return word + " ";
    }
  });

  return formattedText;
}

export { formatHashtags };