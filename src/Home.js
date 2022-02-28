import React from 'react';
import './Home.css';
import logo from "./logo.png";

function Home() {
  return (
    <div className='home'>
        <div className = "home_bg">
            <div className='header d__flex align__items__center pxy__30'>
                <div className = "logo">
                    <img src = {logo} alt = "" />
                </div>
                <div className= "navigation">
                    <ul className = "navbar d__flex pxy__30">
                        <a href = "#Home"><li className='nav__items mx__15'>Home</li></a>
                        <a href = "#About"><li className='nav__items mx__15'>About</li></a>
                        <a href = "#Experience"><li className='nav__items mx__15'>Experience</li></a>
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
                            Hi, I'm Mawil Hasan
                        </h2>
                        <h3 className = "home__text sweet pz__10">
                            Codebase :)
                        </h3>

                    </div>

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Home