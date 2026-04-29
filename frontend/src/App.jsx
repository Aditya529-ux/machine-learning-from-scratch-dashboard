import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Datasets from './components/Datasets';
import Models from './components/Models';
import Gallery from './components/Gallery';
import MathFoundation from './components/MathFoundation';
import FutureScope from './components/FutureScope';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20">
        <Hero />
        <Overview />
        
        <div id="datasets" className="scroll-mt-24">
          <Datasets />
        </div>
        
        <Models />
        <Gallery />
        <MathFoundation />
        <FutureScope />
        <Resume />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
