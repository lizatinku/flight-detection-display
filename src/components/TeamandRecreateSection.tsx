import { motion } from "framer-motion";
import { Plug, Wifi, MonitorSmartphone, Terminal, User } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Connect Sensors",
    desc: "Wire the ambient light sensor to ADC and the IR receiver to a GPIO interrupt pin on the CC3200.",
  },
  {
    icon: Wifi,
    title: "Configure WiFi",
    desc: "Set SSID and credentials in the firmware config. The CC3200 connects automatically on boot.",
  },
  {
    icon: MonitorSmartphone,
    title: "Attach LED Matrix",
    desc: "Connect cascaded MAX7219 modules to the CC3200 SPI bus (MOSI, CLK, CS).",
  },
  {
    icon: Terminal,
    title: "Flash & Run Firmware",
    desc: "Build with CCS/IAR, flash to the LaunchPad, and power on. The system begins querying flights immediately.",
  },
];

const members = [
  {
    name: "Liza Tinku Jose",
    role: "Role:",
    desc: "Description:",
  },
  {
    name: "Tyson Tien Nguyen",
    role: "Role:",
    desc: "Description:",
  },
];

const SetupTeamSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto">

      {/* Reproducibility Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs tracking-widest text-secondary uppercase mb-3 text-center">
          Reproducibility
        </p>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
          How to Recreate This Project
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-card rounded-xl border border-border p-6"
            >
              <span className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-foreground font-display text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>

              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <s.icon className="text-secondary" size={20} />
              </div>

              <h3 className="font-display text-sm font-bold text-foreground mb-2">
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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

              <h3 className="font-display text-sm font-bold text-foreground">
                {m.name}
              </h3>

              <p className="text-xs text-secondary font-display mt-1 mb-3">
                {m.role}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default SetupTeamSection;