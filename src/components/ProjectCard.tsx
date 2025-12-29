import { motion } from "framer-motion";
import type { Project } from "@shared/schema";
import { Link } from "wouter";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Map titles to slugs for routing
  const getSlug = (title: string) => {
    const slugs: Record<string, string> = {
      "Astrofarma": "astrofarma",
      "Stop": "stop",
      "Inova Alpin": "inova-alpin",
      "Conceito": "conceito",
      "Petlovers": "petlovers",
      "Trambit": "trambit"
    };
    return slugs[title] || title.toLowerCase().replace(/\s+/g, '-');
  };

  const projectSlug = getSlug(project.title);

  return (
    <motion.div 
      className="group cursor-pointer relative"
      whileHover="hover"
      initial="initial"
    >
      <Link href={`/project/${projectSlug}`}>
        <div className="overflow-hidden rounded-sm aspect-square bg-neutral-900 relative">
          <motion.img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          >
            <div className="flex justify-between items-baseline text-white">
              <h3 className="text-sm font-medium uppercase tracking-wide">{project.title}</h3>
              <span className="text-xs text-neutral-300">{project.category}</span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
