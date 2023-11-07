import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import Spline from '@splinetool/react-spline';
const Updates = () => {
  return (
    <div className="bg-card p-4 flex gap-4 flex-col rounded-lg">
      <label className="text-primary text text-2xl font-semibold">Updates</label>
      <Carousel
        autoplay
        loop
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <figure className="relative h-80 w-full">
            <Spline scene="https://prod.spline.design/xFzIGbs7H3SQcibp/scene.splinecode" />
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                Check our new 3D designs, make your profile joyfull..
              </Typography>
              <Typography color="gray" className="mt-2 font-normal" as={"a"} href={"#"}>
                Check it out 
              </Typography>
            </div>
          </figcaption>
        </figure>
        <figure className="relative h-80 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                New Features Coming Soon!
              </Typography>
              <Typography color="gray" className="mt-2 font-normal" as={"a"} href={"#"}>
                Check it out 
              </Typography>
            </div>
          </figcaption>
        </figure>
        <figure className="relative h-80 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                Be Amoung Of Us !
              </Typography>
              <Typography color="gray" className="mt-2 font-normal" as={"a"} href={"#"}>
                Join Us
              </Typography>
            </div>
          </figcaption>
        </figure>
      </Carousel>
    </div>
  );
};

export default Updates;
