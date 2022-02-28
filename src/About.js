import React from 'react';
import './About.css';
import aboutImg from './about.jpg';

function About() {
  return (
    <div className = "about component__space"> 
        <div className = "container">
            <div className = "row">
                <div className = "col__2">
                    <img src = {aboutImg} alt = "" className = "about__img" />
                </div>
                <div className = "col__2">
                    <h1 className = "fuckmawil" >
                        About Me
                    </h1>
                    <div className = "about__meta">
                        <p className = "about__text p__color">
                            I am currently a second-year student majoring in Computer Science.
                            ajiljqwepoqjw;ejq;wejo[12keo;'qjweo;q  [p2eio1;'wejqwopej'woeqklnkqw
                            asjdop;qjwe'oqwe o;qwjke'o;qwjeiqwje'oqwje'oq;wjeo'qwjoejqwo'ejqwoej]
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About

// style={{fontSize: "54px"}}