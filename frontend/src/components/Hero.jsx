import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Database, LineChart, Activity, Calculator, Layout, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 px-4 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto z-10 w-full"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground">
          Machine Learning from <br />
          <span className="text-primary">Mathematical First Principles</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          A complete implementation of ML algorithms using linear algebra, optimization, probability, and matrix operations without relying on high-level ML frameworks.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Badge icon={<Code2 size={16}/>} text="Python" />
          <Badge icon={<Database size={16}/>} text="NumPy" />
          <Badge icon={<Database size={16}/>} text="Pandas" />
          <Badge icon={<LineChart size={16}/>} text="Matplotlib" />
          <Badge icon={<Layout size={16}/>} text="React" />
          <Badge icon={<Activity size={16}/>} text="Tailwind CSS" />
          <Badge icon={<Cpu size={16}/>} text="Algorithm Design" />
          <Badge icon={<Calculator size={16}/>} text="Mathematical Optimization" />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#overview" className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2">
            System Architecture
          </a>
          <a href="#models" className="px-8 py-3.5 rounded-lg bg-card border border-border text-foreground font-semibold hover:bg-card/80 transition-all flex items-center justify-center gap-2">
            Model Demonstrations
          </a>
        </motion.div>

        {/* Accuracy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <AccuracyCard title="Linear Regression" value="92.4%" />
          <AccuracyCard title="Logistic Regression" value="96.1%" />
          <AccuracyCard title="PCA" value="89.8%" />
          <AccuracyCard title="K-Means" value="94.2%" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 border border-border text-sm text-secondary-foreground font-medium">
    <span className="text-muted-foreground">{icon}</span>
    {text}
  </div>
);

const AccuracyCard = ({ title, value }) => (
  <div className="glass-card p-5 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary/30 transition-colors">
    <span className="text-sm font-medium text-muted-foreground text-center">{title}</span>
    <span className="text-3xl font-bold text-foreground">{value}</span>
  </div>
);

export default Hero;
