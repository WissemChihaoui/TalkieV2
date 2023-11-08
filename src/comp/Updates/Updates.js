import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import Spline from "@splinetool/react-spline";
import Update from "./Update/Update";
const Updates = () => {
  return (
    <div className="bg-card p-4 flex gap-4 flex-col rounded-lg">
      <label className="text-primary text text-2xl font-semibold">
        Updates
      </label>
      <Carousel
        autoplay
        loop
        className="rounded-xl"
        prevArrow={({handlePrev}) =>('')}
        nextArrow={({handleNext}) =>('')}
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
        <Update
          link={"/link"}
          cover={"https://prod.spline.design/vfZqMIGyanMoj-OB/scene.splinecode"}
          label="Check our new 3D designs, make your profile joyfull.."
          is3D={true}
        />
        <Update
          link={"/link"}
          cover={
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          }
          label="New Features Coming Soon!"
          is3D={false}
        />
        <Update
          link={"/link"}
          cover={
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          }
          label="New Features Coming Soon!"
          is3D={false}
        />
      </Carousel>
    </div>
  );
};

export default Updates;
