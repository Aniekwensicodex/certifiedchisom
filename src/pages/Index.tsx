import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Terminal } from "lucide-react";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  return (
    <main className="pt-16">
      <section className="min-h-[calc(100vh-4rem)] flex items-center section-padding">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={itemVariants} className="text-primary font-body text-sm font-medium mb-4 flex items-center gap-2">
                <Terminal size={16} /> Hello, I'm
              </motion.p>
              <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
                Aniekwensi
                <span className="block text-gradient">Chisom</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground font-body mb-2 font-medium">
                Senior Software Engineer
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground font-body text-sm leading-relaxed mb-8 max-w-lg">
                6+ years building high-performance web applications and scalable backend systems.
                Specialized in Node.js, Express, React, and database architecture.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm font-body font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Hire Me
                </Link>
                <a
                  href="/Chisom_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm font-body font-semibold rounded-lg hover:bg-secondary transition-colors"
                >
                  <Download size={16} /> Download CV
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="hidden lg:flex justify-center"
            >
              <div className="glass-card p-6 w-full max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <pre className="text-sm font-mono text-muted-foreground leading-relaxed">
                  <code>
{`const developer = {
  name: "Chisom Aniekwensi",
  role: "Senior Software Engineer",
  experience: "6+ years",
  stack: [
    "Node.js", "Express",
    "React", "PostgreSQL",
    "MongoDB", "GraphQL"
  ],
  passion: "Building scalable systems"
};`}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { num: "6+", label: "Years Experience" },
              { num: "20+", label: "Projects Delivered" },
              { num: "5+", label: "Companies" },
              { num: "100%", label: "Commitment" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.num}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
