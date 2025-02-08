import React from 'react'
import './Home.css'
import ecomm from '../../Assets/e-comm.jpg'
import webDesign from '../../Assets/web-design.jpg'
import webDevelopment from '../../Assets/web-development.jpg'
import nishant from '../../Assets/nishant.jpg'
import shivam from '../../Assets/shivam.jpg'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const goToContact = () => {
      navigate("/Contact"); // Navigate to the "Contact" page
    };

    const goToService = () => {
        navigate("/Services"); // Navigate to the "Contact" page
      };

  return (
    <div className='home'>
      <div className='home1'>
        <div className='card'>
           <h2>Wiz Freelancers</h2>
           <hr />
           <h3>Transform Your Digital Vision Into Reality</h3>
           <p>Expert Web Development & Digital Solutions</p>
           <div className='btn'>
              <button onClick={goToService}>EXPLORE SERVICES</button>
              <button onClick={goToContact}>GET STARTED</button>
           </div>
        </div>
      </div>  
        <div className='card1'>
            <div className='minicard'>
                <p className='number'>100+</p>
                <p className='description'>Project Compleated</p>
            </div>
            <div className='minicard'>
                <p className='number'>50+</p>
                <p className='description'>Happy Client</p>
            </div>
            <div className='minicard'>
                <p className='number'>5+</p>
                <p className='description'>Year Experience</p>
            </div>
            <div className='minicard'>
                <p className='number'>24/7</p>
                <p className='description'>Support Available</p>
            </div>
        </div>
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
        <div className='expert-team'>
            <div className='et-head'>
                <p>Meet Our Experts</p>
                <p>Talented professionals dedicated to your success</p>
            </div>
            <div className='et-head1'>
                <div className='et-card'>
                    <div className='et-img'>
                        <img src={nishant} alt="" />
                    </div>
                    <p className='et-desc'>I am an experienced web designer and developer, creating seamless and user-friendly websites tailored to client needs. I specialize in designing responsive interfaces that ensure smooth navigation and deliver an exceptional user experience. With expertise in e-commerce development, I build secure, high-performing platforms optimized for growth. My work combines creativity and technical skills to help businesses succeed online.</p>
                </div>
                <div className='et-card'>
                    <div className='et-img'>
                        <img src={shivam} alt="" />
                    </div>
                    <p className='et-desc'>With extensive experience in web design and development, I crafts visually stunning and highly functional websites. I focuses on creating responsive designs that provide an intuitive and engaging user experience. Skilled in e-commerce solutions, I develops secure and efficient platforms that drive online growth. My dedication to blending creativity with technical expertise ensures exceptional results for every project.</p>
                </div>
            </div>
        </div>
        <div className='last-para'>
            <p className='para1'>Ready to Start Your Project?</p>
            <p className='para2'>Let's discuss how we can help bring your vision to life</p>
            <button onClick={goToContact}>Schedule a Consultation</button>
        </div>
    </div>
  )
}

export default Home
