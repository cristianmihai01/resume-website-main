import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contributors from './components/Contributors';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contributors />
    </div>
  );
};

export default App;
