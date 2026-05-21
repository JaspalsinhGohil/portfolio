import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  personalInfo, projects, education 
} from './data';
import TechStackGrid from './components/TechStackGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import { 
  Mail, Phone, Linkedin, Github, MapPin, 
  Layers, Terminal, Award, BookOpen, 
  Sparkles, Code2, RefreshCw, CheckCircle2
} from 'lucide-react';

export default function App() {
  // States for Gradle Terminal Simulator
  const [targetBuild, setTargetBuild] = useState<'sdk' | 'commuto' | 'itouch'>('sdk');
  const [buildLogs, setBuildLogs] = useState<string[]>([
    'Welcome to Gradle 8.2 daemon manager.',
    'Click "Compile & Build Android Target" to run compiler diagnostics...',
  ]);
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildSuccess, setBuildSuccess] = useState(false);

  const runGradleBuild = () => {
    if (isBuilding) return;
    setIsBuilding(true);
    setBuildSuccess(false);
    
    const logsMap = {
      sdk: [
        'Starting Gradle Daemon...',
        'Gradle Daemon started successfully (0.4s)',
        '> Task :referral-hero-sdk:preBuild UP-TO-DATE',
        '> Task :referral-hero-sdk:compileKotlin',
        '  Compiling Kotlin class bindings... (cryptographic secure loops verified)',
        '> Task :referral-hero-sdk:signLibraryWithSHA256',
        '  Signature check sum matches manifest specifications.',
        '> Task :referral-hero-sdk:jar SUCCESSFUL',
        'BUILD SUCCESSFUL in 1.4s (3 tasks)'
      ],
      commuto: [
        'Starting Gradle Daemon...',
        'Gradle Daemon started successfully (0.3s)',
        '> Task :commuto-core:preBuild UP-TO-DATE',
        '> Task :commuto-core:compileKotlin',
        '  Injecting Google SDK tracking handlers and location-poller triggers...',
        '> Task :commuto-core:testClasses SUCCESSFUL',
        '> Task :commuto-core:assembleRelease SUCCESSFUL',
        'BUILD SUCCESSFUL in 1.8s (4 tasks)'
      ],
      itouch: [
        'Starting Gradle Daemon...',
        'Gradle Daemon started successfully (0.5s)',
        '> Task :itouch-mqtt-service:preBuild',
        '> Task :itouch-mqtt-service:compileKotlin',
        '  Handshaking bidirectional TCP broker.itouch.io variables...',
        '> Task :itouch-mqtt-service:testMqttPortConnectivity PASSED',
        '> Task :itouch-mqtt-service:assembleDebug SUCCESSFUL',
        'BUILD SUCCESSFUL in 2.2s (4 tasks)'
      ]
    };

    setBuildLogs([`$ ./gradlew :build -target=${targetBuild}`]);

    const activeLogs = logsMap[targetBuild];
    
    // Simulate printing logs with staggered speed
    activeLogs.forEach((logLine, index) => {
      setTimeout(() => {
        setBuildLogs(prev => [...prev, logLine]);
        if (index === activeLogs.length - 1) {
          setIsBuilding(false);
          setBuildSuccess(true);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans transition-colors selection:bg-neutral-800 selection:text-white">

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 flex flex-col gap-14">
        
        {/* HEADER SECTION --- Bold Typography theme Nav & Massive Brand */}
        <header className="flex flex-col gap-6 pb-10 border-b border-neutral-900">
          <nav className="flex justify-between items-center text-left">
            <div className="flex flex-col">
              <span className="micro-label text-neutral-400">Senior Android developer</span>
              <span className="text-sm font-bold text-neutral-350">GOHIL, JASPALSINH *</span>
            </div>
            <div className="flex gap-8">
              <span className="micro-label text-amber-500 hidden sm:inline font-bold">● Available for Hire</span>
              <span className="micro-label text-neutral-400">Based in India</span>
            </div>
          </nav>

          <div className="relative mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="relative text-left">
              <h1 className="huge-text select-none text-white leading-[0.85] tracking-[-0.04em] font-black uppercase">
                JASPALSINH<br />
                A. GOHIL
              </h1>
              <div className="absolute -right-12 top-2 vertical-text micro-label text-neutral-500 hidden md:block select-none">
                Portfolio v2026.05
              </div>
            </div>

            {/* Quick contact info */}
            <div className="flex flex-col gap-2.5 text-left md:text-right shrink-0 w-full md:w-auto">
              <div className="flex flex-wrap gap-2.5 justify-start md:justify-end">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  id="contact-email-link"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono border border-neutral-850 bg-[#0a0a0a] text-neutral-350 hover:text-white hover:border-neutral-700 transition-all cursor-pointer max-w-full overflow-hidden"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate max-w-[180px] min-[370px]:max-w-[210px] min-[420px]:max-w-none">{personalInfo.email}</span>
                </a>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  id="contact-phone-link"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono border border-neutral-850 bg-[#0a0a0a] text-neutral-350 hover:text-white hover:border-neutral-700 transition-all cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-x-2.5 gap-y-1 justify-start md:justify-end text-xs font-mono text-neutral-400 items-center">
                <a 
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="linkedin-profile-link"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>/jaspalsinh-gohil</span>
                </a>
                <span className="text-neutral-800 hidden sm:inline">|</span>
                <a 
                  href="https://github.com/jaspalsinh-gohil"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github-profile-link"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-neutral-500" />
                  <span>GitHub</span>
                </a>
                <span className="text-neutral-800 hidden sm:inline">|</span>
                <span className="flex items-center gap-1 text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  Ahmedabad, IN
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* HERO METRICS GRID --- Bold Architecture theme blocky grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="project-card bg-[#0a0a0a] border border-neutral-850 hover:border-neutral-700 rounded-none p-6 text-left flex flex-col justify-between min-h-[11rem] md:h-44 gap-4 transition-all duration-300">
            <span className="micro-label text-amber-500 font-bold block">01 / TOTAL EXPERTISE</span>
            <div>
              <p className="text-3xl font-black text-white tracking-tight mt-1 font-sans">7+ YEARS</p>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">Scaling high-concurrency real-time solutions & responsive mobile frontends.</p>
            </div>
          </div>

          <div className="project-card bg-[#0a0a0a] border border-neutral-850 hover:border-neutral-700 rounded-none p-6 text-left flex flex-col justify-between min-h-[11rem] md:h-44 gap-4 transition-all duration-300">
            <span className="micro-label text-amber-500 font-bold block">02 / DEPLOYMENTS</span>
            <div>
              <p className="text-3xl font-black text-white tracking-tight mt-1 font-sans">15+ APPS</p>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">Released stable native Android and hybrid Flutter utilities on Google Play Store.</p>
            </div>
          </div>

          <div className="project-card bg-[#0a0a0a] border border-neutral-850 hover:border-neutral-700 rounded-none p-6 text-left flex flex-col justify-between min-h-[11rem] md:h-44 gap-4 transition-all duration-300">
            <span className="micro-label text-amber-500 font-bold block">03 / REAL-TIME RTC</span>
            <div>
              <p className="text-3xl font-black text-white tracking-tight mt-1 font-sans">LOW LATENCY</p>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">Specialized in MQTT, WebSockets, and Agora RTC low-lag ingestion buffers.</p>
            </div>
          </div>

          <div className="project-card bg-[#0a0a0a] border border-neutral-850 hover:border-neutral-700 rounded-none p-6 text-left flex flex-col justify-between min-h-[11rem] md:h-44 gap-4 transition-all duration-300">
            <span className="micro-label text-amber-500 font-bold block">04 / ARCHITECTURE</span>
            <div>
              <p className="text-3xl font-black text-white tracking-tight mt-1 font-sans">JAVA &gt; KOTLIN</p>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">Modernized massive complex legacy codebases into performant Jetpack architectures.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE GRID */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="micro-label text-amber-500 font-bold block mb-1">
              Crafted Apps & Packages
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-amber-500" />
              Featured Projects
            </h2>
            <p className="text-xs text-neutral-400 font-mono">
              A collection of enterprise-grade native Android Applications, cross-platform SDKs, and IoT integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#050505] border border-neutral-850 p-6 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 text-left min-h-[220px]"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap justify-between">
                    <h3 className="font-sans font-extrabold text-lg text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                    {project.company && (
                      <span className="text-[10px] font-mono tracking-wider text-neutral-400 bg-neutral-900 px-2 py-0.5 font-bold border border-neutral-800">
                        @{project.company.toUpperCase()}
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-300 mt-2.5 font-sans">
                    {project.description}
                  </p>

                  <p className="text-xs text-neutral-400 font-mono leading-relaxed mt-2.5">
                    {project.fullDescription}
                  </p>
                </div>

                <div className="mt-4">
                  {/* Key Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black border border-neutral-850 px-2.5 py-0.5 rounded-none text-neutral-400 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.impact && (
                    <div className="mt-4 pt-4 border-t border-neutral-900 text-xs font-mono text-amber-500 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.impact.toUpperCase()}</span>
                    </div>
                  )}

                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 w-fit border-b border-dashed border-neutral-600 pb-0.5 uppercase tracking-wider"
                    >
                      <Github className="w-3 h-3" />
                      <span>VIEW MODULE ON GITHUB</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL STACK AND CORE COMPONENT BENTO BLOCK */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="micro-label text-amber-500 font-bold block mb-1">
              Skill validation
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2">
              <Code2 className="w-6 h-6 text-amber-500" />
              Technical Core & Skills
            </h2>
            <p className="text-xs text-neutral-400 font-mono">
              Expertise mapping across 7 core Android, iOS development, and architectural modules.
            </p>
          </div>

          <TechStackGrid />
        </section>

        {/* GRADLE TERMINAL BUILD PLAYGROUND (Android developer high-craft widget) */}
        <section className="flex flex-col gap-5">
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="micro-label text-amber-500 font-bold block mb-1">
              Developer console
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2">
              <Terminal className="w-5.5 h-5.5 text-amber-500" />
              Simulated Compiler Playground
            </h2>
            <p className="text-xs text-neutral-400 font-mono">
              Select one of Jaspalsinh’s custom modules below and compile it to see the build diagnostics.
            </p>
          </div>

          <div className="bg-[#050505] border border-neutral-850 rounded-none p-6 text-left flex flex-col md:flex-row gap-6">
            {/* Left selector */}
            <div className="md:w-1/3 flex flex-col gap-2.5">
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1 font-bold">Select target module</p>
              
              <button 
                onClick={() => setTargetBuild('sdk')}
                className={`py-2 px-3.5 rounded-none text-left font-mono text-[11px] cursor-pointer transition-all border ${
                  targetBuild === 'sdk' 
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/40 font-bold' 
                    : 'bg-black text-neutral-400 border-neutral-900 hover:border-neutral-800 hover:text-white'
                }`}
              >
                :referral-hero-sdk (v2.1)
              </button>

              <button 
                onClick={() => setTargetBuild('commuto')}
                className={`py-2 px-3.5 rounded-none text-left font-mono text-[11px] cursor-pointer transition-all border ${
                  targetBuild === 'commuto' 
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/40 font-bold' 
                    : 'bg-black text-neutral-400 border-neutral-900 hover:border-neutral-800 hover:text-white'
                }`}
              >
                :commuto-maps-bridge
              </button>

              <button 
                onClick={() => setTargetBuild('itouch')}
                className={`py-2 px-3.5 rounded-none text-left font-mono text-[11px] cursor-pointer transition-all border ${
                  targetBuild === 'itouch' 
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/40 font-bold' 
                    : 'bg-black text-neutral-400 border-neutral-900 hover:border-neutral-800 hover:text-white'
                }`}
              >
                :itouch-mqtt-service
              </button>

              <button
                onClick={runGradleBuild}
                disabled={isBuilding}
                className="w-full bg-white text-black hover:bg-neutral-200 disabled:bg-neutral-900 disabled:text-neutral-600 font-extrabold py-3 rounded-none text-xs font-mono flex items-center justify-center gap-1.5 mt-3 cursor-pointer uppercase transition-all tracking-wider"
              >
                {isBuilding ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Compiling...</span>
                  </>
                ) : (
                  <span>RUN COMPILER</span>
                )}
              </button>
            </div>

            {/* Right output logs terminal */}
            <div className="flex-1 bg-black rounded-none border border-neutral-850 p-5 font-mono select-text flex flex-col justify-between h-[200px]">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-neutral-500 mb-2 border-b border-neutral-900 pb-2 select-none">
                <span>Android Studio Core Logs</span>
                <span className={buildSuccess ? 'text-amber-500 font-bold' : isBuilding ? 'text-amber-400 animate-pulse' : 'text-neutral-500'}>
                  {buildSuccess ? 'SUCCESSFUL' : isBuilding ? 'RUNNING' : 'IDLE'}
                </span>
              </div>
              
              <div className="flex-1 flex flex-col font-mono text-[10px] text-neutral-200 py-1 gap-1.5 overflow-y-auto leading-normal scrollbar-none">
                {buildLogs.map((log, lIdx) => (
                  <div key={lIdx}>
                    <span className="text-neutral-700 mr-2 select-none">$</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL TIMELINE PROGRESSION SECTIONS */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="micro-label text-amber-500 font-bold block mb-1">
              Career Trajectory
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-500" />
              Professional Experience
            </h2>
            <p className="text-xs text-neutral-400 font-mono">
              7+ continuous years scaling codebases from Junior Developer to Senior Engineering roles.
            </p>
          </div>

          <ExperienceTimeline />
        </section>

        {/* EDUCATION & LANGUAGE ACCOMMODATIONS BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Education Card panel */}
          <section className="flex flex-col gap-4 text-left">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 border-b border-neutral-850 pb-2.5 uppercase">
              <BookOpen className="w-5 h-5 text-amber-500" />
              Education Details
            </h2>

            <div className="flex flex-col gap-3.5 mt-1.5">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-[#050505] border border-neutral-850 rounded-none p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="font-sans font-extrabold text-sm text-neutral-100 uppercase tracking-tight">{edu.degree}</h4>
                      <span className="text-[10px] font-mono font-bold bg-neutral-900 border border-neutral-800 text-amber-400 py-0.5 px-2 rounded-none select-none shrink-0">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-neutral-400 mt-1">{edu.institution} | {edu.location}</p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mt-3 font-semibold">&lt; Period: {edu.period} &gt;</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages accommodated panel */}
          <section className="flex flex-col gap-4 text-left">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 border-b border-neutral-850 pb-2.5 uppercase">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Languages & Core Proficiencies
            </h2>

            <div className="bg-[#050505] border border-neutral-850 rounded-none p-5 mt-1.5 flex flex-col gap-4">
              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2 font-bold select-none">Spoken Languages</p>
                <div className="flex gap-2">
                  {['English', 'Hindi', 'Gujarati'].map((lang, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-black border border-neutral-850 rounded-none text-xs font-mono text-neutral-300 hover:text-amber-500 hover:border-neutral-700 transition-colors uppercase font-semibold"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-900 pt-3">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2 font-bold select-none">Citizenship & Operations</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                  Fully authorized for operations global-wide. Working directly on location in <strong className="text-white font-bold">Ahmedabad, India</strong>. Ready for distributed or remote alignments.
                </p>
              </div>
            </div>
          </section>
        </div>

      </div>

      {/* FOOTER BAR */}
      <footer className="border-t border-neutral-900 bg-black py-8 relative z-10 w-full mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          <p>© 2026 JASPALSINH A. GOHIL. ALL RIGHTS RESERVED. SENIOR MOBILE ARCHITECT.</p>
          <div className="flex gap-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-amber-500 transition-colors uppercase font-bold"
            >
              Contact Developer
            </a>
            <span>|</span>
            <span className="text-neutral-800">Kotlin | Coroutines | Flutter TV</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
