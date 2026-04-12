import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ag-dark text-ag-cream pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-ag-cream/10 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl uppercase tracking-tight">
            NAMP Limited
          </h3>
          <p className="text-ag-cream/60 text-sm leading-relaxed max-w-xs italic">
            Bespoke digital agriculture. Freshness, redefined for the modern
            table.
          </p>
        </div>

        {/* Dynamic Anchor Links */}
        {[
          {
            title: "Navigation",
            links: [
              { name: "About Us", id: "#about" },
              { name: "Our Produce", id: "#produce" },
            ],
          },
          { title: "Inquiries", links: [{ name: "Contact", id: "#contact" }] },
          { title: "Social", links: [{ name: "Instagram", id: "#" }] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-ag-lime">
              {col.title}
            </h4>
            <ul className="space-y-4 text-sm text-ag-cream/70">
              {col.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.id}
                    className="hover:text-ag-lime transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-ag-cream/40">
        <p>© 2026 NAMP Limited. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-ag-cream transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-ag-cream transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
