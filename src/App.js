import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Navbar from './components/navbar';
import particles from './utils/particles';

function App() {
  const location = useLocation();
  console.log(location);

  const renderParticleJSinHomePage = location.pathname === "/";

  const handleInit = async (main) => {
    await loadFull(main);
  }

  return (
    <div className="App">
      {/* particle js */}
      {
        renderParticleJSinHomePage && (<Particles id="particles" options={particles} init={handleInit} />)
      }


      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
