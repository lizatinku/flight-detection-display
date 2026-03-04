import { motion } from "framer-motion";
import { Plane, Monitor, Sun, Radio, Cloud } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Real-Time Aircraft Data",
    desc: "Queries the OpenSky Network REST API to retrieve live overhead flight metadata including callsign, altitude, and velocity.",
  },
  {
    icon: Monitor,
    title: "SPI LED Matrix Display",
    desc: "Renders scrolling flight information on cascaded MAX7219 8×8 dot-matrix modules via high-speed SPI.",
  },
  {
    icon: Sun,
    title: "Adaptive Brightness",
    desc: "ADC-connected ambient light sensor dynamically adjusts LED intensity for readability in any environment.",
  },
  {
    icon: Radio,
    title: "IR Remote Control",
    desc: "GPIO interrupt-driven IR receiver allows users to cycle flights, toggle display modes, and refresh data.",
  },
  {
    icon: Cloud,
    title: "AWS IoT Telemetry",
    desc: "Publishes flight data and device status to AWS IoT Core via TLS-secured MQTT for cloud logging and analytics.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs tracking-widest text-secondary uppercase mb-3 text-center">
          Key Features
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
          System Capabilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 bg-card rounded-xl border border-border p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
