import React from 'react'
import './Services.css'
import ecomm from '../../Assets/e-comm.jpg'
import webDesign from '../../Assets/web-design.jpg'
import webDevelopment from '../../Assets/web-development.jpg'

const Services = () => {
  return (
    <div className='main'>
     <div className='services'>
                <div className='service-desc'>
                    <p>Our Services</p>
                    <p>Comprehensive digital solutions tailored to your business needs</p>
                </div>
                <div className='service-card'>
                    <div className='sc'>
                        <div className='sc-img'>
                            <img src={ecomm} alt="" />
                        </div>
                        <p className='sc-desc'>We specialize in creating responsive, user-friendly, and visually appealing e-commerce websites tailored to your business needs. With expertise in secure payment integration, speed optimization, and seamless navigation, we ensure a high-performing platform that drives conversions. Our goal is to deliver scalable and impactful websites that help businesses thrive online.</p>
                    </div>
                    <div className='sc'>
                        <div className='sc-img'>
                            <img src={webDesign} alt="" />
                        </div>
                        <p className='sc-desc'>We specialize in delivering efficient and visually stunning web designs tailored to your brand's identity. By leveraging modern tools, responsive layouts, and user-focused designs, we ensure an engaging and seamless experience for your audience. Our goal is to create impactful websites that enhance your online presence and drive results.</p>
                    </div>
                    <div className='sc'>
                        <div className='sc-img'>
                            <img src={webDevelopment} alt="" />
                        </div>
                        <p className='sc-desc'>We provide efficient and scalable web development solutions tailored to your business needs. Using modern technologies and best practices, we build robust, secure, and high-performing websites. Our focus is on delivering functional platforms that ensure a seamless user experience and drive growth.</p>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Services
