import React, { useState, useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import './styles/Footer.css';
import yudanLogo from '../assets/img/YudanLogo.png';

function Footer () {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  const formattedTime = () => {
    const hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const seconds = localTime.getSeconds();
    return `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}`;
  };

  return (
    <footer>
      <div className='box-container'>
        <div className='box1'>
          <h1>BARTOLOMEUS YUDANTORO</h1>
        </div>
        <div className='box2'>
          <div className="box-left">
            <h2>Made With <FaReact /> in Tangerang, Indonesia.</h2>
            <h1>Local Time - {formattedTime()}</h1>
          </div>
          <div className="box-right">
            <a href="#" className='btnContact instagram'>INSTAGRAM <MdArrowOutward /></a>
            <a href="#" className='btnContact linkedin'>LINKEDIN <MdArrowOutward /></a>
            <a href="#" className='btnContact twitter'>TWITTER <MdArrowOutward /></a>
            <a href="#" className='btnContact facebook'>FACEBOOK <MdArrowOutward /></a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} BARTOLOMEUS YUDANTORO. ALL RIGHT RESERVED</p>
      </div>
    </footer>
  );
}

export default Footer;
