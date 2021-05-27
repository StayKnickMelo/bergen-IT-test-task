import React from 'react'

const AboutMe = () => {
  return (
    <div className="me-container" >
      <h2 className="me-name">Igor Dubov</h2>
      <div className="me-img">
      </div>

      <span className="me-bio">
        Увлечённый, целеустремлённый начинающий web developer, который ищет любую возможность получить бесценный опыт в команде единомышленников. Непреодолимое желание учиться всему новому, развиваться и не стоять на месте.
      </span>

      <a href="mailto:dubovigor1992@gmail.com" className="me-email">dubovigor1992@gmail.com <i className="far fa-envelope"></i></a>

      <p className="me-info">
        Full Stack Developer (MERN) Junior
      </p>


      <ul className="me-skills">
        <li className="me-skill">JavaScript</li>
        <li className="me-skill" >HTML</li>
        <li className="me-skill" >CSS</li>
        <li className="me-skill" >React(Redux)</li>
        <li className="me-skill">Node.js (Express)</li>
        <li className="me-skill" >MongoDB</li>
      </ul>

      <a className="me-link" target="_blank" href="https://github.com/StayKnickMelo?tab=repositories"> Git Hub Profile <i className="fab fa-github"></i></a>
    </div>
  )
}

export default AboutMe
