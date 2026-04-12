import React from "react";
import { motion } from "framer-motion";
import kernels from "../../assets/kernel.jpg";

const crops = [
  {
    name: "Palm Kernels",
    desc: "Native Fruits",
    img: kernels,
  },
];

const ProduceGallery = () => {
  return (
    <section id="produce" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-ag-dark/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
              The Collection
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-ag-dark leading-tight">
              Selected <span className="italic text-ag-dark/60">Crops.</span>
            </h2>
          </div>
          <p className="text-ag-dark/60 text-sm max-w-xs mb-2">
            Freshly sourced from our local farms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crops.map((crop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-ag-cream">
                <img
                  src={crop.img}
                  alt={crop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl text-ag-dark mb-1">
                {crop.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-ag-dark/40 font-bold">
                {crop.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProduceGallery;
