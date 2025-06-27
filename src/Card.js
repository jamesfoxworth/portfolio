import React from 'react';

const cardStyle = {
  background: '#232a33',
  color: 'white',
  borderRadius: '10px',
  padding: '2.5rem 2rem',
  margin: '1rem 0',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  fontFamily: 'monospace',
  transition: 'opacity 0.4s, transform 0.4s',
  opacity: 1,
  transform: 'translateY(0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const Card = React.forwardRef(({ title, children, className = '', style = {} }, ref) => (
  <div ref={ref} style={{ ...cardStyle, ...style }} className={className}>
    {title && <h2 style={{ color: '#8fc7a3', marginBottom: '1rem' }}>{title}</h2>}
    {children}
  </div>
));

export default Card; 