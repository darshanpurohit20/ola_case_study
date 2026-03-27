import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FounderProfile = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  // Complex parallax and opacity mapping
  const imageScale = useTransform(smoothProgress, [0.3, 0.6], [1.2, 1]);
  const imageOpacity = useTransform(smoothProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  
  const textY = useTransform(smoothProgress, [0.3, 0.6], [100, 0]);
  const textOpacity = useTransform(smoothProgress, [0.3, 0.5, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-[#050505] flex items-center justify-center">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background glow radiating from founder */}
        <motion.div 
          style={{ opacity: imageOpacity }}
          className="absolute inset-x-0 bottom-0 h-3/4 bg-ola-neon/5 blur-[150px] z-0"
        />

        {/* The Founder Image */}
        <motion.div 
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 flex items-end justify-center z-10"
        >
           <img 
             src="/founder_bhavish.png" 
             alt="Founder Bhavish Aggarwal" 
             className="w-full max-w-[900px] object-cover object-top mask-image-gradient"
             loading="lazy"
             decoding="async"
             style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 100%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 100%)' }}
           />
        </motion.div>

        {/* Floating Metrics / Quotes */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
           <motion.div style={{ y: textY, opacity: textOpacity }} className="grid md:grid-cols-2 gap-16 md:gap-32 w-full">
              
              <div className="flex flex-col gap-6">
                 <span className="inline-block py-2 px-4 rounded-full border border-white/20 bg-white/5 text-gray-400 font-mono text-xs uppercase tracking-widest backdrop-blur-md w-fit">
                    The Leadership Paradox
                 </span>
                 <h2 className="text-5xl md:text-7xl font-black leading-tight">
                    Visionary <br/>
                    <span className="text-ola-neon">Velocity.</span>
                 </h2>
                 <p className="text-xl text-gray-400 font-light max-w-md">
                    Bhavish Aggarwal's top-down governance generated massive initial momentum. But speed without structural execution discipline fractures the trust architecture.
                 </p>
              </div>

              <div className="flex flex-col justify-end gap-6 text-right relative">
                 <div className="absolute right-0 top-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full" />
                 <h3 className="text-4xl font-bold text-white">"Move Fast."</h3>
                 <p className="text-gray-400 font-light ml-auto max-w-sm">
                    The Silicon Valley mantra applied to hard manufacturing and complex service networks led to high product churn and leadership attrition.
                 </p>
                 <div className="glass-card mt-8 p-6 text-left ml-auto max-w-sm border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-ola-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="text-sm font-mono text-ola-neon mb-2 uppercase tracking-wide">Key Insight</p>
                    <p className="text-gray-300 font-medium leading-relaxed relative z-10">
                       Ola doesn't need better ideas. It needs an operational counter-balance to its founder.
                    </p>
                 </div>
              </div>

           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
