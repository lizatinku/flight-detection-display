import { motion } from "framer-motion";
import projectImage from "../assets/project.png";

const OverviewSection = () => (
  <section id="overview" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT: TEXT */}
        <div>
          <h2 className="font-serif font-bold text-4xl tracking-widest text-orange-500 uppercase mb-3">
            Project Overview
          </h2>

          <h2 className="font-serif font-bold text-2xl text-black uppercase mb-3">
            Aircraft Detection and Display
          </h2>

          <ul className="text-black font-serif leading-relaxed space-y-2 list-disc list-inside">
            <li>
              TI CC3200 LaunchPad queries the OpenSky REST API over WiFi and parses JSON flight data.
            </li>

            <li>
              Nearby aircraft metadata (callsign, altitude, origin) is rendered on a 128×128 color OLED display via SPI.
            </li>

            <li>
              An ambient light sensor dynamically adjusts display brightness.
            </li>

            <li>
              An IR receiver enables interrupt-driven user controls.
            </li>

            <li>
              Flight telemetry is published to AWS IoT Core via MQTT for cloud logging and analytics.
            </li>
          </ul>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="bg-muted rounded-xl border border-border p-6 flex items-center justify-center aspect-square max-w-sm">
          <img
            src={projectImage}
            alt="Flight Tracker Device"
            className="object-contain max-h-full"
          />
        </div>

      </motion.div>
    </div>
  </section>
);

export default OverviewSection;