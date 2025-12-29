import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-bold leading-[0.8] tracking-tighter">
              João V' <br />
              Nascimento
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8 lg:mb-4 lg:max-w-md"
          >
            <p className="text-sm md:text-base text-neutral-200 font-normal leading-snug max-w-[280px]">
              Foco no desenvolvimento de empresas através de estratégia de marca e design visual.
            </p>

            <div className="flex gap-6 text-sm font-medium">
              <a href="https://linkedin.com/in/joaovitorn" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Linkedin</a>
              <a href="https://instagram.com/joaovitorn___" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Instagram</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works Grid */}
      <section id="work" className="px-6 md:px-12 py-8 md:py-12">
        <div className="flex items-baseline gap-2 mb-6">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ProjectCard project={{
                  id: i + 1,
                  title: p.title,
                  category: p.category,
                  imageUrl: projectDetail?.images[0] || `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&q=80`,
                  description: "",
                  client: ""
                } as any} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 md:px-12 py-12 md:py-16 flex justify-end items-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-2xl md:text-3xl font-medium tracking-tight text-white">
            Após toda experiência, remanescem marcas.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full justify-between min-h-[400px]"
          >
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-white max-w-md">
                João Vitor é um designer com 4 anos de carreira trabalhando com Branding & UI Design. Desenvolveu projetos para startups e também nas industrias de Moda & Gastronomia.
              </p>
            </div>
            <div className="text-xs text-neutral-500 font-medium">
              Brasil, SP
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/assets/sobre.jpg"
              alt="João V' Nascimento"
              className="w-full aspect-square object-cover grayscale transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-24 md:py-32 bg-black border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter uppercase"
          >
            Contato
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-16 md:text-right md:items-end"
          >
            <div className="space-y-1">
              <a href="mailto:contatoforjoao@gmail.com" className="text-sm md:text-base font-medium hover:opacity-70 transition-opacity">
                contatoforjoao@gmail.com
              </a>
              <p className="text-sm md:text-base text-neutral-500 font-medium">Brasil, SP</p>
            </div>

            <div className="flex gap-6 text-sm font-medium">
              <a href="https://linkedin.com/in/joaovitorn" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Linkedin</a>
              <a href="https://instagram.com/joaovitorn___" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Instagram</a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
