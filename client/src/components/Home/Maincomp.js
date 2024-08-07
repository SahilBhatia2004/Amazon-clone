import React from 'react'
import Banner from './Banner'
import './Home.css';
import Slide from './Slide';
const Maincomp = () => {
  return (
    <div className='Home_section'>
       <div className='banner_part'>
             <Banner/>
       </div>
        <div className='Slide_part'>
            <div className='Left_Slide'>
                 <Slide title="Deal of the day"/>
            </div>
            <div className='Right_Slide'>
                <h4>Festive latest launches</h4>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                <a href="#">see more</a>
            </div>
        </div>
        <Slide title="Today's Deals"/>
             <div className="centre_img">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />   
             </div>
        <Slide title="Best Seller"/>
        <Slide title="Upto 80% Of"/>
    </div>
  )
}

export default Maincomp
