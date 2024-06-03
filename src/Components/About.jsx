import './styles/About.css'
import aboutImage from '../assets/img/aboutyudan.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function About() {
    
    return(
        <section id='About'>
            <h1 className='section-title sliding'>About Me</h1>
            <div className='aboutContainer'>
                <div className='about-details sliding'>
                    <p>
                        Halo, i'm Yudan! Saya adalah seorang Mahasiswa dari Universitas Gunadarma, 
                        jurusan Sistem Informasi. Saya Juga adalah seorang 
                        content creator yang sedang membangun personal branding 
                        pada media sosial pribadi saya. karna bingung jadi saya 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis repellat dolor voluptatibus fuga temporibus harum nesciunt, nobis ducimus. Dolorem, laborum cupiditate itaque asperiores ad incidunt ipsa ex ipsum assumenda in consectetur magni at soluta veniam natus autem beatae odio doloribus perferendis numquam perspiciatis voluptatum dignissimos? Veniam perferendis adipisci accusantium. Ipsa fugit, aut quia sequi quod tenetur. Quisquam, mollitia velit!
                    </p>
                </div>
                <div className="about-image sliding">
                    <img src={aboutImage} alt="" />
                    <div className='sosmed'>
                        <a href="https://www.instagram.com/yudanns_?igsh=M3M2MGZhcmZkbXZ1" className='iconInstagram'><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/yudanns" className='iconLinkedin'><FaLinkedin /></a>
                        <a href="https://wa.me/085773873837" className='iconWhatsapp'><FaWhatsapp /></a>
                        <a href="" className='iconTwitter'><FaXTwitter /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About