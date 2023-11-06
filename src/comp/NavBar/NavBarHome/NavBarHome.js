import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../media/logo.png';
const NavBarHome = () => {
  return (
    <div className='m-0 bg-card w-full'>
        <div className='flex px-12 py-4 justify-between text-primary items-center'>
            <div className='w-8'>
                <img src={Logo}/>
            </div>
            <div className='gap-2 flex'>
                <Link to='/auth/login' className='bg-gradient-to-tl from-blue-600 to-cyan-400 py-2 px-6 rounded hover:from-blue-400 hover:to-cyan-300 ease-in-out duration-100 font-bold text-primary'>Login</Link>
                <Link to='/auth/register' className='bg-purple-500 py-2 px-6 rounded hover:bg-purple-400 ease-in-out duration-100 font-bold text-primary'>Creat Account</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBarHome