import React from "react";
import "./about.css";
import profile from "../../assets/profile.jpg";
import logo from "../../assets/logo.png";

const About = () => {
  return <div id = 'about' className="about">
    <div className="abouttitle">
        <h1>About me</h1>
        <img src={logo} alt="" />
    </div>
    <div className="aboutsection">
        <div className="aboutleft">
            <img src={profile} alt="" />
        </div>
        <div className="aboutright">
            <div className="aboutpara">
                <p>"Motivated and detail-oriented Java Full Stack Developer with expertise in Java, React.js, SQL, and web application development. Adept at creating dynamic, user-friendly applications with a strong focus on clean code and scalability. Passionate about learning new technologies and contributing to innovative team projects."</p>
                <p>I have work on several front end and back end dynamic projects, like Library management system, dynamic Quiz application, and other management system with front end and back end integration. </p>
            </div>
            <div className="aboutskills">
                <div className="skill one">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}></hr>
                </div>
                <div className="skill two">
                    <p>JavaScript</p><hr style={{width:"40%"}}></hr>
                </div>
                <div className="skill three">
                    <p>ReactJs</p><hr style={{width:"45%"}}></hr>
                </div>
                <div className="skill four">
                    <p>Java</p><hr style={{width:"50%"}}></hr>
                </div>
                <div className="skill five">
                    <p>SQL</p><hr style={{width:"40%"}}></hr>
                </div>
            </div>
        </div>
    </div>
    <div className="aboutachievements">
        <div className="achievement">
            <h1>COURSE</h1>
            <p>COMPLETED 6 MONTHS JAVA FULL STACK COURSE</p>
        </div><hr />
        <div className="achievement">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
        </div><hr />
        <div className="achievement">
            <h1>50+</h1>
            <p>HOURS CODING BOOTCAMP</p>
        </div>
    </div>
    
  </div>;
};

export default About;
