// import { motion } from "framer-motion";
// import { Play, Github } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";

// const HeroSection = () => (
//   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//     {/* Background */}
//     <div className="absolute inset-0">
//       <img src={heroBg} alt="" className="w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-hero/70" />
//     </div>

//     <div className="relative z-10 container mx-auto text-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-hero-foreground leading-tight mb-6">
//           Overhead Flight
//           <br />
//           <span className="gradient-text">Detection & Display</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-hero-muted text-lg md:text-xl mb-10 font-light">
//           An embedded IoT system using the CC3200 to retrieve real-time aircraft data
//           and display it on an LED matrix.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="#demo"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity"
//           >
//             <Play size={16} /> Watch Demo
//           </a>
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-hero-muted/30 text-hero-foreground font-display text-sm font-semibold hover:bg-hero-foreground/10 transition-colors"
//           >
//             <Github size={16} /> View GitHub
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default HeroSection;

import { motion } from "framer-motion";
import { Play, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 opacity-20">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
    </div>

    <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT: Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
          Overhead Flight
          <br />
          <span className="gradient-text">Detection & Display</span>
        </h1>

        <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-10 font-light">
          An embedded IoT system using the CC3200 to retrieve real-time aircraft
          data and display it on an LED matrix.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-display text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Play size={16} /> Watch Demo
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-white font-display text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Github size={16} /> View GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-end"
      >
        <img
          src={heroBg}
          alt="CC3200 Flight Tracker"
          className="max-w-md w-full rounded-xl shadow-2xl"
        />
      </motion.div>

    </div>
  </section>
);

export default HeroSection;