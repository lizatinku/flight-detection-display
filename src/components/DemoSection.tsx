import { motion } from "framer-motion";

const DemoSection = () => (
  <section id="demo" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-display text-xs tracking-widest text-secondary uppercase mb-3">
          Demo
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          See It in Action
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Watch the full system demo — from API query to LED display output with IR control and
          cloud telemetry.
        </p>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border bg-hero aspect-video flex items-center justify-center">
          {/* Replace the div below with:
              <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ... />
          */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <svg className="text-secondary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="font-display text-sm text-hero-muted">
              Our Demo video
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DemoSection;
