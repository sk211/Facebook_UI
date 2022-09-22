import React from 'react'
import MainLeft from './MainLeft'
import MainPost from './MainPost'
import MainRight from './MainRight'

function MainContainer() {
    return (
        <div className='container-fluid main'>
            <div className="row">
                <div className="col-md-3 main_left">
                    <MainLeft />
                </div>
                <div className="col-md-5 mx-auto mainPost">
                    <MainPost />
                </div>
                <div className="col-md-3  main_Right">
                    <MainRight />
                </div>
            </div>
        </div>

    )
}

export default MainContainer