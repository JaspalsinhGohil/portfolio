import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data';
import { Sparkles, Terminal, Code2, Layers, Cpu, Database, Blocks, Wrench } from 'lucide-react';

interface TechStackGridProps {}

export default function TechStackGrid({}: TechStackGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('languages')) return <Terminal className="w-5 h-5 text-amber-500" />;
    if (t.includes('frameworks')) return <Code2 className="w-5 h-5 text-amber-500" />;
    if (t.includes('architecture')) return <Layers className="w-5 h-5 text-amber-500" />;
    if (t.includes('networking')) return <Cpu className="w-5 h-5 text-amber-500" />;
    if (t.includes('concurrency')) return <Blocks className="w-5 h-5 text-amber-500" />;
    if (t.includes('databases')) return <Database className="w-5 h-5 text-amber-500" />;
    return <Wrench className="w-5 h-5 text-amber-500" />;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Category selector / quick tags standard design */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1.5 rounded-none text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
            selectedCategory === null 
              ? 'bg-white text-black border-white font-black' 
              : 'bg-black text-neutral-400 border-neutral-800 hover:text-white'
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat.title)}
            className={`px-3 py-1.5 rounded-none text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
              selectedCategory === cat.title 
                ? 'bg-white text-black border-white font-black' 
                : 'bg-black text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories
          .filter(cat => selectedCategory === null || cat.title === selectedCategory)
          .map((category, catIdx) => (
            <motion.div
              layout
              key={catIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#050505] border border-neutral-850 rounded-none p-5 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 border-b border-neutral-900 pb-3">
                  {getCategoryIcon(category.title)}
                  <h4 className="font-sans font-extrabold text-sm text-white uppercase tracking-wider">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-black border border-neutral-850 text-neutral-300 hover:text-amber-500 hover:border-neutral-700 transition-colors select-none"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill description card helpers (mini feedback note) */}
              <div className="mt-6 pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-500 font-mono uppercase">
                <span>Vetted in production environments</span>
                <span className="text-amber-500 flex items-center gap-1 font-bold">
                  <Sparkles className="w-3 h-3 animate-pulse text-amber-500" />
                  Expert Level
                </span>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
