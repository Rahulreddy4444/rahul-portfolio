import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'; 
import Skills from './pages/skills';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      {/* particle js */}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
