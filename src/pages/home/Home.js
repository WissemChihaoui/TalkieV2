import React from 'react'
import NavBar from '../../comp/NavBar/NavBar/NavBar'
import NavBarHome from '../../comp/NavBar/NavBarHome/NavBarHome'
import Post from '../../comp/Post/Post'
const Home = () => {
  return (
    <div>
        {/* <NavBarHome /> */}
        <NavBar />
        <div className='py-4 relative top-[77px]'>

        
        <div className='flex items-center justify-center flex-col gap-4'>
        <Post />
        <Post />
        <Post />
        </div>
        </div>
    </div>
  )
}

export default Home