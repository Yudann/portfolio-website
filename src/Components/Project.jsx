import React from 'react';
import Card from './Card';
import './styles/Project.css';
import project1 from '../assets/img/web2.png';
import project2 from '../assets/img/web1.png';
import project3 from '../assets/img/project5.png';
import project4 from '../assets/img/project.png';
import project5 from '../assets/img/project4.png';
import project6 from '../assets/img/spotify.png';
import project7 from '../assets/img/web3.png';

import { FaReact, FaHtml5, FaPython } from "react-icons/fa";
import { SiCsswizardry, SiTailwindcss, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function Project() {
  return (
    <section id="Project" className="project-section">
      <div className="project-container">
        <h1 className='section-title sliding'>Explore My Projects</h1>
        <div className="projects-grid">
          <Card
            pic={project1} 
            title="Kopi Kenangan Senja"
            details="Kopi kenangan senja adalah website pertama saya yang saya buat dengan mengikuti tutorial dari YouTube Web Developer Unpas."
            icon1={<FaHtml5 />}
            icon2={<SiCsswizardry />}
            icon3={<IoLogoJavascript />}
          />
          <Card 
            pic={project2} 
            title="Burgerjir Web"
            details="Burgerjir web adalah sebuah website dari toko burger yang saya buat. Di Burgerjir Web kita bisa memesan berbagai jenis burger dengan menu yang bervariasi."
            icon1={<FaHtml5 />}
            icon2={<SiCsswizardry />}
            icon3={<IoLogoJavascript />}
          />
          <Card 
            pic={project3} 
            title="Yud Shoes"
            details="Yud Shoes adalah aplikasi yang berfungsi untuk berjualan sepatu. Aplikasi ini dibuat menggunakan bahasa Python dan library customtkinter serta menggunakan database MySQL."
            icon1={<FaPython />}
            icon2={<SiMysql />}
          />
          <Card 
            pic={project4} 
            title="UG-Library"
            details="UG-Library adalah sebuah aplikasi yang saya buat dengan konsep CRUD. Ini adalah desktop app pertama saya yang saya buat untuk memenuhi tugas kuliah."
            icon1={<FaPython />}
            icon2={<SiMysql />}
          />
          <Card 
            pic={project5} 
            title="Burgerjir Desktop App"
            details="Burgerjir ini adalah versi desktop app dari Burgerjir Web. Aplikasi ini memiliki fungsi yang sama namun dalam bentuk desktop app."
            icon1={<FaPython />}
            icon2={<SiMysql />}
          />
          <Card 
            pic={project6} 
            title="Spotify Duplicate"
            details="Seperti namanya, aplikasi ini adalah duplikat dari Spotify Desktop. Kita bisa mendengarkan musik sama persis seperti Spotify."
            icon1={<FaPython />}
            icon2={<FaReact />}
            icon3={<SiMysql />}
          />
          <Card 
            pic={project7} 
            title="Yud Store"
            details="Yud Store adalah versi desktop app dari toko online saya. Aplikasi ini memiliki fungsi yang sama dengan website namun dalam bentuk desktop app."
            icon1={<FaHtml5 />}
            icon2={<SiTailwindcss />}
            icon3={<IoLogoJavascript />}
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
