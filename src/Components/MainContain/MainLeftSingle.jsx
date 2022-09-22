import React from 'react'
import { Link } from 'react-router-dom'

function MainLeftSingle({icon, name, iconFont}) {
  return (
    <div className='main_single'>
            <ul>
                <li>
                    <Link to="/" className='d-flex'>
                        <div className='main_left_icon'><span>{iconFont}</span> <img src={icon} alt="" /></div>
                        <div>{name}</div>
                    </Link>
                </li>
            </ul>
    </div>
    
  )
}

export default MainLeftSingle