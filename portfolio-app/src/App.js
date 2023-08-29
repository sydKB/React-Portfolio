import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import Footer from './components/Footer';

export default function App() {
  return (
    <HashRouter basename="/"> 
      <Header />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <div>
        <Footer/>
      </div>
      
    </HashRouter>
  );
}
