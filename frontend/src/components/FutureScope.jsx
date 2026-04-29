import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Box, Network, LayoutDashboard, Cloud, SearchCode } from 'lucide-react';

const FutureScope = () => {
  const futureItems = [
    { icon: <Box className="w-6 h-6" />, title: "Kernel SVM", desc: "Implementing RBF and polynomial kernels for non-linear classifications." },
    { icon: <Network className="w-6 h-6" />, title: "Neural Networks", desc: "Extending to Multi-Layer Perceptrons with custom backpropagation." },
    { icon: <Box className="w-6 h-6" />, title: "Deep Learning Extensions", desc: "Adding Convolutional layers for image-based datasets." },
    { icon: <LayoutDashboard className="w-6 h-6" />, title: "Real-time ML Dashboard", desc: "Live training visualizations via WebSockets." },
    { icon: <Cloud className="w-6 h-6" />, title: "Model Deployment", desc: "Dockerizing models for REST API inference." },
    { icon: <SearchCode className="w-6 h-6" />, title: "Explainable AI", desc: "Integrating SHAP values for model interpretability." },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
            Future <span className="text-primary">Scope</span>
            <Rocket className="w-8 h-8 text-primary" />
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            This repository lays the foundation for advanced machine learning concepts. The architecture is modularly designed to scale into deep learning paradigms.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {futureItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-xl glass-card hover:bg-secondary transition-colors border border-border"
              >
                <div className="mt-1 text-primary">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-square max-w-md hidden md:block">
          <div className="absolute inset-4 border border-border rounded-full border-dashed" />
          <div className="absolute inset-12 border border-primary/20 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-secondary/50 rounded-full flex items-center justify-center border border-border">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
