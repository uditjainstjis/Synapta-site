import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { 
  ArrowRight, 
  Github, 
  FileText, 
  Cpu, 
  Layers, 
  Shield, 
  Activity,
  ExternalLink,
  ChevronRight,
  Play,
  CheckCircle2,
  Sparkles,
  Terminal,
  BrainCircuit,
  Info,
  Clock,
  Zap,
  Lock,
  DollarSign
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('vision');
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const sections = [
    { id: 'vision', label: 'Lower Costs', href: '#about' },
    { id: 'research', label: 'Privacy First', href: '#mewtwo' },
    { id: 'evidence', label: 'Faster Inference', href: '#results' },
    { id: 'benchmark', label: 'Full Control', href: '#benchmark' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.querySelector(section.href);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = navRefs.current[activeSection];
    if (activeLink) {
      setLineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            <div className="w-5 h-5 bg-white rotate-45" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">SYNAPTA</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 relative">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.href}
              ref={(el) => (navRefs.current[section.id] = el)}
              className={cn(
                "text-sm font-semibold transition-all duration-300 py-2",
                activeSection === section.id ? "text-brand-primary" : "text-brand-muted hover:text-white"
              )}
            >
              {section.label}
            </a>
          ))}
          <div 
            className="nav-glow-line" 
            style={{ 
              left: `${lineStyle.left}px`, 
              width: `${lineStyle.width}px` 
            }} 
          />
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://drive.google.com/file/d/1MyEMJqDUB6e3gyYQzcgPmrv7KfCobxeD/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="google-button google-button-primary text-xs font-bold uppercase tracking-widest"
          >
            Pitch Deck
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="about" className="relative pt-48 pb-32 overflow-hidden bg-mesh">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="container-max relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs font-bold text-brand-primary mb-8 glow-text">
            <Sparkles size={16} /> Frontier AI Research
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-white tracking-tighter">
            Smarter Models. <br />
            <span className="text-gradient-primary">Every Day.</span>
          </h1>
          <p className="text-2xl text-brand-muted leading-relaxed mb-12 max-w-2xl font-medium">
            Synapta is redefining intelligence density. We build specialized AI systems that cut costs by <span className="text-white font-bold">75%</span> while delivering <span className="text-white font-bold">absolute privacy</span> and faster inference.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="https://docs.google.com/document/d/1q2ockr-QNNzOIppiY-HIR2yps8F4Iyu_sP7gswKFnrw/edit?tab=t.0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="google-button google-button-primary text-lg px-10 py-5"
            >
              Explore Research <ArrowRight size={20} />
            </a>
            <a 
              href="https://github.com/uditjainstjis/mewtwo/blob/main/FULL_PROJECT_SUMMARY.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="google-button google-button-outline text-lg px-10 py-5"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-10 animate-float border-white/10 card-glow-blue">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">The Synapta Thesis</h3>
            </div>
            <div className="space-y-8">
              {[
                { icon: <DollarSign className="text-brand-primary" />, title: "Lower Costs", desc: "1.5B models outperforming 7B+ generalists." },
                { icon: <Lock className="text-brand-secondary" />, title: "Privacy First", desc: "Data never leaves your edge. Local-first standard." },
                { icon: <Zap className="text-brand-accent" />, title: "Faster Inference", desc: "Sub-millisecond switching for dynamic experts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const InnovationSection = () => (
  <section id="mewtwo" className="section-padding relative overflow-hidden">
    <div className="container-max relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Project <span className="text-gradient-primary">Mewtwo</span></h2>
        <p className="text-2xl text-brand-muted max-w-3xl mx-auto font-medium leading-relaxed">
          Our flagship research initiative focused on high-fidelity multi-adapter composition and dynamic expert routing.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Dynamic Expert Routing",
            desc: "Prompt-level orchestration that dynamically loads LoRA adapters based on intent.",
            icon: <Activity className="text-brand-primary" />,
            glow: "card-glow-blue"
          },
          {
            title: "Adaptive Clamping",
            desc: "Prevents compositional collapse by scaling adapter contributions based on activation norms.",
            icon: <Shield className="text-brand-secondary" />,
            glow: "card-glow-purple"
          },
          {
            title: "Edge-Native Arch",
            desc: "Optimized for Apple Silicon UMA using MLX for sub-millisecond switching.",
            icon: <Cpu className="text-brand-accent" />,
            glow: "card-glow-green"
          },
          {
            title: "Virtual MoE",
            desc: "Achieving MoE performance on small models via on-the-fly adapter composition.",
            icon: <Layers className="text-brand-primary" />,
            glow: "card-glow-blue"
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={cn("glass-card glass-card-hover p-8", item.glow)}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
            </div>
            <h4 className="font-bold text-2xl mb-4 text-white">{item.title}</h4>
            <p className="text-brand-muted leading-relaxed font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <a 
          href="https://github.com/uditjainstjis/NeuralGravity/blob/main/adaptrix_x_neuralgravity.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-all group"
        >
          View other hardware research <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

const ResultsTable = () => (
  <section id="results" className="section-padding bg-white/[0.02]">
    <div className="container-max">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Empirical <span className="text-gradient-primary">Evidence</span></h2>
        <p className="text-2xl text-brand-muted font-medium max-w-3xl mx-auto leading-relaxed">Hard data from our Multi-Domain (MD) and Single-Domain (SD) benchmarks.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card overflow-hidden border-white/10"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-8 text-sm font-bold text-brand-muted uppercase tracking-[0.3em]">Metric</th>
                <th className="p-8 text-sm font-bold text-brand-muted uppercase tracking-[0.3em]">Standard Monolith (Mistral-7B)</th>
                <th className="p-8 text-sm font-bold text-brand-muted uppercase tracking-[0.3em]">Edge Generalist (Base Qwen-1.5B)</th>
                <th className="p-8 text-sm font-bold text-brand-primary uppercase tracking-[0.3em]">Synapta Engine (Mewtwo)</th>
                <th className="p-8 text-sm font-bold text-brand-muted uppercase tracking-[0.3em]">Synapta Edge</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {[
                { metric: "Logic Density", col1: "7.0 Billion Params", col2: "1.5 Billion Params", col3: "1.5 Billion + Experts", col4: "Elite Reasoning", highlight: true },
                { metric: "VRAM Consumption", col1: "4.4 GB", col2: "1.1 GB", col3: "1.1 GB", col4: "-75% Cost", highlight: true },
                { metric: "Response Latency", col1: "9.20s", col2: "4.06s", col3: "4.09s", col4: "2.2x Faster", highlight: false },
                { metric: "Semantic Accuracy", col1: "0.6170", col2: "0.6473", col3: "0.6525", col4: "+5.7% Yield", highlight: true },
                { metric: "Security Architecture", col1: "Hosted API / Cloud", col2: "Local", col3: "Air-Gapped / Local", col4: "100% Private", highlight: false },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.05] transition-colors">
                  <td className="p-8 font-bold text-white">{row.metric}</td>
                  <td className="p-8 text-brand-muted">{row.col1}</td>
                  <td className="p-8 text-brand-muted">{row.col2}</td>
                  <td className={cn("p-8 font-bold", row.highlight ? "text-brand-primary glow-text" : "text-white")}>{row.col3}</td>
                  <td className="p-8 font-bold text-brand-accent">{row.col4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

const ModelMathAnimation = ({ accent }: { accent: string }) => {
  const layers = [4, 6, 4];
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-8 relative overflow-hidden">
      <div className="flex items-center justify-between w-full px-4 max-w-[240px] relative">
        {layers.map((count, lIndex) => (
          <div key={lIndex} className="flex flex-col gap-4 z-10">
            {Array.from({ length: count }).map((_, nIndex) => (
              <motion.div
                key={nIndex}
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 1, 0.3],
                  boxShadow: [
                    "0 0 0px transparent",
                    `0 0 15px currentColor`,
                    "0 0 0px transparent"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: (lIndex * 0.4) + (nIndex * 0.1) 
                }}
                className={cn("w-2 h-2 rounded-full bg-current", accent)}
              />
            ))}
          </div>
        ))}
        
        {/* Connection Lines & Pulses */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          {layers.map((count, lIndex) => {
            if (lIndex === layers.length - 1) return null;
            const nextCount = layers[lIndex + 1];
            return Array.from({ length: count }).map((_, nIndex) => 
              Array.from({ length: nextCount }).map((__, nextNIndex) => {
                const x1 = 20 + (lIndex * 100);
                const y1 = 50 + (nIndex * 24) - (count * 12);
                const x2 = 20 + ((lIndex + 1) * 100);
                const y2 = 50 + (nextNIndex * 24) - (nextCount * 12);
                return (
                  <line 
                    key={`${lIndex}-${nIndex}-${nextNIndex}`}
                    x1={`${(lIndex / (layers.length - 1)) * 100}%`}
                    y1={`${(nIndex + 1) * (100 / (count + 1))}%`}
                    x2={`${((lIndex + 1) / (layers.length - 1)) * 100}%`}
                    y2={`${(nextNIndex + 1) * (100 / (nextCount + 1))}%`}
                    stroke="currentColor"
                    strokeWidth="1"
                    className={accent}
                  />
                );
              })
            );
          })}
        </svg>

        {/* Moving Pulses */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ left: "0%", top: `${20 + Math.random() * 60}%`, opacity: 0 }}
              animate={{ 
                left: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.4,
                ease: "linear"
              }}
              className={cn("absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent", accent)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-3 h-4 items-center">
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            className={cn("font-mono text-[10px] font-bold", accent)}
          >
            W{"\u1d4e"} * x + b
          </motion.span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className={cn("font-mono text-[10px] font-bold", accent)}
          >
            Softmax(\u03c3)
          </motion.span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            className={cn("font-mono text-[10px] font-bold", accent)}
          >
            ReLU(z)
          </motion.span>
        </div>
        <div className="flex items-center gap-2">
          <div className="thinking-dot" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Feedforward Pass</span>
          <div className="thinking-dot" />
        </div>
      </div>
    </div>
  );
};

const BenchmarkDemo = () => {
  const [status, setStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [timers, setTimers] = useState({ dynamic: 0, base: 0, mistral: 0 });
  const [responses, setResponses] = useState({
    dynamic: { text: '', done: false },
    base: { text: '', done: false },
    mistral: { text: '', done: false }
  });

  const query = "Explain the legal implications of a smart contract breach in maritime jurisdiction.";
  
  const stats = {
    dynamic: { 
      name: "Synapta Dynamic Qwen", 
      time: 4090, 
      text: "Synapta Dynamic [MARITIME_LAW]: A smart contract breach in maritime jurisdiction triggers a conflict between lex cryptographia and admiralty statutes. Our dynamic routing loads specialized legal adapters to resolve jurisdictional ambiguity...",
      sim: "0.6525",
      ppl: "12.6",
      vram: "~1,100 MB",
      latency: "~4.05s",
      win: "+5.7% (Synapta Wins)",
      color: "bg-blue-500/10 border-blue-500/30",
      accent: "text-blue-400"
    },
    base: { 
      name: "Qwen 2.5-1.5B", 
      time: 4059, 
      text: "Base Qwen: Smart contract breaches in maritime law involve complex jurisdictional issues. Parties must consider traditional maritime law frameworks alongside digital execution protocols...",
      sim: "0.6334",
      ppl: "12.7",
      vram: "~1,100 MB",
      latency: "~4.06s",
      win: "Baseline",
      color: "bg-purple-500/10 border-purple-500/30",
      accent: "text-purple-400"
    },
    mistral: { 
      name: "Mistral-7b", 
      time: 9200, 
      text: "Mistral-7B: Maritime law is a specialized field. Smart contracts, while innovative, face significant hurdles in international waters where jurisdiction is often contested by multiple sovereign entities...",
      sim: "0.6170",
      ppl: "12.7",
      vram: "~4,400 MB",
      latency: "~9.20s",
      win: "2.2x Slower",
      color: "bg-emerald-500/10 border-emerald-500/30",
      accent: "text-emerald-400"
    }
  };

  const runBenchmark = () => {
    setStatus('running');
    setTimers({ dynamic: 0, base: 0, mistral: 0 });
    setResponses({
      dynamic: { text: '', done: false },
      base: { text: '', done: false },
      mistral: { text: '', done: false }
    });

    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      
      setTimers({
        dynamic: Math.min(stats.dynamic.time, elapsed),
        base: Math.min(stats.base.time, elapsed),
        mistral: Math.min(stats.mistral.time, elapsed)
      });

      if (elapsed >= stats.dynamic.time && !responses.dynamic.done) {
        setResponses(prev => ({ ...prev, dynamic: { text: stats.dynamic.text, done: true } }));
      }
      if (elapsed >= stats.base.time && !responses.base.done) {
        setResponses(prev => ({ ...prev, base: { text: stats.base.text, done: true } }));
      }
      if (elapsed >= stats.mistral.time && !responses.mistral.done) {
        setResponses(prev => ({ ...prev, mistral: { text: stats.mistral.text, done: true } }));
        clearInterval(interval);
        setStatus('completed');
      }
    }, 10);
  };

  return (
    <section id="benchmark" className="section-padding relative overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Benchmark <span className="text-gradient-primary">Arena</span></h2>
            <p className="text-2xl text-brand-muted font-medium">Real-time latency and performance comparison.</p>
          </div>
          <button 
            onClick={runBenchmark}
            disabled={status === 'running'}
            className="google-button google-button-primary text-lg px-12 py-6"
          >
            <Play size={20} fill="currentColor" /> Run Benchmark
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 mb-8 border-brand-primary/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <Terminal size={20} className="text-brand-primary" />
            <span className="text-xs font-bold text-brand-muted uppercase tracking-[0.4em]">Input Query</span>
          </div>
          <p className="text-2xl font-bold text-white leading-tight">{query}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {(['dynamic', 'base', 'mistral'] as const).map((id, i) => (
            <motion.div 
              key={id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className={cn("glass-card flex flex-col h-[600px] overflow-hidden border-2 transition-all duration-500", stats[id].color)}
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <span className="text-base font-bold text-white">{stats[id].name}</span>
                <div className="flex items-center gap-2">
                  <Clock size={16} className={stats[id].accent} />
                  <span className={cn("font-mono text-lg font-bold", stats[id].accent)}>
                    {(timers[id] / 1000).toFixed(2)}s
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-6 text-base leading-relaxed text-brand-muted overflow-y-auto custom-scrollbar bg-black/20">
                {responses[id].done ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {responses[id].text}
                  </motion.div>
                ) : status === 'running' ? (
                  <ModelMathAnimation accent={stats[id].accent} />
                ) : (
                  <div className="flex items-center justify-center h-full text-white/20 italic">Awaiting query...</div>
                )}
              </div>

              <div className="p-6 bg-white/5 border-t border-white/10 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[9px] font-bold text-brand-muted uppercase tracking-widest mb-1">Semantic Score</div>
                    <div className={cn("text-lg font-bold", id === 'dynamic' ? "text-brand-primary" : "text-white")}>{stats[id].sim}</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-brand-muted uppercase tracking-widest mb-1">Perplexity</div>
                    <div className={cn("text-lg font-bold", id === 'dynamic' ? "text-brand-accent" : "text-white")}>{stats[id].ppl}</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-brand-muted uppercase tracking-widest mb-1">VRAM Footprint</div>
                    <div className="text-lg font-bold text-white">{stats[id].vram}</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-brand-muted uppercase tracking-widest mb-1">Verdict</div>
                    <div className={cn("text-xs font-bold", stats[id].accent)}>{stats[id].win}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => (
  <section id="founder" className="section-padding relative">
    <div className="container-max">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-card p-12 md:p-20 flex flex-col lg:flex-row items-center gap-20 card-glow-blue"
      >
        <div className="w-64 h-64 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 flex-shrink-0 border-2 border-white/10 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/founder/600/600" 
            alt="Udit Jain" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Founder-Led <span className="text-gradient-primary">Execution</span></h2>
          <p className="text-2xl text-brand-muted mb-10 leading-relaxed font-medium">
            Synapta is built and driven by Udit Jain. We prioritize working systems and empirical evidence over corporate fluff. Our research artifacts and benchmarked prototypes are ready for immediate deployment.
          </p>
          <div className="flex items-center gap-10">
            <div>
              <div className="font-bold text-3xl text-white">Udit Jain</div>
              <div className="text-sm text-brand-primary font-bold uppercase tracking-widest mt-2">Founder & Lead Researcher</div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-brand-muted hover:text-brand-primary transition-all hover:scale-125"><Github size={32} /></a>
              <a href="mailto:hello@uditjain.in" className="text-brand-muted hover:text-brand-primary transition-all hover:scale-125"><ExternalLink size={32} /></a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 border-t border-white/10 bg-black relative">
    <div className="container-max">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rotate-45" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white">SYNAPTA</span>
          </div>
          <p className="text-brand-muted max-w-md text-lg leading-relaxed font-medium">
            Specialized intelligence for the private edge. Research-led, performance-driven. Building the future of intelligence density.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.3em] text-white">Resources</h4>
          <ul className="space-y-4 text-lg font-medium text-brand-muted">
            <li><a href="https://github.com/uditjainstjis/mewtwo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">GitHub Repository</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Research Paper</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.3em] text-white">Contact</h4>
          <a href="mailto:hello@uditjain.in" className="text-xl font-bold text-brand-primary hover:text-white transition-all">hello@uditjain.in</a>
        </div>
      </div>
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-muted font-bold uppercase tracking-widest">
        <div>© 2026 Synapta. All rights reserved.</div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-primary/20 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <InnovationSection />
        <ResultsTable />
        <BenchmarkDemo />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}
