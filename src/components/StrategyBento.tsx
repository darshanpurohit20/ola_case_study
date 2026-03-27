import { motion } from 'framer-motion';
import { Activity, ShieldAlert } from 'lucide-react';

const StrategyBento = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 py-24 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block py-1 px-4 rounded-full bg-blue-900/40 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4 border border-blue-500/30">
          The Turnaround
        </span>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Fix the System.<br/><span className="text-gray-500">Not the Symptoms.</span></h2>
      </motion.div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto">
        
        {/* Core Fix: Reliability (Large) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 glass-card border-ola-neon/20 bg-ola-neon/5 relative overflow-hidden group p-10 flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity className="w-48 h-48 text-ola-neon" />
          </div>
          <div>
            <div className="w-10 h-10 bg-ola-neon/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-ola-neon font-black font-mono">01</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Reliability Reset</h3>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Implement aggressive quality gates at the factory level and enforce rigid Service SLAs. <strong className="text-ola-neon">Hyperservice proved execution is possible (77% resolution).</strong> Now, sustain it.
            </p>
          </div>
        </motion.div>

        {/* Governance (Tall) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-1 glass-card border-white/10 bg-white/5 relative overflow-hidden group p-10 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-black font-mono">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Governance Reset</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Introduce independent oversight. Mandate a "No New Ventures" policy until core margins and market share explicitly stabilize.
            </p>
          </div>
          <ShieldAlert className="w-12 h-12 text-gray-500 group-hover:text-white transition-colors" />
        </motion.div>

        {/* Krutrim Pivot (Wide) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3 glass-card border-blue-500/20 bg-blue-900/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-10"
        >
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-blue-400 font-black font-mono">03</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">The Krutrim Moat</h3>
            <p className="text-gray-400 leading-relaxed">
              Stop chasing external AI glory. Reposition Krutrim strictly as Ola's Internal AI Engine—powering predictive maintenance, automated service bots, and intelligent dispatch.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/10 rounded-xl p-6 w-full md:w-auto text-center md:text-right flex flex-col gap-2">
            <span className="text-blue-400 font-mono text-sm uppercase">Current Revenue</span>
            <span className="text-4xl font-black text-white">90% <span className="text-xl text-gray-500 font-normal">Internal</span></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StrategyBento;
