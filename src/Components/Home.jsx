
import background_image from "../assets/img/yudan_1.png"
import CV from '../assets/img/Bartolomeus Yudantoro - CV.pdf'
import './styles/Home.css'

function Home() {

    let nama = "YUDANTORO ";
    let namaInfinite = "";
    
    let kali = 100;
    
    for (let i = 0; i < kali; i++) {
      namaInfinite += nama;
    }
    return (
        <section id="Home">
            <div className="sliding-text">
            <h1 ><span>{namaInfinite}</span></h1>
            </div>
            <img src={background_image} alt="backgorund"/>
            <div className="homeButton">
              <a href={CV} onClick={CV}>DOWNLOAD CV</a>
              <a href="#" className="homeBtn2" >HIRE ME</a>
            </div>
        </section>
        );
}

export default Home