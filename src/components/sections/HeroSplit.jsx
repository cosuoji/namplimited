import React from "react";
import { motion } from "framer-motion";

const HeroSplit = () => {
  return (
    <section className="pt-20 min-h-[90vh] flex flex-col md:flex-row bg-ag-cream">
      {/* Left: Content Area */}
      <div className="w-full md:w-1/2 flex items-center px-8 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-ag-lime font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Grassroots Agriculture
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-ag-dark leading-[1.1] mb-8">
            Farming Done <br /> <span className="italic">the Right Way</span>
          </h1>
          <p className="text-ag-dark/70 text-lg leading-relaxed mb-10 max-w-md">
            We use limited pesticides to grow the best produce on earth, nutured
            to health and sustainability.
          </p>
          <div className="flex gap-4">
            <button className="bg-ag-dark text-ag-cream px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ag-lime hover:text-ag-dark transition-all">
              Explore Our Farms
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right: Image Area */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1691755769447-b66417a2030e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern Vertical Farm"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSplit;
