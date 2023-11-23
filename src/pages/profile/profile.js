import React from 'react'
import NavBar from '../../comp/NavBar/NavBar/NavBar'
import Spline from "@splinetool/react-spline";
import Profile from "../../media/eminem.jpg";
const profile = () => {
  return (
    <div>
        <NavBar />
        <div className='bg-bg w-screen h-screen py-4 px-16 sticky'>
            <div className='w-full h-full '>
                <section className='relative w-full mt-24 h-full flex items-center flex-col'>
                    <figure className='rounded-[36px] w-full h-80'>
                        <Spline scene="https://prod.spline.design/vfZqMIGyanMoj-OB/scene.splinecode" className='rounded-[36px]'/>
                    </figure>
                    <div className='bg-card w-[80%] h-24 absolute top-60 rounded-sm flex'>
                        <div className='flex items-center p-2 gap-4'>
                            <img src={Profile} className="w-[88px] h-full object-cover rounded-sm"/>
                            <div className='flex flex-col  h-full'>
                                <p className='text-3xl font-bold text-primary'>Mouhamed Ali Abdallah</p>
                                <p className='text-[16px] text-secondary'>Tunisia, 22yo</p>
                                <p className='text-[16px] text-secondary'>Tunisia, 22yo</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default profile