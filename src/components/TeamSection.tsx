import { motion } from "framer-motion";
import { User } from "lucide-react";

const members = [
  {
    name: "Team Member 1",
    role: "Embedded Systems & Firmware",
    desc: "CC3200 firmware development, API integration, MQTT telemetry, and SPI driver implementation.",
  },
  {
    name: "Team Member 2",
    role: "Hardware Integration & Testing",
    desc: "Circuit design, sensor interfacing, LED matrix wiring, and system-level debugging.",
  },
];

const TeamSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs tracking-widest text-secondary uppercase mb-3 text-center">
          The Team
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
          Built By
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-card rounded-xl border border-border p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <User className="text-muted-foreground" size={28} />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">{m.name}</h3>
              <p className="text-xs text-secondary font-display mt-1 mb-3">{m.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
