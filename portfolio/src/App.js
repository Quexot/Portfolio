import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
      <Header />
      </div>
      
      <div className='About'>
        <About />
      </div>
      <div className='Projects'>
        <Work />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;

