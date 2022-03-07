import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Timeline />
      <Projects/>
      <Contact />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
