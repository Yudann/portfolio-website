import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from './Components/Navbar.jsx';
import Navbar2 from './Components/Navbar2.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Project from './Components/Project.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

import Skills from './Components/Skills.jsx';

function App() {

  return (
    <BrowserRouter>
      <Navbar2 />
      <div className='inner'>
          <Home />
          <About />
          <Skills />
        
          <Project />
          <Contact />


      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
