import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you shortly.");
  };

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
                { icon: Phone, label: "Phone", value: "+234 802 827 607", href: "tel:+234802827607" },
                { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: null },
                { icon: Github, label: "GitHub", value: "github.com/chisom", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/chisom", href: "https://linkedin.com" },
                { icon: MessageCircle, label: "WhatsApp", value: "+234 812 345 6789", href: "https://wa.me/2348123456789?text=Hello!%20I%27m%20interested%20in%20working%20with%20you." },
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

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
                { label: "Subject", type: "text", placeholder: "Project inquiry" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-muted-foreground font-body mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 text-sm font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
