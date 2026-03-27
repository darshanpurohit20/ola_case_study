import Hero from './components/Hero';
import FounderProfile from './components/FounderProfile';
import ProductsShowcase from './components/ProductsShowcase';
import CrisisData from './components/CrisisData';
import StockCrash from './components/StockCrash';
import VelocityTimeline from './components/VelocityTimeline';
import RecoveryData from './components/RecoveryData';
import StrategyBento from './components/StrategyBento';
import GateMetric from './components/GateMetric';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00FF66] selection:text-black font-sans">
      <MatrixBackground />
      
      {/* Navbar with brand logo */}
      <nav className="fixed top-0 inset-x-0 z-50 p-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" fill="#000" stroke="#FFF" strokeWidth="1.5"/>
          <circle cx="16" cy="16" r="8" fill="#D0E132"/>
          <text x="38" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" fill="#FFF" letterSpacing="-1.5">OLA</text>
        </svg>
        <span className="text-white/50 font-mono text-xs uppercase tracking-widest">Case Study</span>
      </nav>

      {/* Narrative Scrollytelling Container */}
      <main className="relative z-10 flex flex-col pt-0 pb-32">
        {/* Hook */}
        <Hero />
        
        {/* Top Management / Founder Intro */}
        <FounderProfile />

        {/* Products Grid to show full ecosystem visually */}
        <ProductsShowcase />
        
        {/* The Problem */}
        <CrisisData />
        
        {/* The Market Reaction (Stock Crash) */}
        <StockCrash />
        
        {/* Root Cause Analysis */}
        <VelocityTimeline />
        
        {/* Proof of Execution */}
        <RecoveryData />
        
        {/* Proposed Strategy */}
        <StrategyBento />
        
        {/* The Final Differentiator */}
        <GateMetric />
      </main>
    </div>
  );
}

export default App;
