import React from 'react';
import './About.css';
import aboutImg from './about.jpg';

function About() {
  return (
    <div className = "about component__space"> 
        <div className = "container">
            <div className = "row">
                <div className = "col__2">
                    {/* <img src = {aboutImg} alt = "" className = "about__img" /> */}
                    <h1 className = "About" >
                        About Me
                    </h1>
                    <div className = "about__meta">
                        <p className = "about__text p__color">
                            I am currently a second-year student majoring in Computer Science.
                            Right now, I am currently taking 
                            asjdop;qjwe'oqwe o;qwjke'o;qwjeiqwje'oqwje'oq;wjeo'qwjoejqwo'ejqwoej]
                        </p>
                    </div>
                </div>
                <div className = "col__2">
                    <img src = {aboutImg} alt = "" className = "about__img" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About;

// style={{fontSize: "54px"}}