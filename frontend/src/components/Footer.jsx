import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">ADITYA KUMAR SHARMA</h3>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Computer Science & Engineering
          </p>
        </div>
        
        <div className="text-center md:text-right text-sm text-muted-foreground">
          <p className="mb-2">Project Focus: Mathematical Foundations of Machine Learning</p>
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
