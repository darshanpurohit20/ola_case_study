import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-8">
      {/* Abstract dark radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,102,0.1),transparent_50%)] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col pt-32 lg:flex-row items-center gap-12 justify-between w-full">
        
        {/* Left: Text hook - Emotional and large */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 z-20"
        >
          <span className="inline-block py-2 px-6 rounded-full border border-white/20 bg-white/5 text-gray-300 font-mono text-sm uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]">
             Strategic Thesis 2026
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black mb-6 tracking-tight leading-none text-white">
            Designed <br />
            To <span className="text-ola-neon drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">Fail.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl text-gray-400 max-w-xl font-light leading-relaxed"
          >
            Ola doesn’t have a service problem. <br />
            <span className="text-white font-medium">It has an architectural trust crisis.</span>
          </motion.p>
        </motion.div>

        {/* Right: Transparent Scooter overlapping text slightly */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} 
          className="flex-1 relative w-full h-full min-h-[500px] flex items-center justify-end z-10"
        >
          <div className="absolute w-64 h-64 bg-ola-neon/30 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <img 
            src="/s1_pro_nobg.png" 
            alt="Ola S1 Pro Hero" 
            className="relative z-10 w-full max-w-[800px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] xl:-ml-32"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
