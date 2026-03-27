import { motion } from 'framer-motion';

const GateMetric = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-24 w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-ola-neon/5 via-transparent to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center w-full max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-white tracking-widest uppercase">The 6-Month Gate</h2>

        {/* Circular Progress Visual */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-16 font-sans">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background track */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            {/* Target marker */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="1 10" />
            {/* Progress line */}
            <motion.circle 
              cx="50" cy="50" r="45" fill="none" 
              stroke="#00FF66" strokeWidth="6" strokeLinecap="round"
              initial={{ strokeDasharray: "0 300" }}
              whileInView={{ strokeDasharray: "40 300" }} // Approx 15% visual
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="glow-text"
              style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 102, 0.5))" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-gray-400 font-mono text-sm uppercase">Threshold</span>
            <span className="text-6xl md:text-7xl font-black text-ola-neon glow-text mt-2">&lt; 15%</span>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          If EV market share remains below 15% by Q2 FY27... <br/>
          <strong className="text-ola-neon">Trigger an immediate strategic review of all non-core assets.</strong>
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 1.5 }}
           className="inline-block"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white border-t border-b border-ola-neon/30 py-6 uppercase">
            Ola doesn't need reinvention. <br/><span className="text-ola-neon">It needs discipline.</span>
          </h1>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default GateMetric;
