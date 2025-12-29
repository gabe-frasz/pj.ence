import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { label: "Index", href: "/" },
    { label: "Info", href: location === "/" ? "#about" : "/#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center text-white"
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="text-sm font-medium tracking-wide">
              Ence
            </div>
            <span className="text-sm font-medium hidden md:block">portfólio</span>
          </Link>
        </div>

        <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          {links.slice(0, 2).map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-sm font-medium hidden md:block lowercase">
          <a href="mailto:contatoforjoao@gmail.com" className="hover:opacity-70 transition-opacity">
            contatoforjoao@gmail.com
          </a>
        </div>
        
        <button 
          className="md:hidden text-sm font-medium"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : "MENU"}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 flex flex-col gap-8"
          >
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold tracking-tighter hover:text-neutral-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-auto pb-12">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Contato</p>
              <a href="mailto:contatoforjoao@gmail.com" className="text-xl font-medium lowercase">
                contatoforjoao@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
