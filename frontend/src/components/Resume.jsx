import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Brain, Zap, Layers, Trophy } from 'lucide-react';

const Resume = () => {
  const points = [
    { icon: <Code />, title: "From Scratch Implementation", desc: "Demonstrates deep programming proficiency and understanding beyond API calls." },
    { icon: <Brain />, title: "Mathematical Depth", desc: "Shows strong analytical skills and grasp of the theoretical foundations of AI." },
    { icon: <Layers />, title: "Real Datasets", desc: "Proves ability to handle real-world data complexity, scaling, and preprocessing." },
    { icon: <Zap />, title: "Optimizer Comparison", desc: "Highlights practical understanding of convergence and model fine-tuning." },
    { icon: <Briefcase />, title: "Software Architecture", desc: "Modular, OOP-driven design principles reflecting industry-standard coding practices." },
    { icon: <Trophy />, title: "Interview-Ready Quality", desc: "Comprehensive documentation and clean code ready for technical evaluations." }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-8 md:p-16 relative overflow-hidden border border-border"
      >
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Resume <span className="text-primary">Strength</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Why this project stands out to recruiters and engineering managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {points.map((pt, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {React.cloneElement(pt.icon, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">{pt.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
