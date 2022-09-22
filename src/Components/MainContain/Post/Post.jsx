import React from 'react'
import { BiWorld } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import Comments from '../Comments/Comments';

import SinglePost from './SinglePost';



function Post() {
  return (
    <div className='mainPostShow'>
        <SinglePost 
        image={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/287770373_2326429214186142_2824432023763436133_n.jpg?stp=c11.2.40.40a_cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeF6I2M3yl6JwKAZtDqap37jNK2brff_I5U0rZut9_8jlQPYQxR8-nUu-tBD9Ti6w_egFRUof29ylf3EqgtrqQw1&_nc_ohc=mEbosT51ywsAX-q633U&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_18EcBtUC01nhCaEv6Qqb45hdHLyCp0mccJD4pVmFV6A&oe=62F40293`}
        name= {"Sumit Shaha"}
        time={"1h "}
        icon={<BiWorld />}
        threeIcon={<BsThreeDots />}
        postText={ `iBOS Limited, the fastest-growing Software Company in Bangladesh, sent their full front-end team to join Learn with Sumit - LWS's professional redux course - "Think in a Redux way". 
        Thanks to the iBOS management team for believing in us and all the positive support. Special thanks to Md Al-Amin vai, Chief Project Officer at iBOS, for arranging everything properly. I am looking forward to many more ventures together.
        If you want to think in a Redux way, enroll in our first professional paid Redux course before 10 August 2022, 11:59PM. Check https://learnwithsumit.com for more details.
        #IBOS #learnwithsumit #think_in_a_redux_way`}
        postImg={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/298284921_2370056943156702_762218322277825355_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHqM0EHDMZYnuGqL5n9zY7ID4VUl7rrVR0PhVSXuutVHReEeEbqjyPKxg0V1HXy3IUqlPiYx3alY2dmV-QuHND7&_nc_ohc=HdPM8PWWIfcAX94KEMn&_nc_ht=scontent.fdac138-1.fna&oh=00_AT9YEMFb1H7QpLtMOOOq9C2OZegC_MUSLETRGbofMdGICw&oe=62F4ECBB`}

        like={`like`}
        likeCount={"50"}

        commentCount={`12`}
        comment={`Comment`}
        shareCount={`10`}
        share="Share"

       

        

        />
        <SinglePost 
        image={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/297860867_1114720129417754_8746214337987165694_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF1lyfMv7wOww_rH4Omkio1AL5X8NxIMXMAvlfw3Egxc3L9qMdHv6WITdzoUha9tgoA8pmVUB7EC8VuhbKLB0Kq&_nc_ohc=YtTVhB5F46sAX8tT7mG&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8yoZUn7zMi2jJo9rS0_kNQ84FB9I_SaAPWJ8w5PJFr_g&oe=62F34F0A`}
        name= {"Pooja Banerjee"}
        time={"1h "}
        icon={<BiWorld />}
        threeIcon={<BsThreeDots />}
        postText={ "this is text"}
        postImg={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/297860874_1115173869372380_8215227422917000644_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHkvGjcE7QZJejkYsq8JqyL_lj2owLx1Hf-WPajAvHUd41A2Flb-6pNcfP6W-ZpBGEbf_Od-pkWIfbvdp-TmaZP&_nc_ohc=ZA_31qrbgQ8AX8DdBfc&_nc_oc=AQlOHK6dontxv0ODAJF61xzQcb8Q4vUZXbbtmbHnS9Edls3jJxTh_d9nuXHTYMC2iiQ&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_WLJNjKJC-ai5yrd_85qVWbsceZc-09lOBfQDk_StT7A&oe=62F51C58`}
        like={`like`}
        likeCount={"50"}

        commentCount={`12`}
        comment={`Comment`}
        shareCount={`10`}
        share="Share"

        />
        <SinglePost 
        image={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/289176697_1880208018851349_3803523723187531589_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeGnYA6OFscLdBKz1B1ttxj0xCkJmrmVZBPEKQmauZVkEzdfdR7n-iPlR4rHCxe4zhKqwsnVjaN9YDY7YM3Jlp2r&_nc_ohc=OLKepvQ2pmoAX-m4ELx&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8gH86r1B1Acu8WZo0RVd72NHEZi4VPmvXQqd1WYRxBFw&oe=62F23A92`}
        name= {"Shiren Shila Akter"}
        time={"1h "}
        icon={<BiWorld />}
        threeIcon={<BsThreeDots />}
        postText={ "this is text"}
        postImg={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/297944999_181606634331792_5485369539117194267_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFUc3kPqISbTn4ZToBlv4Vt0mzWxv7-LUTSbNbG_v4tRFLpws9DQi0iM6cD77Yr7gXzFdIU4UCido-2ie_WOeMe&_nc_ohc=0wQ3WSTfu2oAX9715F9&_nc_ht=scontent.fdac138-1.fna&oh=00_AT9AnTvIzfwSa4wFREobIsQGAEgV5Lj4zj4rszcUrK0lqg&oe=62F35E1C`}
        like={`like`}
        likeCount={"50"}

        commentCount={`12`}
        comment={`Comment`}
        shareCount={`10`}
        share="Share"

        />
    </div>
  )
}

export default Post