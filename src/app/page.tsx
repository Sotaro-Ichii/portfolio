'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  const { t, language } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "Kimuchi",
      description: language === 'ja' 
        ? "アメリカの日本人学生向けの大学授業検索プラットフォーム。React、Firebase、Stripeで構築。"
        : "A college class search platform for Japanese students in the U.S. Built with React, Firebase, and Stripe.",
      tech: ["React", "Firebase", "Stripe", "TypeScript"],
      link: "#",
      image: "/globe.svg"
    },
    {
      title: "Ichi Vintage",
      description: language === 'ja'
        ? "厳選されたアメリカファッションを販売するオンラインビンテージ衣料店。在庫管理、マーケティング、運営を担当。"
        : "An online vintage clothing store selling curated U.S. fashion. Managed inventory, marketing, and operations.",
      tech: language === 'ja' ? ["Eコマース", "マーケティング", "運営"] : ["E-commerce", "Marketing", "Operations"],
      link: "#",
      image: "/window.svg"
    },
    {
      title: "OCC Business Contest",
      description: language === 'ja'
        ? "OCCのピッチコンペティションでトップ5入り。革新的な男性用衛生用品プロトタイプを発表。"
        : "Placed top 5 in OCC's pitch competition. Presented an innovative men's hygiene product prototype.",
      tech: language === 'ja' ? ["ビジネス", "ピッチ", "イノベーション"] : ["Business", "Pitch", "Innovation"],
      link: "#",
      image: "/file.svg"
    }
  ];

  const skills = language === 'ja' 
    ? ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Firebase', 'Python', 'Git', 'AWS']
    : ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Firebase', 'Python', 'Git', 'AWS'];

  return (
    <main className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'gradient-bg-dark text-white' 
        : 'gradient-bg text-white'
    }`}>
      
      {/* ナビゲーションバー */}
      <nav className={`sticky top-0 z-50 px-8 py-6 transition-all duration-300 ${
        isDarkMode ? 'glass-dark' : 'glass'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Sotaro Ichii
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-blue-300 transition-colors duration-200">{t.nav.about}</a>
            <a href="#projects" className="hover:text-blue-300 transition-colors duration-200">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors duration-200">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle isDarkMode={isDarkMode} toggleMode={toggleMode} />
          </div>
        </div>
      </nav>

      {/* Hero セクション */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className={`relative z-10 ${isLoaded ? 'animate-fade-in-up' : ''}`}>
          <div className="mb-8 animate-float">
            <Image
              src="/profile.png"
              alt="Sotaro Ichii"
              width={200}
              height={200}
              className="rounded-full shadow-2xl border-4 border-white/20"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text">
            {t.hero.greeting} {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
            {t.hero.subtitle}
          </p>
          
          <p className="text-lg mb-12 max-w-2xl mx-auto text-blue-50">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover-lift"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>
      </section>

      {/* About セクション */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">{t.about.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-blue-50">
                {t.about.description1}
              </p>
              
              <p className="text-lg leading-relaxed text-blue-50">
                {t.about.description2}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold mb-4">{t.about.whatIDo}</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{t.about.fullstack}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>{t.about.mobile}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{t.about.design}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>{t.about.business}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects セクション */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">{t.projects.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover-lift transition-all duration-300 ${
                  isLoaded ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-200"
                >
                  {t.projects.viewProject}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact セクション */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 gradient-text">{t.contact.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-12"></div>
          
          <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.linkedin.com/in/sotaro-ichii/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/Sotaro-Ichii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-blue-100">
        <p>{t.footer.copyright}</p>
      </footer>
    </main>
  );
}




