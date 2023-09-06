import React, { useRef } from 'react';
import './Contact.css';
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ja7926', 'template_rzflaqb', form.current, 'fAwCBE_Dza5qiPANw')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent!')
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
    <section id="contact">
        <h2 className="contactHeading">Contact Me</h2>
        <p className="contactPara">
        I'm always excited to connect with fellow developers, potential collaborators, or anyone who shares a passion for web development and technology. Feel free to reach out to me.
        </p>
        <div className="formContainer">
            <form ref={form} onSubmit={sendEmail}>
                <div className="formField">
                    <input type="text" name="your_name" placeholder='Enter Your Name'/>
                </div>
                <div className="formField">
                <input type="email" name="your_email" placeholder='Enter Your E-Mail'/>
                </div>
                <div className="formField">
                    <textarea name="message" cols="21" rows="5" placeholder='Your Message'></textarea>
                </div>
                <button type="submit" value="Send">Submit</button>
            </form>
            <div className="socialIcons">
            <a href="http://"> 
                <img src={facebookIcon} alt="Facebook Icon" />
            </a>
            <a href="http://">
                <img src={instagramIcon} alt="Instagram Icon" />
            </a>
            </div>
        </div>
    </section>
  )
}

export default Contact