import React, { useRef } from 'react';
import Card from './Card';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const mainContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  marginTop: '2rem',
  marginLeft: '2rem',
  width: 'calc(100% - 4rem)',
};

const singleCardStyle = {
  width: '100%',
  maxWidth: '900px',
  minWidth: '350px',
};

const projectsGridStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  width: '100%',
  justifyContent: 'flex-start',
};

const projectCardStyle = {
  width: '350px',
  minWidth: '250px',
  maxWidth: '350px',
};

const ANIMATION_TIMEOUT = 400;

const MainContent = ({ activeSection }) => {
  const aboutRef = useRef(null);
  const projectsGridRef = useRef(null);

  return (
    <div style={mainContentStyle}>
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={activeSection}
          timeout={ANIMATION_TIMEOUT}
          classNames="card-fade"
          nodeRef={activeSection === 'projects' ? projectsGridRef : aboutRef}
        >
          {activeSection === 'projects' ? (
            <div ref={projectsGridRef} style={projectsGridStyle}>
              <Card title="Project 1" style={projectCardStyle}>
                <p>Project 1 description goes here.</p>
              </Card>
              <Card title="Project 2" style={projectCardStyle}>
                <p>Project 2 description goes here.</p>
              </Card>
            </div>
          ) : (
            <Card ref={aboutRef} title="About Me" style={singleCardStyle}>
              <p>hi, i'm james :)<br></br>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?s
              </p>
            </Card>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default MainContent; 