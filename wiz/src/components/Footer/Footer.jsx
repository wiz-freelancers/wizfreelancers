import React from 'react'
import './Footer.css'
import insta from '../../Assets/logo-insta.jpg';
import linkedin from '../../Assets/linkedin.jpg';
import { Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='desc'>© 2025 Wiz Freelancers. All Rights Reserved.</p>
      <div className='footer1'>
        <div className='insta'>
            <Link to={"https://www.instagram.com/wizfreelancers/profilecard/?igsh=MWZkenFvZHVmODV4YQ=="}><img src={insta} alt="" /></Link>
            <p>Instagram</p>
        </div>
        <div className='insta'>
            <Link to={"https://www.linkedin.com/company/wiz-freelancers/"}> <img src={linkedin} alt="" /> </Link>
            <p>LinkedIn</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
