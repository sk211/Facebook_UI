import React from 'react'
import Comments from '../Comments/Comments'
import "./Post.css"

function SinglePost({image,name,time,icon,threeIcon, postText, postImg,like, likeCount,comment, commentCount, share, shareCount}) {
  return (
    <div className='mainSinglePost'>
        <div className="d-flex justify-content-between">
          <div className="whoPost">
            <div>
            <img src={image} alt="" />
            
              <span>{name}</span>
            </div>
            
            <div className="namePost">
              <div className="time">{time}<span>{icon}</span></div>

            </div>
          </div>
          <div>
            <span>{threeIcon}</span>
          </div>
        </div>
        <div className="postContant">
            <div className="posText">
                {postText}</div>
            <div className="postImage">
                <img src={postImg} alt="" />
                </div>
        </div>
        <div className="comment">
          <div className="d-flex justify-content-between">
            <div>
              <p><span>{like}</span> <span>{likeCount}</span></p>
            </div>
            <div className="shareCommnet d-flex">
                  <div className="comment"><span>{comment}</span> <span>{commentCount}</span></div>
                  <div><span>{share}</span> <span>{shareCount}</span></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SinglePost