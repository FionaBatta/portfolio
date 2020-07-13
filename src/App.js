import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Presentation from './components/Presentation/Presentation';
import Experience from './components/Experience/Experience';
import Diplomes from './components/Diplomes/Diplomes';
import LanguesCentre from './components/LanguesCentre/LanguesCentre';
import Caractere from './components/Caractere/Caractere';
import Contact from './components/Contact/Contact';
import Projets from './components/Projets/Projets';
import Foot from './components/Foot/Foot';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <body>
        <Main />
        <Presentation />
        <Diplomes />
        <LanguesCentre />
        <Experience />
        <Caractere />
        <Projets />
        <Contact />
        <Foot />
      </body>
    </div>
  );
}

export default App;
