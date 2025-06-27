import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import MainContent from './MainContent';
import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [animate, setAnimate] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setFadeOut(true);
      setTimeout(() => {
        setFadeOut(false);
        setAnimate(false);
        setActiveSection(section);
        setTimeout(() => setAnimate(true), 10);
      }, 300);
    }
  };

  return (
    <div className="App" style={{ minHeight: '100vh', background: '#181c20' }}>
      <Header />
      <NavBar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <MainContent activeSection={activeSection} animate={animate} fadeOut={fadeOut} />
    </div>
  );
}

export default App;
