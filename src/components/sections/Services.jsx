import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, PictureInPictureIcon, TreePalm } from "lucide-react";

const offerings = [
  {
    title: "Farming",
    desc: "We oversee farming processes, from seed to harvest.",
    icon: <TreePalm className="text-ag-lime" size={32} />,
  },
  {
    title: "Chain Supply",
    desc: "We also handle chain supply. Procurement from local farmers and suppliers.",
    icon: <PictureInPictureIcon className="text-ag-lime" size={32} />,
  },
  {
    title: "Logistics",
    desc: "We handle logistics and delivery after harvest. From local farms, to markets, to unique orders",
    icon: <Truck className="text-ag-lime" size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl italic text-ag-dark">
            Our Offerings.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 border border-ag-dark/5 bg-ag-cream/30 rounded-3xl group"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="font-serif text-2xl mb-4 group-hover:text-ag-lime transition-colors">
                {item.title}
              </h3>
              <p className="text-ag-dark/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
