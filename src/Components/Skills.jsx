import React from 'react'
import './styles/Skills.css'

function Skills() {
  return ( 
    <section id='Skills'>
      <h1 className='section-title sliding'>My Skills</h1>
      {/* <div className='skillsContainer2'>
        <div className="bigBox">
          <h1>Backend Developer</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad natus facere ea iste adipisci, obcaecati repellat vitae soluta perspiciatis repudiandae a ipsa quisquam excepturi debitis possimus nostrum, voluptatem dolorem consequatur.</p>

        </div>
        <div className="bigBox">
          <h1>Dekstop Application</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad natus facere ea iste adipisci, obcaecati repellat vitae soluta perspiciatis repudiandae a ipsa quisquam excepturi debitis possimus nostrum, voluptatem dolorem consequatur.</p>
        </div>
      </div> */}
      
      <div className='skillsContainer'>
        <div className="skillsBox">
          <h1>web Frontend Developer</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad natus facere ea iste adipisci, obcaecati repellat vitae soluta perspiciatis repudiandae a ipsa quisquam excepturi debitis possimus nostrum, voluptatem dolorem consequatur.</p>
        </div>
        <div className="skillsBox">
          <h1>Backend Developer</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad natus facere ea iste adipisci, obcaecati repellat vitae soluta perspiciatis repudiandae a ipsa quisquam excepturi debitis possimus nostrum, voluptatem dolorem consequatur.</p>

        </div>
        <div className="skillsBox">
          <h1>Dekstop Application</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad natus facere ea iste adipisci, obcaecati repellat vitae soluta perspiciatis repudiandae a ipsa quisquam excepturi debitis possimus nostrum, voluptatem dolorem consequatur.</p>
        </div>
      </div>

    </section>
  )
}

export default Skills