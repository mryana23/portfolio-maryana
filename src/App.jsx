import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Code2, ChevronRight, Briefcase, Code, Database, Palette, Paintbrush, Github, Instagram, Mail, 
  Award, Rocket, School, Plane, Globe, FileText, Wrench, Sparkles, Zap, Terminal, Camera, 
  BarChart3, GraduationCap, Building2, ExternalLink, Users, Sun, Moon, Laptop, Globe2, Monitor
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => setIsDark(!isDark);

  const experiences = [
    {
      role: "Website Developer & Graphic Designer",
      company: "PT. Unitronic Jaya",
      period: "Aug 2025 - Oct 2025",
      type: "Internship",
      description: [
        "Developed and maintained corporate websites (RF Test Indonesia, Rigol Indonesia, Unitronic Jaya) using Laravel with a MySQL database",
        "Integrated real-time live chat for website visitors connected directly to admin using Pusher",
        "Built RF Test Indonesia V1 with React (Vite) frontend — gaining hands-on experience in component-based architecture",
        "Optimized Sumber Instrumindo and Unitronic Jaya websites for mobile responsiveness and better user experience",
        "Created daily promotional materials (3 posters/day) using Canva with consistent visual branding",
        "Handled product photography, videography, and social media content management",
        "Designed 3D furniture models and office layout concepts using SketchUp to support company visual materials"
      ],
      tech: ["Laravel", "React (Learning)", "MySQL", "Pusher", "Canva", "SketchUp", "Video Editing", "Graphic Design", "3D Modeling"],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Backend Developer & Technical Writer",
      company: "PT. Median Talenta Raya",
      period: "Jan 2025 - May 2025",
      type: "Internship",
      description: [
        "Developed backend for arts community application using Django and MariaDB",
        "Worked with Nuxt.js frontend team for API integration - learned about Vue.js ecosystem",
        "Created comprehensive project documentation including API docs and database structure",
        "Built professional websites using WordPress and Elementor",
        "Compiled system requirements, workflow, and technical specifications"
      ],
      tech: ["Django", "Nuxt.js (Exposure)", "MariaDB", "WordPress", "Elementor", "REST API"],
      icon: Code,
      color: "from-green-500 to-teal-500"
    }
  ];

  const projects = [
  {
    title: "Extracurricular Management App",
    period: "August – November 2024",
    description: "Management system for SMKN 1 Cimahi's extracurricular activities. Includes activity scheduling, member management, attendance tracking, proposal submission, and admin dashboard developed with student team.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    role: "Fullstack Developer & Team Lead",
    icon: School,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Flight Ticket Booking Platform",
    period: "December 2024 – January 2025",
    description: "Modern flight booking platform integrated with Midtrans API for secure online payments. Features intuitive flight search, ticket booking interface, and comprehensive admin data management system.",
    tech: ["Laravel", "MySQL", "Midtrans API"],
    role: "Fullstack Developer",
    icon: Plane,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Arts Community Platform",
    period: "January - March 2025",
    description: "Community-driven platform for local artists built during internship. Features community profiles, event listings, and discussion forums. Gained exposure to Nuxt.js while working primarily on Django backend and REST API development.",
    tech: ["Django", "Nuxt.js (Exposure)", "MariaDB", "REST API"],
    role: "Backend Developer",
    icon: Palette,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "RF Test Indonesia Website",
    period: "August 2025",
    description:
      "Corporate website initially developed as Version 1 using React (Vite) frontend — a learning project that helped me understand component-based architecture and frontend-backend integration. Later rebuilt as Version 2 using full Laravel stack for better performance. Features company profile, product catalog, admin panel, responsive design, live chat (Pusher), and contact form with email integration.",
    tech: ["React (Learning)", "Laravel", "MySQL", "REST API", "Pusher"],
    role: "Fullstack Developer",
    icon: Laptop, 
    color: "from-cyan-500 to-blue-500",
    link: "https://rf-test-indonesia.co.id"
  },
  {
    title: "Rigol Indonesia Website",
    period: "September 2025",
    description: "Professional corporate website developed using Laravel. Features product catalog, company information, content management system with MySQL database, admin panel, fully responsive design, live chat for visitors using Pusher, and a contact form that sends emails to the company.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Pusher"],
    role: "Fullstack Developer",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    link: "https://www.rigol-indonesia.co.id/"
  },
  {
    title: "Unitronic Jaya Website",
    period: "October 2025",
    description: "Professional corporate website developed using Laravel. Includes product catalog, company information, content management system connected to MySQL, admin panel, fully responsive design, live chat for visitors powered by Pusher, and a contact form that sends emails directly to the company.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Pusher"],
    role: "Fullstack Developer",
    icon: Globe2, 
    color: "from-yellow-500 to-orange-500",
    link: "https://unitronicjaya.com/" 
  }
];

  const getLevelBadge = (level) => {
    if (level >= 90) return { icon: "🟣", label: "Expert" };
    if (level >= 85) return { icon: "🔵", label: "Advanced" };
    if (level >= 75) return { icon: "🟢", label: "Intermediate" };
    return { icon: "🟡", label: "Familiar" };
  };

  const skills = {
    backend: [
      { name: "Laravel", level: 92, icon: Globe },
      { name: "Django", level: 90, icon: Code },
      { name: "MySQL", level: 95, icon: Database },
      { name: "REST API", level: 87, icon: FileText },
      { name: "PHP", level: 90, icon: Code2 },
      { name: "MariaDB", level: 90, icon: Database }
    ],
    frontend: [
      { name: "React.js", level: 70, icon: Code, note: "Familiar - Exposure" },
      { name: "Nuxt.js", level: 65, icon: Zap, note: "Familiar - Exposure" },
      { name: "JavaScript", level: 90, icon: Code2 },
      { name: "HTML/CSS", level: 92, icon: Palette },
      { name: "Bootstrap", level: 90, icon: Sparkles },
      { name: "Tailwind CSS", level: 70, icon: Zap }
    ],
    design: [
      { name: "Figma", level: 86, icon: Palette },
      { name: "Adobe Photoshop", level: 84, icon: Paintbrush },
      { name: "Canva", level: 90, icon: Sparkles },
      { name: "Corel", level: 87, icon: Palette },
      { name: "Video Editing", level: 82, icon: Camera }
    ],
    others: [
      { name: "Git", level: 88, icon: Github },
      { name: "WordPress", level: 85, icon: Globe },
      { name: "Elementor", level: 92, icon: Code },
      { name: "Python", level: 85, icon: Terminal }
    ]
  };

  const certifications = [
    {
      title: "Oracle Certified Java Programmer",
      issuer: "Oracle",
      year: "2024",
      icon: Code,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding Indonesia",
      year: "2025",
      icon: Database,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Intro to Data Analytics",
      issuer: "RevoU",
      year: "2025",
      icon: BarChart3,
      color: "from-blue-500 to-purple-500"
    }
  ];

  const getTechIcon = (techName) => {
    const iconMap = {
      'Laravel': Globe,
      'React': Code,
      'React (Learning)': Code,
      'MySQL': Database,
      'Canva': Palette,
      'Video Editing': Camera,
      'Design Graphic': Paintbrush,
      'Django': Code,
      'Nuxt.js': Zap,
      'Nuxt.js (Exposure)': Zap,
      'MariaDB': Database,
      'WordPress': Globe,
      'Elementor': Wrench,
      'REST API': FileText,
      'Figma': Palette,
      'Adobe': Paintbrush,
      'Bootstrap': Sparkles,
      'Midtrans API': FileText,
      'Pusher': Zap
    };
    return iconMap[techName] || Code2;
  };

  const bgPrimary = isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50';
  const bgSecondary = isDark ? 'bg-slate-900/50' : 'bg-white/70';
  const bgTertiary = isDark ? 'bg-slate-900/30' : 'bg-white/50';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-gray-300' : 'text-slate-700';
  const textTertiary = isDark ? 'text-gray-400' : 'text-slate-600';
  const borderColor = isDark ? 'border-slate-800' : 'border-slate-200';
  const hoverBorder = isDark ? 'hover:border-purple-500/50' : 'hover:border-purple-400';
  const navBg = isDark ? 'bg-slate-900/95' : 'bg-white/95';
  const cardBg = isDark ? 'bg-slate-900/50' : 'bg-white';

  return (
    <div className={`${bgPrimary} ${textPrimary} overflow-x-hidden transition-colors duration-500`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute -top-1/2 -left-1/2 w-full h-full ${isDark ? 'bg-gradient-to-br from-purple-600/5 via-transparent to-transparent' : 'bg-gradient-to-br from-purple-400/10 via-transparent to-transparent'} rounded-full blur-3xl`}
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div 
          className={`absolute -bottom-1/2 -right-1/2 w-full h-full ${isDark ? 'bg-gradient-to-tl from-cyan-600/5 via-transparent to-transparent' : 'bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent'} rounded-full blur-3xl`} 
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          50% { transform: translateY(-80px) translateX(40px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? `${navBg} backdrop-blur-lg shadow-lg` : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Maryana's Portfolio</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-2 py-2 text-sm font-medium transition-all group ${activeSection === item.toLowerCase() ? textPrimary : textSecondary}`}>
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ${activeSection === item.toLowerCase() ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                </button>
              ))}
              <button onClick={toggleTheme} className={`ml-4 p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-purple-100 hover:bg-purple-200'} transition-all`}>
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-600" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-purple-100'} transition-all`}>
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-600" />}
              </button>
              <button className={`p-2 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-purple-100'} rounded-lg transition-colors`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg ${textSecondary} ${isDark ? 'hover:bg-slate-800' : 'hover:bg-purple-100'} transition-all`}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-block">
            <span className={`px-4 py-2 ${isDark ? 'bg-green-600/20 border-green-500/30 text-green-300' : 'bg-green-100 border-green-300 text-green-700'} border rounded-full text-sm font-medium shadow-lg flex items-center gap-2`}>
              <Sparkles className="w-4 h-4" />
              Open to Work - Available for Opportunities
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Hi, I'm a{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Fullstack Developer
            </span>
            <br />& UI/UX Enthusiast
          </h1>
          
          <p className={`text-lg sm:text-xl ${textTertiary} mb-4 max-w-3xl mx-auto leading-relaxed`}>
            Software Engineering graduate passionate about building scalable web applications with clean code and beautiful design
          </p>
          
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${cardBg} backdrop-blur-sm rounded-full border ${borderColor} mb-8`}>
            <Code2 className="w-4 h-4 text-purple-500" />
            <span className={`text-sm ${textSecondary}`}>Core Stack:</span>
            <span className="text-sm font-medium">Laravel • Django </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center gap-2 text-white">
              View My Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 ${isDark ? 'bg-slate-800 hover:bg-slate-700 border-slate-700' : 'bg-white hover:bg-purple-50 border-purple-300'} rounded-full font-semibold transition-all border`}>
              Get In Touch
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Briefcase, value: "2+", label: "Years Experience", color: isDark ? 'text-purple-400' : 'text-purple-600' },
              { icon: Rocket, value: "6+", label: "Projects Built", color: isDark ? 'text-cyan-400' : 'text-cyan-600' },
              { icon: Code2, value: "15+", label: "Technologies", color: isDark ? 'text-pink-400' : 'text-pink-600' },
              { icon: Award, value: "3+", label: "Certifications", color: isDark ? 'text-orange-400' : 'text-orange-600' }
            ].map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className={`p-6 ${cardBg} backdrop-blur-sm rounded-2xl border ${borderColor} hover:scale-105 transition-all shadow-lg`}>
                  <IconComponent className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className={`text-sm ${textTertiary}`}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className={`relative mt-10 py-20 px-4 ${bgTertiary}`}>
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${textSecondary} leading-relaxed`}>
              <p className="text-lg">
                I'm a <span className={`${textPrimary} font-semibold`}>Software Engineering graduate</span> from SMKN 1 Cimahi with a passion for creating innovative web solutions that combine functionality with aesthetic design.
              </p>

              <div className={`p-6 ${cardBg} backdrop-blur-sm rounded-2xl border ${borderColor} shadow-lg`}>
                <h3 className={`${textPrimary} font-semibold mb-4 flex items-center gap-2`}>
                  <GraduationCap className="w-5 h-5 text-purple-500" />
                  Education & Achievement
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    Software Engineering Graduate - SMKN 1 Cimahi (2025)
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    Graduated from Vocational High School with an average final grade of 87.95.
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    Active in multiple team-based development projects
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Continuous learner with multiple certifications
                  </li>
                </ul>
              </div>

              <p>
                My expertise spans from <span className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>full-stack development</span> with Laravel and Django, to creating modern frontends with JavaScript, complemented by UI/UX design skills using Figma and Adobe Photoshop. Currently deepening my knowledge in React and Vue.js ecosystem.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-2 ${isDark ? 'bg-purple-600/20 border-purple-500/30 text-purple-300' : 'bg-purple-100 border-purple-300 text-purple-700'} border rounded-full text-sm font-medium flex items-center gap-2`}>
                  <Code className="w-4 h-4" />
                  Full-Stack Developer
                </span>
                <span className={`px-4 py-2 ${isDark ? 'bg-cyan-600/20 border-cyan-500/30 text-cyan-300' : 'bg-cyan-100 border-cyan-300 text-cyan-700'} border rounded-full text-sm font-medium flex items-center gap-2`}>
                  <Palette className="w-4 h-4" />
                  UI/UX Designer
                </span>
                <span className={`px-4 py-2 ${isDark ? 'bg-pink-600/20 border-pink-500/30 text-pink-300' : 'bg-pink-100 border-pink-300 text-pink-700'} border rounded-full text-sm font-medium flex items-center gap-2`}>
                  <Paintbrush className="w-4 h-4" />
                  Graphic Designer
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className={`p-6 ${cardBg} backdrop-blur-sm rounded-2xl border ${borderColor} hover:scale-105 transition-all shadow-lg group`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${textPrimary}`}>{cert.title}</h3>
                        <p className={`text-sm ${textTertiary}`}>{cert.issuer}</p>
                        <p className={`text-xs ${textTertiary} mt-1`}>{cert.year}</p>
                      </div>
                      <Award className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-20 px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className={`${textTertiary} text-lg`}>My professional journey</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className={`${cardBg} backdrop-blur-sm rounded-2xl border ${borderColor} hover:scale-[1.02] transition-all shadow-lg overflow-hidden`}>
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${textPrimary} mb-1`}>{exp.role}</h3>
                          <p className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold flex items-center gap-2`}>
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-purple-50 border-purple-200'} border rounded-full text-sm ${textSecondary}`}>
                          {exp.period}
                        </span>
                        <span className={`px-3 py-1 ${isDark ? 'bg-purple-600/20 border-purple-500/30 text-purple-300' : 'bg-purple-100 border-purple-300 text-purple-700'} border rounded-full text-xs font-medium`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ul className={`space-y-2 mb-4 ${textSecondary}`}>
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => {
                        const TechIcon = getTechIcon(tech);
                        return (
                          <span key={i} className={`px-3 py-1 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'} border rounded-full text-xs ${textSecondary} flex items-center gap-1.5`}>
                            <TechIcon className="w-3.5 h-3.5" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className={`relative py-20 px-4 ${bgTertiary}`}>
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className={`${textTertiary} text-lg`}>My recent work and accomplishments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className={`${cardBg} backdrop-blur-sm rounded-2xl border ${borderColor} overflow-hidden hover:scale-105 transition-all shadow-lg group`}>
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className={`p-2 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-purple-50 hover:bg-purple-100'} rounded-lg transition-all`}>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <h3 className={`text-xl font-bold ${textPrimary} mb-2`}>{project.title}</h3>
                    <p className={`text-xs ${textTertiary} mb-3`}>{project.period}</p>
                    <p className={`text-sm ${textSecondary} mb-4 leading-relaxed`}>{project.description}</p>

                    <div className={`text-xs ${isDark ? 'text-purple-400' : 'text-purple-600'} font-medium mb-3 flex items-center gap-1`}>
                      <Briefcase className="w-3.5 h-3.5" />
                      {project.role}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => {
                        const TechIcon = getTechIcon(tech);
                        return (
                          <span key={i} className={`px-2 py-1 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'} border rounded-full text-xs ${textSecondary} flex items-center gap-1`}>
                            <TechIcon className="w-3 h-3" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-20 px-4">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className={`${textTertiary} text-lg mb-4`}>My technical expertise</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className={`px-3 py-1 ${isDark ? 'bg-purple-600/20 border-purple-500/30' : 'bg-purple-100 border-purple-300'} border rounded-full text-xs ${textSecondary}`}>
                🟣 Expert (90%+)
              </span>
              <span className={`px-3 py-1 ${isDark ? 'bg-blue-600/20 border-blue-500/30' : 'bg-blue-100 border-blue-300'} border rounded-full text-xs ${textSecondary}`}>
                🔵 Advanced (85-89%)
              </span>
              <span className={`px-3 py-1 ${isDark ? 'bg-green-600/20 border-green-500/30' : 'bg-green-100 border-green-300'} border rounded-full text-xs ${textSecondary}`}>
                🟢 Intermediate (75-84%)
              </span>
              <span className={`px-3 py-1 ${isDark ? 'bg-yellow-600/20 border-yellow-500/30' : 'bg-yellow-100 border-yellow-300'} border rounded-full text-xs ${textSecondary}`}>
                🟡 Familiar (65-74%)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className={`${cardBg} backdrop-blur-sm rounded-2xl border ${borderColor} p-8 shadow-lg`}>
                <h3 className={`text-2xl font-bold ${textPrimary} mb-6 capitalize flex items-center gap-2`}>
                  {category === 'backend' && <Database className="w-6 h-6 text-purple-500" />}
                  {category === 'frontend' && <Code className="w-6 h-6 text-cyan-500" />}
                  {category === 'design' && <Palette className="w-6 h-6 text-pink-500" />}
                  {category === 'others' && <Wrench className="w-6 h-6 text-orange-500" />}
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, index) => {
                    const badge = getLevelBadge(skill.level);
                    const SkillIcon = skill.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="w-5 h-5 text-purple-400" />
                            <span className={`font-medium ${textPrimary}`}>{skill.name}</span>
                            {skill.note && (
                              <span className={`text-xs px-2 py-0.5 ${isDark ? 'bg-yellow-600/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'} rounded-full`}>
                                {skill.note}
                              </span>
                            )}
                          </div>
                          <span className="text-xs flex items-center gap-1">
                            <span>{badge.icon}</span>
                            <span className={textSecondary}>{badge.label}</span>
                          </span>
                        </div>
                        <div className={`h-2 ${isDark ? 'bg-slate-800' : 'bg-slate-200'} rounded-full overflow-hidden`}>
                          <div 
                            className={`h-full bg-gradient-to-r ${
                              skill.level >= 90 ? 'from-purple-500 to-purple-600' :
                              skill.level >= 85 ? 'from-blue-500 to-blue-600' :
                              skill.level >= 75 ? 'from-green-500 to-green-600' :
                              'from-yellow-500 to-yellow-600'
                            } rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`relative py-20 px-4 ${bgTertiary}`}>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className={`${textTertiary} text-lg`}>Let's work together on your next project</p>
          </div>

          <div className={`${cardBg} backdrop-blur-sm rounded-2xl border ${borderColor} p-8 md:p-12 shadow-lg`}>
            <p className={`text-lg ${textSecondary} mb-8 leading-relaxed`}>
              I'm currently open to new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a href="mailto:maryanadh787@gmail.com" 
                className={`p-6 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-purple-50 hover:bg-purple-100'} rounded-xl transition-all group`}>
                <Mail className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'} group-hover:scale-110 transition-transform`} />
                <p className={`font-medium ${textPrimary}`}>Email</p>
                <p className={`text-sm ${textTertiary} mt-1`}>Send me a message</p>
              </a>

              <a href="https://github.com/mryana23" target="_blank" rel="noopener noreferrer"
                className={`p-6 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-purple-50 hover:bg-purple-100'} rounded-xl transition-all group`}>
                <Github className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'} group-hover:scale-110 transition-transform`} />
                <p className={`font-medium ${textPrimary}`}>GitHub</p>
                <p className={`text-sm ${textTertiary} mt-1`}>Check my code</p>
              </a>

              <a href="https://instagram.com/lmzarxyy" target="_blank" rel="noopener noreferrer"
                className={`p-6 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-purple-50 hover:bg-purple-100'} rounded-xl transition-all group`}>
                <Instagram className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'} group-hover:scale-110 transition-transform`} />
                <p className={`font-medium ${textPrimary}`}>Instagram</p>
                <p className={`text-sm ${textTertiary} mt-1`}>Follow my journey</p>
              </a>
            </div>

            <button 
              onClick={() => window.location.href = 'mailto:maryanadh787@gmail.com'}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 text-white flex items-center gap-2 mx-auto">
              <Mail className="w-5 h-5" />
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      <footer className={`${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-sm border-t ${borderColor} py-8 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-500" />
              <span className={`font-semibold ${textPrimary}`}>Portfolio 2025</span>
            </div>
            
            <p className={`text-sm ${textTertiary} flex items-center gap-2`}>
              Built with React & Tailwind CSS • Designed with
              <Sparkles className="w-4 h-4 text-purple-400" />
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/mryana23" target="_blank" rel="noopener noreferrer"
                className={`p-2 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-purple-100'} rounded-lg transition-all`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/lmzarxyy" target="_blank" rel="noopener noreferrer"
                className={`p-2 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-purple-100'} rounded-lg transition-all`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:maryanadh787@gmail.com"
                className={`p-2 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-purple-100'} rounded-lg transition-all`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}