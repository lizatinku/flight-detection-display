import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { label: "OpenSky API", desc: "REST query over WiFi" },
  { label: "CC3200 MCU", desc: "JSON parse & control logic" },
  { label: "MAX7219 LED", desc: "SPI-driven dot matrix display" },
  { label: "AWS IoT", desc: "MQTT telemetry publish" },
];

const ArchitectureSection = () => (
  <section id="architecture" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs tracking-widest text-secondary uppercase mb-3 text-center">
          System Architecture
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          End-to-End Data Flow
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
          The CC3200 orchestrates WiFi networking, sensor I/O, display rendering, and cloud
          connectivity — all running on a single-threaded real-time firmware loop.
        </p>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-16">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2 md:gap-4">
              <div className="bg-card rounded-xl border border-border p-5 text-center min-w-[160px] shadow-sm">
                <p className="font-display text-sm font-bold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="text-secondary hidden md:block" size={20} />
              )}
            </div>
          ))}
        </div>

        {/* Architecture diagram placeholder */}
        <div className="bg-card rounded-xl border border-border p-10 flex items-center justify-center min-h-[280px]">
          <p className="font-display text-sm text-muted-foreground">
            Architecture diagram placeholder — replace with your block diagram
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ArchitectureSection;
