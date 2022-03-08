import React, {useState} from "react";
import './Home.css';

import logo from "./logo.png"; {/* (60px * 60px) -> Resolution - 72*/}


function Home() {

    // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className='home' id = "Home">
        <div className = "home_bg">
            <div className='header d__flex align__items__center pxy__30'>
                <div className = "logo">
                    <img src = {logo} alt = "" />
                </div>
                <div className= "navigation">
                    <ul className = "navbar d__flex pxy__30">
                        <a href = "#Home"><li className='nav__items mx__15'>Home</li></a>
                        <a href = "#About"><li className='nav__items mx__15'>About</li></a>
                        <a href = "#Experience"><li className='nav__items mx__15'>Timeline</li></a>
                        <a href = "#Projects"><li className='nav__items mx__15'>Projects</li></a>
                        <a href = "#Contact"><li className='nav__items mx__15'>Contact</li></a>

                    </ul>
                </div>
            </div>
            {/* HOME CONTENT */}
            <div className = "container">
                <div className = "home__content">
                    <div className = "home__meta">
                        <h1 className = "home__text pz__10">
                            Welcome!!!
                        </h1>
                        <h2 className = "home__text pz__10">
                            Hi, I'm Mawil! 
                        </h2>
                        <h4 className = "home__text sweet pz__10">
                            I code, sleep, and workout :)
                        </h4>
                        {/* <a href= "https://www.linkedin.com/in/mawilh/"><button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>                            
                            
                        </button></a> */}

                       
                        

                    </div>

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Home