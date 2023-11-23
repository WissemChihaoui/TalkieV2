import React from "react";
import Button from "@material-tailwind/react";

const Comment=() => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md w-full flex flex-col gap-4">
      <h5 className="text-white">Add your comment</h5>
      <textarea maxLength={1000} placeholder="Your Comment" rows={2} name="commentArea" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-none  bg-hover bg-clip-padding px-3 py-2 font-normal text-primary transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow resize-none"></textarea>
      <div className="flex justify-end">
        {/* <Button color="blue">Comment</Button> */}
        <button type="button" className="bg-success text-white">Add</button>
      </div>
    </div>
  );
};

export default Comment; 