import React from 'react'
import MainRightSingle from './MainRightSingle'

function MainRight() {
  return (
    <div className='mainRight'>
      <h6>Sponsored</h6>
      <MainRightSingle img={`https://scontent.fdac138-1.fna.fbcdn.net/v/t45.1600-4/292422586_23851483671260065_5635533690258740617_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=1&ccb=1-7&_nc_sid=67cdda&_nc_eui2=AeEZUoOd1KD17DwfqAcDaI_Z9FAj1-Ca04b0UCPX4JrThgWImFAVAT56hSxR7wTpNenURXMqky1CoU21m_hhHVN_&_nc_ohc=YQvx4_Yf30IAX9EKkOt&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8JXH-GpawrxcZJqifYerDfqW23xDFV35M9cfjYP13j8Q&oe=62E9DE17`} name="Online MBA Degree" website="msbm.org.ok" />

      <MainRightSingle img={`https://scontent.fdac138-1.fna.fbcdn.net/v/t45.5328-4/247714475_4661651663948360_2603019507156594894_n.jpg?stp=c0.0.600.600a_dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEimhiuKTxxZznwqLwp_FCti67TcG0gQP-LrtNwbSBA_xegZm92DjalmxdtmX56UZbRqTQ1U_Xn3k0U6_YsTAPw&_nc_ohc=_swofe_9YdIAX_p-xmf&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-zcIX-VXhFflof3ALdO9969Lfh5PSpwpuRiF6RmAs19w&oe=62E9E469`} name="Alibaba" website="alibaba.com" />
      <hr />
      <h6>Your Pages and profiles</h6>
      <hr />
      <div>

      </div>
      <h6>Contacts</h6>
      <div className='main_right_contact'>
        <MainRightSingle img={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/245917312_2959322077718484_2126386055081360207_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEb1RVpYEJlZQ1PPuEOnFyZvnd3yL6Oxau-d3fIvo7Fq4jJqZIfkslPsnl6Pt5rX_Fu3RZQnGff4P2IkUV-Y6Mh&_nc_ohc=2yPbyTt9klYAX9UCmbc&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_pYnHlTlPBFA9yhh2SAWnNvWeGCu43MxsKx_o86NhOVw&oe=62E945CD`} name="Emon Majumder" />
        <div className='online'></div>
      </div>
      <div className='main_right_contact'>
        <MainRightSingle img={`https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/245917312_2959322077718484_2126386055081360207_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEb1RVpYEJlZQ1PPuEOnFyZvnd3yL6Oxau-d3fIvo7Fq4jJqZIfkslPsnl6Pt5rX_Fu3RZQnGff4P2IkUV-Y6Mh&_nc_ohc=2yPbyTt9klYAX9UCmbc&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_pYnHlTlPBFA9yhh2SAWnNvWeGCu43MxsKx_o86NhOVw&oe=62E945CD`} name="Emon Majumder" />
        <div className='online'></div>
      </div>
    </div>


  )
}

export default MainRight