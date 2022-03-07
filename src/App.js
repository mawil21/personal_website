import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Timeline />
      <Projects/>
      <Contact />

    </div>
  );
}

export default App;
