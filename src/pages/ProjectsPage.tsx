import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-body font-medium mb-3">My Work</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground font-body text-sm max-w-lg">
              A selection of projects that showcase my backend engineering expertise and full-stack capabilities.
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-body font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-body"
                      >
                        <Github size={16} /> Source Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-body"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
