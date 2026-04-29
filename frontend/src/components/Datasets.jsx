import React from 'react';
import { motion } from 'framer-motion';
import { Database, LayoutGrid, Hash, Variable, Target, HelpCircle } from 'lucide-react';

const Datasets = () => {
  const datasets = [
    {
      name: "Housing Dataset",
      samples: "1999",
      features: "5 (Area, Bedrooms, Bathrooms, Garage, YearBuilt)",
      target: "Price (Continuous)",
      why: "Perfect for demonstrating regression analysis and MSE optimization due to continuous target variables with varying scales."
    },
    {
      name: "Breast Cancer Wisconsin",
      samples: "569",
      features: "30 (Medical Metrics)",
      target: "Diagnosis (0=Benign, 1=Malignant)",
      why: "Standard for binary classification, requiring robust feature scaling and margin maximization (SVM/Logistic)."
    },
    {
      name: "Iris Dataset",
      samples: "150",
      features: "4 (Sepal/Petal Dimensions)",
      target: "Species",
      why: "The classic benchmark for dimensionality reduction (PCA) due to correlated features."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-secondary/30 rounded-2xl my-12 border border-border">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-primary">Dataset</span> Dashboard</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-xl">
            Real datasets were deliberately chosen over toy examples to test the numerical stability of the scratch implementations.
          </p>
        </div>
        
        <div className="glass-card px-8 py-4 rounded-2xl flex items-center gap-4 border border-border">
          <Database className="w-8 h-8 text-primary" />
          <div>
            <div className="text-3xl font-bold text-foreground">3</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Total Datasets</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {datasets.map((ds, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden group border border-border"
          >
            <div className="p-6 border-b border-border bg-secondary/50">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{ds.name}</h3>
            </div>
            <div className="p-6 space-y-6">
              <DataRow icon={<Hash className="w-5 h-5"/>} label="Samples" value={ds.samples} />
              <DataRow icon={<Variable className="w-5 h-5"/>} label="Features" value={ds.features} />
              <DataRow icon={<Target className="w-5 h-5"/>} label="Target" value={ds.target} />
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                  <HelpCircle className="w-5 h-5" />
                  Why Chosen?
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {ds.why}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const DataRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
      {icon}
    </div>
    <div>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="font-medium text-foreground">{value}</div>
    </div>
  </div>
);

export default Datasets;
