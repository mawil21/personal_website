import React from 'react';
import './About.css';
import aboutImg from './portrait.jpg';

function About() {
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
            upToTop.classList.toggle("active", window.scrollY > 0)
        });
  return (
    <div className = "about component__space" id = "About" > 
        <h1 className = "title"> About Me </h1>
        <div className = "container">
            <div className = "row">
                <div className = "col__2">
                    {/* <img src = {aboutImg} alt = "" className = "about__img" /> */}
                    {/* <h1 className = "About" >
                        About Me
                    </h1> */}
                    <div className = "about__meta">
                        <p className = "about__text p__color">
                        Hi there! My name is Mawil and I am currently a 2nd-year undergraduate at UC Berkeley studying Computer Sciences with an emphasis on Programming System and Machine Learning.
                        
                        </p>
                        <p className = "about__text p__color">
                        Current Location: Berkeley, CA
                        </p>
                        <p className = "about__text p__color">
                        My biggest drive is to be working in a role where I ideally have more responsibility and ownership of my products and software from ideation 
                        and architecture all the way down to implementation. In addition, I am passionate about exploring passionate communities that push me
                        to be my best-self by expanding my technical and behavioral perspectives.
                        </p>
                        <p className = "about__test p__color">
                        My work experience include being a Software Developer for Codebase, an Associate Mentor for CSM, as well as being an 
                        incoming intern for some company in the summer (TBD: still deciding). Apart from my technical work, I love spending time
                        watching sports, cooking, and shleeping.  
                        
                        
                        </p>
                    </div>
                </div>
                <div className = "col__2">
                    <img src = {aboutImg} alt = "" className = "about__img" />
                </div>
                
            </div>
        </div>
        {/* UP TO TOP BTN */}
        <div className = "up__to__top__btn">
            <a href="#" className="bottom__to__top">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
            >
            <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
            </svg>
            </a>
        
        
        
        
        </div>
    </div>
  )
}

export default About;

// style={{fontSize: "54px"}}