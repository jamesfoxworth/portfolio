import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import MainContent from './MainContent';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', background: '#0a1833' }}>
      <Header />
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
