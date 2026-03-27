import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { AlertCircle } from 'lucide-react';

const shareData = [
  { month: 'Q1', share: 50 },
  { month: 'Q2', share: 42 },
  { month: 'Q3', share: 29 },
  { month: 'Q4', share: 18 },
  { month: 'Dec 25', share: 6 },
];

const CrisisData = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 py-24 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Col: Text & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div>
            <div className="flex items-center gap-3 text-red-500 font-mono text-sm mb-4 uppercase tracking-wider">
              <AlertCircle className="w-5 h-5 animate-pulse" />
              System Failure Detected
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">The <br/><span className="text-red-500">Collapse.</span></h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              YoY operations revenue fell <strong className="text-white">55%</strong> to ₹470 crore. 
              With <strong className="text-white">80,000+</strong> unresolved monthly complaints, trust evaporated. The market grew, but Ola bled.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card border-red-500/20 bg-red-950/20 p-6 flex flex-col justify-center items-center text-center">
              <span className="text-red-500 text-5xl font-black mb-2">~6%</span>
              <span className="text-gray-400 font-mono text-xs uppercase">Market Share</span>
            </div>
            <div className="glass-card border-orange-500/20 bg-orange-950/20 p-6 flex flex-col justify-center items-center text-center">
              <span className="text-orange-500 text-5xl font-black mb-2">80K</span>
              <span className="text-gray-400 font-mono text-xs uppercase">Complaints / Mo</span>
            </div>
          </div>
        </motion.div>

        {/* Right Col: Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[500px] w-full glass-card border-white/5 relative p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05),transparent_70%)] pointer-events-none" />
          <h3 className="text-gray-300 font-mono text-sm mb-6 opacity-60">EV Market Share Implosion</h3>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={shareData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorShare" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.2)" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(239,68,68,0.5)', borderRadius: '8px' }}
                itemStyle={{ color: '#ef4444', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="share" stroke="#ef4444" strokeWidth={4} fillOpacity={1} fill="url(#colorShare)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </section>
  );
};

export default CrisisData;
