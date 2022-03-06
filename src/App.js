import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';



function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Timeline />

      <Projects/>
    </div>
  );
}

export default App;
