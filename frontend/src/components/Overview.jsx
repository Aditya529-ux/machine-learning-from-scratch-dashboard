import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Network, Target, Cpu } from 'lucide-react';

const Overview = () => {
  const highlights = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Why From-Scratch?",
      description: "Abstracting away Scikit-learn to understand the pure mathematics, matrix transformations, and gradient flows that power modern ML."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Statement",
      description: "To build a robust, scalable machine learning framework using fundamental linear algebra, testing it rigorously against real-world datasets."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Mathematical Focus",
      description: "Deep dive into Eigen Decomposition, Covariance Matrices, Partial Derivatives, and Hyperplane Margin Maximization."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Key Highlights",
      description: "Custom optimizers built from the ground up, comparing Gradient Descent, RMSProp, and Adam for convergence speeds."
    }
  ];

  return (
    <section id="overview" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Project <span className="text-primary">Overview</span></h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Bridging the gap between theoretical mathematics and practical software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {highlights.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
