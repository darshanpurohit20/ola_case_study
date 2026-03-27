import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2 } from 'lucide-react';

const recoveryData = [
  { month: 'Nov', share: 6.2 },
  { month: 'Early Dec', share: 7.0 },
  { month: 'Mid Dec', share: 8.5 },
  { month: 'Dec 31', share: 9.3 }
];

const RecoveryData = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 py-24 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Col: Proof */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-8"
        >
          <div>
            <div className="flex items-center gap-3 text-ola-neon font-mono text-sm mb-4 uppercase tracking-wider">
              <CheckCircle2 className="w-5 h-5" />
              Proof of Capability
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Service is NOT <br/><span className="text-ola-neon">The Core Problem.</span></h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-6">
              When Ola focuses on operations, the capability is undeniable. The "Hyperservice" intervention proved this. It's not a skill deficit—it’s an <strong className="text-white">attention deficit.</strong>
            </p>
          </div>

          <div className="glass-card border-ola-neon/20 bg-ola-neon/5 p-8 flex flex-col justify-center text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ola-neon/10 rounded-full blur-3xl" />
            <span className="text-ola-neon text-6xl font-black mb-2 glow-text">77%</span>
            <span className="text-white font-bold text-xl mb-1 mt-2">Same-day Resolution Rate</span>
            <span className="text-gray-400 font-mono text-sm">Achieved in December 2025</span>
          </div>
        </motion.div>

        {/* Right Col: Recovery Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 h-[400px] w-full glass-card border-white/5 relative p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.05),transparent_70%)] pointer-events-none" />
          <h3 className="text-gray-300 font-mono text-sm mb-6 opacity-60">The Hyperservice Market Share Rebound</h3>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={recoveryData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRecovery" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF66" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#00FF66" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.2)" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(0,255,102,0.3)', borderRadius: '8px' }}
                itemStyle={{ color: '#00FF66', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="share" stroke="#00FF66" strokeWidth={4} fillOpacity={1} fill="url(#colorRecovery)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </section>
  );
};

export default RecoveryData;
