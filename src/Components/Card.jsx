import React from 'react'
import './styles/Project.css'
import project1 from '../assets/img/project5.png'



function Card(props) {
  return (
    <div className='cardContainer'>
        <img src={props.pic} alt="" />
        <div className='cardDetails'>
            <h1>{props.title}</h1>
            <div className='button-preview'> 
                <a href="#">Code</a>
                <a href="#">Live Demo</a>
            </div>
            <p> {props.details}
                {/* Yud shoes, adalah aplikasi yang berfungsi unutk bejualan sepatu,
                aplikasi ini dibuat menggunakan bahasa python dan
                menggunakan library customtkinter */}
            </p>
            <div className='icon'>
                <a href="#" className='icon1'>{props.icon1}</a>
                <a href="#" className='icon2'>{props.icon2}</a>
                <a href="#" className='icon3'>{props.icon3}</a>
            </div>
        </div>
    </div>
  )
}

export default Card