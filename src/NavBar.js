import React from 'react';

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '2rem',
};

const buttonStyle = {
  background: 'none',
  border: '1px solid #7CFC00',
  color: '#7CFC00',
  padding: '0.5rem 1.5rem',
  borderRadius: '5px',
  fontFamily: 'monospace',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

const NavBar = () => (
  <nav style={navStyle}>
    <button style={buttonStyle}>~/home</button>
    <button style={buttonStyle}>~/about</button>
    <button style={buttonStyle}>~/projects</button>
  </nav>
);

export default NavBar; 