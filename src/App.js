import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
