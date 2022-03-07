import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';



function App() {
  return (
    <div style={{ backgroundImage: `url(/Users/mawil0721/Desktop/personal_web/public/images/img-9.jpeg)` }}>
    
    <div className="App">
      <Home/>
      <About/>
      <Timeline />
      <Projects/>
      <Contact />

    </div>
    </div>
  );
}

export default App;
