import React from 'react';
import './mywork.css'; 
import myworkdata from '../../assets/myworkdata';
import arrow from '../../assets/arrow.png';
import logo from '../../assets/logo.png';
const Mywork = () => {
    return (
        <div id = 'work' className='mywork'>
            <div className="myworktitle">
                <h1>My Latest Works</h1>
                <img src={logo} alt="Logo" />
            </div>
            <div className="myworkcontainer">
                {myworkdata.map((work, index) => (
                    <div key={index} className="myworkitem">
                        <h2>{work.wname}</h2>
                        <img src={work.wimg} alt={`Work ${index + 1}`} />
                        <p>{work.wdesc}</p>
                    </div>
                ))}
                <div className="showmore">
                    <p><a href="https://github.com/kiahrii-leriina">Show More</a></p>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Mywork;
