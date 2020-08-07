import React from 'react';
import './App.css';
import './components/typography/index.css';
import Nav from './components/layout/Nav';
import SectionOne from './components/layout/section-1';
import { title, firstP, secondP, thirdP } from './components/layout/text/text';
function App() {
  return (
    <div className="App">
      <header className="container">
        <Nav />
      </header>
      <SectionOne
        title={title}
        firstP={firstP}
        secondP={secondP}
        thirdP={thirdP}
      />
    </div>
  );
}

export default App;
