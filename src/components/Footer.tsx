import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-12 md:px-12 bg-black text-neutral-600 border-t border-neutral-900">
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Ence</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
