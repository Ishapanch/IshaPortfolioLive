import React from 'react'
import AboutImg from '../assets/isha-about.png'
import './AboutPage.css'

export default function AboutPage() {

  
  return (
    <div className='dark-bg'>
      <div className="container">
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="about-heading text-center">
            <p>Get to know me</p>
            <h3>About Me</h3>
          </div>
        </div>
        <div className='col-lg-5 col-12'>
            <img src={AboutImg} className='w-100'/>
        </div>
        <div className="col-lg-7 col-12">
            <div className="green-title">                
                Who am i?
            </div>
            <h3 className='heading'>
            I'm Isha Pancholi, a visual UX/UI Designer and Frontend Web Developer
            </h3>
            <p className='description'>
            I am a Designer and have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
            </p>
            <hr className='seperator-hr'/>
            <ul className='no-list details-my'> 
            <li><span>Name:</span> Isha Pancholi</li>
            <li><span>Email:</span><a href="mailto: inp2202@gmail.com"> inp2202@gmail.com</a></li>
            <li><span>Age:</span> 22</li>
            <li><span>From:</span> Vadodara, Gujarat, India</li>
            </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
