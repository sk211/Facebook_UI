import React from 'react'
import { Link } from 'react-router-dom'

function MainRightSingle({ img, name, website }) {
    return (
        <div className='main_single_right'>
            <ul>
                <li>
                    <Link to="/" className='main_right_single '>
                        <div className="d-flex">
                            <div className='main_right_icon'> <img src={img} alt="" />
                            </div>
                            <div className="sponce ">
                                <p className='sponce_top'>{name}</p>
                                <span className='sponce_bottom'>{website}</span>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default MainRightSingle