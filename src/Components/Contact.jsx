import React from 'react'
import './styles/Contact.css'
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Contact() {
  return (
    <section id='Contact'>
      <h1 className='section-title sliding'>Contact me</h1>
      <div className='contact-container'>
        <div className='contact-input'>
          <h1 className='containter-title'>Just Say hello</h1>
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Your Email'/>
          <input type="text" placeholder='Your subject'/>
          <textarea type="text" placeholder='Your Message' className='message'/>
          <a href="#sendmessage" className='btn-send'>Send Message</a>
        </div>
        <div className='contact-info'>
          <h1 className='container-title'>Contact Info</h1>
          <p>Hallo, anda bisa menghubungi saya melalui whatsapp, email, ataupun sosial media saya. </p>
          <div className='contact-details-container'>
            <div className='contact-icon'>
              <a href="#" className='icon-email'><MdEmail /></a>
              <a href="#" className='icon-call'><IoCallSharp /></a>
              <a href="#" className='icon-location'><FaLocationDot /></a>
            </div>
            <div className='contact-details'>
              <h1>Email</h1>
              <p>yudannnnn80@gmail.com</p>
              <h1>Phone</h1>
              <p>+62 857-7387-3837</p>
              <h1>Address</h1>
              <p>Kabupaten Tangerang, Banten, Indonesia</p>
            </div>
          </div>
          <p>Visit my social profile and get connected</p>
          <div className='contact-sosmed'>
            <a href="https://www.instagram.com/yudanns_?igsh=M3M2MGZhcmZkbXZ1" className='iconInstagram'><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/yudanns" className='iconLinkedin'><FaLinkedin /></a>
            <a href="" className='iconTwitter'><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact