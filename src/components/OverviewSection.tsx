import { motion } from "framer-motion";

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
          <h2 className="font-serif font-bold text-2xl tracking-widest text-orange-500 uppercase mb-3">
            Project Overview - Aircraft Detection and Display
          </h2>
          {/* <h2 className="text-3xl md:text-xl font-display font-bold text-foreground mb-6">
          </h2> */}
            <ul className="text-black font-serif leading-relaxed space-y-2 list-disc list-inside">
              <li>
                <span className="text-black">
                  TI CC3200 LaunchPad queries the OpenSky REST API over WiFi and parses JSON flight data.
                </span>
              </li>

              <li>
                <span className="text-black">
                  Nearby aircraft metadata (callsign, altitude, origin) is displayed on a cascaded MAX7219 LED dot-matrix display via SPI.
                </span>
              </li>

              <li>
                <span className="text-black">
                  An ambient light sensor dynamically adjusts display brightness.
                </span>
              </li>

              <li>
                <span className="text-black">
                  An IR receiver enables interrupt-driven user controls.
                </span>
              </li>

              <li>
                <span className="text-black">
                  Flight telemetry is published to AWS IoT Core via MQTT for cloud logging and analytics.
                </span>
              </li>
            </ul>
        </div>

        <div className="bg-muted rounded-xl border border-border p-12 flex flex-col items-center justify-center aspect-square max-w-sm">
          <p className="font-display text-sm text-muted-foreground text-center">
            Placeholder for project picture
          </p>
        </div>
        </motion.div>
      </div>
  </section>
);

export default OverviewSection;
