import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiences } from '../data';
import { Briefcase, Calendar, MapPin, ChevronDown, Award, Star } from 'lucide-react';

export default function ExperienceTimeline() {
  const [activeId, setActiveId] = useState<string | null>('exsilio');

  return (
    <div className="relative">
      {/* Visual centerline block for desktop timeline indicator loop */}
      <div className="absolute left-4 md:left-1/2 top-2 h-[95%] w-[1px] bg-neutral-900 pointer-events-none transform md:-translate-x-1/2"></div>

      <div className="flex flex-col gap-8 relative">
        {experiences.map((exp, index) => {
          const isActive = activeId === exp.id;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              layout
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex flex-col md:flex-row relative items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline bubble anchor marker (Rotated square to match theme design) */}
              <div 
                className={`absolute left-[10px] md:left-1/2 w-3 h-3 rotate-45 border bg-black z-10 transform -translate-y-0.5 md:-translate-x-1/2 transition-colors duration-300 ${
                  isActive ? 'border-amber-500 bg-amber-500' : 'border-neutral-700'
                }`}
              ></div>

              {/* Spacing alignment spacers for desktop grids */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Content panel cards container */}
              <div className="w-full pl-10 md:pl-0 md:w-1/2 md:px-8">
                <div 
                  onClick={() => setActiveId(isActive ? null : exp.id)}
                  className={`border p-5 transition-all duration-300 cursor-pointer select-none text-left bg-[#050505] rounded-none ${
                    isActive 
                      ? 'border-neutral-400' 
                      : 'border-neutral-850 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1.5">
                    <div>
                      <span className="text-[10px] font-mono text-amber-500 font-extrabold bg-amber-500/10 px-2.5 py-0.5 rounded-none border border-amber-500/20 uppercase tracking-widest mb-2 inline-block">
                        {exp.period}
                      </span>
                      <h4 className="font-sans font-extrabold text-lg text-white mt-1 uppercase tracking-tight">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-400 font-mono text-xs mt-1.5 uppercase font-semibold">
                        <span className="flex items-center gap-1 text-white">
                          <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <button 
                      className={`text-neutral-500 hover:text-white p-1 rounded-none transition-transform duration-300 ${
                        isActive ? 'transform rotate-180 text-amber-500' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Expandable description block */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-neutral-900 pt-4"
                      >
                        <h5 className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
                          <Award className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                          Core Deliverables & Highlights
                        </h5>
                        <ul className="flex flex-col gap-2.5">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2 text-sm leading-relaxed text-neutral-300 select-text">
                              <span className="text-amber-500 font-bold mt-1.5 select-none text-[8px]">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Integration tags mapped directly to resumes */}
                        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-neutral-900">
                          {exp.company.includes('Exsilio') && (
                            <>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-300 py-0.5 px-2 rounded-none uppercase tracking-wider">Commuto App</span>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">Google Maps</span>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">Kotlin</span>
                            </>
                          )}
                          {exp.company.includes('AIS') && (
                            <>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-amber-500 py-0.5 px-2 rounded-none uppercase tracking-wider font-bold">iTOUCH App</span>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">MQTT IoT</span>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">Flutter</span>
                            </>
                          )}
                          {exp.company.includes('Codiot') && (
                            <>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-300 py-0.5 px-2 rounded-none uppercase tracking-wider">Java refactor</span>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">Kotlin Components</span>
                            </>
                          )}
                          {exp.company.includes('eBizTrait') && (
                            <>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">Jetpack UI</span>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">Android SDK</span>
                            </>
                          )}
                          {exp.company.includes('Addict') && (
                            <>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">SQLite storage</span>
                              <span className="text-[10px] font-mono bg-black border border-neutral-850 text-neutral-400 py-0.5 px-2 rounded-none uppercase tracking-wider">Java-Kotlin</span>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
