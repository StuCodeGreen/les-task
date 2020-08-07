import React from 'react';
import './App.css';
import Nav from './components/layout/Nav';
import SectionOne from './components/layout/section-1';

function App() {
  return (
    <div className="App">
      <header className="container">
        <Nav />
      </header>
      <SectionOne />
    </div>
  );
}

export default App;
