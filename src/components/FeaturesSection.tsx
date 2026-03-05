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
  <section id="features" className="section-padding bg-black">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h1 className="font-display text-4xl font-bold tracking-widest text-orange-500 uppercase mb-4 text-center">
          Key Features
        </h1>

        <p className="text-gray-400 text-sm font-serif mb-12 text-center">
          System Capabilities
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 bg-neutral-900 rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="text-primary" size={20} />
              </div>

              <div>
                <h3 className="font-display text-sm font-bold text-white mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;