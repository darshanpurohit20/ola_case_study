import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden rounded-[2rem] bg-gray-900/40 border border-white/5 flex items-center justify-center group">
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointers-events-none" />
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-ola-neon/10 blur-[100px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
       
       <motion.img 
         src={src} 
         alt={alt} 
         loading="lazy"
         decoding="async"
         style={{ y }}
         className={`relative z-10 object-contain w-[90%] h-[90%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${className}`}
       />
    </div>
  );
};

const ProductsShowcase = () => {
  return (
    <section className="relative w-full bg-[#020202] py-32 px-8 z-20">
      
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center md:text-left mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
            The Illusion of <br/><span className="text-gray-500">Infinite Scale.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            A brilliant portfolio on paper. A logistical nightmare in practice. When you build pure emotion without the architecture of trust, it collapses instantly.
          </p>
        </motion.div>

        {/* Ola Electric Product */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <ParallaxImage src="/s1_pro_nobg.png" alt="Ola S1 Pro" />
          </div>
          <div className="flex-1 order-1 md:order-2 flex flex-col gap-6">
            <h3 className="text-5xl md:text-6xl font-black">Design that <span className="text-ola-neon">Moves.</span></h3>
            <p className="text-2xl text-gray-400 font-light leading-relaxed">
               The hardware is universally praised. The software is futuristic. 
               <strong className="text-white block mt-4">But when the suspension snaps and the service center is full, the emotion dies.</strong>
            </p>
            <div className="flex gap-4 mt-4">
              <span className="px-6 py-2 rounded-full border border-ola-neon/30 text-ola-neon text-sm font-mono tracking-widest bg-ola-neon/10">181KM RANGE</span>
              <span className="px-6 py-2 rounded-full border border-white/10 text-gray-300 text-sm font-mono tracking-widest">S1 PLATFORM</span>
            </div>
          </div>
        </div>

        {/* Ola Cabs Product */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-1 md:order-1 flex flex-col gap-6 text-left md:text-right w-full">
            <h3 className="text-5xl md:text-6xl font-black">The Original <span className="text-white">Moat.</span></h3>
            <p className="text-2xl text-gray-400 font-light leading-relaxed">
               A billion rides. The platform that built the empire. 
               <strong className="text-gray-200 block mt-4">Yet, entirely disconnected from the hardware revolution happening beside it.</strong>
            </p>
            <div className="flex gap-4 mt-4 justify-start md:justify-end flex-wrap">
               <span className="px-6 py-2 rounded-full border border-white/10 text-white text-sm font-mono tracking-widest bg-white/5 backdrop-blur-md">EV FLEET</span>
               <span className="px-6 py-2 rounded-full border border-gray-600/30 text-gray-400 text-sm font-mono tracking-widest">URBAN MOBILITY</span>
            </div>
          </div>
          <div className="flex-1 order-2 md:order-2 w-full">
            <ParallaxImage src="/cab_accurate_nobg.png" alt="Ola Cab EV" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsShowcase;
