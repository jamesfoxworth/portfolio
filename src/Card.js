import React from 'react';

const cardStyle = {
  background: '#232a33',
  color: 'white',
  borderRadius: '10px',
  padding: '1.5rem',
  margin: '1rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  fontFamily: 'monospace',
  transition: 'opacity 0.4s, transform 0.4s',
  opacity: 1,
  transform: 'translateY(0)',
};

const Card = ({ title, children, className = '' }) => (
  <div style={cardStyle} className={className}>
    {title && <h2 style={{ color: '#8fc7a3', marginBottom: '1rem' }}>{title}</h2>}
    {children}
  </div>
);

export default Card; 