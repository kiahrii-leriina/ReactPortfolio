import React from 'react';
import './home.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf'; 

const Home = () => {
  return (
    <>
      <div id='home' className="home">
        <img src={profile} alt="img" />
        <h1><span>Hi this is Kaihrii Leriina</span>, I'm a Java Full Stack Developer</h1>
        <p>I'm a Java Full Stack Developer, with proficient knowledge in both front end and back end</p>
        <div className="homeaction">
          <div className="homeconnect">
            <AnchorLink className='anchor' offset={50} href='#contact'>
              <p onClick={() => setMenu("contact")}>Connect with me</p>
            </AnchorLink>
          </div>
          <div className="homeresume">
            <a href={resume} download="Kaihrii_Leriina_Resume.pdf">Download My Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
