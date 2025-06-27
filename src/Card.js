import React from 'react';

const cardStyle = {
  background: '#223366',
  color: 'white',
  borderRadius: '10px',
  padding: '1.5rem',
  margin: '1rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  minWidth: '250px',
  maxWidth: '350px',
  fontFamily: 'monospace',
};

const Card = ({ title, children }) => (
  <div style={cardStyle}>
    {title && <h2 style={{ color: '#7CFC00', marginBottom: '1rem' }}>{title}</h2>}
    {children}
  </div>
);

export default Card; 