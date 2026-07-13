"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ArrowUpRight, Leaf, Crown, Rocket, Lock, ShieldCheck, Star, Percent } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom SVG Icons for exact matching to the reference UI
const TelegramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.6-1.5 4.35-1.76 4.84-1.77.11 0 .35.03.5.16.13.12.17.28.18.39 0 .1-.01.2-.02.32z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const DexIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const CustomRocketIcon = () => (
  <svg className="w-4 h-4 fill-current rotate-45" viewBox="0 0 24 24">
    <path d="M13.13 2.18a1 1 0 0 0-1.26 0L8.3 5.14a1 1 0 0 0-.29.56l-.54 3.73-3.73.54a1 1 0 0 0-.56.29L1.18 13.13a1 1 0 0 0 .18 1.42l3.18 2.45a1 1 0 0 0 1.13.08l3.18-1.59 4.77 4.77a1 1 0 0 0 1.41-1.41l-4.77-4.77 1.59-3.18a1 1 0 0 0-.08-1.13l-2.45-3.18 1.95-1.95a1 1 0 0 0-.17-1.42z"/>
  </svg>
);

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x834b31164b5e5f4a088441D796a885f714bb7C1";

  const sectionRef = useRef<HTMLDivElement>(null);
  const frogRef = useRef<HTMLImageElement>(null);

  const tokenomicsSectionRef = useRef<HTMLDivElement>(null);
  const tokenomicsCardRef = useRef<HTMLDivElement>(null);

  const roadmapSectionRef = useRef<HTMLDivElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);
  const timelineRowRef = useRef<HTMLDivElement>(null);

  const socialSectionRef = useRef<HTMLDivElement>(null);
  const socialContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Frog ScrollTrigger
    let frogTrigger: any;
    if (frogRef.current && sectionRef.current) {
      gsap.set(frogRef.current, { y: "100%", opacity: 0 });

      frogTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(frogRef.current, {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(frogRef.current, {
            y: "100%",
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to(frogRef.current, {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            overwrite: "auto",
          });
        }
      });
    }

    // 2. Tokenomics ScrollTrigger
    let tokenomicsTrigger: any;
    if (tokenomicsCardRef.current && tokenomicsSectionRef.current) {
      gsap.set(tokenomicsCardRef.current, { y: 100, opacity: 0, scale: 0.95 });
      const statItems = tokenomicsCardRef.current.querySelectorAll(".stat-item");
      gsap.set(statItems, { y: 30, opacity: 0, scale: 0.8 });

      tokenomicsTrigger = ScrollTrigger.create({
        trigger: tokenomicsSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(tokenomicsCardRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(statItems, {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "back.out(1.5)",
            delay: 0.15,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(tokenomicsCardRef.current, {
            y: 100,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "power2.in",
            overwrite: "auto",
          });
          gsap.to(statItems, {
            y: 30,
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to(tokenomicsCardRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(statItems, {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: "back.out(1.5)",
            delay: 0.15,
            overwrite: "auto",
          });
        }
      });
    }

    // 3. Roadmap Pinning & Clipping ScrollTrigger (Mobile & Desktop)
    let roadmapTrigger: any;
    const timelineRow = timelineRowRef.current;
    if (roadmapSectionRef.current && clipRectRef.current && timelineRow) {
      // Setup initial values
      gsap.set(clipRectRef.current, { attr: { width: 250 } });
      const nodes = roadmapSectionRef.current.querySelectorAll(".roadmap-node");
      gsap.set(nodes, { opacity: 0.4, scale: 0.9, y: 0 });
      
      // Active node 1 initially
      gsap.set(nodes[0], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: roadmapSectionRef.current,
          start: "top top",
          end: () => `+=${timelineRow.scrollWidth - window.innerWidth + 650}`,
          pin: true,
          scrub: 0.1,
          invalidateOnRefresh: true,
        }
      });

      // Translate the row horizontally based on its total scrollable width - finish at 0.8
      tl.to(timelineRow, {
        x: () => -(timelineRow.scrollWidth - window.innerWidth + 80),
        ease: "none",
        duration: 0.8,
      }, 0);

      // Draw the connecting line - finish at 0.8
      tl.to(clipRectRef.current, {
        attr: { width: 1000 },
        ease: "none",
        duration: 0.8,
      }, 0);

      // Sequentially activate nodes
      tl.to(nodes[1], { opacity: 1, scale: 1.1, duration: 0.1 }, 0.2)
        .to(nodes[1], { scale: 1, duration: 0.05 }, 0.3)
        .to(nodes[2], { opacity: 1, scale: 1.1, duration: 0.1 }, 0.45)
        .to(nodes[2], { scale: 1, duration: 0.05 }, 0.55)
        .to(nodes[3], { opacity: 1, scale: 1.1, duration: 0.1 }, 0.7)
        .to(nodes[3], { scale: 1, duration: 0.05 }, 0.8);

      // Add a 20% scroll-holding space at the end so the user can look at Phase 4 fully complete before unpinning
      tl.to({}, { duration: 0.2 }, 0.8);

      roadmapTrigger = tl;
    }

    // 4. Social Section ScrollTrigger
    let socialTrigger: any;
    if (socialContentRef.current && socialSectionRef.current) {
      gsap.set(socialContentRef.current, { x: 50, opacity: 0 });

      socialTrigger = ScrollTrigger.create({
        trigger: socialSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(socialContentRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(socialContentRef.current, {
            x: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to(socialContentRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    }

    return () => {
      if (frogTrigger) frogTrigger.kill();
      if (tokenomicsTrigger) tokenomicsTrigger.kill();
      if (roadmapTrigger) roadmapTrigger.kill();
      if (socialTrigger) socialTrigger.kill();
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Entry animations for content reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <div className="w-full relative bg-[#BFFE3B]">
      
      {/* 1. Hero Section Container */}
      <section className="w-full aspect-[656/1231] md:aspect-auto md:min-h-dvh bg-[#BFFE3B] bg-[url('/assets/hero-bg-mobile.png')] md:bg-[url('/assets/hero-bg.png')] bg-cover bg-no-repeat bg-center md:bg-right-bottom flex flex-col justify-between select-none relative">
        
        {/* Header / Navigation Bar */}
        <header className="w-full px-6 md:px-12 py-5 flex justify-between items-center z-20">
          <Magnetic>
            <a href="#" className="focus-visible:outline-none">
              <img src="/assets/logo-black.png" alt="Hoppy Logo" className="h-8 md:h-12 w-auto object-contain" />
            </a>
          </Magnetic>
          
          <nav className="hidden md:flex gap-8 items-center bg-[#BFFE3B]/70 backdrop-blur-sm px-8 py-3 rounded-full border border-black/10">
            {["Home", "About", "Tokenomics", "Roadmap", "FAQ"].map((link, idx) => (
              <Magnetic key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className={`text-sm font-body font-black tracking-wide text-black hover:text-black/70 transition-colors focus-visible:outline-none relative pb-1 ${
                    idx === 0 ? "border-b-2 border-black" : ""
                  }`}
                >
                  {link}
                </a>
              </Magnetic>
            ))}
          </nav>

          <Magnetic>
            <a 
              href="https://t.me/HoppyFrogRH" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 border-2 border-black bg-[#BFFE3B]/90 text-black font-banzai text-xs md:text-sm tracking-wide font-black rounded-full hover:bg-black hover:text-[#BFFE3B] transition-all duration-300 flex items-center gap-2 focus-visible:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <TelegramIcon /> JOIN TELEGRAM
            </a>
          </Magnetic>
        </header>

        {/* Hero Content Area */}
        <div className="flex-grow flex items-start md:items-center px-6 md:px-12 lg:px-24 pt-6 pb-12 md:py-24 z-10">
          <motion.div 
            className="w-full md:max-w-xl lg:max-w-2xl flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Logo Text Header using logo-black.png */}
            <motion.div variants={itemVariants} className="flex flex-col mb-6 items-start select-none">
              <img src="/assets/logo-black.png" alt="Hoppy Logo" className="h-20 md:h-[11rem] w-auto object-contain select-none pb-1 md:pb-2" />
              <h1 className="font-banzai text-3xl md:text-[3.3rem] text-black font-black tracking-wide leading-none mt-4">
                HOPPY THE FROG
              </h1>
            </motion.div>

            {/* Subheading using Banzai Bros custom font */}
            <motion.p 
              variants={itemVariants} 
              className="font-banzai text-base md:text-xl text-black/90 max-w-lg leading-relaxed mb-10 uppercase font-bold"
            >
              Before PEPE, there was hoppy the frog, where it all began.
            </motion.p>

            {/* Core CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mb-10">
              <Magnetic>
                <a
                  href="https://uniswap.org"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 md:px-10 py-4.5 md:py-5 rounded-full bg-black text-[#BFFE3B] font-banzai text-base md:text-lg tracking-wider font-black flex items-center gap-3 border-2 border-black hover:bg-black/95 transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none"
                >
                  BUY $HOPPY <CustomRocketIcon />
                </a>
              </Magnetic>
              
              <Magnetic>
                <a
                  href="https://dextools.io"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 md:px-10 py-4.5 md:py-5 rounded-full bg-[#BFFE3B] text-black font-banzai text-base md:text-lg tracking-wider font-black flex items-center gap-3 border-2 border-black hover:bg-black hover:text-[#BFFE3B] transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none"
                >
                  CHART <ArrowUpRight className="w-6 h-6" />
                </a>
              </Magnetic>
            </motion.div>

            {/* Contract Address Container */}
            <motion.div 
              variants={itemVariants} 
              className="w-full max-w-lg flex flex-col gap-2 mb-10"
            >
              <div className="flex items-center justify-between bg-[#BFFE3B]/40 hover:bg-[#BFFE3B]/60 border-2 border-black rounded-2xl px-5 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors">
                <span className="font-mono text-sm md:text-base font-extrabold text-black select-all truncate pr-3">
                  CA: {contractAddress}
                </span>
                <button 
                  onClick={handleCopy}
                  className="text-black hover:text-black/70 p-1 flex items-center justify-center transition-colors focus-visible:outline-none"
                  aria-label="Copy contract address"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                      >
                        <Check className="w-4 h-4 text-emerald-600 stroke-[3px]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                      >
                        <Copy className="w-4 h-4 stroke-[3px]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.div>

            {/* Social Links Row */}
            <motion.div 
              variants={itemVariants} 
              className="flex items-center gap-5 flex-wrap"
            >
              <div className="flex items-center gap-4">
                <Magnetic>
                  <a 
                    href="https://t.me/HoppyFrogRH" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black bg-[#BFFE3B] text-black flex items-center justify-center hover:bg-black hover:text-[#BFFE3B] transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none"
                    aria-label="Telegram"
                  >
                    <TelegramIcon />
                  </a>
                </Magnetic>

                <Magnetic>
                  <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black bg-[#BFFE3B] text-black flex items-center justify-center hover:bg-black hover:text-[#BFFE3B] transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none"
                    aria-label="X / Twitter"
                  >
                    <XIcon />
                  </a>
                </Magnetic>

                <Magnetic>
                  <a 
                    href="https://dextools.io" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black bg-[#BFFE3B] text-black flex items-center justify-center hover:bg-black hover:text-[#BFFE3B] transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none"
                    aria-label="Chart Platform"
                  >
                    <DexIcon />
                  </a>
                </Magnetic>
              </div>
              
              <a 
                href="https://t.me/HoppyFrogRH"
                target="_blank"
                rel="noreferrer"
                className="font-banzai text-sm md:text-base text-black font-black tracking-wide hover:underline focus-visible:outline-none"
              >
                TG: t.me/HoppyFrogRH
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. New Features Section Below */}
      <section ref={sectionRef} className="w-full px-6 md:px-12 lg:px-24 bg-[url('/assets/about-bg.png')] bg-cover bg-no-repeat bg-center border-t-4 border-black flex flex-col md:flex-row items-stretch justify-between gap-12 relative overflow-hidden select-none">
        
        {/* Left: Frog Image attached to the bottom of the section */}
        <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end md:translate-x-6 z-10">
          <img 
            ref={frogRef}
            src="/assets/hoppy frog.png" 
            alt="Hoppy Frog Legend" 
            className="h-80 md:h-[580px] w-auto object-contain block" 
          />
        </div>

        {/* Right: Content details padded and centered */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center py-20 md:py-32 z-10">
          <div className="flex flex-col mb-8">
            <h2 className="font-banzai text-5xl md:text-7xl text-black font-black leading-tight uppercase">
              THE ORIGINAL.
            </h2>
            <h2 className="font-banzai text-5xl md:text-7xl text-black font-black leading-tight uppercase mt-1 relative inline-block">
              <span className="relative z-10">THE LEGEND.</span>
              <span className="absolute -bottom-2 left-0 w-[95%] h-[8px] bg-[#BFFE3B] rounded-full border border-black/25" />
            </h2>
          </div>

          <p className="font-body font-bold text-lg md:text-2xl text-black/85 max-w-xl leading-relaxed mb-12">
            Before countless imitators came along, Hoppy was already here — chilling, vibing and leading the way.
          </p>

          {/* Pillars/Features Grid */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t-2 border-black/10 w-full max-w-2xl">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Leaf className="w-10 h-10 md:w-12 md:h-12 text-black stroke-[2.5px]" />
              <span className="font-banzai text-sm md:text-base text-black font-black uppercase mt-4 tracking-wide">
                OG MEME
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l-2 border-black/10 pl-6 md:pl-8">
              <Crown className="w-10 h-10 md:w-12 md:h-12 text-black stroke-[2.5px]" />
              <span className="font-banzai text-sm md:text-base text-black font-black uppercase mt-4 tracking-wide">
                TIMELESS VIBES
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l-2 border-black/10 pl-6 md:pl-8">
              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-black stroke-[2.5px]" />
              <span className="font-banzai text-sm md:text-base text-black font-black uppercase mt-4 tracking-wide">
                COMMUNITY FIRST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tokenomics Section */}
      <section ref={tokenomicsSectionRef} className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#BFFE3B] border-t-4 border-black flex flex-col items-center justify-center relative overflow-hidden select-none">
        
        {/* Tokenomics Black Card */}
        <div ref={tokenomicsCardRef} className="w-full max-w-[95%] xl:max-w-[1400px] bg-[#111111] rounded-3xl border-4 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col items-center">
          
          <h2 className="font-banzai text-3xl md:text-5xl text-[#BFFE3B] font-black uppercase tracking-wider mb-12 md:mb-16">
            TOKENOMICS
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 w-full">
            
            {/* Stat 1 */}
            <div className="stat-item flex flex-col items-center text-center">
              <Percent className="w-10 h-10 md:w-12 md:h-12 text-[#BFFE3B] stroke-[2.5px] mb-4" />
              <span className="font-banzai text-3xl md:text-5xl text-[#BFFE3B] font-black">0%</span>
              <span className="font-banzai text-xs md:text-sm text-white font-bold uppercase mt-3 tracking-wide">BUY TAX</span>
            </div>

            {/* Stat 2 */}
            <div className="stat-item flex flex-col items-center text-center border-t sm:border-t-0 sm:border-l-2 border-white/10 pt-6 sm:pt-0 sm:pl-4">
              <Percent className="w-10 h-10 md:w-12 md:h-12 text-[#BFFE3B] stroke-[2.5px] mb-4" />
              <span className="font-banzai text-3xl md:text-5xl text-[#BFFE3B] font-black">0%</span>
              <span className="font-banzai text-xs md:text-sm text-white font-bold uppercase mt-3 tracking-wide">SELL TAX</span>
            </div>

            {/* Stat 3 */}
            <div className="stat-item flex flex-col items-center text-center border-t md:border-t-0 md:border-l-2 border-white/10 pt-6 md:pt-0 md:pl-4">
              <Lock className="w-10 h-10 md:w-12 md:h-12 text-[#BFFE3B] stroke-[2.5px] mb-4" />
              <span className="font-banzai text-3xl md:text-5xl text-[#BFFE3B] font-black">100%</span>
              <span className="font-banzai text-xs md:text-sm text-white font-bold uppercase mt-3 tracking-wide">LIQUIDITY LOCKED</span>
            </div>

            {/* Stat 4 */}
            <div className="stat-item flex flex-col items-center text-center border-t sm:border-t-0 sm:border-l-2 border-white/10 pt-6 sm:pt-0 sm:pl-4">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-[#BFFE3B] stroke-[2.5px] mb-4" />
              <span className="font-banzai text-3xl md:text-5xl text-[#BFFE3B] font-black">NO</span>
              <span className="font-banzai text-xs md:text-sm text-white font-bold uppercase mt-3 tracking-wide">TEAM ALLOCATION</span>
            </div>

            {/* Stat 5 */}
            <div className="stat-item flex flex-col items-center text-center border-t md:border-t-0 md:border-l-2 border-white/10 pt-6 md:pt-0 md:pl-4">
              <Star className="w-10 h-10 md:w-12 md:h-12 text-[#BFFE3B] stroke-[2.5px] mb-4" />
              <span className="font-banzai text-3xl md:text-5xl text-[#BFFE3B] font-black">FAIR</span>
              <span className="font-banzai text-xs md:text-sm text-white font-bold uppercase mt-3 tracking-wide">LAUNCH</span>
            </div>

          </div>

        </div>

      </section>

      {/* 4. Roadmap Section */}
      <section ref={roadmapSectionRef} className="w-full min-h-screen md:h-screen py-16 md:py-0 bg-[#E4FF70] border-t-4 border-black flex flex-col justify-center relative overflow-hidden select-none">
        
        {/* Title */}
        <h2 className="font-banzai text-4xl md:text-6xl text-black font-black uppercase text-center mb-6 md:mb-12 z-20">
          ROADMAP
        </h2>

        {/* Timeline outer viewport */}
        <div className="w-full overflow-hidden px-6 md:px-12 lg:px-24 z-10">
          
          {/* Timeline sliding row */}
          <div ref={timelineRowRef} className="flex flex-row items-center gap-16 md:gap-32 relative py-8 w-max pr-[40vw]">
            
            {/* Connecting Dashed SVG Line */}
            <svg viewBox="0 0 1000 200" className="absolute top-[80px] left-0 w-full z-0 select-none pointer-events-none" fill="none">
              <defs>
                <clipPath id="roadmap-clip">
                  <rect ref={clipRectRef} x="0" y="0" width="0" height="200" />
                </clipPath>
              </defs>
              
              {/* Marching dashed line */}
              <path 
                d="M 125 100 C 220 180, 280 40, 375 100 C 470 160, 530 40, 625 100 C 720 160, 780 40, 875 100" 
                stroke="black" 
                strokeWidth="4" 
                strokeDasharray="12 8" 
                clipPath="url(#roadmap-clip)"
                className="animate-dash"
              />
            </svg>

            {/* Nodes */}
            {/* Phase 1 */}
            <div className="roadmap-node w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col items-center text-center z-10">
              <div className="h-36 md:h-44 flex items-center justify-center mb-6">
                <img 
                  src="/assets/roadmap1.png" 
                  alt="Phase 1 - Hatch" 
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <span className="bg-[#BFFE3B] border-2 border-black text-black font-banzai font-black text-xs px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none">
                Phase 1
              </span>
              <h3 className="font-banzai text-2xl md:text-3xl text-black font-black mt-4">
                Hatch
              </h3>
              <p className="font-body font-bold text-sm md:text-base text-black/75 mt-2 max-w-[200px] leading-snug">
                Launch & Build our pond
              </p>
            </div>

            {/* Phase 2 */}
            <div className="roadmap-node w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col items-center text-center z-10">
              <div className="h-36 md:h-44 flex items-center justify-center mb-6">
                <img 
                  src="/assets/roadmap2.png" 
                  alt="Phase 2 - Grow" 
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <span className="bg-[#BFFE3B] border-2 border-black text-black font-banzai font-black text-xs px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none">
                Phase 2
              </span>
              <h3 className="font-banzai text-2xl md:text-3xl text-black font-black mt-4">
                Grow
              </h3>
              <p className="font-body font-bold text-sm md:text-base text-black/75 mt-2 max-w-[200px] leading-snug">
                Spread the word & build the army
              </p>
            </div>

            {/* Phase 3 */}
            <div className="roadmap-node w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col items-center text-center z-10">
              <div className="h-36 md:h-44 flex items-center justify-center mb-6">
                <img 
                  src="/assets/roadmap3.png" 
                  alt="Phase 3 - Fly" 
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <span className="bg-[#BFFE3B] border-2 border-black text-black font-banzai font-black text-xs px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none">
                Phase 3
              </span>
              <h3 className="font-banzai text-2xl md:text-3xl text-black font-black mt-4">
                Fly
              </h3>
              <p className="font-body font-bold text-sm md:text-base text-black/75 mt-2 max-w-[200px] leading-snug">
                More listings, more visibility
              </p>
            </div>

            {/* Phase 4 */}
            <div className="roadmap-node w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col items-center text-center z-10">
              <div className="h-36 md:h-44 flex items-center justify-center mb-6">
                <img 
                  src="/assets/roadmap4.png" 
                  alt="Phase 4 - Rule" 
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <span className="bg-[#BFFE3B] border-2 border-black text-black font-banzai font-black text-xs px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none">
                Phase 4
              </span>
              <h3 className="font-banzai text-2xl md:text-3xl text-black font-black mt-4">
                Rule
              </h3>
              <p className="font-body font-bold text-sm md:text-base text-black/75 mt-2 max-w-[200px] leading-snug">
                Hoppy takes over the chart
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* 5. Join the Pond / Social Section */}
      <section ref={socialSectionRef} className="w-full aspect-[768/1376] md:aspect-[1854/560] bg-[url('/assets/social-bg-mobile.png')] md:bg-[url('/assets/social-bg.png')] bg-cover bg-no-repeat bg-center md:bg-left-center border-t-4 border-black flex flex-col md:flex-row items-center justify-between select-none relative overflow-hidden">
        
        {/* Right half: Text and CTA button (renders first/top on mobile, second/right on desktop) */}
        <div ref={socialContentRef} className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-8 md:px-16 text-center md:text-left z-10 order-1 md:order-2 pt-28 md:pt-0">
          
          <h2 className="font-banzai text-5xl sm:text-6xl md:text-5xl lg:text-6xl text-black font-black uppercase tracking-wide mb-4">
            JOIN THE POND
          </h2>

          <p className="font-body font-bold text-lg sm:text-xl md:text-lg lg:text-xl text-black/85 max-w-md leading-relaxed mb-6 md:mb-8">
            Be part of the OG movement.<br />
            Chill, meme, hodl & enjoy the ride.
          </p>

          <Magnetic>
            <a 
              href="https://t.me/HoppyFrogRH" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#111111] border-2 border-black text-[#BFFE3B] font-banzai font-black text-xl md:text-lg px-10 py-5 md:px-8 md:py-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#BFFE3B] hover:text-black hover:scale-105 active:scale-95 transition-all focus-visible:outline-none"
            >
              <TelegramIcon /> JOIN TELEGRAM
            </a>
          </Magnetic>

        </div>

        {/* Left half spacer: empty space for frog image (renders second/bottom on mobile, first/left on desktop) */}
        <div className="w-full md:w-1/2 h-[48%] md:h-full order-2 md:order-1" />

      </section>

      {/* 6. Footer Section */}
      <footer className="w-full bg-[#111111] border-t-4 border-black py-16 px-6 md:px-12 lg:px-24 select-none relative z-10 text-white">
        
        {/* Main Columns Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col items-start">
            <img src="/assets/logo-green.png" alt="Hoppy Green Logo" className="h-16 md:h-20 w-auto object-contain mb-4 select-none" />
            <h3 className="font-banzai text-lg md:text-xl text-white font-black uppercase tracking-wider mb-2">
              HOPPY THE FROG
            </h3>
            <p className="font-body font-bold text-sm md:text-base text-white/60 max-w-xs leading-relaxed">
              Before PEPE, there was hoppy the frog, where it all began.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-start md:pl-12">
            <h3 className="font-banzai text-sm md:text-base text-[#BFFE3B] font-black uppercase tracking-wider mb-4 md:mb-6">
              LINKS
            </h3>
            <ul className="flex flex-col gap-3">
              {["Home", "About", "Tokenomics", "Roadmap", "FAQ"].map((link) => (
                <li key={link}>
                  <Magnetic>
                    <a href={`#${link.toLowerCase()}`} className="font-body font-bold text-sm md:text-base text-white/80 hover:text-[#BFFE3B] transition-colors focus-visible:outline-none">
                      {link}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials & CA */}
          <div className="flex flex-col items-start w-full">
            <h3 className="font-banzai text-sm md:text-base text-[#BFFE3B] font-black uppercase tracking-wider mb-4 md:mb-6">
              SOCIALS
            </h3>
            
            {/* Social Icons row */}
            <div className="flex items-center gap-4 mb-6">
              <Magnetic>
                <a 
                  href="https://t.me/HoppyFrogRH" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#BFFE3B] text-black border border-black flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none"
                  aria-label="Telegram"
                >
                  <TelegramIcon />
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#BFFE3B] text-black border border-black flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon />
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href="https://dextools.io" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#BFFE3B] text-black border border-black flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none"
                  aria-label="Chart"
                >
                  <DexIcon />
                </a>
              </Magnetic>
            </div>

            {/* CA Copy Box */}
            <div 
              onClick={handleCopy}
              className="flex items-center justify-between w-full max-w-md bg-transparent border border-white/20 hover:border-[#BFFE3B] transition-colors rounded-full px-5 py-3 cursor-pointer mb-4 select-all relative group"
              title="Click to copy Contract Address"
            >
              <span className="font-mono text-xs md:text-sm text-white/80 overflow-hidden text-ellipsis whitespace-nowrap mr-2 select-all">
                CA: <span className="text-[#BFFE3B]">{contractAddress}</span>
              </span>
              <div className="flex-shrink-0 text-white/50 group-hover:text-[#BFFE3B] transition-colors pl-2">
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 45 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Copy className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Telegram handle text */}
            <a 
              href="https://t.me/HoppyFrogRH" 
              target="_blank" 
              rel="noreferrer"
              className="font-banzai text-[#BFFE3B] text-sm md:text-base font-black tracking-wide hover:underline focus-visible:outline-none"
            >
              TG: t.me/HoppyFrogRH
            </a>

          </div>

        </div>

        {/* Bottom Row */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <span className="font-body text-xs md:text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} $HOPPY. All rights reserved.
          </span>
          <span className="font-body text-xs md:text-sm text-white/50 flex items-center gap-1.5">
            In Frogs We Trust. <span className="text-sm">🐸</span>
          </span>
        </div>

      </footer>
      
    </div>
  );
}
