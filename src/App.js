import React from 'react';
import Loading from './Loading';
import Clock from './Clock';
import './App.css';
import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import ParticleBackground from './particleBackground';



function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // })
  return (
    
    <div style={{ backgroundImage: `url(/Users/mawil0721/Desktop/personal_web/src/particles.png)`}}>
      
    {/* <div className= "particle-bg"> <ParticleBackground /> </div> */}
    <div className="App">
      {/* <div className= "particle-bg"> <ParticleBackground /> </div> */}
      
      <Home/>
      <About/>
      <Timeline />
      <Projects/>
      {/* <Contact /> */}
      {/* <ParticleBackground /> */}

    </div>
    </div>
  );
}

export default App;
