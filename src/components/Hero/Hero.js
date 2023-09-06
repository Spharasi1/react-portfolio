import React from 'react';
import "./Hero.css";
import hireme from '../../assets/hireme.png'
import img from '../../assets/image.png';
import {Link} from 'react-scroll';
function Hero() {
  return (
    <section id="intro">
        <div className='hero-content'>
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="name">Shivam Pharasi</span>Web App Developer</span>
        <p className="para"> I'm a passionate MERN stack developer dedicated to creating dynamic and responsive web applications.</p>
        <Link to="contact"><button className="btn"><img src={hireme} alt="button-icon" />Hire Me</button></Link>
        </div>
        <img src={img} alt="Developer" className="heroImg" />
    </section>
  )
}

export default Hero;