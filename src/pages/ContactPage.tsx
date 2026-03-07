import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-body font-medium mb-3">Let's Connect</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground font-body text-sm max-w-lg">
              Have a project in mind or want to collaborate? Reach out and let's build something great together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Mail, label: "Email", value: "chisomemmanuel995@gmail.com", href: "mailto:chisomemmanuel995@gmail.com" },
                { icon: Phone, label: "Phone", value: "+234 802 8277 607", href: "tel:+2348028277607" },
                { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: null },
                { icon: Github, label: "GitHub", value: "github.com/Aniekwensicodex", href: "https://github.com/Aniekwensicodex" },
                { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/aniekwensi-chisom-419b93256/", href: "https://www.linkedin.com/in/aniekwensi-chisom-419b93256/" },
                { icon: MessageCircle, label: "WhatsApp", value: "+234 802 827 7607", href: "https://wa.me/2348028277607?text=Hello!%20I%27m%20interested%20in%20working%20with%20you." },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-body hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground font-body">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
