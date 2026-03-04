import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

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
        <div>
          <p className="font-display text-xs tracking-widest text-secondary uppercase mb-3">
            Project Overview
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Real-Time Aircraft Tracking on an Embedded Platform
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This system uses a <strong className="text-foreground">TI CC3200 LaunchPad</strong> to
            query the OpenSky Network REST API over WiFi, parse incoming JSON flight data, and render
            nearby aircraft metadata — including callsign, altitude, and origin — on a cascaded
            MAX7219 LED dot-matrix display via SPI.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            An ambient light sensor adjusts display brightness automatically, while an IR receiver
            enables interrupt-driven user control. Flight telemetry is simultaneously published to
            AWS IoT Core via MQTT for cloud logging and analytics.
          </p>
        </div>

        {/* Diagram placeholder */}
        <div className="bg-muted rounded-xl border border-border p-8 flex flex-col items-center justify-center min-h-[320px]">
          <Cpu className="text-secondary mb-4" size={48} />
          <p className="font-display text-sm text-muted-foreground text-center">
            System photo / diagram placeholder
          </p>
          <p className="text-xs text-muted-foreground mt-1">Replace with project image</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OverviewSection;
