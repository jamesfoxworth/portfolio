import React from 'react';

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '1rem',
  marginBottom: '2rem',
  marginLeft: '2rem',
};

const buttonStyle = {
  background: 'none',
  border: '1px solid #8fc7a3',
  color: '#8fc7a3',
  padding: '0.5rem 1.5rem',
  borderRadius: '5px',
  fontFamily: 'monospace',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

const NavBar = ({ activeSection, onSectionChange }) => (
  <nav style={navStyle}>
    <button style={{...buttonStyle, fontWeight: activeSection === 'home' ? 'bold' : 'normal'}} onClick={() => onSectionChange('home')}>~/home</button>
    <button style={{...buttonStyle, fontWeight: activeSection === 'about' ? 'bold' : 'normal'}} onClick={() => onSectionChange('about')}>~/about</button>
    <button style={{...buttonStyle, fontWeight: activeSection === 'projects' ? 'bold' : 'normal'}} onClick={() => onSectionChange('projects')}>~/projects</button>
  </nav>
);

export default NavBar; 