import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const VelocityTimeline = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress of this massive container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Add physics to make it feel goated
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Background fade
  const bgOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // The Scooter drives horizontally across the screen from -50vw to 120vw
  const scooterX = useTransform(smoothProgress, [0, 1], ["-50vw", "120vw"]);
  
  // Adding realistic bumps and road movement
  const scooterY = useTransform(smoothProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    ["10px", "-15px", "20px", "-10px", "15px"]
  );
  
  // Subtle rotation to simulate physical movement
  const scooterRotate = useTransform(smoothProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [-2, 1, -1.5, 2, -1]
  );

  // SVG road animation
  const roadLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Timeline Texts pop up sequentially as it drives past
  const phase1Y = useTransform(smoothProgress, [0.05, 0.15, 0.25], [100, 0, -100]);
  const phase1Op = useTransform(smoothProgress, [0.05, 0.15, 0.2, 0.25], [0, 1, 1, 0]);

  const phase2Y = useTransform(smoothProgress, [0.25, 0.35, 0.45], [100, 0, -100]);
  const phase2Op = useTransform(smoothProgress, [0.25, 0.35, 0.4, 0.45], [0, 1, 1, 0]);

  const phase3Y = useTransform(smoothProgress, [0.45, 0.55, 0.65], [100, 0, -100]);
  const phase3Op = useTransform(smoothProgress, [0.45, 0.55, 0.6, 0.65], [0, 1, 1, 0]);

  const phase4Y = useTransform(smoothProgress, [0.65, 0.75, 0.85], [100, 0, -100]);
  const phase4Op = useTransform(smoothProgress, [0.65, 0.75, 0.8, 0.85], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black/0 w-full" id="timeline">
      
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Deep dark backdrop */}
        <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 bg-[#030303] z-0" />

        {/* The Animated SVG Road */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-16 flex items-center justify-center opacity-40 z-10 pointer-events-none px-0">
          <svg className="w-full h-[4px]">
             <motion.line 
               x1="0" y1="2" x2="100%" y2="2"
               stroke="#00FF66" strokeWidth="4"
               strokeDasharray="20 40"
               style={{ 
                  pathLength: roadLength,
                  filter: "drop-shadow(0 0 10px #00FF66)"
               }}
             />
          </svg>
        </div>

        {/* Narrative Overlays (Road signs) Z-20 to be above everything except scooter if needed */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointers-events-none">
          
          {/* Main Title Background Blur */}
          <motion.div 
             style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
             className="absolute top-1/4 text-center mx-auto"
          >
             <h2 className="text-5xl md:text-7xl font-black mb-4">The <span className="text-orange-500">Execution</span> Path.</h2>
             <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Scroll to witness the instability.</p>
          </motion.div>

          <motion.div style={{ opacity: phase1Op, y: phase1Y }} className="absolute top-[20%] left-[10%] max-w-sm glass-card border-red-500/30 bg-black/80 backdrop-blur-2xl">
            {/* Ola Food Backpack */}
            <motion.img 
                src="/foods_v2_nobg.png"
                alt="Ola Foods Backpack"
                className="absolute -top-32 -left-20 w-56 h-56 object-contain opacity-70 -z-10 drop-shadow-[0_0_40px_rgba(239,68,68,0.5)] pointer-events-none"
                animate={{ y: [0, -15, 0], rotate: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <h3 className="text-3xl font-bold mb-2 text-red-500">Ola Food</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Started. Paused. Restarted. Paused again. A core symptom of speed overriding sustainable operations.</p>
            <span className="px-3 py-1 rounded-full border border-red-500/50 text-red-500 text-xs font-mono">DEAD</span>
          </motion.div>

          <motion.div style={{ opacity: phase2Op, y: phase2Y }} className="absolute bottom-[20%] right-[10%] max-w-sm glass-card border-orange-500/30 bg-black/80 backdrop-blur-2xl text-right">
            {/* Futuristic 4-Wheeler Car */}
            <motion.img 
                src="/cab_v2_nobg.png"
                alt="Futuristic Car"
                className="absolute -top-32 -right-32 w-80 h-80 object-contain opacity-50 -z-10 drop-shadow-[0_0_40px_rgba(249,115,22,0.4)] pointer-events-none"
                animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <h3 className="text-3xl font-bold mb-2 text-orange-500">4-Wheelers</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Massive PR blitz showcased a revolutionary car. Engineering drained. Quietly shelved to focus elsewhere.</p>
            <span className="px-3 py-1 rounded-full border border-orange-500/50 text-orange-500 text-xs font-mono">SHELVED</span>
          </motion.div>

          <motion.div style={{ opacity: phase3Op, y: phase3Y }} className="absolute top-[20%] left-[10%] max-w-sm glass-card border-blue-500/30 bg-black/80 backdrop-blur-2xl">
            {/* Krutrim V1 Robot */}
            <motion.img 
                src="/krutrim_nobg.png"
                alt="Krutrim Robot"
                className="absolute -top-40 -right-24 w-72 h-72 object-contain opacity-50 -z-10 drop-shadow-[0_0_40px_rgba(59,130,246,0.5)] pointer-events-none"
                animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <h3 className="text-3xl font-bold mb-2 text-blue-500">Krutrim AI (V1/V2)</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">From ride-sharing clone to Perplexity search clone. Pure identity crisis in 18 months.</p>
            <span className="px-3 py-1 rounded-full border border-blue-500/50 text-blue-500 text-xs font-mono">PIVOTED</span>
          </motion.div>

          <motion.div style={{ opacity: phase4Op, y: phase4Y }} className="absolute bottom-[20%] right-[10%] max-w-sm glass-card border-ola-neon/30 bg-black/80 backdrop-blur-2xl text-right">
            {/* Krutrim Agentic Robot */}
            <motion.img 
                src="/krutrim_nobg.png"
                alt="Krutrim Core"
                className="absolute -top-32 -left-20 w-64 h-64 object-contain opacity-40 -z-10 drop-shadow-[0_0_40px_rgba(0,255,102,0.4)] pointer-events-none"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            />
            <h3 className="text-3xl font-bold mb-2 text-ola-neon">Krutrim Agentic</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Now rebuilt as an agentic layer. We must reposition this as the internal moat.</p>
            <span className="px-3 py-1 rounded-full border border-ola-neon/50 text-ola-neon text-xs font-mono">ACTIVE</span>
          </motion.div>
        </div>

        {/* True Driving Scooter Image Layer (Z-30 on top of road and signs) */}
        <motion.div 
          style={{ x: scooterX, y: scooterY, rotate: scooterRotate }}
          className="absolute inset-0 z-30 flex items-center justify-start pointer-events-none"
        >
          <img 
            src="/s1_pro_nobg.png" 
            alt="Ola Scooter Driving" 
            className="w-[500px] md:w-[700px] -mt-16 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            style={{ filter: "drop-shadow(0px 30px 40px rgba(0,0,0,0.8))" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default VelocityTimeline;
