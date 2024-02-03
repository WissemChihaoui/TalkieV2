import React from 'react'
import Post from '../../../comp/Post/Post'
import posts from "../../../lib/postsExample"
const Feed = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          avatar={post.avatar}
          postedTime={post.postedTime}
          content={post.content}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  )
}

export default Feed