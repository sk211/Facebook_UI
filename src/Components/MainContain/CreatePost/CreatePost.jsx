import React from 'react'
import { Card } from "react-bootstrap"
import { FaVideo } from 'react-icons/fa'
import { IoIosImages } from 'react-icons/io'
import { GoSmiley } from 'react-icons/go'
import "./CreatePost.css"

function CreatePost() {
  return (
    <div className='d-flex  pt-4 createPost'>
      <Card className='postCard'>
        <div className="postInput">
          <div className="img">
            <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-1/155325594_1352037621821099_8506111411724012394_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHcXLIkNALejmIYvzOtddKJeb8dEqE_oCx5vx0SoT-gLGGY5h20lLkX6vO04QNkhi1EMgS_VqOoT_o_mSEifsaO&_nc_ohc=y2o1UoBI1TEAX8rR1is&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-YX_Vv6TDYuW2pAmRup-5c2umZnnwxOp8RN3YHeOOVUg&oe=63060E63" alt="" />
          </div>
          <div className="input">
            <input type="text" placeholder={`Whats on you' Mind Sujan?`} />
          </div>
        </div>
        <hr />
        <div className=' createPostSecond'>
          <div className='d-flex'>
            <span className='text-danger'><FaVideo /> </span>
            <p>live Video</p>
          </div>
          <div className='d-flex'>
            <span className='text-success'><IoIosImages /> </span>
            <p>Photo/video</p>
          </div>
          <div className='d-flex'>
            <span className='text-warning'><GoSmiley /> </span>
            <p>Photo/video</p>
          </div>
        </div>
      </Card>

    </div>
  )
}

export default CreatePost