import { useParams } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { projectsData } from "@/lib/projectsData";
import { ProjectCard } from "@/components/ProjectCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id as string];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Top Banner (Full width placeholder) */}
      <section className="w-full aspect-[21/9] bg-neutral-900 mt-20">
        {project.images[0] && (
          <img src={project.images[0]} className="w-full h-full object-cover" alt="Hero" />
        )}
      </section>

      {/* Project Info Section */}
      <section className="px-6 md:px-12 py-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-[10px] uppercase tracking-widest text-neutral-400">
          <div>
            <p className="mb-2">Esfera</p>
            <p className="text-white uppercase">{project.name || id?.replace(/-/g, ' ')}</p>
          </div>
          <div>
            <p className="mb-2">Data</p>
            <p className="text-white">{project.year}</p>
          </div>
          <div>
            <p className="mb-2">Serviços</p>
            <p className="text-white">{project.service}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {project.tagline}
          </h2>
          <div className="space-y-8 max-w-xl">
            <p className="text-sm leading-relaxed opacity-70">
              {project.description}
            </p>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Estratégia de design</p>
              <p className="text-sm leading-relaxed opacity-70">
                {project.designStrategy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Grid */}
      <section className="flex flex-col gap-[2px]">
        {project.images.map((img, index) => (
          <div key={index} className="w-full aspect-[16/9] bg-neutral-300">
            <img src={img} className="w-full h-full object-cover" alt={`Project ${index}`} />
          </div>
        ))}
      </section>

      {/* Selected Works Section */}
      <section className="px-6 md:px-12 py-24 bg-black">
        <div className="flex items-baseline gap-2 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Trabalhos selecionados</h2>
          <span className="text-sm text-neutral-500 font-medium">(6)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {[
            { id: "astrofarma", title: "Astrofarma", category: "Identidade Visual" },
            { id: "zoeira-cooking", title: "Zoeira Cooking", category: "Identidade Visual" },
            { id: "inova-alpin", title: "Inova Alpin", category: "Product Design" },
            { id: "conceito", title: "Conceito", category: "Branding" },
            { id: "petlovers", title: "Petlovers", category: "Eco-Branding" },
            { id: "trambit", title: "Trambit", category: "Web Design" }
          ].map((p, i) => {
            const projectDetail = projectsData[p.id];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ProjectCard project={{
                  id: p.id,
                  title: p.title,
                  category: p.category,
                  imageUrl: projectDetail?.images[0] || "",
                  description: "",
                  client: ""
                } as any} />
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
