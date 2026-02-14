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

const projectPreviews = [
  { id:1, title:"RF Test Indonesia", subtitle:"Corporate Website", period:"August 2025", tech:["Laravel","React","MySQL","Pusher","HTML+CSS+JS"], role:"Fullstack Developer", link:"https://rf-test-indonesia.co.id", gradient:"135deg, #0ea5e9, #6366f1", glow:"rgba(99,102,241,0.5)", image:rftest, placeholderIcon:Laptop, tag:"Live Website", tagColor:"#06b6d4" },
  { id:2, title:"Rigol Indonesia", subtitle:"Corporate Website", period:"September 2025", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", link:"https://www.rigol-indonesia.co.id/", gradient:"135deg, #10b981, #06b6d4", glow:"rgba(16,185,129,0.5)", image:rigol, placeholderIcon:BarChart3, tag:"Live Website", tagColor:"#10b981" },
  { id:3, title:"Unitronic Jaya", subtitle:"Corporate Website", period:"October 2025", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", link:"https://unitronicjaya.com/", gradient:"135deg, #f59e0b, #f97316", glow:"rgba(249,115,22,0.5)", image:uj, placeholderIcon:Globe2, tag:"Live Website", tagColor:"#f97316" },
  { id:4, title:"Extracurricular Mgmt", subtitle:"School Management App", period:"Aug–Nov 2024", tech:["Laravel","MySQL","HTML+CSS+JS"], role:"Fullstack Developer & Team Lead", link:null, gradient:"135deg, #a855f7, #ec4899", glow:"rgba(168,85,247,0.5)", image:extra, placeholderIcon:School, tag:"School Project", tagColor:"#a855f7" },
  { id:5, title:"Flight Ticket Booking", subtitle:"Booking Platform", period:"Dec 2024–Jan 2025", tech:["Laravel","MySQL","Midtrans API","HTML+CSS+JS"], role:"Fullstack Developer", link:null, gradient:"135deg, #ef4444, #f97316", glow:"rgba(239,68,68,0.5)", image:aerosky, placeholderIcon:Plane, tag:"Full-stack App", tagColor:"#ef4444" },
  { id:6, title:"Arts Community", subtitle:"Community App", period:"Jan–Mar 2025", tech:["Django","MariaDB","REST API","Python"], role:"Backend Developer", link:null, gradient:"135deg, #6366f1, #a855f7", glow:"rgba(99,102,241,0.5)", image:artefy, placeholderIcon:Palette, tag:"Internship Project", tagColor:"#6366f1" },
  { id:7, title:"NexaTech", subtitle:"Company Profile Website", period:"October 2025", tech:["React","Tailwind CSS","Vite"], role:"Frontend Developer", link:"https://nexa-tech-virid.vercel.app/", gradient:"135deg, #22c55e, #06b6d4", glow:"rgba(34,197,94,0.5)", image:null, placeholderIcon:Sparkles, tag:"Live Website", tagColor:"#22c55e" },
  { id:8, title:"Sumber Instrumindo", subtitle:"Corporate Website", period:"September 2024", tech:["Laravel","MySQL","Bootstrap","HTML+CSS+JS"], role:"Fullstack Developer", link:"https://sumberinstrumindo.com/", gradient:"135deg, #f97316, #ef4444", glow:"rgba(249,115,22,0.5)", image:sumber, placeholderIcon:Boxes, tag:"Live Website", tagColor:"#f97316" },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [activePreview, setActivePreview] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const s = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  useEffect(() => {
    const m = (e) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);

  useEffect(() => {
    const k = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActivePreview((i) => (i+1)%projectPreviews.length);
      if (e.key === "ArrowLeft") setActivePreview((i) => (i-1+projectPreviews.length)%projectPreviews.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [lightboxOpen]);

  const scrollTo = (id) => { 
    setActiveSection(id); 
    setIsMenuOpen(false); 
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); 
  };

  const getTechIcon = (t) => {
    const m = { Laravel:Globe, React:Code, MySQL:Database, Canva:Palette, "Video Editing":Camera, Django:Code, "Nuxt.js":Zap, "Nuxt.js (Exposure)":Zap, MariaDB:Database, WordPress:Globe, Elementor:Wrench, "REST API":FileText, Bootstrap:Sparkles, "Midtrans API":FileText, Pusher:Zap, "Graphic Design":Paintbrush, "3D Modeling":Boxes, SketchUp:Boxes };
    return m[t] || Code2;
  };

  const experiences = [
    {
      role:"Website Developer & Graphic Designer", company:"PT. Unitronic Jaya",
      period:"Aug 2025 – Oct 2025", type:"Internship", accent:"#818cf8",
      gradient:"135deg, #6366f1 0%, #a78bfa 100%",
      description:["Developed and maintained corporate websites (RF Test Indonesia, Sumber Instrumindo, Rigol Indonesia, Unitronic Jaya) using Laravel with a MySQL database","Integrated real-time live chat for website visitors connected directly to admin using Pusher","Built RF Test Indonesia V1 with React (Vite) frontend — gaining hands-on experience in component-based architecture","Optimized websites for mobile responsiveness and better user experience","Created daily promotional materials (3 posters/day) using Canva with consistent visual branding","Handled product photography, videography, and social media content management","Designed 3D furniture models and office layout concepts using SketchUp to support company visual materials"],
      tech:["Laravel","React","MySQL","Pusher","Canva","SketchUp","Video Editing","Graphic Design","3D Modeling"],
    },
    {
      role:"Backend Developer & Technical Writer", company:"PT. Median Talenta Raya",
      period:"Jan 2025 – May 2025", type:"Internship", accent:"#34d399",
      gradient:"135deg, #10b981 0%, #06b6d4 100%",
      description:["Developed backend for arts community application using Django and MariaDB","Worked with Nuxt.js frontend team for API integration - learned about Vue.js ecosystem","Created comprehensive project documentation including API docs and database structure","Built professional websites using WordPress and Elementor","Compiled system requirements, workflow, and technical specifications"],
      tech:["Django","Nuxt.js (Exposure)","MariaDB","WordPress","Elementor","REST API"],
    },
  ];

  const projects = [
    { title:"NexaTech", period:"October 2025", description:"Dummy company profile website for NexaTech, a digital solution agency. Showcases services, pricing plans, testimonials, and a modern landing page focused on clean UI and conversion-oriented design.", tech:["React","Tailwind CSS","Vite"], role:"Frontend Developer", icon:Sparkles, accent:"#22c55e", link:"https://nexa-tech-virid.vercel.app/" },
    { title:"Arts Community Platform", period:"January – March 2025", description:"Community-driven platform for local artists built during internship. Features community profiles, event listings, and discussion forums. Django backend with REST API development.", tech:["Django","Nuxt.js (Exposure)","MariaDB","REST API","Python"], role:"Backend Developer", icon:Palette, accent:"#818cf8" },
    { title:"RF Test Indonesia", period:"August 2025", description:"Corporate website with React V1 later rebuilt as full Laravel stack. Features product catalog, admin panel, responsive design, live chat via Pusher, and email integration.", tech:["React","Laravel","MySQL","REST API","Pusher"], role:"Fullstack Developer", icon:Laptop, accent:"#22d3ee", link:"https://rf-test-indonesia.co.id" },
    { title:"Sumber Instrumindo", period:"September 2024", description:"Professional corporate website with product catalog, CMS powered by MySQL, admin dashboard, responsive layout, and WhatsApp integration for customer inquiries.", tech:["Laravel","MySQL","Bootstrap","HTML+CSS+JS"], role:"Fullstack Developer", icon:Boxes, accent:"#fb923c", link:"https://sumberinstrumindo.com/" },
    { title:"Rigol Indonesia", period:"September 2025", description:"Corporate website with product catalog, company information, CMS, admin panel, responsive design, and live chat via Pusher.", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", icon:BarChart3, accent:"#10b981", link:"https://www.rigol-indonesia.co.id/" },
    { title:"Unitronic Jaya", period:"October 2025", description:"Corporate website with product catalog, CMS, admin panel, responsive design, live chat via Pusher, and email contact form.", tech:["Laravel","MySQL","HTML+CSS+JS","Pusher"], role:"Fullstack Developer", icon:Globe2, accent:"#f59e0b", link:"https://unitronicjaya.com/" },
  ];

  const certifications = [
    { title:"Oracle Certified Java Programmer", issuer:"Oracle", year:"2024", icon:Code, accent:"#f87171", bg:"rgba(239,68,68,0.1)" },
    { title:"Belajar Dasar Cloud dan Gen AI di AWS", issuer:"Dicoding Indonesia", year:"2025", icon:Database, accent:"#fb923c", bg:"rgba(249,115,22,0.1)" },
    { title:"Intro to Data Analytics", issuer:"RevoU", year:"2025", icon:BarChart3, accent:"#818cf8", bg:"rgba(99,102,241,0.1)" },
  ];

  const D = isDark;
  const cur = projectPreviews[activePreview];

  return (
    <div style={{ fontFamily:"'Montserrat', sans-serif", background: D ? "#0a0e1a" : "#fafbff", color: D ? "#f1f5f9" : "#1e1b4b", overflowX:"hidden", minHeight:"100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;font-family:'Montserrat',sans-serif;}
        ::selection{background:rgba(139,92,246,0.35);color:#fff;}
        ::-webkit-scrollbar{width:6px;}
        ::-webkit-scrollbar-track{background:${D ? '#0a0e1a' : '#f8f9ff'};}
        ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#7c3aed,#06b6d4);border-radius:3px;}

        @keyframes heroFadeUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);}}
        @keyframes orbFloat{0%{transform:translate(0,0) rotate(0deg) scale(1);}33%{transform:translate(25px,-18px) rotate(120deg) scale(1.05);}66%{transform:translate(-18px,14px) rotate(240deg) scale(0.95);}100%{transform:translate(0,0) rotate(360deg) scale(1);}}
        @keyframes breathe{0%,100%{opacity:0.6;transform:scale(1);}50%{opacity:1;transform:scale(1.1);}}
        @keyframes previewIn{from{opacity:0;transform:translateY(10px) scale(0.98);}to{opacity:1;transform:translateY(0) scale(1);}}
        @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.4;transform:scale(0.85);}}
        @keyframes shimmer{0%{background-position:200% center;}100%{background-position:-200% center;}}
        @keyframes spinSlow{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        @keyframes float{0%,100%{transform:translateY(0px);}50%{transform:translateY(-10px);}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.9);}to{opacity:1;transform:scale(1);}}
        @keyframes slideInLeft{from{opacity:0;transform:translateX(-30px);}to{opacity:1;transform:translateX(0);}}
        @keyframes slideInRight{from{opacity:0;transform:translateX(30px);}to{opacity:1;transform:translateX(0);}}
        @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
        @keyframes glowPulse{0%,100%{box-shadow:0 0 20px rgba(124,58,237,0.3);}50%{box-shadow:0 0 40px rgba(124,58,237,0.6);}}

        .fraunces{font-family:'Montserrat',sans-serif;}
        .mono{font-family:'DM Mono','Courier New',monospace;}
        .label-text{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;}

        .preview-in{animation:previewIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both;}
        .float-anim{animation:float 3s ease-in-out infinite;}
        .scale-in{animation:scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both;}
        .slide-in-left{animation:slideInLeft 0.8s cubic-bezier(0.22,1,0.36,1) both;}
        .slide-in-right{animation:slideInRight 0.8s cubic-bezier(0.22,1,0.36,1) both;}
        .fade-in{animation:fadeIn 1s ease both;}

        .nav-btn{position:relative;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:none;border:none;cursor:pointer;transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);padding:4px 0;}
        .nav-btn::after{content:'';position:absolute;bottom:-5px;left:50%;width:0;height:2px;background:linear-gradient(90deg,#7c3aed,#22d3ee);border-radius:1px;transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);transform:translateX(-50%);}
        .nav-btn:hover{transform:translateY(-2px);}
        .nav-btn:hover::after,.nav-btn.act::after{width:100%;}

        .pill{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:999px;font-size:10px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;transition:all 0.3s ease;}
        .pill:hover{transform:scale(1.05);box-shadow:0 4px 12px rgba(99,102,241,0.2);}

        .card-hover{transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);}
        .card-hover:hover{transform:translateY(-8px) scale(1.02);box-shadow:0 20px 60px ${D ? 'rgba(99,102,241,0.25)' : 'rgba(99,102,241,0.15)'}!important;}
        .card-hover:active{transform:translateY(-4px) scale(1.01);}

        .glow-orb{animation:orbFloat 25s ease-in-out infinite;}
        .breathe{animation:breathe 6s ease-in-out infinite;}
        .dot-pulse{width:7px;height:7px;border-radius:50%;animation:pulseDot 2s ease infinite;}

        .btn-glow{position:relative;overflow:hidden;transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);}
        .btn-glow::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(transparent,rgba(255,255,255,0.15),transparent 60%);animation:spinSlow 4s linear infinite;opacity:0;transition:opacity 0.3s;}
        .btn-glow::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent,rgba(255,255,255,0.1));opacity:0;transition:opacity 0.3s;}
        .btn-glow:hover::before{opacity:1;}
        .btn-glow:hover::after{opacity:1;}
        .btn-glow:hover{transform:translateY(-4px) scale(1.05);box-shadow:0 25px 70px rgba(124,58,237,0.6)!important;}
        .btn-glow:active{transform:translateY(-2px) scale(1.02);}

        .magnetic-btn{transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1);}

        .divider-line{height:1px;background:linear-gradient(90deg,transparent 0%,${D ? 'rgba(139,92,246,0.3)' : 'rgba(99,102,241,0.2)'} 30%,${D ? 'rgba(34,211,238,0.25)' : 'rgba(34,211,238,0.15)'} 70%,transparent 100%);}

        .tech-tag{transition:all 0.3s ease;}
        .tech-tag:hover{transform:scale(1.1);background:${D ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)'}!important;border-color:rgba(99,102,241,0.3)!important;}

        .project-card{position:relative;overflow:hidden;}
        .project-card::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent);transition:left 0.6s;}
        .project-card:hover::before{left:100%;}

        @media(max-width:768px){
          .hide-mob{display:none!important;}
          .show-mob{display:flex!important;}
          .grid-2{grid-template-columns:1fr!important;}
          .grid-3{grid-template-columns:repeat(2,1fr)!important;}
          .preview-grid{grid-template-columns:1fr!important;}
        }
        @media(min-width:769px){.show-mob{display:none!important;}}
      `}</style>

      {/* ═══ ENHANCED ATMOSPHERIC BACKGROUND ═══ */}
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden"}}>
        {/* Base gradient with better contrast */}
        <div style={{position:"absolute",inset:0,background:D
          ? "radial-gradient(ellipse 100% 70% at 50% -5%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 85% 85%, rgba(6,182,212,0.12) 0%, transparent 60%), #0a0e1a"
          : "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 65%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.08) 0%, transparent 50%), #fafbff"
        }} />

        {/* Enhanced floating orbs with better animation */}
        <div className="glow-orb breathe" style={{position:"absolute",top:"8%",left:"12%",width:"520px",height:"520px",borderRadius:"50%",background:"radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 70%)",filter:"blur(60px)"}} />
        <div className="glow-orb breathe" style={{position:"absolute",top:"55%",right:"8%",width:"460px",height:"460px",borderRadius:"50%",background:"radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)",filter:"blur(60px)",animationDelay:"8s",animationDuration:"30s"}} />
        <div className="glow-orb" style={{position:"absolute",bottom:"15%",left:"35%",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(168,85,247,0.11) 0%, transparent 70%)",filter:"blur(60px)",animationDelay:"15s",animationDuration:"35s"}} />

        {/* Subtle dot grid */}
        {D && <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle, rgba(139,92,246,0.08) 1px, transparent 1px)",backgroundSize:"40px 40px",opacity:0.4}} />}

        {/* Enhanced mouse glow with parallax */}
        <div style={{
          position:"absolute",
          width:"800px",
          height:"800px",
          borderRadius:"50%",
          background:"radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 75%)",
          filter:"blur(80px)",
          transform:`translate(${mouse.x * window.innerWidth - 400}px, ${mouse.y * window.innerHeight - 400}px) scale(${1 + mouse.y * 0.1})`,
          transition:"transform 1.2s cubic-bezier(0.22,1,0.36,1)",
          pointerEvents:"none"
        }} />
      </div>

      {/* ═══ ENHANCED NAV ═══ */}
      <nav style={{position:"fixed",top:0,width:"100%",zIndex:50,padding:"0 28px",transition:"all 0.5s cubic-bezier(0.22,1,0.36,1)",
        background:scrollY>60?(D?"rgba(10,14,26,0.9)":"rgba(250,251,255,0.95)"):"transparent",
        backdropFilter:scrollY>60?"blur(30px) saturate(1.8)":"none",
        borderBottom:scrollY>60?`1px solid ${D?"rgba(139,92,246,0.15)":"rgba(99,102,241,0.12)"}`:"none",
        boxShadow:scrollY>60?(D?"0 4px 30px rgba(0,0,0,0.3)":"0 4px 30px rgba(99,102,241,0.08)"):"none"
      }}>
        <div style={{maxWidth:"1180px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",height:"70px"}}>
          <button onClick={()=>scrollTo("home")} className="magnetic-btn" style={{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",cursor:"pointer",transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
            onMouseEnter={e=>e.currentTarget.style.transform="scale(1.05)"}
            onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
            <div style={{position:"relative",width:"36px",height:"36px"}}>
              <div className="breathe" style={{position:"absolute",inset:0,borderRadius:"12px",background:"linear-gradient(135deg,#7c3aed,#06b6d4)",opacity:0.95,boxShadow:"0 6px 20px rgba(124,58,237,0.5)"}} />
              <div style={{position:"absolute",inset:"1px",borderRadius:"11px",background:"linear-gradient(135deg,#6d28d9,#4338ca)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Code2 size={16} color="#fff" />
              </div>
            </div>
            <span className="fraunces" style={{fontWeight:700,fontSize:"17px",color:D?"#f1f5f9":"#1e1b4b"}}>Maryana</span>
          </button>

          <div className="hide-mob" style={{display:"flex",alignItems:"center",gap:"36px"}}>
            {["Home","About","Experience","Projects","Contact"].map((item)=>(
              <button key={item} className={`nav-btn ${activeSection===item.toLowerCase()?"act":""}`}
                onClick={()=>scrollTo(item.toLowerCase())}
                style={{color:activeSection===item.toLowerCase()?(D?"#f1f5f9":"#1e1b4b"):(D?"#64748b":"#6366f1")}}>
                {item}
              </button>
            ))}
          </div>

          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <button onClick={()=>setIsDark(!isDark)} className="magnetic-btn" style={{width:"40px",height:"40px",borderRadius:"12px",background:D?"rgba(99,102,241,0.12)":"rgba(139,92,246,0.1)",border:`1px solid ${D?"rgba(99,102,241,0.25)":"rgba(139,92,246,0.2)"}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:D?"0 4px 12px rgba(99,102,241,0.2)":"0 4px 12px rgba(139,92,246,0.15)",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) rotate(15deg)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1) rotate(0deg)";}}>
              {D?<Sun size={16} color="#fbbf24" />:<Moon size={16} color="#7c3aed" />}
            </button>
            <button className="show-mob magnetic-btn" onClick={()=>setIsMenuOpen(!isMenuOpen)} style={{width:"40px",height:"40px",borderRadius:"12px",background:D?"rgba(99,102,241,0.12)":"rgba(139,92,246,0.1)",border:`1px solid ${D?"rgba(99,102,241,0.25)":"rgba(139,92,246,0.2)"}`,display:"none",alignItems:"center",justifyContent:"center",cursor:"pointer",color:D?"#f1f5f9":"#1e1b4b",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
              {isMenuOpen?<X size={18}/>:<Menu size={18}/>}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fade-in" style={{background:D?"rgba(10,14,26,0.98)":"rgba(250,251,255,0.98)",backdropFilter:"blur(25px)",borderTop:`1px solid ${D?"rgba(139,92,246,0.15)":"rgba(99,102,241,0.12)"}`,padding:"16px 28px 20px"}}>
            {["Home","About","Experience","Projects","Contact"].map((item,i)=>(
              <button key={item} onClick={()=>scrollTo(item.toLowerCase())} 
                className="slide-in-left"
                style={{display:"block",width:"100%",textAlign:"left",padding:"14px 0",background:"none",border:"none",cursor:"pointer",color:D?"#94a3b8":"#6366f1",fontSize:"14px",fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase",borderBottom:`1px solid ${D?"rgba(139,92,246,0.1)":"rgba(99,102,241,0.1)"}`,animationDelay:`${i*0.05}s`,transition:"all 0.3s"}}
                onMouseEnter={e=>{e.currentTarget.style.paddingLeft="10px";e.currentTarget.style.color=D?"#f1f5f9":"#4338ca";}}
                onMouseLeave={e=>{e.currentTarget.style.paddingLeft="0";e.currentTarget.style.color=D?"#94a3b8":"#6366f1";}}>
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ═══ ENHANCED HERO ═══ */}
      <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"130px 28px 90px",position:"relative",zIndex:1}}>

        {/* Enhanced decorative rings */}
        <div className="breathe" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"680px",height:"680px",borderRadius:"50%",border:`1px solid ${D?"rgba(139,92,246,0.08)":"rgba(99,102,241,0.08)"}`,pointerEvents:"none",animationDuration:"8s"}} />
        <div className="breathe" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"480px",height:"480px",borderRadius:"50%",border:`1px solid ${D?"rgba(139,92,246,0.12)":"rgba(99,102,241,0.12)"}`,pointerEvents:"none",animationDelay:"2s",animationDuration:"10s"}} />
        <div className="breathe" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"280px",height:"280px",borderRadius:"50%",border:`1px solid ${D?"rgba(139,92,246,0.16)":"rgba(99,102,241,0.16)"}`,pointerEvents:"none",animationDelay:"4s",animationDuration:"12s"}} />

        <div style={{maxWidth:"900px",width:"100%",textAlign:"center",position:"relative"}}>

          {/* Enhanced Badge */}
          <div className="float-anim" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 20px",borderRadius:"999px",background:D?"rgba(34,197,94,0.08)":"rgba(34,197,94,0.06)",border:"1px solid rgba(34,197,94,0.22)",marginBottom:"48px",animation:"heroFadeUp 0.9s cubic-bezier(0.34,1.56,0.64,1) both",boxShadow:"0 4px 16px rgba(34,197,94,0.15)"}}>
            <div className="dot-pulse" style={{background:"#22c55e",boxShadow:"0 0 8px #22c55e"}} />
            <span className="mono label-text" style={{color:"#22c55e",fontSize:"10px"}}>Open to Work · Available for Opportunities</span>
          </div>

          {/* Enhanced Hero title block */}
          <div style={{animation:"heroFadeUp 1s cubic-bezier(0.34,1.56,0.64,1) 0.1s both"}}>
            <h1 className="fraunces" style={{fontSize:"clamp(14px,2.5vw,20px)",fontWeight:500,fontStyle:"italic",color:D?"#64748b":"#9ca3af",marginBottom:"6px",letterSpacing:"0.08em",textTransform:"uppercase"}}>
              Hi, I'm a
            </h1>
            <h1 className="fraunces" style={{fontSize:"clamp(54px,9.5vw,115px)",fontWeight:900,lineHeight:0.88,letterSpacing:"-0.035em",color:D?"#f8fafc":"#1e1b4b",marginBottom:"4px",textShadow:D?"0 0 60px rgba(248,250,252,0.1)":"0 0 40px rgba(30,27,75,0.05)"}}>
              Fullstack
            </h1>
            <h1 className="fraunces" style={{fontSize:"clamp(54px,9.5vw,115px)",fontWeight:900,lineHeight:0.88,letterSpacing:"-0.035em",marginBottom:"20px"}}>
              <span style={{background:"linear-gradient(135deg, #818cf8 0%, #c084fc 35%, #22d3ee 75%, #67e8f9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",backgroundSize:"200% auto",animation:"shimmer 6s linear infinite",filter:"drop-shadow(0 0 30px rgba(129,140,248,0.3))"}}>Developer</span>
            </h1>

            {/* Enhanced ornamental divider */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"24px",marginBottom:"28px"}}>
              <div style={{height:"2px",width:"90px",background:D?"linear-gradient(90deg,transparent,rgba(139,92,246,0.5))":"linear-gradient(90deg,transparent,rgba(99,102,241,0.4))",borderRadius:"1px"}} />
              <span className="fraunces" style={{fontSize:"clamp(16px,2.2vw,23px)",fontStyle:"italic",fontWeight:600,color:D?"#818cf8":"#6366f1",textShadow:D?"0 0 20px rgba(129,140,248,0.3)":"none"}}>& UI/UX Enthusiast</span>
              <div style={{height:"2px",width:"90px",background:D?"linear-gradient(90deg,rgba(139,92,246,0.5),transparent)":"linear-gradient(90deg,rgba(99,102,241,0.4),transparent)",borderRadius:"1px"}} />
            </div>
          </div>

          <div style={{animation:"heroFadeUp 1s cubic-bezier(0.34,1.56,0.64,1) 0.25s both"}}>
            <p style={{fontSize:"clamp(15px,1.9vw,18px)",color:D?"#64748b":"#6b7280",maxWidth:"500px",margin:"0 auto 18px",lineHeight:1.85}}>
              Software Engineering graduate passionate about building scalable web applications with clean code and beautiful design
            </p>
            <div className="pill" style={{background:D?"rgba(99,102,241,0.08)":"rgba(99,102,241,0.06)",border:`1px solid ${D?"rgba(99,102,241,0.2)":"rgba(99,102,241,0.15)"}`,marginBottom:"44px",boxShadow:D?"0 4px 16px rgba(99,102,241,0.15)":"0 4px 16px rgba(99,102,241,0.08)"}}>
              <Code2 size={13} color={D?"#818cf8":"#6366f1"} />
              <span className="mono label-text" style={{color:D?"#64748b":"#7c3aed",fontSize:"9px"}}>Core Stack:</span>
              <span className="mono label-text" style={{color:D?"#a5b4fc":"#6366f1",fontSize:"9px"}}>Laravel · Django · React</span>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",marginBottom:"90px",animation:"heroFadeUp 1s cubic-bezier(0.34,1.56,0.64,1) 0.4s both"}}>
            <button onClick={()=>scrollTo("projects")} className="btn-glow magnetic-btn" style={{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 38px",borderRadius:"16px",background:"linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0ea5e9 100%)",border:"none",color:"#fff",fontSize:"13px",fontWeight:700,cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 12px 40px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.2)"}}>
              View My Work <ArrowUpRight size={17} />
            </button>
            <button onClick={()=>scrollTo("contact")} className="magnetic-btn" style={{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 38px",borderRadius:"16px",background:D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.08)",border:`1px solid ${D?"rgba(255,255,255,0.12)":"rgba(99,102,241,0.2)"}`,color:D?"#f1f5f9":"#4338ca",fontSize:"13px",fontWeight:700,cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:D?"0 8px 24px rgba(99,102,241,0.15)":"0 8px 24px rgba(99,102,241,0.1)"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.02)";e.currentTarget.style.background=D?"rgba(255,255,255,0.1)":"rgba(99,102,241,0.12)";e.currentTarget.style.boxShadow=D?"0 12px 32px rgba(99,102,241,0.25)":"0 12px 32px rgba(99,102,241,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0) scale(1)";e.currentTarget.style.background=D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.08)";e.currentTarget.style.boxShadow=D?"0 8px 24px rgba(99,102,241,0.15)":"0 8px 24px rgba(99,102,241,0.1)";}}>
              Get In Touch
            </button>
          </div>

          {/* Enhanced Stats */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"14px",animation:"heroFadeUp 1s cubic-bezier(0.34,1.56,0.64,1) 0.55s both"}}>
            {[
              {icon:Briefcase, value:"2+", label:"Years Exp.", color:"#818cf8", glow:"rgba(129,140,248,0.2)"},
              {icon:Rocket, value:"6+", label:"Projects", color:"#22d3ee", glow:"rgba(34,211,238,0.2)"},
              {icon:Code2, value:"15+", label:"Technologies", color:"#f472b6", glow:"rgba(244,114,182,0.2)"},
              {icon:Award, value:"3+", label:"Certifications", color:"#fbbf24", glow:"rgba(251,191,36,0.2)"},
            ].map((s,i)=>(
              <div key={i} className="card-hover scale-in" style={{padding:"26px 16px 20px",borderRadius:"20px",background:D?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.85)",border:`1px solid ${D?"rgba(255,255,255,0.07)":"rgba(99,102,241,0.12)"}`,backdropFilter:"blur(16px)",textAlign:"center",boxShadow:D?`0 8px 36px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)`:`0 8px 36px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.9)`,animationDelay:`${i*0.1}s`}}>
                <div className="float-anim" style={{width:"40px",height:"40px",borderRadius:"12px",background:s.glow,border:`1px solid ${s.color}30`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:`0 6px 20px ${s.glow}`,animationDelay:`${i*0.2}s`}}>
                  <s.icon size={18} color={s.color} />
                </div>
                <div className="fraunces" style={{fontSize:"34px",fontWeight:900,color:s.color,lineHeight:1,marginBottom:"6px",textShadow:`0 0 20px ${s.glow}`}}>{s.value}</div>
                <div className="mono label-text" style={{color:D?"#475569":"#9ca3af",fontSize:"9px"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue dengan sections lainnya dengan enhancement serupa... */}
      {/* Karena response terlalu panjang, saya akan melanjutkan dengan bagian berikutnya */}

      {/* ═══ ENHANCED ABOUT SECTION ═══ */}
      <section id="about" style={{padding:"120px 28px",position:"relative",zIndex:1}}>
        <div className="divider-line" style={{marginBottom:"90px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="slide-in-left" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"28px",marginBottom:"70px"}}>
            <div>
              <div className="pill" style={{background:D?"rgba(129,140,248,0.1)":"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.22)",color:"#818cf8",marginBottom:"18px"}}>
                <span style={{fontSize:"12px"}}>✦</span> About Me
              </div>
              <h2 className="fraunces" style={{fontSize:"clamp(40px,5.8vw,72px)",fontWeight:900,lineHeight:0.9,letterSpacing:"-0.04em",color:D?"#f8fafc":"#1e1b4b"}}>
                A little<br />bit <span style={{color:"#818cf8",fontStyle:"italic",textShadow:D?"0 0 30px rgba(129,140,248,0.4)":"none"}}>about me</span>
              </h2>
            </div>
            <p className="slide-in-right" style={{maxWidth:"360px",color:D?"#64748b":"#6b7280",lineHeight:1.9,fontSize:"15px"}}>
              Software Engineering graduate from SMKN 1 Cimahi, passionate about crafting digital experiences that are functional and beautiful.
            </p>
          </div>

          <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",alignItems:"start"}}>
            <div className="scale-in">
              <div className="card-hover project-card" style={{padding:"32px",borderRadius:"22px",background:D?"rgba(99,102,241,0.05)":"rgba(255,255,255,0.9)",border:`1px solid ${D?"rgba(99,102,241,0.12)":"rgba(99,102,241,0.12)"}`,boxShadow:D?"0 12px 50px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)":"0 12px 50px rgba(99,102,241,0.1)",backdropFilter:"blur(16px)",marginBottom:"20px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"24px"}}>
                  <GraduationCap size={19} color="#818cf8" />
                  <span style={{fontWeight:700,fontSize:"15px",color:D?"#f1f5f9":"#1e1b4b"}}>Education & Achievement</span>
                </div>
                {[
                  [GraduationCap,"Software Engineering Graduate – SMKN 1 Cimahi (2025)","#818cf8"],
                  [Award,"Graduated with an average final grade of 87.95","#fbbf24"],
                  [Users,"Active in multiple team-based development projects","#22d3ee"],
                  [Sparkles,"Continuous learner with multiple certifications","#f472b6"],
                ].map(([Icon,text,c],i)=>(
                  <div key={i} className="fade-in" style={{display:"flex",alignItems:"flex-start",gap:"14px",padding:"12px 0",borderBottom:i<3?`1px solid ${D?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.05)"}`:"none",animationDelay:`${i*0.1}s`,transition:"all 0.3s"}}
                    onMouseEnter={e=>{e.currentTarget.style.paddingLeft="6px";e.currentTarget.style.background=D?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)";}}
                    onMouseLeave={e=>{e.currentTarget.style.paddingLeft="0";e.currentTarget.style.background="transparent";}}>
                    <div style={{width:"30px",height:"30px",borderRadius:"9px",background:`${c}16`,border:`1px solid ${c}28`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"2px",boxShadow:`0 4px 12px ${c}18`}}>
                      <Icon size={13} color={c} />
                    </div>
                    <span style={{fontSize:"13.5px",color:D?"#64748b":"#6b7280",lineHeight:1.7}}>{text}</span>
                  </div>
                ))}
              </div>

              <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
                {[["Full-Stack Developer",Code,"#818cf8"],["UI/UX Designer",Palette,"#22d3ee"],["Graphic Designer",Paintbrush,"#f472b6"]].map(([label,Icon,c],i)=>(
                  <span key={i} className="tech-tag scale-in" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 18px",borderRadius:"12px",background:D?`${c}12`:`${c}10`,border:`1px solid ${c}28`,fontSize:"12px",fontWeight:700,color:c,letterSpacing:"0.03em",boxShadow:`0 4px 12px ${c}15`,animationDelay:`${i*0.1}s`}}>
                    <Icon size={12} color={c} />{label}
                  </span>
                ))}
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {certifications.map((cert,i)=>(
                <div key={i} className="card-hover scale-in" style={{padding:"24px",borderRadius:"18px",background:D?"rgba(255,255,255,0.025)":"rgba(255,255,255,0.9)",border:`1px solid ${D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.1)"}`,boxShadow:D?`0 8px 32px rgba(0,0,0,0.25)`:"0 8px 32px rgba(99,102,241,0.08)",display:"flex",alignItems:"center",gap:"18px",backdropFilter:"blur(12px)",animationDelay:`${i*0.1}s`}}>
                  <div style={{width:"50px",height:"50px",borderRadius:"14px",background:cert.bg,border:`1px solid ${cert.accent}32`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 8px 24px ${cert.accent}20`}}>
                    <cert.icon size={21} color={cert.accent} />
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:"15px",color:D?"#f1f5f9":"#1e1b4b",marginBottom:"5px"}}>{cert.title}</div>
                    <div className="mono label-text" style={{color:D?"#64748b":"#9ca3af",fontSize:"9.5px"}}>{cert.issuer} · {cert.year}</div>
                  </div>
                  <Award size={16} color="#fbbf24" style={{filter:"drop-shadow(0 0 8px rgba(251,191,36,0.4))"}} />
                </div>
              ))}

              <div className="scale-in project-card" style={{padding:"26px",borderRadius:"18px",background:D?"linear-gradient(135deg,rgba(99,102,241,0.08),rgba(6,182,212,0.05))":"linear-gradient(135deg,rgba(99,102,241,0.05),rgba(6,182,212,0.04))",border:`1px solid ${D?"rgba(99,102,241,0.14)":"rgba(99,102,241,0.12)"}`,backdropFilter:"blur(12px)",animationDelay:"0.3s"}}>
                <p style={{fontSize:"14.5px",color:D?"#64748b":"#6b7280",lineHeight:1.9}}>
                  My expertise spans <span style={{color:"#818cf8",fontWeight:700}}>full-stack development</span> with Laravel and Django, to modern frontends with JavaScript, UI/UX design with Figma and Adobe Photoshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ENHANCED EXPERIENCE ═══ */}
      <section id="experience" style={{padding:"120px 28px",position:"relative",zIndex:1}}>
        <div className="divider-line" style={{marginBottom:"90px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="slide-in-left" style={{marginBottom:"70px"}}>
            <div className="pill" style={{background:D?"rgba(34,211,238,0.08)":"rgba(6,182,212,0.06)",border:"1px solid rgba(6,182,212,0.22)",color:"#22d3ee",marginBottom:"18px"}}>
              <span style={{fontSize:"12px"}}>◈</span> Work Experience
            </div>
            <h2 className="fraunces" style={{fontSize:"clamp(40px,5.8vw,72px)",fontWeight:900,lineHeight:0.9,letterSpacing:"-0.04em",color:D?"#f8fafc":"#1e1b4b"}}>
              Professional<br /><span style={{color:"#22d3ee",fontStyle:"italic",textShadow:D?"0 0 30px rgba(34,211,238,0.4)":"none"}}>Journey</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            {experiences.map((exp,idx)=>(
              <div key={idx} className="card-hover project-card scale-in" style={{borderRadius:"22px",overflow:"hidden",background:D?"rgba(255,255,255,0.022)":"rgba(255,255,255,0.95)",border:`1px solid ${D?"rgba(255,255,255,0.07)":"rgba(99,102,241,0.12)"}`,boxShadow:D?"0 12px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)":"0 12px 60px rgba(99,102,241,0.1)",backdropFilter:"blur(16px)",animationDelay:`${idx*0.15}s`}}>
                <div className="breathe" style={{height:"3px",background:`linear-gradient(${exp.gradient})`,borderRadius:"3px 3px 0 0",animationDuration:"4s"}} />
                <div style={{padding:"36px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"20px",marginBottom:"26px",flexWrap:"wrap"}}>
                    <div style={{display:"flex",alignItems:"flex-start",gap:"18px"}}>
                      <div className="float-anim" style={{width:"54px",height:"54px",borderRadius:"16px",background:`linear-gradient(${exp.gradient})`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 10px 32px ${exp.accent}35`}}>
                        <Briefcase size={24} color="#fff" />
                      </div>
                      <div>
                        <h3 className="fraunces" style={{fontSize:"21px",fontWeight:700,color:D?"#f8fafc":"#1e1b4b",marginBottom:"6px"}}>{exp.role}</h3>
                        <div style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"14px",fontWeight:600,color:exp.accent}}>
                          <Building2 size={14} />{exp.company}
                        </div>
                      </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"7px"}}>
                      <span style={{padding:"6px 16px",borderRadius:"10px",background:D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.09)"}`,fontSize:"12.5px",color:D?"#64748b":"#9ca3af",fontWeight:500}}>{exp.period}</span>
                      <span style={{padding:"5px 14px",borderRadius:"10px",background:`${exp.accent}15`,border:`1px solid ${exp.accent}32`,fontSize:"10px",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:exp.accent,boxShadow:`0 4px 12px ${exp.accent}18`}}>{exp.type}</span>
                    </div>
                  </div>

                  <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px",marginBottom:"24px",paddingLeft:0}}>
                    {exp.description.map((d,i)=>(
                      <li key={i} className="fade-in" style={{display:"flex",alignItems:"flex-start",gap:"14px",fontSize:"14px",lineHeight:1.8,color:D?"#64748b":"#6b7280",animationDelay:`${i*0.08}s`,transition:"all 0.3s"}}
                        onMouseEnter={e=>{e.currentTarget.style.paddingLeft="8px";e.currentTarget.style.color=D?"#94a3b8":"#475569";}}
                        onMouseLeave={e=>{e.currentTarget.style.paddingLeft="0";e.currentTarget.style.color=D?"#64748b":"#6b7280";}}>
                        <div style={{width:"6px",height:"6px",borderRadius:"50%",background:`linear-gradient(${exp.gradient})`,marginTop:"9px",flexShrink:0,boxShadow:`0 0 8px ${exp.accent}40`}} />{d}
                      </li>
                    ))}
                  </ul>

                  <div style={{display:"flex",flexWrap:"wrap",gap:"7px"}}>
                    {exp.tech.map((t,i)=>{const TI=getTechIcon(t);return(
                      <span key={i} className="tech-tag" style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"8px",background:D?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.09)"}`,fontSize:"11.5px",color:D?"#64748b":"#9ca3af",fontWeight:500}}>
                        <TI size={11} />{t}
                      </span>
                    );})}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENHANCED PROJECTS ═══ */}
      <section id="projects" style={{padding:"120px 28px",position:"relative",zIndex:1}}>
        <div className="divider-line" style={{marginBottom:"90px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="slide-in-left" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"28px",marginBottom:"70px"}}>
            <div>
              <div className="pill" style={{background:D?"rgba(244,114,182,0.08)":"rgba(236,72,153,0.06)",border:"1px solid rgba(236,72,153,0.22)",color:"#f472b6",marginBottom:"18px"}}>
                <span style={{fontSize:"12px"}}>◆</span> Featured Work
              </div>
              <h2 className="fraunces" style={{fontSize:"clamp(40px,5.8vw,72px)",fontWeight:900,lineHeight:0.9,letterSpacing:"-0.04em",color:D?"#f8fafc":"#1e1b4b"}}>
                Projects<br /><span style={{color:"#f472b6",fontStyle:"italic",textShadow:D?"0 0 30px rgba(244,114,182,0.4)":"none"}}>& Work</span>
              </h2>
            </div>
            <p className="slide-in-right" style={{maxWidth:"320px",color:D?"#64748b":"#6b7280",lineHeight:1.9,fontSize:"15px"}}>
              Recent projects built with care, clean architecture, and attention to detail.
            </p>
          </div>

          <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:"18px"}}>
            {projects.map((p,i)=>(
              <div key={i} className="card-hover project-card scale-in" style={{borderRadius:"20px",overflow:"hidden",background:D?"rgba(255,255,255,0.022)":"rgba(255,255,255,0.95)",border:`1px solid ${D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.1)"}`,boxShadow:D?"0 8px 36px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)":"0 8px 36px rgba(99,102,241,0.08)",backdropFilter:"blur(12px)",display:"flex",flexDirection:"column",animationDelay:`${i*0.08}s`}}>
                <div className="breathe" style={{height:"3px",background:p.accent,animationDuration:"5s"}} />
                <div style={{padding:"28px",flex:1,display:"flex",flexDirection:"column"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"18px"}}>
                    <div className="float-anim" style={{width:"46px",height:"46px",borderRadius:"13px",background:`${p.accent}16`,border:`1px solid ${p.accent}28`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 6px 20px ${p.accent}22`}}>
                      <p.icon size={20} color={p.accent} />
                    </div>
                    {p.link&&<a href={p.link} target="_blank" rel="noopener noreferrer" className="magnetic-btn" style={{width:"36px",height:"36px",borderRadius:"11px",background:D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.09)"}`,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:D?"#64748b":"#9ca3af",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
                      onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.15) rotate(15deg)";e.currentTarget.style.color=p.accent;e.currentTarget.style.background=`${p.accent}15`;}}
                      onMouseLeave={e=>{e.currentTarget.style.transform="scale(1) rotate(0deg)";e.currentTarget.style.color=D?"#64748b":"#9ca3af";e.currentTarget.style.background=D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)";}}>
                      <ArrowUpRight size={15} />
                    </a>}
                  </div>
                  <h3 className="fraunces" style={{fontWeight:700,fontSize:"18px",color:D?"#f1f5f9":"#1e1b4b",marginBottom:"4px"}}>{p.title}</h3>
                  <div className="mono label-text" style={{color:D?"#475569":"#9ca3af",fontSize:"9.5px",marginBottom:"12px"}}>{p.period}</div>
                  <p style={{fontSize:"13.5px",color:D?"#64748b":"#6b7280",lineHeight:1.85,flex:1,marginBottom:"16px"}}>{p.description}</p>
                  <div style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"11.5px",fontWeight:700,color:p.accent,marginBottom:"14px"}}>
                    <Briefcase size={11} color={p.accent} />{p.role}
                  </div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                    {p.tech.map((t,j)=>{const TI=getTechIcon(t);return(
                      <span key={j} className="tech-tag" style={{display:"inline-flex",alignItems:"center",gap:"5px",padding:"4px 10px",borderRadius:"7px",background:D?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"}`,fontSize:"10.5px",color:D?"#475569":"#9ca3af",fontWeight:500}}>
                        <TI size={10} />{t}
                      </span>
                    );})}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENHANCED PREVIEW GALLERY ═══ */}
      <section id="preview" style={{padding:"120px 28px",position:"relative",zIndex:1}}>
        <div className="divider-line" style={{marginBottom:"90px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="slide-in-left" style={{marginBottom:"70px"}}>
            <div className="pill" style={{background:D?"rgba(129,140,248,0.08)":"rgba(99,102,241,0.06)",border:"1px solid rgba(99,102,241,0.22)",color:"#818cf8",marginBottom:"18px"}}>
              <Eye size={12} /> Visual Gallery
            </div>
            <h2 className="fraunces" style={{fontSize:"clamp(40px,5.8vw,72px)",fontWeight:900,lineHeight:0.9,letterSpacing:"-0.04em",color:D?"#f8fafc":"#1e1b4b"}}>
              Project<br /><span style={{color:"#818cf8",fontStyle:"italic",textShadow:D?"0 0 30px rgba(129,140,248,0.4)":"none"}}>Preview</span>
            </h2>
          </div>

          <div className="preview-grid" style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:"32px",alignItems:"start"}}>
            {/* Enhanced Browser mockup */}
            <div>
              <div key={`brow-${activePreview}`} className="preview-in card-hover" style={{borderRadius:"20px",overflow:"hidden",border:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(99,102,241,0.12)"}`,boxShadow:D?`0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 100px ${cur.glow}22`:"0 40px 100px rgba(99,102,241,0.15)"}}>
                <div style={{background:D?"#0f1419":"#efefed",padding:"12px 18px",display:"flex",alignItems:"center",gap:"14px"}}>
                  <div style={{display:"flex",gap:"6px",flexShrink:0}}>
                    {["#ff5f57","#febc2e","#28c840"].map((c,i)=><div key={i} className="breathe" style={{width:"11px",height:"11px",borderRadius:"50%",background:c,boxShadow:`0 0 8px ${c}80`,animationDelay:`${i*0.5}s`,animationDuration:"3s"}} />)}
                  </div>
                  <div style={{flex:1,background:D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.08)",borderRadius:"7px",padding:"6px 14px",display:"flex",alignItems:"center",gap:"8px",overflow:"hidden"}}>
                    <div className="dot-pulse" style={{background:cur.link?"#22c55e":"#64748b",flexShrink:0,width:"6px",height:"6px",boxShadow:cur.link?"0 0 8px #22c55e":"none"}} />
                    <span className="mono" style={{fontSize:"10.5px",color:D?"#64748b":"#9ca3af",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                      {cur.link?cur.link.replace("https://",""):`${cur.title.toLowerCase().replace(/\s+/g,"-")}.local`}
                    </span>
                  </div>
                  {cur.link&&<a href={cur.link} target="_blank" rel="noopener noreferrer" className="magnetic-btn" style={{color:D?"#64748b":"#9ca3af",flexShrink:0,display:"flex",transition:"all 0.3s"}}
                    onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.2) rotate(15deg)";e.currentTarget.style.color=cur.tagColor;}}
                    onMouseLeave={e=>{e.currentTarget.style.transform="scale(1) rotate(0deg)";e.currentTarget.style.color=D?"#64748b":"#9ca3af";}}><ExternalLink size={13} /></a>}
                </div>

                <div style={{position:"relative",aspectRatio:"16/9"}}>
                  {cur.image?(
                    <div style={{position:"relative",width:"100%",height:"100%",cursor:"zoom-in"}} onClick={()=>setLightboxOpen(true)}>
                      <img src={cur.image} alt={cur.title} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}} />
                      <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0)",transition:"background 0.4s cubic-bezier(0.34,1.56,0.64,1)",display:"flex",alignItems:"center",justifyContent:"center"}}
                        onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,0,0,0.6)";const h=e.currentTarget.querySelector(".zm");if(h){h.style.opacity="1";h.style.transform="scale(1)";} }}
                        onMouseLeave={e=>{e.currentTarget.style.background="rgba(0,0,0,0)";const h=e.currentTarget.querySelector(".zm");if(h){h.style.opacity="0";h.style.transform="scale(0.9)";} }}>
                        <div className="zm" style={{display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(20px)",padding:"10px 24px",borderRadius:"999px",color:"#fff",fontSize:"13.5px",fontWeight:600,opacity:0,transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:"scale(0.9)",border:"1px solid rgba(255,255,255,0.22)",boxShadow:"0 8px 24px rgba(0,0,0,0.4)"}}>
                          <Eye size={15} /> Perbesar
                        </div>
                      </div>
                    </div>
                  ):(
                    <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#0f1419,#1a202e)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"18px",position:"relative",overflow:"hidden"}}>
                      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(139,92,246,0.06) 1px,transparent 1px)",backgroundSize:"30px 30px"}} />
                      <div className="breathe" style={{position:"absolute",width:"240px",height:"240px",borderRadius:"50%",background:`radial-gradient(circle, ${cur.glow}, transparent)`,filter:"blur(50px)",opacity:0.65}} />
                      <div className="float-anim" style={{width:"72px",height:"72px",borderRadius:"20px",background:`linear-gradient(${cur.gradient})`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1,boxShadow:`0 20px 60px ${cur.glow}70`}}>
                        <cur.placeholderIcon size={32} color="#fff" />
                      </div>
                      <div style={{textAlign:"center",position:"relative",zIndex:1}}>
                        <p style={{color:"rgba(255,255,255,0.75)",fontSize:"15px",fontWeight:600}}>{cur.title}</p>
                        <p style={{color:"rgba(255,255,255,0.35)",fontSize:"12.5px",marginTop:"5px"}}>Screenshot coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Nav */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"16px"}}>
                <button onClick={()=>setActivePreview((i)=>(i-1+projectPreviews.length)%projectPreviews.length)} className="magnetic-btn" style={{display:"flex",alignItems:"center",gap:"7px",padding:"10px 20px",borderRadius:"12px",background:D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.09)"}`,color:D?"#64748b":"#9ca3af",fontSize:"11.5px",fontWeight:700,cursor:"pointer",letterSpacing:"0.07em",textTransform:"uppercase",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateX(-4px) scale(1.05)";e.currentTarget.style.background=D?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translateX(0) scale(1)";e.currentTarget.style.background=D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)";}}>
                  <ChevronLeft size={14} /> Prev
                </button>
                <div style={{display:"flex",gap:"6px",alignItems:"center"}}>
                  {projectPreviews.map((_,i)=>(
                    <button key={i} onClick={()=>setActivePreview(i)} style={{width:i===activePreview?"30px":"8px",height:"8px",borderRadius:"999px",background:i===activePreview?`linear-gradient(${projectPreviews[i].gradient})`:(D?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"),border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",padding:0,boxShadow:i===activePreview?`0 0 12px ${projectPreviews[i].glow}`:"none"}} />
                  ))}
                </div>
                <button onClick={()=>setActivePreview((i)=>(i+1)%projectPreviews.length)} className="magnetic-btn" style={{display:"flex",alignItems:"center",gap:"7px",padding:"10px 20px",borderRadius:"12px",background:D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.09)"}`,color:D?"#64748b":"#9ca3af",fontSize:"11.5px",fontWeight:700,cursor:"pointer",letterSpacing:"0.07em",textTransform:"uppercase",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateX(4px) scale(1.05)";e.currentTarget.style.background=D?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translateX(0) scale(1)";e.currentTarget.style.background=D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)";}}>
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Enhanced Info panel */}
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              <div key={`info-${activePreview}`} className="preview-in" style={{padding:"30px",borderRadius:"20px",background:D?"rgba(255,255,255,0.025)":"rgba(255,255,255,0.95)",border:`1px solid ${D?"rgba(255,255,255,0.07)":"rgba(99,102,241,0.12)"}`,boxShadow:D?`0 0 80px ${cur.glow}16, 0 12px 60px rgba(0,0,0,0.35)`:"0 12px 60px rgba(99,102,241,0.1)",backdropFilter:"blur(20px)"}}>
                <div style={{display:"flex",alignItems:"center",gap:"9px",marginBottom:"24px"}}>
                  <div className="dot-pulse" style={{background:cur.tagColor,boxShadow:`0 0 10px ${cur.tagColor}`}} />
                  <span className="mono label-text" style={{color:cur.tagColor,fontSize:"10px"}}>{cur.tag}</span>
                </div>
                <h3 className="fraunces" style={{fontSize:"24px",fontWeight:700,color:D?"#f8fafc":"#1e1b4b",marginBottom:"5px"}}>{cur.title}</h3>
                <p style={{fontSize:"13px",color:D?"#64748b":"#9ca3af",marginBottom:"4px"}}>{cur.subtitle}</p>
                <p className="mono label-text" style={{color:cur.tagColor,marginBottom:"26px",fontSize:"10px"}}>{cur.period}</p>

                <div style={{marginBottom:"18px"}}>
                  <div className="mono label-text" style={{color:D?"#475569":"#9ca3af",marginBottom:"10px",fontSize:"9.5px"}}>Role</div>
                  <div style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"13.5px",color:D?"#94a3b8":"#6b7280"}}>
                    <Briefcase size={13} color={cur.tagColor} />{cur.role}
                  </div>
                </div>

                <div style={{marginBottom:"24px"}}>
                  <div className="mono label-text" style={{color:D?"#475569":"#9ca3af",marginBottom:"10px",fontSize:"9.5px"}}>Tech Stack</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                    {cur.tech.map((t,i)=>{const TI=getTechIcon(t);return(
                      <span key={i} className="tech-tag" style={{display:"inline-flex",alignItems:"center",gap:"5px",padding:"5px 12px",borderRadius:"8px",background:D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.09)"}`,fontSize:"11.5px",color:D?"#64748b":"#9ca3af",fontWeight:500}}>
                        <TI size={11} />{t}
                      </span>
                    );})}
                  </div>
                </div>

                {cur.link&&<a href={cur.link} target="_blank" rel="noopener noreferrer" className="btn-glow" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px",borderRadius:"14px",background:`linear-gradient(${cur.gradient})`,color:"#fff",fontSize:"12.5px",fontWeight:700,textDecoration:"none",boxShadow:`0 10px 36px ${cur.glow}40`,letterSpacing:"0.06em",textTransform:"uppercase"}}>
                  <ExternalLink size={14} /> Visit Website
                </a>}
              </div>

              <div style={{padding:"18px",borderRadius:"18px",background:D?"rgba(255,255,255,0.022)":"rgba(255,255,255,0.95)",border:`1px solid ${D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.09)"}`,backdropFilter:"blur(12px)"}}>
                <div className="mono label-text" style={{color:D?"#64748b":"#9ca3af",fontSize:"9.5px",marginBottom:"14px"}}>All Projects</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"7px"}}>
                  {projectPreviews.map((p,i)=>(
                    <div key={i} style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                      <button onClick={()=>setActivePreview(i)} className="magnetic-btn" style={{position:"relative",borderRadius:"8px",overflow:"hidden",width:"100%",paddingBottom:"62.5%",border:i===activePreview?`2px solid ${p.tagColor}`:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.1)"}`,opacity:i===activePreview?1:0.5,cursor:"pointer",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",padding:0,background:"transparent",display:"block",boxShadow:i===activePreview?`0 0 16px ${p.tagColor}50`:"none"}}
                        onMouseEnter={e=>{if(i!==activePreview){e.currentTarget.style.opacity="0.85";e.currentTarget.style.transform="scale(1.05)";}}}
                        onMouseLeave={e=>{if(i!==activePreview){e.currentTarget.style.opacity="0.5";e.currentTarget.style.transform="scale(1)";}}} 
                        onMouseDown={e=>{e.currentTarget.style.transform="scale(0.95)";}}
                        onMouseUp={e=>{e.currentTarget.style.transform=i===activePreview?"scale(1)":"scale(1.05)";}}>
                        <div style={{position:"absolute",inset:0}}>
                          {p.image?(
                            <img src={p.image} alt={p.title} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}} />
                          ):(
                            <div style={{width:"100%",height:"100%",background:`linear-gradient(${p.gradient})`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                              <p.placeholderIcon size={12} color="rgba(255,255,255,0.75)" />
                            </div>
                          )}
                        </div>
                      </button>
                      <p style={{fontSize:"8.5px",fontWeight:600,color:i===activePreview?p.tagColor:(D?"#64748b":"#9ca3af"),textAlign:"center",letterSpacing:"0.02em",lineHeight:1.3,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",padding:"0 2px"}}>{p.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {lightboxOpen&&cur.image&&(
        <div onClick={()=>setLightboxOpen(false)} className="fade-in" style={{position:"fixed",inset:0,zIndex:100,background:"rgba(2,4,12,0.94)",backdropFilter:"blur(32px)",WebkitBackdropFilter:"blur(32px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"28px"}}>
          <button onClick={()=>setLightboxOpen(false)} className="magnetic-btn" style={{position:"absolute",top:"24px",right:"24px",width:"46px",height:"46px",borderRadius:"14px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.14)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",zIndex:10,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) rotate(90deg)";e.currentTarget.style.background="rgba(255,255,255,0.12)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1) rotate(0deg)";e.currentTarget.style.background="rgba(255,255,255,0.08)";}}>
            <X size={18} />
          </button>
          <button onClick={(e)=>{e.stopPropagation();setActivePreview((i)=>(i-1+projectPreviews.length)%projectPreviews.length);}} className="magnetic-btn" style={{position:"absolute",left:"24px",top:"50%",transform:"translateY(-50%)",width:"48px",height:"48px",borderRadius:"14px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.14)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-50%) translateX(-6px) scale(1.1)";e.currentTarget.style.background="rgba(255,255,255,0.12)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(-50%) translateX(0) scale(1)";e.currentTarget.style.background="rgba(255,255,255,0.08)";}}>
            <ChevronLeft size={22} />
          </button>
          <img src={cur.image} alt="" onClick={(e)=>e.stopPropagation()} className="scale-in" style={{maxWidth:"1060px",width:"100%",borderRadius:"20px",boxShadow:`0 50px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06), 0 0 140px ${cur.glow}35`}} />
          <button onClick={(e)=>{e.stopPropagation();setActivePreview((i)=>(i+1)%projectPreviews.length);}} className="magnetic-btn" style={{position:"absolute",right:"24px",top:"50%",transform:"translateY(-50%)",width:"48px",height:"48px",borderRadius:"14px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.14)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-50%) translateX(6px) scale(1.1)";e.currentTarget.style.background="rgba(255,255,255,0.12)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(-50%) translateX(0) scale(1)";e.currentTarget.style.background="rgba(255,255,255,0.08)";}}>
            <ChevronRight size={22} />
          </button>
          <p className="mono" style={{position:"absolute",bottom:"24px",left:"50%",transform:"translateX(-50%)",color:"rgba(255,255,255,0.5)",fontSize:"11.5px",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(12px)",padding:"6px 22px",borderRadius:"999px",whiteSpace:"nowrap",border:"1px solid rgba(255,255,255,0.1)"}}>
            {cur.title} · {activePreview+1}/{projectPreviews.length}
          </p>
        </div>
      )}

      {/* ═══ ENHANCED SKILLS ═══ */}
      <section id="skills" style={{padding:"120px 28px",position:"relative",zIndex:1}}>
        <div className="divider-line" style={{marginBottom:"90px"}} />
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="slide-in-left" style={{marginBottom:"70px"}}>
            <div className="pill" style={{background:D?"rgba(251,191,36,0.08)":"rgba(245,158,11,0.06)",border:"1px solid rgba(245,158,11,0.22)",color:"#fbbf24",marginBottom:"18px"}}>
              <span style={{fontSize:"12px"}}>⬡</span> Skills
            </div>
            <h2 className="fraunces" style={{fontSize:"clamp(40px,5.8vw,72px)",fontWeight:900,lineHeight:0.9,letterSpacing:"-0.04em",color:D?"#f8fafc":"#1e1b4b"}}>
              Tech Stack<br /><span style={{color:"#fbbf24",fontStyle:"italic",textShadow:D?"0 0 30px rgba(251,191,36,0.4)":"none"}}>& Skills</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"16px"}}>
            {[
              {category:"Frontend",icon:Code,accent:"#22d3ee",items:["React","JavaScript","HTML+CSS+JS","Tailwind CSS","Bootstrap","Vite"]},
              {category:"Backend",icon:Database,accent:"#818cf8",items:["Laravel","Django","MySQL","MariaDB","REST API","Pusher"]},
              {category:"Design",icon:Palette,accent:"#f472b6",items:["Figma","Adobe Photoshop","Canva","UI/UX Design","SketchUp"]},
              {category:"Tools & Others",icon:Wrench,accent:"#fbbf24",items:["Git","WordPress","Elementor","Video Editing","Python","Java"]},
            ].map((g,i)=>(
              <div key={i} className="card-hover project-card scale-in" style={{padding:"28px",borderRadius:"18px",background:D?"rgba(255,255,255,0.022)":"rgba(255,255,255,0.95)",border:`1px solid ${D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.1)"}`,boxShadow:D?"0 8px 36px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)":"0 8px 36px rgba(99,102,241,0.08)",backdropFilter:"blur(12px)",animationDelay:`${i*0.1}s`}}>
                <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
                  <div className="float-anim" style={{width:"42px",height:"42px",borderRadius:"12px",background:`${g.accent}16`,border:`1px solid ${g.accent}28`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 6px 20px ${g.accent}20`,animationDelay:`${i*0.2}s`}}>
                    <g.icon size={19} color={g.accent} />
                  </div>
                  <span className="fraunces" style={{fontWeight:700,fontSize:"16px",color:D?"#f1f5f9":"#1e1b4b"}}>{g.category}</span>
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:"7px"}}>
                  {g.items.map((item,j)=>(
                    <span key={j} className="tech-tag" style={{padding:"5px 12px",borderRadius:"8px",background:D?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",border:`1px solid ${D?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.09)"}`,fontSize:"11.5px",color:D?"#64748b":"#6b7280",fontWeight:500}}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENHANCED CONTACT ═══ */}
      <section id="contact" style={{padding:"130px 28px",position:"relative",zIndex:1}}>
        <div className="divider-line" style={{marginBottom:"90px"}} />
        <div style={{maxWidth:"760px",margin:"0 auto",textAlign:"center"}}>
          <div className="pill scale-in" style={{background:D?"rgba(129,140,248,0.08)":"rgba(99,102,241,0.06)",border:"1px solid rgba(99,102,241,0.22)",color:"#818cf8",marginBottom:"32px",display:"inline-flex"}}>
            <Mail size={12} /> Get In Touch
          </div>

          <h2 className="fraunces scale-in" style={{fontSize:"clamp(46px,7.5vw,86px)",fontWeight:900,lineHeight:0.88,letterSpacing:"-0.045em",color:D?"#f8fafc":"#1e1b4b",marginBottom:"32px",animationDelay:"0.1s"}}>
            Let's Work<br /><span style={{background:"linear-gradient(135deg, #818cf8, #c084fc, #22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontStyle:"italic",filter:"drop-shadow(0 0 40px rgba(129,140,248,0.3))"}}>Together</span>
          </h2>

          <p className="scale-in" style={{fontSize:"16.5px",color:D?"#64748b":"#6b7280",lineHeight:1.9,maxWidth:"500px",margin:"0 auto 60px",animationDelay:"0.2s"}}>
            I'm currently open to new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"14px",marginBottom:"36px"}}>
            {[
              {icon:Mail,label:"Email",desc:"Send me a message",href:"mailto:maryanadh787@gmail.com",accent:"#f472b6"},
              {icon:Github,label:"GitHub",desc:"Check my code",href:"https://github.com/mryana23",accent:"#e2e8f0"},
              {icon:Linkedin,label:"Instagram",desc:"Let's Connect",href:"https://www.linkedin.com/in/maryana-dwi-hendrianty-31b503328/",accent:"#22d3ee"},
            ].map((c,i)=>(
              <a key={i} href={c.href} target={i>0?"_blank":undefined} rel="noopener noreferrer" className="card-hover scale-in" style={{padding:"28px 18px",borderRadius:"18px",background:D?"rgba(255,255,255,0.025)":"rgba(255,255,255,0.95)",border:`1px solid ${D?"rgba(255,255,255,0.06)":"rgba(99,102,241,0.1)"}`,textDecoration:"none",display:"block",boxShadow:D?"0 8px 32px rgba(0,0,0,0.28)":"0 8px 32px rgba(99,102,241,0.08)",backdropFilter:"blur(12px)",animationDelay:`${i*0.1}s`}}>
                <div className="float-anim breathe" style={{width:"48px",height:"48px",borderRadius:"14px",background:`${c.accent}14`,border:`1px solid ${c.accent}28`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:`0 6px 22px ${c.accent}22`,animationDelay:`${i*0.3}s`}}>
                  <c.icon size={22} color={c.accent} />
                </div>
                <p className="fraunces" style={{fontWeight:700,fontSize:"16px",color:D?"#f1f5f9":"#1e1b4b",marginBottom:"5px"}}>{c.label}</p>
                <p style={{fontSize:"12px",color:D?"#475569":"#9ca3af"}}>{c.desc}</p>
              </a>
            ))}
          </div>

          <button onClick={()=>window.location.href="mailto:maryanadh787@gmail.com"} className="btn-glow scale-in" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 46px",borderRadius:"16px",background:"linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0ea5e9 100%)",border:"none",color:"#fff",fontSize:"14px",fontWeight:700,cursor:"pointer",boxShadow:"0 16px 56px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",letterSpacing:"0.07em",textTransform:"uppercase",animationDelay:"0.4s"}}>
            <Mail size={18} /> Let's Talk
          </button>
        </div>
      </section>

      {/* ═══ ENHANCED FOOTER ═══ */}
      <footer style={{borderTop:`1px solid ${D?"rgba(139,92,246,0.1)":"rgba(99,102,241,0.1)"}`,padding:"32px 28px",background:D?"rgba(10,14,26,0.6)":"rgba(250,251,255,0.7)",backdropFilter:"blur(16px)"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <div className="breathe" style={{width:"26px",height:"26px",borderRadius:"8px",background:"linear-gradient(135deg,#7c3aed,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(124,58,237,0.35)",animationDuration:"4s"}}>
              <Code2 size={12} color="#fff" />
            </div>
            <span className="fraunces" style={{fontWeight:700,fontSize:"15px",color:D?"#f1f5f9":"#1e1b4b"}}>Portfolio 2025</span>
          </div>
          <p className="mono label-text" style={{color:D?"#475569":"#c4b5fd",fontSize:"9.5px"}}>Built with React · Designed with ✦ care</p>
          <div style={{display:"flex",gap:"10px"}}>
            {[{icon:Github,href:"https://github.com/mryana23"},{icon:Linkedin,href:"https://instagram.com/lmzarxyy"},{icon:Mail,href:"mailto:maryanadh787@gmail.com"}].map(({icon:Icon,href},i)=>(
              <a key={i} href={href} target={i<2?"_blank":undefined} rel="noopener noreferrer" className="magnetic-btn" style={{width:"36px",height:"36px",borderRadius:"10px",background:D?"rgba(255,255,255,0.05)":"rgba(99,102,241,0.08)",border:`1px solid ${D?"rgba(255,255,255,0.08)":"rgba(99,102,241,0.12)"}`,display:"flex",alignItems:"center",justifyContent:"center",color:D?"#475569":"#9ca3af",textDecoration:"none",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.15) translateY(-3px)";e.currentTarget.style.color="#818cf8";e.currentTarget.style.background=D?"rgba(129,140,248,0.12)":"rgba(129,140,248,0.15)";e.currentTarget.style.boxShadow="0 8px 20px rgba(129,140,248,0.25)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1) translateY(0)";e.currentTarget.style.color=D?"#475569":"#9ca3af";e.currentTarget.style.background=D?"rgba(255,255,255,0.05)":"rgba(99,102,241,0.08)";e.currentTarget.style.boxShadow="none";}}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}