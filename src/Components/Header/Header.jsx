import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { MdGroups } from 'react-icons/md';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-md-3 header_left d-flex align-items-center">
          <div className="logo">
          <Link to ="/home">
          <FaFacebook className='facebook_icon' />
          </Link>
          </div>
          <div className='header_search '>
         
            <BsSearch  className='facebook_search'/>

          <input type="text" placeholder='Search Facebook'  className='search_icon'/>
          </div>
        </div>
        <div className="col-md-5 mx-auto px-5 d-flex justify-content-between header_main">
          <Link to="/home">
            <AiFillHome  />
          </Link>
          <Link to="/home">
            <FaUserFriends  />
          </Link>
          <Link to="/home">
            <MdOutlineOndemandVideo />
          </Link>
          <Link to="/home">
            <AiOutlineShop />
          </Link>
          <Link to="/home">
            <MdGroups />
          </Link>

        </div>
        <div className="col-md-2 offset-2 header_right">
          <div className="icon">
          <BsFillGrid3X3GapFill />
          </div>
          <div className="icon">
          <BsMessenger />
          </div>
          <div className="icon">
          <IoIosNotifications />
          </div>
          <div className="icon">
          <CgProfile />
          {/* <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-1/155325594_1352037621821099_8506111411724012394_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHcXLIkNALejmIYvzOtddKJeb8dEqE_oCx5vx0SoT-gLGGY5h20lLkX6vO04QNkhi1EMgS_VqOoT_o_mSEifsaO&_nc_ohc=pBcgKu0zvVwAX-lG8pk&_nc_ht=scontent.fdac138-1.fna&oh=00_AT84tlpUStmkiLSOkanWD94C6gh0mtq8elCbcZe4Dgq-FA&oe=630A02E3" alt="" /> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header