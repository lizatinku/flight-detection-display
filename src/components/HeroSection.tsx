import { motion } from "framer-motion";
import { Play, Github } from "lucide-react";
import flightradar from "@/assets/flightradar.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-black overflow-hidden">

    <div className="absolute inset-0">
      <img
        src={flightradar}
        alt=""
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 max-w-6xl">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
          Overhead Flight
          <br />
          <span className="gradient-text">Detection & Display</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white font-serif text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          An embedded IoT system using the CC3200 to retrieve real-time aircraft
          data and render it on an LED matrix display.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-display text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Play size={16} />
            Watch Demo
          </a>

          <a
            href="https://github.com/lizatinku/flight-detection-display"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-white font-display text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Github size={16} />
            View GitHub
          </a>

        </div>

      </motion.div>

    </div>
  </section>
);

export default HeroSection;