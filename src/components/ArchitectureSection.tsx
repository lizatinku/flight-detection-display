import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { label: "OpenSky API", desc: "REST query over WiFi" },
  { label: "CC3200 MCU", desc: "JSON parse & control logic" },
  { label: "MAX7219 LED", desc: "SPI-driven dot matrix display" },
  { label: "AWS IoT", desc: "MQTT telemetry publish" },
];

const ArchitectureSection = () => (
  <section id="architecture" className="section-padding bg-black">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-3xl tracking-widest text-orange-500 uppercase mb-3 text-center">
          System Architecture
        </h1>

        <h2 className="text-2xl md:text-xl font-display font-bold text-white mb-4 text-center">
          End-to-End Data Flow
        </h2>

        {/* <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          The CC3200 orchestrates WiFi networking, sensor I/O, display rendering, and cloud
          connectivity — all running on a single-threaded real-time firmware loop.
        </p> */}

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-16">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2 md:gap-4">
              <div className="bg-zinc-900 rounded-xl border border-zinc-700 p-5 text-center min-w-[160px] shadow-sm">
                <p className="font-display text-sm font-bold text-white">{s.label}</p>
                <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <ArrowRight className="text-orange-500 hidden md:block" size={20} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-xl border border-zinc-700 p-10 flex items-center justify-center min-h-[280px]">
          <p className="font-display text-sm text-gray-400">
            Architecture diagram placeholder
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ArchitectureSection;