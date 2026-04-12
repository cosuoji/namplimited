import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Resources Saved",
    value: "15%",
    detail: "Compared to traditional farming",
  },
  {
    label: "Limited",
    value: "Pesticides",
    detail: "Grown in a protected environment",
  },
  {
    label: "Sustainable Farming",
    value: "Efficient",
    detail: "We operate even with limited resources",
  },
];

const StatsGrid = () => {
  return (
    <section className="bg-ag-cream py-24 border-t border-ag-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ag-dark/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="py-10 md:py-0 md:px-12 first:pl-0 last:pr-0 text-center md:text-left"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-ag-dark/50 mb-4 font-bold">
                {stat.label}
              </p>
              <h2 className="font-serif text-5xl text-ag-dark mb-4 italic">
                {stat.value}
              </h2>
              <p className="text-sm text-ag-dark/60 font-medium leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
