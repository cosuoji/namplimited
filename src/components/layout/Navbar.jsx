import React from "react";
import { Leaf, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-ag-cream/80 backdrop-blur-md border-b border-ag-dark/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Leaf
            className="text-ag-dark group-hover:text-ag-lime transition-colors"
            size={24}
          />
          <span className="font-serif text-xl tracking-tight font-bold uppercase">
            NAMP Limited
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-ag-lime transition-colors">
            About
          </a>
          <a href="#produce" className="hover:text-ag-lime transition-colors">
            Produce
          </a>
          <a href="#services" className="hover:text-ag-lime transition-colors">
            Services
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <Menu size={24} className="cursor-pointer md:hidden" />
          <a
            href="#contact"
            className="hidden md:block bg-ag-dark text-ag-cream px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ag-lime hover:text-ag-dark transition-all"
          >
            Get Notified
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
