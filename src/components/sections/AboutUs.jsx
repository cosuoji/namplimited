import React from "react";
import { motion } from "framer-motion";
import farm from "../../assets/farm.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="py-32 bg-ag-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={farm}
                alt="Tech-driven farming"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Detail */}
            <div className="absolute -bottom-10 -right-10 bg-ag-dark text-ag-cream p-8 hidden md:block rounded-xl max-w-xs">
              <p className="font-serif italic text-xl">
                "We're there each step of the process, from seed to harvest."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-ag-lime font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              Our Ethos
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-ag-dark leading-tight mb-8">
              Carefully Grown <br />
              Every <span className="italic">Step Of The Process.</span>
            </h2>
            <div className="space-y-6 text-ag-dark/70 leading-relaxed text-lg">
              <p>
                At NAMP Limited, we view every step as a set of variables that
                we've tested and optimized to deliver the best results.
              </p>
              <p>
                Our mission is to bridge the gap between urban living and
                agricultural excellence, delivering produce that ensures health
                to the consumers
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
