import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import backgroundImage from './assets/Hero_image_backgruund.webp';



function App() {
  
  return (
    <BrowserRouter>
      <main
        className="background"
        style={{
          '--background-image': `url(${backgroundImage})`,
        }}>
        <Header />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
