import React from 'react'
import { Typography } from "@material-tailwind/react";
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
const Update = (props) => {
    console.log(props)
  return (
    <Link to={props.link}>
    <figure className="relative h-40 w-full">
        {props.is3D ? (
            <Spline scene={props.cover} />
        )
        :
        (
            <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={props.cover}
            alt="Update Cover"
          />
        )}
            {/*  */}
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography color="blue-gray" className='text-[12px] font-bold'>
                {props.label}
              </Typography>
              <Typography color="gray" className="mt-2 font-normal text-[10px]">
                Check it out 
              </Typography>
            </div>
          </figcaption>
        </figure>
        </Link>
  )
}

export default Update