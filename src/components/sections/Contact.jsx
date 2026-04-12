import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-ag-lime text-ag-dark px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-6xl md:text-7xl mb-12 italic">
            Visit Us.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 uppercase tracking-widest text-[10px] font-bold">
            <div>
              <p className="text-ag-dark/40 mb-3">OUR FARMS</p>
              <p className="text-xs leading-loose">
                NAMP Limited
                <br />
                12 Highfield Lane, Studio 4B
                <br /> Delta, Nigeria
              </p>
            </div>
            <div>
              <p className="text-ag-dark/40 mb-3">Reach Out</p>
              <p className="text-xs leading-loose">
                +234 813 816 8171
                <br />
                info@namplimited.com
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-ag-dark text-ag-cream p-12 rounded-[2rem]"
        >
          <h3 className="font-serif text-3xl mb-4 italic">Join the harvest.</h3>
          <p className="mb-10 text-ag-cream/50 text-sm leading-relaxed">
            Get early access to our limited-release farm boxes.
          </p>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent border-b border-ag-cream/20 w-full py-4 outline-none placeholder:text-ag-cream/10 text-xs font-bold tracking-widest uppercase focus:border-ag-lime transition-colors"
            />
            <button className="w-full bg-ag-lime text-ag-dark py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-ag-cream transition-all">
              Request Early Access
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
