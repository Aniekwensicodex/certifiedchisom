import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "EJS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Postman", "Insomnia", "CI/CD"],
  },
  {
    title: "Concepts",
    skills: ["Microservices", "JWT Auth", "RBAC", "Agile/Scrum", "Clean Architecture", "OOP"],
  },
];

const SkillsPage = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-body font-medium mb-3">What I Use</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h1>
            <p className="text-muted-foreground font-body text-sm max-w-lg">
              Technologies and tools I work with daily to build reliable, scalable software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-display text-lg font-semibold text-primary mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-body px-3 py-1.5 rounded-md bg-secondary text-foreground border border-border hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SkillsPage;
