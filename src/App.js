import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contributors from './components/Contributors';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contributors />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
