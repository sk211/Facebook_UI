import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import Post from './Post/Post'
import Story from './Story/Story'
import "./Main.css"

function MainPost() {
  return (
    <div>
      <Story />
        <CreatePost />
        <Post />
    </div>
        
  )
}

export default MainPost