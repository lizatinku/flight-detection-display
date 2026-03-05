import { motion } from "framer-motion";
import { Cpu, LayoutGrid, Sun, Radio } from "lucide-react";

const components = [
  {
    icon: Cpu,
    title: "CC3200 LaunchPad",
    desc: "TI SimpleLink WiFi MCU with integrated TCP/IP stack, TLS, and GPIO/SPI peripherals.",
  },
  {
    icon: LayoutGrid,
    title: "MAX7219 LED Matrix",
    desc: "Cascaded 8×8 dot-matrix modules driven over SPI for scrolling text and flight data.",
  },
  {
    icon: Sun,
    title: "Ambient Light Sensor",
    desc: "Analog photoresistor read via ADC to dynamically adjust LED brightness.",
  },
  {
    icon: Radio,
    title: "IR Receiver",
    desc: "GPIO interrupt-driven infrared receiver for remote control input.",
  },
];

const HardwareSection = () => (
  <section id="hardware" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-2xl tracking-widest text-secondary uppercase mb-10 text-center">
          Hardware Components
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <c.icon className="text-secondary" size={20} />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HardwareSection;
