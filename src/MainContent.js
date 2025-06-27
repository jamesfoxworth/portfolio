import React from 'react';
import Card from './Card';

const mainContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
  marginTop: '2rem',
};

const MainContent = () => (
  <div style={mainContentStyle}>
    <Card title="About Me">
      <p>hi, i'm james :)</p>
    </Card>
  </div>
);

export default MainContent; 