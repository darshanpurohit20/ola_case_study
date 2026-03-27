import { motion } from 'framer-motion';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  { date: 'Aug', price: 157.40 },
  { date: 'Sep', price: 110.20 },
  { date: 'Oct', price: 85.60 },
  { date: 'Nov', price: 92.10 },
  { date: 'Dec', price: 78.50 },
  { date: 'Jan', price: 105.30 },
  { date: 'Feb', price: 70.10 },
  { date: 'Mar', price: 65.40 },
  { date: 'Apr', price: 50.20 },
  { date: 'May', price: 45.80 },
  { date: 'Jun', price: 42.10 },
  { date: 'Jul', price: 38.50 },
  { date: 'Aug', price: 65.40 },
  { date: 'Sep', price: 55.20 },
  { date: 'Oct', price: 48.90 },
  { date: 'Nov', price: 35.60 },
  { date: 'Dec', price: 28.40 },
  { date: 'Jan', price: 45.10 },
  { date: 'Feb', price: 29.50 },
  { date: 'Mar', price: 24.10 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 backdrop-blur-xl border border-red-500/50 p-4 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.3)] min-w-[140px]">
        <p className="text-gray-400 text-xs font-mono mb-1 uppercase tracking-wider">{label}</p>
        <p className="text-red-500 font-mono text-3xl font-bold tracking-tight">
          ₹{payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

const StockCrash = () => {
  return (
    <section className="relative py-32 px-4 md:px-8 flex flex-col items-center justify-center min-h-screen bg-[#050505] z-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 w-full max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6">Capital <span className="text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]">Destruction.</span></h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          The public market's visceral reaction to the architecture of trust collapsing. 
          A catastrophic plunge reflecting a total loss of investor confidence.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="w-full max-w-6xl h-[500px] md:h-[600px] relative p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-gray-900/50 to-[#050505] border border-white/5 shadow-2xl"
      >
        {/* Glow behind chart */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-red-500/10 blur-[120px] z-0 pointer-events-none" />
        
        <div className="relative z-10 w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12, fontFamily: 'monospace' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12, fontFamily: 'monospace' }} 
                  tickFormatter={(val) => `₹${val}`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(239,68,68,0.4)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#ef4444" 
                  strokeWidth={4}
                  fill="url(#colorPrice)" 
                  activeDot={{ r: 8, fill: '#ef4444', stroke: '#000', strokeWidth: 3 }}
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
        </div>
        
        {/* Current Price overlay */}
        <div className="absolute right-8 md:right-16 top-16 text-right pointer-events-none">
             <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-1">Current Price</p>
             <p className="text-5xl md:text-6xl font-black text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">₹24.10</p>
             <p className="text-red-400 font-mono mt-2">-84.6% All Time</p>
        </div>

      </motion.div>
    </section>
  );
};

export default StockCrash;
