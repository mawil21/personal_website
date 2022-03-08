import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="projects components__space" id = "Projects">
            <div className="heading">
                <h1 className="title"> Projects </h1>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>



                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">
                                    Memory Game
                                </h1>
                                <p className="p service__text p__color">
                                   The memory game is a common children's game played with a set of cards. 
                                   The cards have a picture on onside and each picture appears once the user selects that card.
                                    The game starts with all cards face down and the user takes turns to to turn over two cards. 
                                    To win, get a positive score, or else. 
                                </p>
                                

                            </div>

                        </div>

                    </div>

                    {/* svg = change the icon of the projects  */}
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>



                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">
                                    Gitlet 2.0 
                                </h1>
                                <p className="p service__text p__color">
                                    A version-control system software inspired by modern day Git with full functionality. 
                                    Implemented improved features of git add, remove, commit, and so on, as well as, 
                                    designing a complex object-oriented algorithm to serialize and persist commits and system data. 
                                </p>
                                

                            </div>

                        </div>

                    </div>


                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>



                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">
                                    Adversarial Adventures 
                                </h1>
                                <p className="p service__text p__color">
                                    Designed and implemented an interactive, points-based 2D tile-based game that pseudo-randomly generates worlds. 
                                    Implemented a user interactive mechanic GUI via the STDraw library, where the user will be able to play for an objective along with AI 
                                    enemy bots. 
                                </p>
                                

                            </div>

                        </div>

                    </div>

                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>



                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">
                                    Restaurant Supply Chain Optimization 
                                </h1>
                                <p className="p service__text p__color">
                                    Designed a supply chain implementation of a modern-day restaurant with various user roles.
                                    The implementation includes features that allow users to manipulate restaurant inventory 
                                    numbers, including demand of items, price per items, as well as revenue, profit, costs, and accounting
                                    numbers. 
                                </p>
                                

                            </div>

                        </div>

                    </div>
                    

                
                </div>
            </div>

        </div>
    )
}

export default Projects
