import { motion } from "framer-motion";
import { Code2, Server, Database, Users } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Designing scalable APIs and microservices using Node.js, Express, and NestJS with clean architecture patterns.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Expert in PostgreSQL and MongoDB — schema design, query optimization, and ensuring transactional integrity.",
  },
  {
    icon: Code2,
    title: "Full-Stack Capability",
    desc: "Building complete solutions with React frontends connected to robust backend services and REST/GraphQL APIs.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    desc: "Mentoring junior engineers, driving Agile ceremonies, enforcing code quality standards, and leading technical decisions.",
  },
];

const experience = [
  { company: "Fintrust Technologies", role: "Senior Backend Engineer", year: "2024", desc: "Led backend architecture for payment and wallet infrastructure handling high-volume transactions." },
  { company: "Bandian", role: "Senior Software Engineer", year: "2023–2024", desc: "Architected backend services using NestJS and MongoDB for high-volume data processing." },
  { company: "Paylink Systems", role: "Senior Backend Engineer", year: "2023", desc: "Designed microservices for billing, subscription, and transaction systems." },
  { company: "Soair Africa", role: "Junior Backend Engineer", year: "2022", desc: "Built RESTful APIs and implemented email services for dynamic web applications." },
  { company: "Larana", role: "Junior Backend Engineer", year: "2021–2022", desc: "Led backend development, designing scalable APIs with Node.js and Express." },
];

const AboutPage = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-body font-medium mb-3">About Me</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who I <span className="text-gradient">Am</span>
            </h1>
            <p className="text-muted-foreground font-body text-base leading-relaxed max-w-2xl">
              I am a Senior Software Engineer with 6+ years of experience focused on building
              high-performance, scalable backend systems. I specialize in Node.js, Express, NestJS,
              and database technologies like PostgreSQL and MongoDB. I enjoy solving complex
              engineering problems and creating reliable systems for startups and enterprises.
            </p>
          </motion.div>

          {/* What I Do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <item.icon size={28} className="text-primary mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="space-y-0">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 pb-8 border-l border-border last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                  <p className="text-xs text-primary font-body font-medium mb-1">{exp.year}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary/70 font-body mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground font-body">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
