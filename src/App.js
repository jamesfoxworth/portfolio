import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import MainContent from './MainContent';
import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [animate, setAnimate] = useState(true);

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setAnimate(false);
      setTimeout(() => {
        setActiveSection(section);
        setAnimate(true);
      }, 200);
    }
  };

  return (
    <div className="App" style={{ minHeight: '100vh', background: '#181c20' }}>
      <Header />
      <NavBar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <MainContent activeSection={activeSection} animate={animate} />
    </div>
  );
}

export default App;
