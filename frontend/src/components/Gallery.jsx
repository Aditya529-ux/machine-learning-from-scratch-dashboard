import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const graphs = [
    { title: "Linear Regression", desc: "Predicted vs Actual Price", img: "/graphs/improved_linear_regression.png" },
    { title: "Logistic Regression", desc: "Decision Boundary", img: "/graphs/logistic_regression_real.png" },
    { title: "SVM", desc: "Margin & Support Vectors", img: "/graphs/svm_real_data.png" },
    { title: "PCA", desc: "2D Feature Projection", img: "/graphs/pca_real_data.png" },
    { title: "Gradient Descent", desc: "Loss Curve (Slow)", img: "/graphs/gd_loss_curve.png" },
    { title: "RMSProp", desc: "Loss Curve (Faster)", img: "/graphs/rmsprop_loss_curve.png" },
    { title: "Adam Optimizer", desc: "Loss Curve (Fastest)", img: "/graphs/adam_loss_curve.png" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Visual <span className="text-primary">Gallery</span></h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Actual generated graphical representations of model performances, decision boundaries, and convergence rates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {graphs.map((graph, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`glass-card rounded-2xl p-4 flex flex-col group overflow-hidden cursor-pointer hover:border-primary/50 transition-colors ${idx === 6 ? 'md:col-span-2 lg:col-span-2 xl:col-span-1 bg-primary/5 border-primary/20' : ''}`}
            onClick={() => setSelectedImg(graph)}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-border bg-secondary">
              <img 
                src={graph.img} 
                alt={graph.title} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="bg-background/90 text-foreground text-sm py-2 px-4 rounded-full font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Fullscreen</span>
              </div>
            </div>
            
            <div className="px-2 pb-2">
              <h4 className="text-lg font-bold text-foreground mb-1">{graph.title}</h4>
              <p className="text-sm text-muted-foreground">{graph.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              className="absolute top-6 right-6 w-12 h-12 bg-secondary/50 hover:bg-secondary rounded-full flex items-center justify-center text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-card p-2 rounded-2xl w-full border border-border shadow-2xl">
                <img 
                  src={selectedImg.img} 
                  alt={selectedImg.title} 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedImg.title}</h3>
                <p className="text-muted-foreground font-medium text-lg">{selectedImg.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
