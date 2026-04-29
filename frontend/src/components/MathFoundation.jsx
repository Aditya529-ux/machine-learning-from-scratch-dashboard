import React from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const MathFoundation = () => {
  const formulas = [
    {
      title: "Mean Squared Error",
      equation: "MSE = (1/n) Σ(y_true - y_pred)²",
      desc: "Measures the average squared difference between estimated values and the actual value."
    },
    {
      title: "Sigmoid Function",
      equation: "σ(z) = 1 / (1 + e^(-z))",
      desc: "Maps any real-valued number into the (0, 1) range, forming the basis of logistic regression probabilities."
    },
    {
      title: "SVM Hyperplane",
      equation: "w·x + b = 0",
      desc: "The decision boundary that maximizes the margin between two classes."
    },
    {
      title: "PCA Covariance",
      equation: "Σ = (1/n-1) X^T X",
      desc: "The covariance matrix captures the variance and correlations across different features."
    },
    {
      title: "Gradient Descent",
      equation: "θ = θ - α ∇J(θ)",
      desc: "Iterative optimization algorithm for finding a local minimum of a differentiable function."
    },
    {
      title: "Adam Optimizer",
      equation: "w = w - (α / (√v + ε)) * m",
      desc: "Adaptive Moment Estimation combining the advantages of AdaGrad and RMSProp."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-secondary/30 rounded-2xl border border-white/5 my-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-primary">Mathematical</span> Foundations</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The core equations translated into raw NumPy operations to power the machine learning models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formulas.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            </div>
            
            <div className="bg-background/80 border border-white/5 rounded-xl p-4 mb-4 flex items-center justify-center min-h-[80px]">
              <code className="text-primary tracking-wide font-mono text-center">
                {item.equation}
              </code>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MathFoundation;
