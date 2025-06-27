import React from 'react';

const asciiArt = `                                     

░░█ ▄▀█ █▀▄▀█ █▀▀ █▀   █▀▀ █▀█ ▀▄▀ █░█░█ █▀█ █▀█ ▀█▀ █░█
█▄█ █▀█ █░▀░█ ██▄ ▄█   █▀░ █▄█ █░█ ▀▄▀▄▀ █▄█ █▀▄ ░█░ █▀█`;

const Header = () => (
  <div style={{ color: '#8fc7a3', fontFamily: 'monospace', fontSize: '1.1rem', textAlign: 'left', margin: '2rem 0 1rem 2rem' }}>
    <pre style={{ margin: 0, fontFamily: 'inherit', color: 'inherit', background: 'none' }}>{asciiArt}</pre>
  </div>
);

export default Header; 