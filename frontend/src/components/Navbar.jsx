import React, { useState, useEffect } from 'react';
import { BrainCircuit, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground hidden sm:block">ML<span className="text-primary font-light">Math</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#overview" className="hover:text-primary transition-colors">Overview</a>
          <a href="#models" className="hover:text-primary transition-colors">Models</a>
          <a href="#datasets" className="hover:text-primary transition-colors">Datasets</a>
          <a href="https://github.com/aditya" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors border border-border">
            Source Code
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border py-4 px-4 flex flex-col gap-4">
          <a href="#overview" className="text-foreground font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Overview</a>
          <a href="#models" className="text-foreground font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Models</a>
          <a href="#datasets" className="text-foreground font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Datasets</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
