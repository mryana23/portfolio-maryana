import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, Code2, ChevronRight, ChevronLeft, Briefcase, Code, Database, Palette,
  Boxes, Paintbrush, Github, Linkedin, Mail, Award, Rocket, School,
  Plane, Globe, FileText, Wrench, Sparkles, Zap, Camera, BarChart3, GraduationCap,
  Building2, ExternalLink, Users, Sun, Moon, Laptop, Globe2, Eye, ArrowUpRight,
} from "lucide-react";
import rftest from "./assets/anritsu.png";
import rigol from "./assets/rigol.png";
import uj from "./assets/uj.png";
import extra from "./assets/ekstra.png";
import artefy from "./assets/artefy.png";
import aerosky from "./assets/aerosky.png";
import sumber from "./assets/sumber.png";
import nexa from "./assets/nexa.png";

const projectPreviews = [
  { id:1, title:"RF Test Indonesia", subtitle:"Corporate Website", period:"August 2025", tech:["Laravel","React","MySQL","Pusher","HTML+CSS+JS"], role:"Fullstack Developer", link:"https://rf-test-indonesia.co.id", gradient:"135deg, #0ea5e9, #6366f1", glow:"rgba(99,102,241,0.5)", image:rftest, placeholderIcon:Laptop, tag:"Live Website", tagColor:"#06b6d4" },
  { id:2, title:"Rigol Indonesia", subtitle:"Corporate Website", period:"September 2025", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", link:"https://www.rigol-indonesia.co.id/", gradient:"135deg, #10b981, #06b6d4", glow:"rgba(16,185,129,0.5)", image:rigol, placeholderIcon:BarChart3, tag:"Live Website", tagColor:"#10b981" },
  { id:3, title:"Unitronic Jaya", subtitle:"Corporate Website", period:"October 2025", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", link:"https://unitronicjaya.com/", gradient:"135deg, #f59e0b, #f97316", glow:"rgba(249,115,22,0.5)", image:uj, placeholderIcon:Globe2, tag:"Live Website", tagColor:"#f97316" },
  { id:4, title:"Extracurricular Mgmt", subtitle:"School Management App", period:"Aug–Nov 2024", tech:["Laravel","MySQL","HTML+CSS+JS"], role:"Fullstack Developer & Team Lead", link:null, gradient:"135deg, #a855f7, #ec4899", glow:"rgba(168,85,247,0.5)", image:extra, placeholderIcon:School, tag:"School Project", tagColor:"#a855f7" },
  { id:5, title:"Flight Ticket Booking", subtitle:"Booking Platform", period:"Dec 2024–Jan 2025", tech:["Laravel","MySQL","Midtrans API","HTML+CSS+JS"], role:"Fullstack Developer", link:null, gradient:"135deg, #ef4444, #f97316", glow:"rgba(239,68,68,0.5)", image:aerosky, placeholderIcon:Plane, tag:"Full-stack App", tagColor:"#ef4444" },
  { id:6, title:"Arts Community", subtitle:"Community App", period:"Jan–Mar 2025", tech:["Django","MariaDB","REST API","Python"], role:"Backend Developer", link:null, gradient:"135deg, #6366f1, #a855f7", glow:"rgba(99,102,241,0.5)", image:artefy, placeholderIcon:Palette, tag:"Internship Project", tagColor:"#6366f1" },
  { id:7, title:"NexaTech", subtitle:"Dummy Company Profile Website", period:"October 2025", tech:["React","Tailwind CSS","Vite"], role:"Frontend Developer", link:"https://nexa-tech-virid.vercel.app/", gradient:"135deg, #22c55e, #06b6d4", glow:"rgba(34,197,94,0.5)", image:nexa, placeholderIcon:Sparkles, tag:"Live Website", tagColor:"#22c55e" },
  { id:8, title:"Sumber Instrumindo", subtitle:"Corporate Website", period:"September 2024", tech:["Laravel","MySQL","Bootstrap","HTML+CSS+JS"], role:"Fullstack Developer", link:"https://sumberinstrumindo.com/", gradient:"135deg, #f97316, #ef4444", glow:"rgba(249,115,22,0.5)", image:sumber, placeholderIcon:Boxes, tag:"Live Website", tagColor:"#f97316" },
];

function useTyped(words, speed = 90, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[wIdx];
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(cur.slice(0, cIdx + 1));
        if (cIdx + 1 === cur.length) setTimeout(() => setDel(true), pause);
        else setCIdx(c => c + 1);
      } else {
        setDisplay(cur.slice(0, cIdx - 1));
        if (cIdx - 1 === 0) { setDel(false); setWIdx(w => (w + 1) % words.length); setCIdx(0); }
        else setCIdx(c => c - 1);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [cIdx, del, wIdx, words, speed, pause]);
  return display;
}

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("sr-show"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    document.querySelectorAll(".sr").forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function useTilt(ref) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    // Disable tilt on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    const move = e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-3px)`;
      el.style.transition = "transform 0.08s ease";
    };
    const leave = () => { el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)"; el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)"; };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  }, [ref]);
}

function TiltCard({ style, children, className = "" }) {
  const ref = useRef(null);
  useTilt(ref);
  return <div ref={ref} className={className} style={style}>{children}</div>;
}

// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    } catch(e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      try { localStorage.setItem("theme", next ? "dark" : "light"); } catch(e) {}
      return next;
    });
  };

  const [activePreview, setActivePreview] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const isMobile = useIsMobile();

  const typed = useTyped(["Fullstack Developer","UI/UX Enthusiast","Graphic Designer","Laravel + Django + React Dev"], 85, 2000);
  useScrollReveal();

  useEffect(() => {
    const s = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const m = e => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", m, { passive: true });
    return () => window.removeEventListener("mousemove", m);
  }, [isMobile]);

  useEffect(() => {
    const k = e => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActivePreview(i => (i+1)%projectPreviews.length);
      if (e.key === "ArrowLeft") setActivePreview(i => (i-1+projectPreviews.length)%projectPreviews.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [lightboxOpen]);

  useEffect(() => {
    if (lightboxOpen) return;
    const t = setInterval(() => setActivePreview(i => (i+1)%projectPreviews.length), 4500);
    return () => clearInterval(t);
  }, [lightboxOpen]);

  // Lock body scroll when menu open on mobile
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen, isMobile]);

  const scrollTo = id => { setActiveSection(id); setIsMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); };

  const getTechIcon = t => {
    const m = { Laravel:Globe,React:Code,MySQL:Database,Canva:Palette,"Video Editing":Camera,Django:Code,"Nuxt.js":Zap,"Nuxt.js (Exposure)":Zap,MariaDB:Database,WordPress:Globe,Elementor:Wrench,"REST API":FileText,Bootstrap:Sparkles,"Midtrans API":FileText,Pusher:Zap,"Graphic Design":Paintbrush,"3D Modeling":Boxes,SketchUp:Boxes };
    return m[t] || Code2;
  };

  const experiences = [
    {
      role:"Website Developer & Graphic Designer", company:"PT. Unitronic Jaya", period:"Aug 2025 – Dec 2025", type:"Full-time", accent:"#818cf8", gradient:"135deg, #6366f1 0%, #a78bfa 100%",
      description:["Developed and maintained 4 corporate websites (RF Test Indonesia, Rigol Indonesia, Sumber Instrumindo, Unitronic Jaya) using Laravel with MySQL database","Built RF Test Indonesia V1 using React (Vite) integrated with Laravel REST API","Implemented real-time live chat connected to admin using Pusher","Integrated Google Analytics (gtag) and optimized on-page SEO","Deployed and managed hosting on Hostinger ensuring scalability and performance","Optimized UI responsiveness for better mobile and cross-platform experience","Created daily promotional posters (3/day) with consistent branding using Canva","Handled product photography, videography, and social media content","Designed 3D furniture models and office layout concepts using SketchUp"],
      tech:["Laravel","React (Vite)","MySQL","Pusher","Google Analytics","SEO","phpMyAdmin","Hostinger","Canva","SketchUp","Video Editing","3D Modeling"]
    },
    {
      role:"Backend Developer & Technical Writer", company:"PT. Median Talenta Raya", period:"Jan 2025 – May 2025", type:"Internship", accent:"#34d399", gradient:"135deg, #10b981 0%, #06b6d4 100%",
      description:["Developed backend for arts community application using Django and MariaDB","Worked with Nuxt.js frontend team for API integration - learned about Vue.js ecosystem","Created comprehensive project documentation including API docs and database structure","Built professional websites using WordPress and Elementor","Compiled system requirements, workflow, and technical specifications"],
      tech:["Django","Nuxt.js (Exposure)","MariaDB","WordPress","Elementor","REST API"]
    },
  ];

  const projects = [
    { title:"NexaTech", period:"October 2025", description:"Dummy company profile website for NexaTech, a digital solution agency. Showcases services, pricing plans, testimonials, and a modern landing page focused on clean UI and conversion-oriented design.", tech:["React","Tailwind CSS","Vite"], role:"Frontend Developer", icon:Sparkles, accent:"#22c55e", link:"https://nexa-tech-virid.vercel.app/" },
    { title:"Arts Community Platform", period:"January – March 2025", description:"Community-driven platform for local artists built during internship. Features community profiles, event listings, and discussion forums. Django backend with REST API development.", tech:["Django","Nuxt.js (Exposure)","MariaDB","REST API","Python"], role:"Backend Developer", icon:Palette, accent:"#818cf8" },
    { title:"RF Test Indonesia", period:"August 2025", description:"Corporate website with React V1 later rebuilt as full Laravel stack. Features product catalog, admin panel, responsive design, live chat via Pusher, WhatsApp integration and form to email.", tech:["React","Laravel","MySQL","REST API","Pusher"], role:"Fullstack Developer", icon:Laptop, accent:"#22d3ee", link:"https://rf-test-indonesia.co.id" },
    { title:"Sumber Instrumindo", period:"September 2024", description:"Professional corporate website with product catalog, CMS powered by MySQL, admin dashboard, responsive layout, email contact form and WhatsApp integration.", tech:["Laravel","MySQL","Bootstrap","HTML+CSS+JS"], role:"Fullstack Developer", icon:Boxes, accent:"#fb923c", link:"https://sumberinstrumindo.com/" },
    { title:"Rigol Indonesia", period:"September 2025", description:"Corporate website with product catalog, company information, CMS, admin panel, responsive design, WhatsApp integration, form to email and live chat via Pusher.", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", icon:BarChart3, accent:"#10b981", link:"https://www.rigol-indonesia.co.id/" },
    { title:"Unitronic Jaya", period:"October 2025", description:"Corporate website with product catalog, CMS, admin panel, responsive design, live chat via Pusher, WhatsApp integration, and email contact form.", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", icon:Globe2, accent:"#f59e0b", link:"https://unitronicjaya.com/" },
  ];

  const certifications = [
    { title:"Oracle Certified Java Programmer", issuer:"Oracle", year:"2024", icon:Code, accent:"#f87171", bg:"rgba(239,68,68,0.12)" },
    { title:"Belajar Dasar Cloud dan Gen AI di AWS", issuer:"Dicoding Indonesia", year:"2025", icon:Database, accent:"#fb923c", bg:"rgba(249,115,22,0.12)" },
    { title:"Intro to Data Analytics", issuer:"RevoU", year:"2025", icon:BarChart3, accent:"#818cf8", bg:"rgba(99,102,241,0.12)" },
  ];

  const D = isDark;
  const cur = projectPreviews[activePreview];

  const T = {
    text:      D ? "#f1f5f9" : "#0f0d24",
    textSub:   D ? "#cbd5e1" : "#2d2a4a",
    textMuted: D ? "#94a3b8" : "#4a4770",
    textFaint: D ? "#64748b" : "#6b6899",
    bg:        D ? "#04060d" : "#eeeaff",
    cardBg:    D ? "rgba(255,255,255,0.025)" : "rgba(244, 234, 247, 0.9)",
    cardBord:  D ? "rgba(255,255,255,0.06)"  : "rgba(99,102,241,0.15)",
    navBg:     D ? "rgba(4,6,13,0.92)"        : "rgba(238,234,255,0.96)",
  };

  // Responsive padding helper
  const px = isMobile ? "16px" : "28px";
  const sectionPad = isMobile ? "72px 16px" : "110px 28px";

  return (
    <div style={{ fontFamily:"'Montserrat',sans-serif", background:T.bg, color:T.text, overflowX:"hidden", minHeight:"100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        ::selection{background:rgba(139,92,246,0.4);color:#fff;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#7c3aed,#06b6d4);border-radius:2px;}

        @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
        @keyframes orbFloat{0%{transform:translate(0,0);}33%{transform:translate(22px,-16px);}66%{transform:translate(-16px,12px);}100%{transform:translate(0,0);}}
        @keyframes breathe{0%,100%{opacity:.45;transform:scale(1);}50%{opacity:.85;transform:scale(1.07);}}
        @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(.8);}}
        @keyframes shimmer{0%{background-position:200% center;}100%{background-position:-200% center;}}
        @keyframes spin{from{transform:rotate(0);}to{transform:rotate(360deg);}}
        @keyframes previewIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}
        @keyframes floatY{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
        @keyframes ringPulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.05;}50%{transform:translate(-50%,-50%) scale(1.04);opacity:.09;}}
        @keyframes barFill{from{width:0;}to{width:100%;}}
        @keyframes badgePop{0%{transform:scale(.7);opacity:0;}80%{transform:scale(1.06);}100%{transform:scale(1);opacity:1;}}
        @keyframes tagSlide{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}
        @keyframes menuSlide{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}

        .sr{opacity:0;transform:translateY(22px);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1);}
        .sr.sr-show{opacity:1;transform:translateY(0);}
        .sr-l{opacity:0;transform:translateX(-22px);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1);}
        .sr-l.sr-show{opacity:1;transform:translateX(0);}
        .sr-r{opacity:0;transform:translateX(22px);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1);}
        .sr-r.sr-show{opacity:1;transform:translateX(0);}
        .d1{transition-delay:.05s!important;}.d2{transition-delay:.1s!important;}.d3{transition-delay:.15s!important;}.d4{transition-delay:.2s!important;}.d5{transition-delay:.25s!important;}.d6{transition-delay:.3s!important;}

        .nav-btn{position:relative;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:none;border:none;cursor:pointer;transition:color .2s;padding:4px 0;}
        .nav-btn::after{content:'';position:absolute;bottom:-4px;left:50%;width:0;height:2px;background:linear-gradient(90deg,#7c3aed,#22d3ee);border-radius:1px;transition:all .3s;transform:translateX(-50%);}
        .nav-btn:hover::after,.nav-btn.act::after{width:100%;}

        .mono{font-family:'DM Mono','Courier New',monospace;}
        .lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;}
        .pill{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:999px;font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;}
        .dot-pulse{width:7px;height:7px;border-radius:50%;animation:pulseDot 2s ease infinite;}
        .glow-orb{animation:orbFloat 24s ease-in-out infinite;}
        .breathe{animation:breathe 5s ease-in-out infinite;}
        .float-y{animation:floatY 3.5s ease-in-out infinite;}

        .img-dark{filter:brightness(1.4) contrast(1.08) saturate(1.1);}
        .img-light{filter:brightness(.68) contrast(1.12) saturate(.85);}

        .btn-glow{position:relative;overflow:hidden;transition:transform .2s,box-shadow .3s;}
        .btn-glow::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(transparent,rgba(255,255,255,.12),transparent 60%);animation:spin 3s linear infinite;opacity:0;transition:opacity .3s;}
        .btn-glow:hover::before{opacity:1;}
        .btn-glow:hover{transform:translateY(-2px);box-shadow:0 20px 56px rgba(124,58,237,.55)!important;}
        .btn-glow:active{transform:translateY(0);}

        .lift{transition:transform .35s cubic-bezier(.22,1,.36,1);}
        .lift:hover{transform:translateY(-4px);}

        .stag{transition:all .2s ease;}
        .stag:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 4px 12px rgba(124,58,237,.18);}

        .icon-spin{transition:transform .4s cubic-bezier(.22,1,.36,1);}
        .icon-spin:hover{transform:rotate(-8deg) scale(1.12);}

        .card-glow{transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s;}
        .card-glow:hover{transform:translateY(-3px);}

        .topbar{height:3px;border-radius:3px 3px 0 0;animation:barFill .9s cubic-bezier(.22,1,.36,1) .3s both;}
        .divider{height:1px;background:linear-gradient(90deg,transparent 0%,rgba(99,102,241,.22) 30%,rgba(34,211,238,.18) 70%,transparent 100%);}
        .tcur{display:inline-block;width:3px;height:.8em;background:linear-gradient(180deg,#818cf8,#22d3ee);border-radius:2px;margin-left:3px;animation:pulseDot .75s ease infinite;vertical-align:middle;}
        .prev-in{animation:previewIn .36s cubic-bezier(.22,1,.36,1) both;}

        /* ── MOBILE MENU ── */
        .mob-menu{
          position:fixed;top:70px;left:0;right:0;bottom:0;
          z-index:49;
          overflow-y:auto;
          animation:menuSlide .25s cubic-bezier(.22,1,.36,1);
        }

        /* ── RESPONSIVE ── */
        @media(max-width:480px){
          .contact-grid{grid-template-columns:1fr!important;}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .proj-grid{grid-template-columns:1fr!important;}
          .skills-grid{grid-template-columns:1fr!important;}
        }
        @media(min-width:481px) and (max-width:768px){
          .contact-grid{grid-template-columns:1fr 1fr!important;}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .proj-grid{grid-template-columns:1fr!important;}
          .skills-grid{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:768px){
          .hide-mob{display:none!important;}
          .show-mob{display:flex!important;}
          .about-grid{grid-template-columns:1fr!important;}
          .prev-grid{grid-template-columns:1fr!important;}
          .exp-header{flex-direction:column!important;align-items:flex-start!important;}
          .exp-badges{align-items:flex-start!important;}
          .footer-inner{flex-direction:column!important;align-items:center!important;text-align:center!important;gap:12px!important;}
        }
        @media(min-width:769px){
          .show-mob{display:none!important;}
          .proj-grid{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))!important;}
          .skills-grid{grid-template-columns:repeat(auto-fill,minmax(230px,1fr))!important;}
          .contact-grid{grid-template-columns:repeat(3,1fr)!important;}
        }
        @media(min-width:769px) and (max-width:1024px){
          .proj-grid{grid-template-columns:repeat(2,1fr)!important;}
        }

        /* Touch device optimizations */
        @media(hover:none){
          .lift:hover{transform:none;}
          .stag:hover{transform:none;box-shadow:none;}
          .card-glow:hover{transform:none;}
        }
      `}</style>

      {/* Background */}
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:D
          ?"radial-gradient(ellipse 100% 70% at 50% -5%,rgba(99,102,241,.15) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 85% 85%,rgba(6,182,212,.11) 0%,transparent 55%),#04060d"
          :"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(139,92,246,.13) 0%,transparent 60%),radial-gradient(ellipse 55% 40% at 90% 90%,rgba(6,182,212,.09) 0%,transparent 50%),#eeeaff"
        }} />
        {!isMobile && <>
          <div className="glow-orb breathe" style={{position:"absolute",top:"8%",left:"12%",width:"480px",height:"480px",borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,.14) 0%,transparent 68%)",filter:"blur(50px)"}} />
          <div className="glow-orb breathe" style={{position:"absolute",top:"55%",right:"8%",width:"420px",height:"420px",borderRadius:"50%",background:"radial-gradient(circle,rgba(6,182,212,.11) 0%,transparent 68%)",filter:"blur(50px)",animationDelay:"8s",animationDuration:"28s"}} />
          <div style={{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(124,58,237,.05) 0%,transparent 70%)",filter:"blur(70px)",transform:`translate(${mouse.x*window.innerWidth-300}px,${mouse.y*window.innerHeight-300}px)`,transition:"transform 1s cubic-bezier(.22,1,.36,1)"}} />
        </>}
        {D && <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle,rgba(148,163,184,.06) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />}
      </div>

      {/* ── NAV ── */}
      <nav style={{position:"fixed",top:0,width:"100%",zIndex:50,padding:`0 ${px}`,transition:"all .4s",
        background:scrollY>60?T.navBg:"transparent",
        backdropFilter:scrollY>60?"blur(24px) saturate(1.6)":"none",
        borderBottom:scrollY>60?`1px solid ${D?"rgba(99,102,241,.1)":"rgba(99,102,241,.15)"}`:"none"}}>
        <div style={{maxWidth:"1180px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",height:"70px"}}>

          <button onClick={()=>scrollTo("home")} style={{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",cursor:"pointer",flexShrink:0}}>
            <div style={{position:"relative",width:"34px",height:"34px",flexShrink:0}}>
              <div style={{position:"absolute",inset:0,borderRadius:"11px",background:"linear-gradient(135deg,#7c3aed,#06b6d4)",opacity:.9,boxShadow:"0 4px 16px rgba(124,58,237,.4)"}} />
              <div style={{position:"absolute",inset:"1px",borderRadius:"10px",background:"linear-gradient(135deg,#6d28d9,#4338ca)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Code2 size={15} color="#fff" />
              </div>
            </div>
            <span style={{fontWeight:700,fontSize:isMobile?"15px":"17px",color:T.text,whiteSpace:"nowrap"}}>
              {isMobile ? "Maryana" : "Maryana's Portfolio"}
            </span>
          </button>

          <div className="hide-mob" style={{display:"flex",alignItems:"center",gap:"32px"}}>
            {["Home","About","Experience","Projects","Contact"].map(item=>(
              <button key={item} className={`nav-btn${activeSection===item.toLowerCase()?" act":""}`}
                onClick={()=>scrollTo(item.toLowerCase())}
                style={{color:activeSection===item.toLowerCase()?T.text:T.textMuted}}>
                {item}
              </button>
            ))}
          </div>

          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <button onClick={toggleTheme} style={{width:"38px",height:"38px",borderRadius:"11px",background:D?"rgba(99,102,241,.1)":"rgba(99,102,241,.1)",border:`1px solid ${D?"rgba(99,102,241,.22)":"rgba(99,102,241,.22)"}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"transform .35s",flexShrink:0}}
              onMouseEnter={e=>{ if(window.matchMedia("(hover: hover)").matches) e.currentTarget.style.transform="rotate(18deg) scale(1.1)"; }}
              onMouseLeave={e=>e.currentTarget.style.transform="rotate(0) scale(1)"}
              onTouchEnd={e=>e.currentTarget.style.transform="rotate(0) scale(1)"}>
              {D?<Sun size={15} color="#fbbf24"/>:<Moon size={15} color="#7c3aed"/>}
            </button>
            <button className="show-mob" onClick={()=>setIsMenuOpen(!isMenuOpen)} style={{width:"38px",height:"38px",borderRadius:"11px",background:D?"rgba(99,102,241,.1)":"rgba(99,102,241,.1)",border:`1px solid ${D?"rgba(99,102,241,.22)":"rgba(99,102,241,.22)"}`,display:"none",alignItems:"center",justifyContent:"center",cursor:"pointer",color:T.text,flexShrink:0}}>
              {isMenuOpen?<X size={18}/>:<Menu size={18}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mob-menu" style={{background:D?"rgba(4,6,13,.97)":"rgba(238,234,255,.98)",backdropFilter:"blur(24px)"}}>
          <div style={{borderTop:`1px solid ${D?"rgba(99,102,241,.1)":"rgba(99,102,241,.15)"}`,padding:"8px 0 24px"}}>
            {["Home","About","Experience","Projects","Contact"].map((item,idx)=>(
              <button key={item} onClick={()=>scrollTo(item.toLowerCase())} style={{display:"flex",alignItems:"center",width:"100%",textAlign:"left",padding:"16px 20px",background:"none",border:"none",cursor:"pointer",color:activeSection===item.toLowerCase()?"#818cf8":T.textSub,fontSize:"15px",fontWeight:700,letterSpacing:".05em",textTransform:"uppercase",borderBottom:`1px solid ${D?"rgba(99,102,241,.06)":"rgba(99,102,241,.08)"}`,gap:"12px",transition:"background .15s",animation:`menuSlide .25s cubic-bezier(.22,1,.36,1) ${idx*0.04}s both`}}
                onTouchStart={e=>e.currentTarget.style.background=D?"rgba(99,102,241,.08)":"rgba(99,102,241,.06)"}
                onTouchEnd={e=>e.currentTarget.style.background="transparent"}>
                <div style={{width:"6px",height:"6px",borderRadius:"50%",background:activeSection===item.toLowerCase()?"#818cf8":"transparent",border:`1px solid ${activeSection===item.toLowerCase()?"#818cf8":D?"rgba(255,255,255,.2)":"rgba(99,102,241,.3)"}`,flexShrink:0}} />
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:isMobile?"80px 16px 60px":"100px 28px 90px",position:"relative",zIndex:1}}>
        {!isMobile && [650,450,260].map((size,i)=>(
          <div key={i} style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:`${size}px`,height:`${size}px`,borderRadius:"50%",border:`1px solid ${D?"rgba(99,102,241,.06)":"rgba(99,102,241,.09)"}`,pointerEvents:"none",animation:`ringPulse ${6+i*1.5}s ease-in-out ${i*0.8}s infinite`}} />
        ))}

        <div style={{maxWidth:"880px",width:"100%",textAlign:"center",position:"relative"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"999px",background:D?"rgba(34,197,94,.07)":"rgba(34,197,94,.1)",border:"1px solid rgba(34,197,94,.22)",marginBottom:isMobile?"28px":"44px",animation:"fadeUp .9s cubic-bezier(.22,1,.36,1) both, badgePop .6s cubic-bezier(.22,1,.36,1) .2s both"}}>
            <div className="dot-pulse" style={{background:"#7c807eff"}} />
            <span className="mono lbl" style={{color:T.textSub,fontSize:"9px"}}>Open to Work · Available for Opportunities</span>
          </div>

          <div style={{animation:"fadeUp .9s cubic-bezier(.22,1,.36,1) .1s both"}}>
            <p style={{fontSize:isMobile?"12px":"clamp(13px,2.5vw,19px)",fontWeight:500,fontStyle:"italic",color:T.textMuted,marginBottom:"8px",letterSpacing:".08em",textTransform:"uppercase"}}>Hi, I'm a</p>

            <div style={{minHeight:isMobile?"56px":"clamp(50px,9vw,104px)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"8px"}}>
              <h1 style={{fontSize:isMobile?"clamp(28px,8vw,42px)":"clamp(36px,6vw,75px)",fontWeight:900,lineHeight:.95,letterSpacing:"-.02em"}}>
                <span style={{background:"linear-gradient(130deg,#a5b4fc 0%,#c084fc 35%,#22d3ee 75%,#67e8f9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",backgroundSize:"200% auto",animation:"shimmer 5s linear infinite"}}>
                  {typed}
                </span>
                <span className="tcur"/>
              </h1>
            </div>

            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",marginBottom:"18px"}}>
              <div style={{height:"1px",width:"50px",background:D?"linear-gradient(90deg,transparent,rgba(99,102,241,.4))":"linear-gradient(90deg,transparent,rgba(99,102,241,.35))"}} />
              <span style={{fontSize:isMobile?"14px":"clamp(15px,2.2vw,21px)",fontStyle:"italic",fontWeight:600,color:D?"#818cf8":"#6366f1"}}>Creative Builder</span>
              <div style={{height:"1px",width:"50px",background:D?"linear-gradient(90deg,rgba(99,102,241,.4),transparent)":"linear-gradient(90deg,rgba(99,102,241,.35),transparent)"}} />
            </div>
          </div>

          <div style={{animation:"fadeUp .9s cubic-bezier(.22,1,.36,1) .25s both"}}>
            <p style={{fontSize:isMobile?"13px":"clamp(13px,1.8vw,16px)",color:T.textSub,maxWidth:"520px",margin:"0 auto 12px",lineHeight:1.8}}>
              Software Engineering graduate passionate about building scalable web applications with clean code and beautiful design
            </p>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",borderRadius:"8px",background:D?"rgba(255,255,255,.03)":"rgba(99,102,241,.07)",border:`1px solid ${D?"rgba(255,255,255,.06)":"rgba(99,102,241,.15)"}`,marginBottom:isMobile?"28px":"42px"}}>
              <Code2 size={11} color={D?"#818cf8":"#6366f1"} />
              <span className="mono lbl" style={{color:T.textMuted,fontSize:"9px"}}>Core Stack:</span>
              <span className="mono lbl" style={{color:D?"#a5b4fc":"#4f46e5",fontSize:"9px"}}>Laravel · Django · React</span>
            </div>
          </div>

          <div style={{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",marginBottom:isMobile?"40px":"80px",animation:"fadeUp .9s cubic-bezier(.22,1,.36,1) .4s both"}}>
            <button onClick={()=>scrollTo("projects")} className="btn-glow" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:isMobile?"13px 24px":"15px 32px",borderRadius:"12px",background:"linear-gradient(135deg,#7c3aed 0%,#4f46e5 50%,#0ea5e9 100%)",border:"none",color:"#fff",fontSize:isMobile?"12px":"13px",fontWeight:700,cursor:"pointer",letterSpacing:".06em",textTransform:"uppercase",boxShadow:"0 8px 32px rgba(124,58,237,.38),inset 0 1px 0 rgba(255,255,255,.15)"}}>
              View My Work <ArrowUpRight size={15} />
            </button>
            <button onClick={()=>scrollTo("contact")} style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:isMobile?"13px 24px":"15px 32px",borderRadius:"12px",background:D?"rgba(255,255,255,.04)":"rgba(99,102,241,.08)",border:`1px solid ${D?"rgba(255,255,255,.11)":"rgba(99,102,241,.22)"}`,color:T.text,fontSize:isMobile?"12px":"13px",fontWeight:700,cursor:"pointer",letterSpacing:".06em",textTransform:"uppercase",transition:"all .25s"}}>
              Get In Touch
            </button>
          </div>

          <div className="stats-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:isMobile?"8px":"12px",animation:"fadeUp .9s cubic-bezier(.22,1,.36,1) .55s both"}}>
            {[
              {icon:Briefcase,value:"1+",label:"Years Exp.",color:"#818cf8",glow:"rgba(129,140,248,.18)"},
              {icon:Rocket,value:"6+",label:"Projects",color:"#22d3ee",glow:"rgba(34,211,238,.18)"},
              {icon:Code2,value:"15+",label:"Technologies",color:"#f472b6",glow:"rgba(244,114,182,.18)"},
              {icon:Award,value:"3+",label:"Certifications",color:"#fbbf24",glow:"rgba(251,191,36,.18)"},
            ].map((s,i)=>(
              <div key={i} className="lift" style={{padding:isMobile?"14px 8px 12px":"22px 14px 18px",borderRadius:"16px",background:T.cardBg,border:`1px solid ${T.cardBord}`,backdropFilter:"blur(12px)",textAlign:"center",boxShadow:D?"0 4px 24px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.04)":"0 4px 24px rgba(99,102,241,.1),inset 0 1px 0 rgba(255,255,255,.9)"}}>
                <div style={{width:"32px",height:"32px",borderRadius:"10px",background:s.glow,border:`1px solid ${s.color}28`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 8px",boxShadow:`0 4px 12px ${s.glow}`}}>
                  <s.icon size={isMobile?14:16} color={s.color} />
                </div>
                <div style={{fontSize:isMobile?"22px":"28px",fontWeight:900,color:s.color,lineHeight:1,marginBottom:"3px"}}>{s.value}</div>
                <div className="mono lbl" style={{color:T.textFaint,fontSize:"7.5px"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{padding:sectionPad,position:"relative",zIndex:1}}>
        <div className="divider" style={{marginBottom:isMobile?"48px":"80px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="sr" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",marginBottom:isMobile?"36px":"60px"}}>
            <div>
              <div className="pill" style={{background:D?"rgba(129,140,248,.09)":"rgba(99,102,241,.09)",border:"1px solid rgba(99,102,241,.2)",color:"#818cf8",marginBottom:"12px"}}>
                <span style={{fontSize:"12px"}}>✦</span> About Me
              </div>
              <h2 style={{fontSize:isMobile?"clamp(32px,9vw,48px)":"clamp(36px,5.5vw,66px)",fontWeight:900,lineHeight:.92,letterSpacing:"-.03em",color:T.text}}>
                A little<br />bit <span style={{color:"#818cf8",fontStyle:"italic"}}>about me</span>
              </h2>
            </div>
            {!isMobile && <p style={{maxWidth:"320px",color:T.textSub,lineHeight:1.85,fontSize:"14px"}}>
              Software Engineering graduate passionate about building functional and visually engaging digital experiences.
            </p>}
          </div>

          {isMobile && <p className="sr" style={{color:T.textSub,lineHeight:1.8,fontSize:"13px",marginBottom:"24px"}}>
            Software Engineering graduate passionate about building functional and visually engaging digital experiences.
          </p>}

          <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",alignItems:"start"}}>
            <TiltCard className="sr sr-l" style={{display:"flex",flexDirection:"column",gap:"0"}}>
              <div style={{padding:isMobile?"18px":"28px",borderRadius:"18px",background:T.cardBg,border:`1px solid ${T.cardBord}`,boxShadow:D?"0 8px 40px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.03)":"0 8px 40px rgba(99,102,241,.1)",backdropFilter:"blur(12px)",marginBottom:"14px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"}}>
                  <GraduationCap size={16} color="#818cf8" />
                  <span style={{fontWeight:700,fontSize:isMobile?"13px":"14px",color:T.text}}>Education & Achievement</span>
                </div>
                {[
                  [GraduationCap,"Software Engineering Graduate – SMKN 1 Cimahi (2025)","#818cf8"],
                  [Award,"Graduated with an average final grade of 87.95","#fbbf24"],
                  [Users,"Active in multiple team-based development projects","#22d3ee"],
                  [Sparkles,"Continuous learner with multiple certifications","#f472b6"],
                ].map(([Icon,text,c],i)=>(
                  <div key={i} style={{display:"flex",alignItems:"flex-start",gap:"10px",padding:"8px 6px",borderRadius:"8px",borderBottom:i<3?`1px solid ${D?"rgba(255,255,255,.04)":"rgba(0,0,0,.05)"}`:"none"}}>
                    <div style={{width:"26px",height:"26px",borderRadius:"8px",background:`${c}16`,border:`1px solid ${c}24`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"1px"}}>
                      <Icon size={11} color={c} />
                    </div>
                    <span style={{fontSize:isMobile?"11px":"13px",color:T.textSub,lineHeight:1.6}}>{text}</span>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                {[["Full-Stack Dev",Code,"#818cf8"],["UI/UX Designer",Palette,"#22d3ee"],["Graphic Designer",Paintbrush,"#f472b6"]].map(([label,Icon,c],i)=>(
                  <span key={i} className="stag" style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"9px",background:D?`${c}12`:`${c}11`,border:`1px solid ${c}25`,fontSize:isMobile?"10px":"11px",fontWeight:700,color:c}}>
                    <Icon size={10} color={c} />{label}
                  </span>
                ))}
              </div>
            </TiltCard>

            <div className="sr sr-r" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {certifications.map((cert,i)=>(
                <TiltCard key={i} className="card-glow" style={{padding:isMobile?"14px":"18px",borderRadius:"14px",background:T.cardBg,border:`1px solid ${T.cardBord}`,boxShadow:D?"0 4px 24px rgba(0,0,0,.2)":"0 4px 24px rgba(99,102,241,.08)",display:"flex",alignItems:"center",gap:"12px",backdropFilter:"blur(10px)"}}>
                  <div style={{width:isMobile?"38px":"44px",height:isMobile?"38px":"44px",borderRadius:"12px",background:cert.bg,border:`1px solid ${cert.accent}2a`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <cert.icon size={isMobile?15:18} color={cert.accent} />
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:700,fontSize:isMobile?"11px":"13px",color:T.text,marginBottom:"3px",lineHeight:1.3}}>{cert.title}</div>
                    <div className="mono lbl" style={{color:T.textFaint,fontSize:"8px"}}>{cert.issuer} · {cert.year}</div>
                  </div>
                </TiltCard>
              ))}
              <div style={{padding:isMobile?"14px":"20px",borderRadius:"14px",background:D?"linear-gradient(135deg,rgba(99,102,241,.08),rgba(6,182,212,.04))":"linear-gradient(135deg,rgba(99,102,241,.07),rgba(6,182,212,.05))",border:`1px solid ${D?"rgba(99,102,241,.12)":"rgba(99,102,241,.15)"}`}}>
                <p style={{fontSize:isMobile?"11px":"13px",color:T.textSub,lineHeight:1.8}}>
                  Building scalable web applications with <span style={{color:"#818cf8",fontWeight:600}}>modern technologies</span> while delivering clean architecture and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{padding:sectionPad,position:"relative",zIndex:1}}>
        <div className="divider" style={{marginBottom:isMobile?"48px":"80px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="sr" style={{marginBottom:isMobile?"32px":"56px"}}>
            <div className="pill" style={{background:D?"rgba(34,211,238,.07)":"rgba(6,182,212,.07)",border:"1px solid rgba(6,182,212,.2)",color:"#22d3ee",marginBottom:"12px"}}>
              <span style={{fontSize:"12px"}}>◈</span> Work Experience
            </div>
            <h2 style={{fontSize:isMobile?"clamp(32px,9vw,48px)":"clamp(36px,5.5vw,66px)",fontWeight:900,lineHeight:.92,letterSpacing:"-.03em",color:T.text}}>
              Professional<br /><span style={{color:"#22d3ee",fontStyle:"italic"}}>Journey</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {experiences.map((exp,idx)=>(
              <TiltCard key={idx} className={`sr d${idx+1}`} style={{borderRadius:"18px",overflow:"hidden",background:T.cardBg,border:`1px solid ${T.cardBord}`,boxShadow:D?"0 8px 48px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.03)":"0 8px 48px rgba(99,102,241,.09)",backdropFilter:"blur(12px)"}}>
                <div className="topbar" style={{background:`linear-gradient(${exp.gradient})`}} />
                <div style={{padding:isMobile?"18px":"28px"}}>
                  <div className="exp-header" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"12px",marginBottom:"18px",flexWrap:"wrap"}}>
                    <div style={{display:"flex",alignItems:"flex-start",gap:"12px"}}>
                      <div style={{width:"44px",height:"44px",borderRadius:"12px",background:`linear-gradient(${exp.gradient})`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 6px 20px ${exp.accent}28`}}>
                        <Briefcase size={18} color="#fff" />
                      </div>
                      <div>
                        <h3 style={{fontSize:isMobile?"14px":"18px",fontWeight:700,color:T.text,marginBottom:"4px",lineHeight:1.3}}>{exp.role}</h3>
                        <div style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"12px",fontWeight:600,color:exp.accent}}>
                          <Building2 size={11} />{exp.company}
                        </div>
                      </div>
                    </div>
                    <div className="exp-badges" style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"5px"}}>
                      <span style={{padding:"4px 12px",borderRadius:"7px",background:D?"rgba(255,255,255,.04)":"rgba(0,0,0,.05)",border:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(0,0,0,.08)"}`,fontSize:"11px",color:T.textSub,fontWeight:500,whiteSpace:"nowrap"}}>{exp.period}</span>
                      <span style={{padding:"3px 10px",borderRadius:"7px",background:`${exp.accent}14`,border:`1px solid ${exp.accent}2a`,fontSize:"9px",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:exp.accent}}>{exp.type}</span>
                    </div>
                  </div>
                  <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"6px",marginBottom:"16px",paddingLeft:0}}>
                    {exp.description.map((d,i)=>(
                      <li key={i} style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:isMobile?"12px":"13px",lineHeight:1.7,color:T.textSub}}>
                        <div style={{width:"4px",height:"4px",borderRadius:"50%",background:`linear-gradient(${exp.gradient})`,marginTop:"7px",flexShrink:0}} />{d}
                      </li>
                    ))}
                  </ul>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}>
                    {exp.tech.map((t,i)=>{const TI=getTechIcon(t);return(
                      <span key={i} className="stag" style={{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 9px",borderRadius:"6px",background:D?"rgba(255,255,255,.03)":"rgba(0,0,0,.04)",border:`1px solid ${D?"rgba(255,255,255,.06)":"rgba(0,0,0,.08)"}`,fontSize:"10px",color:T.textSub,fontWeight:500}}>
                        <TI size={9} />{t}
                      </span>
                    );})}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{padding:sectionPad,position:"relative",zIndex:1}}>
        <div className="divider" style={{marginBottom:isMobile?"48px":"80px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="sr" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",marginBottom:isMobile?"28px":"56px"}}>
            <div>
              <div className="pill" style={{background:D?"rgba(244,114,182,.08)":"rgba(236,72,153,.07)",border:"1px solid rgba(236,72,153,.2)",color:"#f472b6",marginBottom:"12px"}}>
                <span style={{fontSize:"12px"}}>◆</span> Featured Work
              </div>
              <h2 style={{fontSize:isMobile?"clamp(32px,9vw,48px)":"clamp(36px,5.5vw,66px)",fontWeight:900,lineHeight:.92,letterSpacing:"-.03em",color:T.text}}>
                Projects<br /><span style={{color:"#f472b6",fontStyle:"italic"}}>& Work</span>
              </h2>
            </div>
            {!isMobile && <p style={{maxWidth:"280px",color:T.textSub,lineHeight:1.85,fontSize:"14px"}}>Recent projects built with care, clean architecture, and attention to detail.</p>}
          </div>

          <div className="proj-grid" style={{display:"grid",gap:"12px"}}>
            {projects.map((p,i)=>(
              <TiltCard key={i} className={`sr d${(i%3)+1}`} style={{borderRadius:"16px",overflow:"hidden",background:T.cardBg,border:`1px solid ${T.cardBord}`,boxShadow:D?"0 4px 28px rgba(0,0,0,.26),inset 0 1px 0 rgba(255,255,255,.03)":"0 4px 28px rgba(99,102,241,.09)",backdropFilter:"blur(10px)",display:"flex",flexDirection:"column"}}>
                <div style={{height:"3px",background:p.accent}} />
                <div style={{padding:isMobile?"16px":"22px",flex:1,display:"flex",flexDirection:"column"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"12px"}}>
                    <div style={{width:"40px",height:"40px",borderRadius:"11px",background:`${p.accent}14`,border:`1px solid ${p.accent}24`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <p.icon size={17} color={p.accent} />
                    </div>
                    {p.link&&<a href={p.link} target="_blank" rel="noopener noreferrer" style={{width:"32px",height:"32px",borderRadius:"9px",background:D?"rgba(255,255,255,.04)":"rgba(0,0,0,.04)",border:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(0,0,0,.07)"}`,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:T.textFaint}}>
                      <ArrowUpRight size={13} />
                    </a>}
                  </div>
                  <h3 style={{fontWeight:700,fontSize:isMobile?"15px":"16px",color:T.text,marginBottom:"2px"}}>{p.title}</h3>
                  <div className="mono lbl" style={{color:T.textFaint,fontSize:"8px",marginBottom:"8px"}}>{p.period}</div>
                  <p style={{fontSize:isMobile?"12px":"13px",color:T.textSub,lineHeight:1.75,flex:1,marginBottom:"12px"}}>{p.description}</p>
                  <div style={{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"10px",fontWeight:700,color:p.accent,marginBottom:"10px"}}>
                    <Briefcase size={9} color={p.accent} />{p.role}
                  </div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"4px"}}>
                    {p.tech.map((t,j)=>{const TI=getTechIcon(t);return(
                      <span key={j} className="stag" style={{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"5px",background:D?"rgba(255,255,255,.03)":"rgba(0,0,0,.04)",border:`1px solid ${D?"rgba(255,255,255,.055)":"rgba(0,0,0,.07)"}`,fontSize:"9px",color:T.textSub,fontWeight:500}}>
                        <TI size={8}/>{t}
                      </span>
                    );})}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREVIEW GALLERY ── */}
      <section id="preview" style={{padding:sectionPad,position:"relative",zIndex:1}}>
        <div className="divider" style={{marginBottom:isMobile?"48px":"80px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="sr" style={{marginBottom:isMobile?"28px":"56px"}}>
            <div className="pill" style={{background:D?"rgba(129,140,248,.08)":"rgba(99,102,241,.08)",border:"1px solid rgba(99,102,241,.2)",color:"#818cf8",marginBottom:"12px"}}>
              <Eye size={11}/> Visual Gallery
            </div>
            <h2 style={{fontSize:isMobile?"clamp(32px,9vw,48px)":"clamp(36px,5.5vw,66px)",fontWeight:900,lineHeight:.92,letterSpacing:"-.03em",color:T.text}}>
              Project<br /><span style={{color:"#818cf8",fontStyle:"italic"}}>Preview</span>
            </h2>
          </div>

          <div className="prev-grid" style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:"20px",alignItems:"start"}}>
            {/* Browser mock */}
            <div className="sr sr-l">
              <div key={`b-${activePreview}`} className="prev-in" style={{borderRadius:"16px",overflow:"hidden",border:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(99,102,241,.13)"}`,boxShadow:D?`0 24px 64px rgba(0,0,0,.6),0 0 60px ${cur.glow}14`:"0 24px 64px rgba(99,102,241,.12)"}}>
                <div style={{background:D?"#0c1118":"#ddd9f5",padding:"9px 14px",display:"flex",alignItems:"center",gap:"10px"}}>
                  <div style={{display:"flex",gap:"5px",flexShrink:0}}>
                    {["#ff5f57","#febc2e","#28c840"].map((c,i)=>(
                      <div key={i} style={{width:"9px",height:"9px",borderRadius:"50%",background:c}} />
                    ))}
                  </div>
                  <div style={{flex:1,background:D?"rgba(255,255,255,.07)":"rgba(255,255,255,.55)",borderRadius:"5px",padding:"4px 10px",display:"flex",alignItems:"center",gap:"6px",overflow:"hidden"}}>
                    <div className="dot-pulse" style={{background:cur.link?"#22c55e":"#475569",flexShrink:0,width:"5px",height:"5px"}} />
                    <span className="mono" style={{fontSize:"9px",color:T.textFaint,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                      {cur.link?cur.link.replace("https://",""):`${cur.title.toLowerCase().replace(/\s+/g,"-")}.local`}
                    </span>
                  </div>
                  {cur.link&&<a href={cur.link} target="_blank" rel="noopener noreferrer" style={{color:T.textFaint,flexShrink:0,display:"flex"}}>
                    <ExternalLink size={11}/>
                  </a>}
                </div>
                <div style={{position:"relative",aspectRatio:"16/9"}}>
                  {cur.image?(
                    <div style={{position:"relative",width:"100%",height:"100%",cursor:"zoom-in"}} onClick={()=>setLightboxOpen(true)}>
                      <img src={cur.image} alt={cur.title} className={D?"img-dark":"img-light"}
                        style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}} />
                      {!isMobile && <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0)",transition:"background .3s",display:"flex",alignItems:"center",justifyContent:"center"}}
                        onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,0,0,.45)";const h=e.currentTarget.querySelector(".zm");if(h){h.style.opacity="1";h.style.transform="scale(1)";} }}
                        onMouseLeave={e=>{e.currentTarget.style.background="rgba(0,0,0,0)";const h=e.currentTarget.querySelector(".zm");if(h){h.style.opacity="0";h.style.transform="scale(.9)";} }}>
                        <div className="zm" style={{display:"flex",alignItems:"center",gap:"8px",background:"rgba(255,255,255,.1)",backdropFilter:"blur(14px)",padding:"8px 18px",borderRadius:"999px",color:"#fff",fontSize:"12px",fontWeight:600,opacity:0,transition:"all .3s",transform:"scale(.9)",border:"1px solid rgba(255,255,255,.18)"}}>
                          <Eye size={13}/> Perbesar
                        </div>
                      </div>}
                      {isMobile && <div style={{position:"absolute",bottom:"8px",right:"8px",background:"rgba(0,0,0,.55)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:"999px",display:"flex",alignItems:"center",gap:"4px",color:"#fff",fontSize:"10px",fontWeight:600,border:"1px solid rgba(255,255,255,.15)"}} onClick={()=>setLightboxOpen(true)}>
                        <Eye size={11}/> Perbesar
                      </div>}
                    </div>
                  ):(
                    <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#0c1118,#141b2d)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",position:"relative",overflow:"hidden"}}>
                      <div style={{position:"absolute",width:"180px",height:"180px",borderRadius:"50%",background:`radial-gradient(circle,${cur.glow},transparent)`,filter:"blur(35px)",opacity:.55}} />
                      <div className="float-y" style={{width:"56px",height:"56px",borderRadius:"16px",background:`linear-gradient(${cur.gradient})`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1,boxShadow:`0 12px 40px ${cur.glow}60`}}>
                        <cur.placeholderIcon size={24} color="#fff"/>
                      </div>
                      <div style={{textAlign:"center",position:"relative",zIndex:1}}>
                        <p style={{color:"rgba(255,255,255,.65)",fontSize:"13px",fontWeight:600}}>{cur.title}</p>
                        <p style={{color:"rgba(255,255,255,.3)",fontSize:"11px",marginTop:"3px"}}>Screenshot coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Prev/Next + dots */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"12px",gap:"8px"}}>
                <button onClick={()=>setActivePreview(i=>(i-1+projectPreviews.length)%projectPreviews.length)} style={{display:"flex",alignItems:"center",gap:"4px",padding:"8px 14px",borderRadius:"9px",background:D?"rgba(255,255,255,.04)":"rgba(99,102,241,.07)",border:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(99,102,241,.15)"}`,color:T.textSub,fontSize:"10px",fontWeight:700,cursor:"pointer",letterSpacing:".07em",textTransform:"uppercase"}}>
                  <ChevronLeft size={12}/> Prev
                </button>
                <div style={{display:"flex",gap:"4px",alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
                  {projectPreviews.map((_,i)=>(
                    <button key={i} onClick={()=>setActivePreview(i)} style={{width:i===activePreview?"22px":"6px",height:"6px",borderRadius:"999px",background:i===activePreview?`linear-gradient(${projectPreviews[i].gradient})`:(D?"rgba(255,255,255,.12)":"rgba(99,102,241,.2)"),border:"none",cursor:"pointer",transition:"all .35s cubic-bezier(.22,1,.36,1)",padding:0}} />
                  ))}
                </div>
                <button onClick={()=>setActivePreview(i=>(i+1)%projectPreviews.length)} style={{display:"flex",alignItems:"center",gap:"4px",padding:"8px 14px",borderRadius:"9px",background:D?"rgba(255,255,255,.04)":"rgba(99,102,241,.07)",border:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(99,102,241,.15)"}`,color:T.textSub,fontSize:"10px",fontWeight:700,cursor:"pointer",letterSpacing:".07em",textTransform:"uppercase"}}>
                  Next <ChevronRight size={12}/>
                </button>
              </div>
            </div>

            {/* Info panel */}
            <div className="sr sr-r" style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              <TiltCard key={`info-${activePreview}`} className="prev-in" style={{padding:isMobile?"16px":"22px",borderRadius:"16px",background:T.cardBg,border:`1px solid ${T.cardBord}`,boxShadow:D?`0 0 50px ${cur.glow}10,0 8px 40px rgba(0,0,0,.28)`:"0 8px 40px rgba(99,102,241,.1)",backdropFilter:"blur(16px)"}}>
                <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"14px"}}>
                  <div className="dot-pulse" style={{background:cur.tagColor}} />
                  <span className="mono lbl" style={{color:cur.tagColor,fontSize:"8.5px"}}>{cur.tag}</span>
                </div>
                <h3 style={{fontSize:isMobile?"16px":"20px",fontWeight:700,color:T.text,marginBottom:"3px"}}>{cur.title}</h3>
                <p style={{fontSize:"11px",color:T.textSub,marginBottom:"2px"}}>{cur.subtitle}</p>
                <p className="mono lbl" style={{color:cur.tagColor,marginBottom:"16px",fontSize:"8.5px"}}>{cur.period}</p>
                <div style={{marginBottom:"12px"}}>
                  <div className="mono lbl" style={{color:T.textFaint,marginBottom:"6px",fontSize:"8px"}}>Role</div>
                  <div style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"12px",color:T.textSub}}>
                    <Briefcase size={10} color={cur.tagColor}/>{cur.role}
                  </div>
                </div>
                <div style={{marginBottom:"14px"}}>
                  <div className="mono lbl" style={{color:T.textFaint,marginBottom:"6px",fontSize:"8px"}}>Tech Stack</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"4px"}}>
                    {cur.tech.map((t,i)=>{const TI=getTechIcon(t);return(
                      <span key={i} className="stag" style={{display:"inline-flex",alignItems:"center",gap:"3px",padding:"3px 8px",borderRadius:"6px",background:D?"rgba(255,255,255,.04)":"rgba(0,0,0,.04)",border:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(0,0,0,.07)"}`,fontSize:"9px",color:T.textSub,fontWeight:500}}>
                        <TI size={8}/>{t}
                      </span>
                    );})}
                  </div>
                </div>
                {cur.link&&<a href={cur.link} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"10px",borderRadius:"10px",background:`linear-gradient(${cur.gradient})`,color:"#fff",fontSize:"11px",fontWeight:700,textDecoration:"none",boxShadow:`0 6px 24px ${cur.glow}30`,letterSpacing:".06em",textTransform:"uppercase"}}>
                  <ExternalLink size={12}/> Visit Website
                </a>}
              </TiltCard>

              {/* Thumbnails - hide on very small screens */}
              {!isMobile && <div style={{padding:"14px",borderRadius:"14px",background:T.cardBg,border:`1px solid ${T.cardBord}`}}>
                <div className="mono lbl" style={{color:T.textFaint,fontSize:"8px",marginBottom:"10px"}}>All Projects</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"5px"}}>
                  {projectPreviews.map((p,i)=>(
                    <div key={i} style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                      <button onClick={()=>setActivePreview(i)} style={{position:"relative",borderRadius:"6px",overflow:"hidden",width:"100%",paddingBottom:"62.5%",border:i===activePreview?`2px solid ${p.tagColor}`:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"}`,opacity:i===activePreview?1:.42,cursor:"pointer",transition:"all .25s",padding:0,background:"transparent",display:"block",boxShadow:i===activePreview?`0 0 12px ${p.tagColor}40`:"none"}}>
                        <div style={{position:"absolute",inset:0}}>
                          {p.image?<img src={p.image} alt={p.title} className={D?"img-dark":"img-light"} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}} />
                          :<div style={{width:"100%",height:"100%",background:`linear-gradient(${p.gradient})`,display:"flex",alignItems:"center",justifyContent:"center"}}><p.placeholderIcon size={10} color="rgba(255,255,255,.7)"/></div>}
                        </div>
                      </button>
                      <p style={{fontSize:"7px",fontWeight:600,color:i===activePreview?p.tagColor:T.textFaint,textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{p.title}</p>
                    </div>
                  ))}
                </div>
              </div>}

              {/* Mobile: show project count indicator instead */}
              {isMobile && <div style={{padding:"12px 14px",borderRadius:"12px",background:T.cardBg,border:`1px solid ${T.cardBord}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontSize:"11px",color:T.textFaint,fontWeight:500}}>{activePreview+1} of {projectPreviews.length} projects</span>
                <div style={{display:"flex",gap:"3px"}}>
                  {projectPreviews.map((_,i)=>(
                    <div key={i} style={{width:"5px",height:"5px",borderRadius:"50%",background:i===activePreview?cur.tagColor:D?"rgba(255,255,255,.15)":"rgba(99,102,241,.2)",transition:"background .3s"}} />
                  ))}
                </div>
              </div>}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen&&cur.image&&(
        <div onClick={()=>setLightboxOpen(false)} style={{position:"fixed",inset:0,zIndex:100,background:"rgba(2,4,12,.95)",backdropFilter:"blur(24px)",display:"flex",alignItems:"center",justifyContent:"center",padding:isMobile?"12px":"24px"}}>
          <button onClick={()=>setLightboxOpen(false)} style={{position:"absolute",top:"16px",right:"16px",width:"38px",height:"38px",borderRadius:"10px",background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",zIndex:10}}>
            <X size={16}/>
          </button>
          {[{dir:-1,side:"left",Icon:ChevronLeft},{dir:1,side:"right",Icon:ChevronRight}].map(({dir,side,Icon})=>(
            <button key={side} onClick={e=>{e.stopPropagation();setActivePreview(i=>(i+dir+projectPreviews.length)%projectPreviews.length);}} style={{position:"absolute",[side]:isMobile?"8px":"16px",top:"50%",transform:"translateY(-50%)",width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff"}}>
              <Icon size={18}/>
            </button>
          ))}
          <img src={cur.image} alt="" onClick={e=>e.stopPropagation()} style={{maxWidth:"1040px",width:"100%",borderRadius:"14px",boxShadow:`0 32px 80px rgba(0,0,0,.75),0 0 0 1px rgba(255,255,255,.05)`}} />
          <p className="mono" style={{position:"absolute",bottom:"16px",left:"50%",transform:"translateX(-50%)",color:"rgba(255,255,255,.4)",fontSize:"10px",background:"rgba(0,0,0,.45)",padding:"4px 14px",borderRadius:"999px",whiteSpace:"nowrap"}}>
            {cur.title} · {activePreview+1}/{projectPreviews.length}
          </p>
        </div>
      )}

      {/* ── SKILLS ── */}
      <section id="skills" style={{padding:sectionPad,position:"relative",zIndex:1}}>
        <div className="divider" style={{marginBottom:isMobile?"48px":"80px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="sr" style={{marginBottom:isMobile?"28px":"56px"}}>
            <div className="pill" style={{background:D?"rgba(251,191,36,.07)":"rgba(245,158,11,.07)",border:"1px solid rgba(245,158,11,.2)",color:"#fbbf24",marginBottom:"12px"}}>
              <span style={{fontSize:"12px"}}>⬡</span> Skills
            </div>
            <h2 style={{fontSize:isMobile?"clamp(32px,9vw,48px)":"clamp(36px,5.5vw,66px)",fontWeight:900,lineHeight:.92,letterSpacing:"-.03em",color:T.text}}>
              Tech Stack<br /><span style={{color:"#fbbf24",fontStyle:"italic"}}>& Skills</span>
            </h2>
          </div>
          <div className="skills-grid" style={{display:"grid",gap:"12px"}}>
            {[
              {category:"Frontend",icon:Code,accent:"#22d3ee",items:["React","Tailwind CSS","HTML+CSS+JS","Bootstrap","Vite","Nuxt.js","Responsive Design","REST API Integration"]},
              {category:"Backend",icon:Database,accent:"#818cf8",items:["Laravel","Django","MySQL","MariaDB","MongoDB","REST API Development","Pusher","Redis","Websocket"]},
              {category:"Design",icon:Palette,accent:"#f472b6",items:["Figma","Adobe Photoshop","Canva","UI/UX Design","SketchUp","Blender","Graphic Design","CorelDraw"]},
              {category:"Tools & Others",icon:Wrench,accent:"#fbbf24",items:["Git","WordPress","Elementor","Video Editing","phpMyAdmin","Microsoft SQL Server","SEO","Google Analytics"]},
            ].map((g,i)=>(
              <TiltCard key={i} className={`sr d${i+1}`} style={{padding:isMobile?"16px":"22px",borderRadius:"14px",background:T.cardBg,border:`1px solid ${T.cardBord}`,boxShadow:D?"0 4px 28px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.025)":"0 4px 28px rgba(99,102,241,.08)",backdropFilter:"blur(10px)"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"}}>
                  <div style={{width:"36px",height:"36px",borderRadius:"10px",background:`${g.accent}14`,border:`1px solid ${g.accent}24`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <g.icon size={16} color={g.accent}/>
                  </div>
                  <span style={{fontWeight:700,fontSize:isMobile?"14px":"15px",color:T.text}}>{g.category}</span>
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}>
                  {g.items.map((item,j)=>(
                    <span key={j} className="stag" style={{padding:"4px 9px",borderRadius:"6px",background:D?"rgba(255,255,255,.04)":"rgba(0,0,0,.04)",border:`1px solid ${D?"rgba(255,255,255,.07)":"rgba(0,0,0,.07)"}`,fontSize:"10px",color:T.textSub,fontWeight:500}}>{item}</span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{padding:isMobile?"60px 16px 72px":"120px 28px",position:"relative",zIndex:1}}>
        <div className="divider" style={{marginBottom:isMobile?"48px":"80px"}} />
        <div style={{maxWidth:"700px",margin:"0 auto",textAlign:"center"}}>
          <div className="pill" style={{background:D?"rgba(129,140,248,0.07)":"rgba(99,102,241,0.05)",border:"1px solid rgba(99,102,241,0.18)",color:"#818cf8",marginBottom:"24px",display:"inline-flex"}}>
            <Mail size={11} /> Get In Touch
          </div>

          <h2 style={{fontSize:isMobile?"clamp(36px,11vw,56px)":"clamp(44px,7vw,80px)",fontWeight:900,lineHeight:.9,letterSpacing:"-0.04em",color:D?"#f1f5f9":"#1e1b4b",marginBottom:"20px"}}>
            Let's Work<br /><span style={{background:"linear-gradient(135deg, #818cf8, #c084fc, #22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontStyle:"italic"}}>Together</span>
          </h2>

          <p style={{fontSize:isMobile?"13px":"15px",color:T.textSub,maxWidth:"500px",margin:"0 auto 28px",lineHeight:1.8}}>
            I'm currently open to new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-grid" style={{display:"grid",gap:"10px",marginBottom:"28px"}}>
            {[
              {icon:Mail,label:"Email",desc:"Send me a message",href:"mailto:maryanadh787@gmail.com",accent:"#f472b6"},
              {icon:Github,label:"GitHub",desc:"Check my code",href:"https://github.com/mryana23",accent:"#9f6fc7"},
              {icon:Linkedin,label:"LinkedIn",desc:"Let's Connect",href:"https://www.linkedin.com/in/maryana-dwi-hendrianty-31b503328/",accent:"#22d3ee"},
            ].map((c,i)=>(
              <a key={i} href={c.href} target={i>0?"_blank":undefined} rel="noopener noreferrer" style={{padding:isMobile?"16px 12px":"22px 16px",borderRadius:"14px",background:T.cardBg,border:`1px solid ${T.cardBord}`,textDecoration:"none",display:"block",boxShadow:D?"0 4px 24px rgba(0,0,0,0.22)":"0 4px 24px rgba(99,102,241,0.06)",backdropFilter:"blur(10px)",transition:"transform .2s"}}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"}
                onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
                <div style={{width:"40px",height:"40px",borderRadius:"11px",background:`${c.accent}11`,border:`1px solid ${c.accent}22`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:`0 4px 14px ${c.accent}16`}}>
                  <c.icon size={18} color={c.accent} />
                </div>
                <p style={{fontWeight:700,fontSize:"14px",color:D?"#d2d5d8":"#1e1b4b",marginBottom:"3px"}}>{c.label}</p>
                <p style={{fontSize:"11px",color:T.textSub}}>{c.desc}</p>
              </a>
            ))}
          </div>

          <button onClick={()=>window.location.href="mailto:maryanadh787@gmail.com"} className="btn-glow" style={{display:"inline-flex",alignItems:"center",gap:"10px",padding:isMobile?"14px 32px":"16px 42px",borderRadius:"12px",background:"linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0ea5e9 100%)",border:"none",color:"#fff",fontSize:isMobile?"12px":"13px",fontWeight:700,cursor:"pointer",boxShadow:"0 12px 48px rgba(124,58,237,0.42), inset 0 1px 0 rgba(255,255,255,0.15)",letterSpacing:"0.07em",textTransform:"uppercase"}}>
            <Mail size={16} /> Let's Talk
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{borderTop:`1px solid ${D?"rgba(99,102,241,0.07)":"rgba(99,102,241,0.08)"}`,padding:`20px ${px}`,background:D?"rgba(4,6,13,0.4)":"rgba(248,247,255,0.5)",backdropFilter:"blur(12px)"}}>
        <div className="footer-inner" style={{maxWidth:"1100px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <div style={{width:"22px",height:"22px",borderRadius:"7px",background:"linear-gradient(135deg,#7c3aed,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Code2 size={10} color="#fff" />
            </div>
            <span style={{fontWeight:700,fontSize:"13px",color:D?"#d2d5d8":"#1e1b4b"}}>Maryana's Portfolio</span>
          </div>
          <p className="mono" style={{color:T.textFaint,fontSize:"9px"}}>Built with React · Designed with ✦ care</p>
          <div style={{display:"flex",gap:"7px"}}>
            {[{icon:Github,href:"https://github.com/mryana23"},{icon:Linkedin,href:"https://www.linkedin.com/in/maryana-dwi-hendrianty-31b503328/"},{icon:Mail,href:"mailto:maryanadh787@gmail.com"}].map(({icon:Icon,href},i)=>(
              <a key={i} href={href} target={i<2?"_blank":undefined} rel="noopener noreferrer" style={{width:"30px",height:"30px",borderRadius:"8px",background:D?"rgba(255,255,255,0.04)":"rgba(99,102,241,0.06)",border:`1px solid ${D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",color:T.textSub,textDecoration:"none"}}>
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}