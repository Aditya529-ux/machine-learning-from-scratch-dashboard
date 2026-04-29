import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, ScatterChart, BarChart2, CheckCircle2, Zap } from 'lucide-react';

const Models = () => {
  const models = [
    {
      title: "Linear Regression",
      purpose: "Predict continuous values",
      dataset: "Housing Dataset",
      features: "Area, Bedrooms, Bathrooms, Garage, YearBuilt",
      target: "Price",
      math: "MSE + Gradient Descent",
      result: "89.7% Accuracy",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Logistic Regression",
      purpose: "Binary Classification",
      dataset: "Breast Cancer Wisconsin",
      features: "30 Medical Features",
      target: "Diagnosis (0/1)",
      math: "Sigmoid + Logistic Loss",
      result: "97.0% Accuracy",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Support Vector Machine",
      purpose: "Margin Maximization",
      dataset: "Breast Cancer Wisconsin",
      features: "30 Medical Features",
      target: "Diagnosis (0/1)",
      math: "Hyperplane Classification",
      result: "95.6% Accuracy",
      icon: <ScatterChart className="w-6 h-6" />
    },
    {
      title: "PCA",
      purpose: "Dimensionality Reduction",
      dataset: "Iris Dataset",
      features: "sepal/petal lengths & widths",
      target: "N/A",
      math: "Covariance & Eigenvectors",
      result: "4 → 2 Features",
      icon: <BarChart2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="models" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-primary">Model</span> Implementations</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Every algorithm engineered from primitive mathematical operations. No Scikit-learn, no shortcuts.
        </p>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {models.map((m, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-8 hover:bg-card/80 hover:border-primary/20 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
              {React.cloneElement(m.icon, { className: 'w-32 h-32' })}
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                {m.icon}
              </div>
              <h3 className="text-2xl font-bold">{m.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6 text-sm">
              <div>
                <span className="text-muted-foreground block mb-1">Purpose</span>
                <span className="font-medium text-foreground">{m.purpose}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">Dataset</span>
                <span className="font-medium text-foreground">{m.dataset}</span>
              </div>
              <div className="col-span-2">
                <span className="text-muted-foreground block mb-1">Features</span>
                <span className="font-medium text-foreground">{m.features}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">Target Variable</span>
                <span className="font-medium text-foreground">{m.target}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">Math Foundation</span>
                <span className="font-medium text-primary">{m.math}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-muted-foreground">Final Result</span>
              <span className="px-4 py-2 bg-emerald-500/10 text-emerald-500 font-bold rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                {m.result}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Model Comparison Table */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Activity className="text-primary" /> Model Comparison
        </h3>
        <div className="glass-card rounded-2xl overflow-x-auto border border-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="p-6 font-semibold text-foreground">Model</th>
                <th className="p-6 font-semibold text-foreground">Dataset</th>
                <th className="p-6 font-semibold text-foreground">Type</th>
                <th className="p-6 font-semibold text-foreground text-right">Accuracy / Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-secondary/30 transition-colors">
                <td className="p-6 font-medium">Linear Regression</td>
                <td className="p-6 text-muted-foreground">Housing</td>
                <td className="p-6 text-muted-foreground">Regression</td>
                <td className="p-6 text-right font-bold text-emerald-500">89.7 %</td>
              </tr>
              <tr className="hover:bg-secondary/30 transition-colors">
                <td className="p-6 font-medium">Logistic Regression</td>
                <td className="p-6 text-muted-foreground">Breast Cancer</td>
                <td className="p-6 text-muted-foreground">Classification</td>
                <td className="p-6 text-right font-bold text-emerald-500">97.0 %</td>
              </tr>
              <tr className="hover:bg-secondary/30 transition-colors">
                <td className="p-6 font-medium">SVM</td>
                <td className="p-6 text-muted-foreground">Breast Cancer</td>
                <td className="p-6 text-muted-foreground">Classification</td>
                <td className="p-6 text-right font-bold text-emerald-500">95.6%</td>
              </tr>
              <tr className="hover:bg-secondary/30 transition-colors">
                <td className="p-6 font-medium">PCA</td>
                <td className="p-6 text-muted-foreground">Iris</td>
                <td className="p-6 text-muted-foreground">Dimensionality Reduction</td>
                <td className="p-6 text-right font-bold text-accent">4 → 2 Features</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Optimizer Comparison Table */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Zap className="text-primary" /> Optimizer Comparison
        </h3>
        <div className="glass-card rounded-2xl overflow-x-auto relative border border-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="p-6 font-semibold text-foreground">Optimizer</th>
                <th className="p-6 font-semibold text-foreground">Final Loss</th>
                <th className="p-6 font-semibold text-foreground">Speed</th>
                <th className="p-6 font-semibold text-foreground">Stability</th>
                <th className="p-6 font-semibold text-foreground">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-secondary/30 transition-colors">
                <td className="p-6 font-medium">Gradient Descent</td>
                <td className="p-6 text-muted-foreground font-mono">0.7494777691</td>
                <td className="p-6 text-muted-foreground">Slow</td>
                <td className="p-6 text-muted-foreground">Basic</td>
                <td className="p-6 text-muted-foreground">Good</td>
              </tr>
              <tr className="hover:bg-secondary/30 transition-colors">
                <td className="p-6 font-medium">RMSProp</td>
                <td className="p-6 text-muted-foreground font-mono">0.7496312050</td>
                <td className="p-6 text-muted-foreground">Faster</td>
                <td className="p-6 text-emerald-500">Better</td>
                <td className="p-6 text-emerald-500">Good</td>
              </tr>
              <tr className="bg-primary/5 hover:bg-primary/10 transition-colors border-l-4 border-l-primary">
                <td className="p-6 font-bold text-primary flex items-center gap-2">
                  Adam <Zap className="w-4 h-4 fill-primary" />
                </td>
                <td className="p-6 font-mono font-bold text-foreground">0.7494777685</td>
                <td className="p-6 font-bold text-emerald-500">Fastest</td>
                <td className="p-6 font-bold text-emerald-500">Best</td>
                <td className="p-6 font-bold text-primary">Excellent</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center text-sm text-primary font-medium tracking-wide">
          🏆 ADAM OPTIMIZER SELECTED AS BEST PERFORMER
        </div>
      </motion.div>
    </section>
  );
};

export default Models;
