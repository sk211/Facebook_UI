import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "./Story.css"

function Story() {
  return (
    <div className='story_section d-flex ml-5'>
        <Link to="/">
        <Card>
            <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-1/155325594_1352037621821099_8506111411724012394_n.jpg?stp=c2.0.160.160a_dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHcXLIkNALejmIYvzOtddKJeb8dEqE_oCx5vx0SoT-gLGGY5h20lLkX6vO04QNkhi1EMgS_VqOoT_o_mSEifsaO&_nc_ohc=pBcgKu0zvVwAX-lG8pk&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-ijH0EOj21UQaBXrriM_-OCkjF6QgLdaHQFjnJTNcilw&oe=630A02E3" alt="" />
            <p clsssName="icon">
            <BsFillPlusCircleFill />
            </p>
            <h6>Create a Story</h6>
        </Card>
        </Link>
        <Link to="/">
        <Card className="story">
            
            <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/285157956_1184869882335892_5067237061970449721_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHTI9ZR_FxWGM009R2p06_uXgBDMrFTdt5eAEMysVN23nMMTak-yRXyLl_1rxN43wZK9Tdq5Y6riWLKH9pDpTyF&_nc_ohc=jsW_jGuhcwAAX8xs-g0&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8nFxpj38mL_CJBLBCqhUkpwqG3f8crbDds0jVlrKNXfA&oe=62EA9846" alt="" />
            
            <h5>Emon Majumder</h5>
            
        </Card>
        </Link>
        <Link to="/">
        <Card className="story">
            
            <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/271007337_3125396654454273_7086390343358881840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEM_aWC47ceSBnWMQxlR2YDPhdBgyT6OvE-F0GDJPo68fYa73NuDDb9czTmhsG4nXz5HoKsdmDvCpcF58DJscDE&_nc_ohc=QgfsSxzBmyQAX-7l3Bs&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-FShUOIZ1rOailSYDJ4QrZh04Bt8otdGF65HPCiWSbAw&oe=62EBCB63" alt="" />
            
            <h5>Sujit Majumder</h5>
            
        </Card>
        </Link> 
        <Link to="/">
        <Card className="story">
            
            <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/45063132_349790852445106_8021301275859615744_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHzCbzGclX-uA1EcbrLlccHAZWm1Z0ru7cBlabVnSu7t1H5Tp8_dddIemeHL_WwsGPBt3X1WZEUt3emhmxyOfSY&_nc_ohc=ljvhXMFWR3IAX-Sa9OJ&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_19T0n1MgfK9wAMk5_fVoBu_SVKrdZDYDwFQdDc4AlWg&oe=630C7B24" alt="" />
            
            <h5>Bijoy Bromik</h5>
            
        </Card>
        </Link>
        <Link to="/">
        <Card className="story">
            
            <img src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2022/07/16/roni-protest.jpg?itok=Zj5F_PMa" alt="" />
            
            <h5>Md Rony</h5>
            
            
        </Card>
        </Link>

    </div>
  )
}

export default Story