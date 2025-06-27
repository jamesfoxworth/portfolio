import React from 'react';
import Card from './Card';

const mainContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  marginTop: '2rem',
  marginLeft: '2rem',
};

const cardWidth = (count) => {
  if (count === 1) return { maxWidth: '600px', minWidth: '350px', width: '100%' };
  if (count === 2) return { maxWidth: '400px', minWidth: '250px', width: '100%' };
  return { maxWidth: '300px', minWidth: '200px', width: '100%' };
};

const MainContent = ({ activeSection, animate }) => {
  let cards = [];
  if (activeSection === 'home') {
    cards = [
      <Card key="about" title="About Me" className={animate ? 'fade-in' : ''}>
        <p>hi, i'm james :)</p>
      </Card>
    ];
  } else if (activeSection === 'about') {
    cards = [
      <Card key="about" title="About Me" className={animate ? 'fade-in' : ''}>
        <p>hi, i'm james :)</p>
      </Card>
    ];
  } else if (activeSection === 'projects') {
    cards = [
      <Card key="project1" title="Project 1" className={animate ? 'fade-in' : ''}>
        <p>Project 1 description goes here.</p>
      </Card>,
      <Card key="project2" title="Project 2" className={animate ? 'fade-in' : ''}>
        <p>Project 2 description goes here.</p>
      </Card>
    ];
  }
  return (
    <div style={mainContentStyle}>
      {cards.map((card, i) => React.cloneElement(card, { style: cardWidth(cards.length) }))}
    </div>
  );
};

export default MainContent; 