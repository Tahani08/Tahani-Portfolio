'use client'

import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaTools,
  FaBook,
  FaUsers,
} from 'react-icons/fa'
import Particles from "react-tsparticles";


export default function Home() {
  // ----- EXPERIENCE DATA (accordion) -----
  const [openExp, setOpenExp] = useState(null)
  const toggleExp = (idx) => setOpenExp(openExp === idx ? null : idx)

  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Duke Human Vaccine Institute',
      location: 'Durham, NC',
      date: 'May 2025 – Present',
      summary:
        'Expanded VAXPATH, a full-stack biomedical data visualization platform for analyzing immune responses to vaccines, built during Duke Code+ program. ',
      highlights: [
        'Expanded VAXPATH, a biomedical data visualization platform for analyzing immune responses to vaccines, adding features such as interactive nodes, lineage tree layouts, and pathway highlighting.',
        'Automated and containerized backend pipelines for genomic data uploads and mutation annotations, improving scalability and streamlining analysis of large datasets.',
        'Improved usability and workflows in collaboration with immunologists, preparing VAXPATH for adoption and citation in upcoming vaccine research publications.',
      ],
    },
        {
      role: 'Software Engineer Intern',
      company: 'Duke University Code+ Program',
      location: 'Durham, NC',
      date: 'May 2025 – Jul 2025',
      summary:
        'Designed and implemented the foundation of VAXPATH, a full-stack biomedical data visualization platform for analyzing immune responses to vaccines.',
      highlights: [
        'Designed and implemented the foundation of VAXPATH, a full-stack biomedical data visualization platform for analyzing immune responses to vaccines, using Python, R, JupyterLab, and HTML/CSS.',
        'Developed core frontend features, including interactive visualizations, multiple layout options, and dynamic filtering for uploaded genomic datasets.',
        'Implemented backend workflows to connect genomic data uploads with real-time visualization, reducing manual analysis time and enabling researchers to explore immune sequence data efficiently.',
      ],
    },
    {
      role: 'Coding Instructor & Lead',
      company: 'CS Sidekicks',
      location: 'Research Triangle, NC',
      date: 'Dec 2024 – Present',
      summary:
        'Taught students grades 4–11, offering free computer science education in Durham.',
      highlights: [
        'Led 15+ Python coding workshops for underrepresented students.',
        'Mentored 10+ students in computational thinking development.',
      ],
    },
  ]

  // ----- TABS -----
  const TABS = {
    experience: { label: 'Experience', icon: FaBriefcase },
    skills: { label: 'Skills', icon: FaTools },
    coursework: { label: 'Coursework', icon: FaBook },
    leadership: { label: 'Leadership & Involvement', icon: FaUsers },
  }

  const [activeTab, setActiveTab] = useState('experience')

  // ----- CONTENT FOR NON-EXPERIENCE TABS -----
  const skills = [
    'Python',
    'Java',
    'C/C++',
    'SQL',
    'HTML/CSS',
    'R',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Linux',
    'Docker',
    'Git',
    'VS Code',
    'JupyterLab',
  ]

  const coursework = [
    'Data Structures & Algorithms',
    'Python Programming',
    'Computer Systems',
    'Discrete Mathematics',
    'Statistics & R Programming',
    'Design & Analysis of Algorithms (Spring 2026)',
    'Human Skills for Software Engineering (Spring 2026)',
  ]

  const leadership = [
    'Duke MEDesign - Innovation & Outreach Chair',
    'National Society of Black Engineers — National Member & Campus Member',
    'Management Leadership for Tomorrow (MLT) — Career Prep Fellow',
    'Black Muslim Coalition - Vice President',
    'Colorstack - Colorstack Fellow',
    'Sponsors For Educational Opportunity (SEO) - SEO Scholar',
  ]

  // ----- PROJECTS DATA -----
  const projects = [
    {
      title: 'NeuroFocus - A Pomodoro Productivity Suite',
      description: 'Designed a customizable Pomodoro productivity app with immersive themes and accessibility features to support focus and neurodiverse users.',
      tech: ['React.js', 'Javascript','Vite','HTML/CSS'],
      image: '/Neurofocus.png',
      link: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Recommender System',
      description:
        'Built a Python-based recommender system that gives personalized suggestions to users; designed to predict accurate preferences in 3 main categories (Books, Movies, & Eateries).',
      tech: ['Python', 'User-Experience', 'Reccomendation Algorithms', 'Data Analysis'],
      image: '/system.webp',
      link: 'https://github.com/Tahani08/Recommender_System',
    },
        {
      title: 'VAXPATH - Lineage Visualization Tool',
      description:
        'Created during my internship with Duke Code+ prorgram, VAXPATH is a web app that helps immunologists visualize how vaccines for diseases like HIV, flu, and COVID interact with the immune system.',
      tech: ['Python', 'JupyterLab','R', 'Voilà', 'HTML/CSS'],
      image: '/VAXPATH.png',
      link: 'https://gitlab.oit.duke.edu/codeplus-2025-lineagetree-production/lineagetree-production',
    },
    {
      title: 'Markov Text Generator',
      description:
        'Built a Java program that learns from text and generates realistic sentences, optimized to run faster and handle large datasets efficiently.',
      tech: ['Java', 'Natural Language Processing', 'Algorithm Optimization'],
      image: '/markov3.jpg',
      link: 'https://github.com/Tahani08/MarkovTextGenerator',
    },
  ]

  return (
    <main className="relative bg-gradient-to-br from-[#5C0120] to-[#400016] text-white min-h-screen font-sans overflow-hidden">
      

      
      {/* Background Glow + Animated Shapes */}
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#F5DEB3]/20 rounded-full blur-[100px] animate-bounce"></div>
      <div className="absolute -z-10 top-24 left-10 w-60 h-60 bg-[#E6CBA8]/10 blur-[70px]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 bg-gradient-to-r from-[#5C0120] to-[#400016] z-20 shadow-lg">

        <h1 className="text-xl text-[#F5DEB3]">Tahani&apos;s Portfolio</h1>
        <ul className="flex gap-10 text-[#F5DEB3] font-medium">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F5DEB3] transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-20 md:px-24 relative z-10">
        {/* Left: Text */}
        <div className="flex-1 text-left mt-10 relative">
          {/* Glow behind text */}
          <div className="absolute -z-10 top-10 left-0 w-80 h-80 bg-[#E6CBA8]/20 blur-[100px]"></div>

          <h1 className="mb-4 leading-tight">
            <span className="block text-4xl md:text-5xl font-light">Hi, I’m</span>
            <span className="block text-6xl md:text-7xl font-bold text-[#F5DEB3] tracking-wide">
              Tahani Hassan
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl mb-4">
            I am{' '}
            <span className="text-[#E6CBA8]">
              <Typewriter
                words={[
                  'a Duke Student',
                  'an Aspiring Software Engineer',
                  'a Web Developer',
                  'Passionate About Accessible Tech',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-md md:text-lg text-[#F5DEB3] mb-6 max-w-lg">
            Combining engineering, design, and intention to shape the future!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <a
              href="/Portfolio.Tahani_Hassan_Resume (4).pdf"
              download
              className="bg-[#E6CBA8] text-[#400016] font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_25px_#E6CBA8] transition-transform transform hover:-translate-y-1"
            >
              <FaDownload className="inline mr-2" /> Resume
            </a>
            <a
              href="#contact"
              className="border border-[#E6CBA8] text-[#E6CBA8] px-6 py-3 rounded-lg hover:bg-[#E6CBA8] hover:text-[#400016] transition-transform transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl md:text-2xl">
            <a
              href="https://www.linkedin.com/in/tahanih/"
              className="hover:text-[#E6CBA8] hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Tahani08?tab=rep"
              className="hover:text-[#E6CBA8] hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:tahani.hassan@duke.edu"
              className="hover:text-[#E6CBA8] hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#E6CBA8] shadow-[0_0_50px_rgba(230,203,168,0.4)]">
            <img
              src="/TAHANI2.jpg"
              alt="Tahani Hassan"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full py-35 px-25 flex flex-col md:flex-row justify-between items-center gap-12"
      >
        {/* Left: Text */}
        <div className="flex-1">
          <h3 className="text-5xl text-[#E6CBA8] mb-2">Oh, hey!</h3>
          <p className="text-[#F5DEB3] leading-relaxed mb-4">
            Nice to see you here:) My name is Tahani and I am a Junior at Duke
            University studying Computer Science with a concentration in software
            engineering and design and a minor in Sociology. I am an aspiring
            software engineer passionate about{' '}
            <span className="text-[#E6CBA8] font-semibold">
              making tech more accessible and inclusive
            </span>
            .
          </p>
          <p className="text-[#F5DEB3] leading-relaxed mb-4">
            Having worked on the front-end and back-end of numerous web apps, I
            thrive at the intersection of{' '}
            <span className="text-[#E6CBA8]">functionality and design</span>,
            always thinking about how to make technology feel intuitive,
            accessible, and a little more human.
          </p>
          <p className="text-[#F5DEB3] leading-relaxed">
            Outside of coding, you can usually find me outside in nature, picking
            up a new hobby, reading mystery and romance novels, or experimenting
            in the kitchen (with mixed results 😅).
          </p>
        </div>

        {/* Right: Collage */}
        <div className="flex-1 flex justify-end">
          <img
            src="/COLLAGE.jpg"
            alt="Collage"
            className="w-[1050px] h-[850px] object-contain"
          />
        </div>
      </section>

      {/* Experience & Skills (with ICON TABS) */}
      <section id="experience" className="px-4 md:px-8 py-20 bg-[#400016]">
        <h2 className="text-3xl font-bold text-center text-[#E6CBA8]">
          Experience & Skills
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          {Object.entries(TABS).map(([key, val]) => {
            const Icon = val.icon
            const active = activeTab === key
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={[
                  'inline-flex items-center gap-2 px-4 py-2 rounded-md transition',
                  active
                    ? 'bg-[#E6CBA8] text-[#400016] shadow-sm'
                    : 'bg-[#5C0120] text-[#F5DEB3] hover:bg-[#6f1832]',
                ].join(' ')}
                aria-pressed={active}
              >
                <Icon />
                <span>{val.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-10 max-w-4xl mx-auto">
          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-[#5C0120] shadow-md">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleExp(idx)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold">
                        {exp.role} @ {exp.company}
                      </h3>
                      <p className="text-[#E6CBA8] text-sm">
                        {exp.date} • {exp.location}
                      </p>
                      <p className="text-[#F5DEB3] mt-1">{exp.summary}</p>
                    </div>
                    <div className="text-[#E6CBA8] text-xl">
                      {openExp === idx ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>

                  {openExp === idx && (
                    <ul className="list-disc list-inside text-[#F5DEB3] mt-4 space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-[#5C0120] text-[#F5DEB3] border border-[#E6CBA8]/30"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* COURSEWORK TAB */}
          {activeTab === 'coursework' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {coursework.map((c) => (
                <div
                  key={c}
                  className="p-4 rounded-lg bg-[#5C0120] text-[#F5DEB3] border border-[#E6CBA8]/20"
                >
                  {c}
                </div>
              ))}
            </div>
          )}

          {/* LEADERSHIP TAB */}
          {activeTab === 'leadership' && (
            <ul className="space-y-3">
              {leadership.map((l) => (
                <li
                  key={l}
                  className="p-4 rounded-lg bg-[#5C0120] text-[#F5DEB3] border border-[#E6CBA8]/20"
                >
                  {l}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#E6CBA8]">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#5C0120] shadow-lg flex flex-col hover:scale-[1.02] transition"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-[#F5DEB3] mb-4">{proj.description}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#400016] text-[#E6CBA8] border border-[#E6CBA8]/30 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub/Link Button */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-[#E6CBA8] text-[#400016] px-4 py-2 rounded-lg font-medium hover:shadow-[0_0_15px_#E6CBA8] transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className="px-8 py-20 bg-[#400016]">
  <h2 className="text-3xl font-bold text-center mb-12 text-[#E6CBA8]">
    Get In Touch
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    {/* Left: Contact Info */}
    <div>
      <h3 className="text-2xl font-semibold text-[#F5DEB3] mb-4">Let's Connect</h3>
      <p className="text-[#E6CBA8] mb-6">
    Let’s connect! I’d love to chat about projects, ideas, or just say hi. 💌
      </p>

      <div className="space-y-4">
        <a href="mailto:tahani.hassan@duke.edu" className="flex items-center gap-3 hover:text-white transition">
          <FaEnvelope className="text-[#E6CBA8] text-xl" />
          <span className="text-[#F5DEB3]">tahani.hassan@duke.edu</span>
        </a>
        <a href="https://linkedin.com/in/tahanih" target="_blank" className="flex items-center gap-3 hover:text-white transition">
          <FaLinkedin className="text-[#E6CBA8] text-xl" />
          <span className="text-[#F5DEB3]">linkedin.com/in/tahanih</span>
        </a>
        <a href="https://github.com/Tahani08?tab=rep" target="_blank" className="flex items-center gap-3 hover:text-white transition">
          <FaGithub className="text-[#E6CBA8] text-xl" />
          <span className="text-[#F5DEB3]">https://github.com/Tahani08</span>
        </a>
      </div>
    </div>

    {/* Right: Contact Form */}
    <form className="space-y-6">
      <div>
        <label className="block text-[#F5DEB3] mb-2">Name</label>
        <input
          type="text"
          placeholder="Your name..."
          className="w-full px-4 py-2 rounded-md bg-[#5C0120] text-white border border-[#E6CBA8]/30 focus:outline-none focus:ring-2 focus:ring-[#E6CBA8]"
        />
      </div>

      <div>
        <label className="block text-[#F5DEB3] mb-2">Email</label>
        <input
          type="email"
          placeholder="Your email..."
          className="w-full px-4 py-2 rounded-md bg-[#5C0120] text-white border border-[#E6CBA8]/30 focus:outline-none focus:ring-2 focus:ring-[#E6CBA8]"
        />
      </div>

      <div>
        <label className="block text-[#F5DEB3] mb-2">Message</label>
        <textarea
          placeholder="Your message..."
          rows="4"
          className="w-full px-4 py-2 rounded-md bg-[#5C0120] text-white border border-[#E6CBA8]/30 focus:outline-none focus:ring-2 focus:ring-[#E6CBA8]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#E6CBA8] text-[#400016] font-semibold px-6 py-3 rounded-md hover:shadow-[0_0_20px_#E6CBA8] transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

    </main>
  )
}




