import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Wifi, 
  ArrowRight, 
  Key, 
  Armchair, 
  Coffee, 
  Headset, 
  Users, 
  User, 
  Building2,
  Globe,
  Share2,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---
type Page = 'home' | 'coworking' | 'offices' | 'meeting-rooms';

// --- Components ---

const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <div 
          className="text-xl md:text-2xl font-bold tracking-tighter text-white font-headline cursor-pointer"
          onClick={() => setPage('home')}
        >
          Ambar. Workspace
        </div>
        <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
          <div className="hidden md:flex gap-8 lg:gap-12 items-center">
            {[
              { id: 'coworking', label: 'Co-Working' },
              { id: 'offices', label: 'Private Offices' },
              { id: 'meeting-rooms', label: 'Meeting Rooms' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id as Page)}
                className={cn(
                  "font-label text-xs uppercase tracking-[0.1em] transition-all duration-300 relative py-1",
                  activePage === item.id 
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-on-surface-variant hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
            <button className="font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant hover:text-white transition-colors">
              About
            </button>
          </div>
          <button className="bg-primary text-on-primary px-4 md:px-6 py-2.5 rounded-md font-label text-[10px] md:text-xs uppercase tracking-[0.1em] font-bold hover:shadow-[0_0_20px_rgba(172,206,195,0.3)] transition-all active:scale-95 whitespace-nowrap">
            Book a Tour
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-background w-full py-20 px-6 md:px-12 border-t border-outline-variant/10">
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto gap-8">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <div className="text-lg font-bold text-white font-headline tracking-tight">Ambar. Workspace</div>
        <p className="font-body text-sm text-outline">© 2024 Ambar. Workspace. Designed for the Digital Architect.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {['Privacy Policy', 'Terms of Service', 'Contact', 'Locations'].map((link) => (
          <a key={link} className="font-label text-[10px] uppercase tracking-[0.15em] text-outline hover:text-white transition-colors" href="#">
            {link}
          </a>
        ))}
      </div>
      <div className="flex gap-6">
        <Globe className="w-5 h-5 text-primary opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
        <Share2 className="w-5 h-5 text-primary opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
      </div>
    </div>
  </footer>
);

// --- Sections ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex-grow"
  >
    {/* Hero */}
    <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2">
      <div className="relative overflow-hidden h-[400px] md:h-auto">
        <img 
          alt="Modern Architecture" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
      </div>
      <div className="flex flex-col justify-center px-8 md:px-20 py-20 relative topological-overlay bg-primary-container">
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="status-beacon animate-pulse"></span>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary">Live availability</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] -ml-1">
            Your Space<br/>to Soar
          </h1>
          <p className="font-body text-on-primary-container text-lg max-w-md leading-relaxed">
            Elevate your digital craftsmanship in a sanctuary designed for architectural precision and unyielding performance.
          </p>
          <div className="pt-8 flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-on-primary px-8 py-4 rounded font-label text-sm uppercase tracking-[0.1em] font-bold hover:brightness-110 transition-all"
            >
              Explore Spaces
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-outline/30 text-white px-8 py-4 rounded font-label text-sm uppercase tracking-[0.1em] hover:bg-white/5 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Infrastructure */}
    <section className="py-32 px-8 md:px-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <h2 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-4">Infrastructure</h2>
          <h3 className="font-headline text-4xl text-white font-medium">The Architectural Backbone</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-surface-container-high p-12 overflow-hidden transition-all duration-500 hover:bg-surface-container-highest">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <Zap className="text-primary w-10 h-10 mb-12" />
            <h4 className="font-headline text-2xl text-white mb-4">Uninterrupted Workflow.</h4>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-sm">
              Redundant power supply ensures 100% uptime, even during outages. Focus on your craft without the fear of disconnection.
            </p>
            <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary">System Online</span>
            </div>
          </div>
          <div className="group relative bg-surface-container-high p-12 overflow-hidden transition-all duration-500 hover:bg-surface-container-highest">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <Wifi className="text-primary w-10 h-10 mb-12" />
            <h4 className="font-headline text-2xl text-white mb-4">Ultra-Fast Connectivity.</h4>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-sm">
              Dedicated fiber-optic lines for seamless video conferencing and high-speed uploads. Zero latency for the modern architect.
            </p>
            <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary">10Gbps Symmetrical</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service Strips */}
    <section id="spaces" className="bg-surface-container-low">
      {[
        { id: 'coworking', label: 'Co-Working', sub: 'Open Exchange', desc: 'Shared environments engineered for collaborative innovation and dynamic networking.' },
        { id: 'offices', label: 'Private Offices', sub: 'Sovereign Space', desc: 'Customizable executive suites designed for deep focus and absolute confidentiality.' },
        { id: 'meeting-rooms', label: 'Meeting Rooms', sub: 'Strategic Theater', desc: 'High-fidelity environments equipped for global presentation and executive synthesis.' },
      ].map((item) => (
        <button 
          key={item.id}
          onClick={() => setPage(item.id as Page)}
          className="w-full group block border-t border-outline-variant/10 hover:bg-surface-container-high transition-colors duration-500 text-left"
        >
          <div className="max-w-screen-2xl mx-auto px-8 md:px-20 py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h5 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">{item.sub}</h5>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter">{item.label}</h2>
            </div>
            <div className="flex items-center gap-6">
              <p className="font-body text-on-surface-variant max-w-xs text-right hidden lg:block">{item.desc}</p>
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <ArrowRight className="text-primary group-hover:text-on-primary transition-colors" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </section>

    {/* Masterpiece CTA */}
    <section className="py-40 relative overflow-hidden bg-primary-container">
      <div className="absolute inset-0 topo-lines"></div>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-20 relative z-10 text-center">
        <h2 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tighter max-w-4xl mx-auto leading-none mb-12">
          Ready to build your masterpiece?
        </h2>
        <button className="bg-white text-surface px-12 py-5 rounded-md font-label text-sm uppercase tracking-[0.2em] font-extrabold hover:bg-primary transition-colors">
          Secure Your Suite
        </button>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-32 px-8 md:px-20 bg-surface border-t border-outline-variant/10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">Connect</h2>
          <h3 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Architectural Support.</h3>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-md">
            Our concierge team is available 24/7 to facilitate your transition into the Ambar ecosystem. Reach out for a private consultation.
          </p>
        </div>
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">Direct Line</h4>
              <p className="font-headline text-2xl text-white">+251 11 667 8900</p>
              <p className="font-headline text-2xl text-white">+251 91 123 4567</p>
            </div>
            <div>
              <h4 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">Digital Mail</h4>
              <p className="font-headline text-2xl text-white">concierge@ambar.work</p>
              <p className="font-headline text-2xl text-white">tours@ambar.work</p>
            </div>
          </div>
          <div className="pt-12 border-t border-outline-variant/10">
            <h4 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">Location</h4>
            <p className="font-headline text-2xl text-white">Summit 72</p>
            <p className="font-headline text-2xl text-white">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const MeetingRoomsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex-grow"
  >
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary-container topo-lines pt-24 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent z-10"></div>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 z-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 lg:col-span-8">
          <span className="font-label text-primary text-sm tracking-[0.2em] mb-6 block">PROFESSIONAL SPACES</span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
            Precision <br/> Environments.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
            High-performance meeting rooms designed for digital architects and visionary teams. Integrated AV, ultimate privacy, and architectural calm.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-primary text-on-primary px-8 py-4 rounded font-label text-xs tracking-[0.1em] font-extrabold flex items-center gap-2 group">
              RESERVE NOW
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#accec3]"></div>
              <span className="font-label text-xs text-on-surface-variant tracking-widest uppercase">8 Rooms Available Today</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 lg:col-span-4 h-full relative group hidden md:block">
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
          <img 
            className="w-full h-[500px] object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 bg-surface-container-high/60 backdrop-blur-md p-6 rounded-lg border-t border-primary/10 max-w-xs">
            <p className="font-label text-[10px] text-primary tracking-widest mb-2 uppercase">Featured Spec</p>
            <p className="text-white text-sm font-medium">85" 4K OLED Display with integrated Dolby Atmos Soundscape.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Amenities */}
    <section className="bg-surface py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Built for Focus.</h2>
            <p className="text-on-surface-variant text-lg">Every detail at Ambar is curated to remove friction from your workflow, allowing your team to focus exclusively on the objective.</p>
          </div>
          <div className="font-label text-xs tracking-[0.2em] text-primary border-b border-primary/30 pb-2">AMENITIES INDEX 01-04</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: '01', icon: Key, title: '24/7 Access', desc: 'Secure, biometric-enabled access for late-night breakthroughs and global time-zone synchronicity.' },
            { id: '02', icon: Armchair, title: 'Ergonomic Furniture', desc: 'Herman Miller seating and custom oak-veneer acoustic tables designed for sustained comfort.' },
            { id: '03', icon: Coffee, title: 'Coffee & Snacks', desc: 'Micro-batch roasted coffee and organic refreshment selection curated by local culinary partners.' },
            { id: '04', icon: Headset, title: 'Receptionist Support', desc: 'A professional concierge to welcome guests, manage mail, and facilitate on-site technical support.' },
          ].map((item) => (
            <div key={item.id} className="bg-surface-container-high p-10 rounded-xl hover:bg-surface-container-highest transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-headline text-5xl font-bold text-white/5 group-hover:text-primary/10 transition-colors leading-none">{item.id}</div>
              <item.icon className="text-primary w-10 h-10 mb-8" />
              <h3 className="font-label text-sm font-bold tracking-[0.15em] text-white mb-4 uppercase">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Investment Table */}
    <section className="bg-surface-container-low py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="topo-lines absolute inset-0 opacity-10"></div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">Transparent Valuation</span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">Investment in Space.</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-surface-container-lowest">
                <th className="px-10 py-6 font-label text-[10px] tracking-[0.2em] text-primary uppercase rounded-l-lg">Room Type</th>
                <th className="px-10 py-6 font-label text-[10px] tracking-[0.2em] text-primary uppercase">Capacity</th>
                <th className="px-10 py-6 font-label text-[10px] tracking-[0.2em] text-primary uppercase">Hourly Rate (ETB)</th>
                <th className="px-10 py-6 font-label text-[10px] tracking-[0.2em] text-primary uppercase">Daily Rate (ETB)</th>
                <th className="px-10 py-6 font-label text-[10px] tracking-[0.2em] text-primary uppercase">Weekly Rate (ETB)</th>
                <th className="px-10 py-6 font-label text-[10px] tracking-[0.2em] text-primary uppercase rounded-r-lg text-right">Action</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {[
                { name: 'The Atrium', sub: 'Focus Pod', cap: '1-2', h: '300', d: '1,500', w: '6,000', icon: User },
                { name: 'The Monolith', sub: 'Strategy Suite', cap: '6-10', h: '600', d: '3,000', w: '10,000', icon: Users },
                { name: 'The Horizon', sub: 'Boardroom', cap: '12-20', h: '1,000', d: '5,000', w: '15,000', icon: Building2 },
              ].map((row) => (
                <tr key={row.name} className="bg-surface group hover:bg-surface-container-high transition-colors">
                  <td className="px-10 py-8 rounded-l-lg">
                    <div className="font-headline text-xl text-white font-bold">{row.name}</div>
                    <div className="text-xs text-on-surface-variant font-label tracking-wider uppercase">{row.sub}</div>
                  </td>
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <row.icon className="w-4 h-4" /> {row.cap}
                    </div>
                  </td>
                  <td className="px-10 py-8 text-white font-headline text-lg">{row.h}</td>
                  <td className="px-10 py-8 text-white font-headline text-lg">{row.d}</td>
                  <td className="px-10 py-8 text-white font-headline text-lg">{row.w}</td>
                  <td className="px-10 py-8 rounded-r-lg text-right">
                    <button className="border border-outline/30 hover:border-primary px-6 py-2 rounded font-label text-[10px] tracking-[0.1em] text-white hover:text-primary transition-all uppercase font-bold">Book Room</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </motion.div>
);

const CoWorkingPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex-grow"
  >
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary-container topological-overlay">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
        <div className="lg:col-span-5 z-10">
          <span className="font-label text-xs tracking-[0.2em] text-primary block mb-6">PREMIUM CO-WORKING</span>
          <h1 className="text-white font-headline text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            The Future <br/>of Focus.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-10">
            Designed for the digital architect. A curated ecosystem where monolithic structure meets organic flow. Find your desk in our sanctuary of productivity.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-label text-xs tracking-[0.1em] hover:shadow-[0_0_20px_rgba(172,206,195,0.3)] transition-all">
              RESERVE A DESK
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-full min-h-[400px]">
          <div className="absolute inset-0 bg-surface-container-high rounded-xl overflow-hidden shadow-2xl">
            <img 
              alt="Co-working interior" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1920"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-8 right-8 bg-surface-container-highest/60 backdrop-blur-md px-4 py-2 flex items-center gap-3 rounded-full border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label text-[10px] tracking-widest text-white">LIVE AVAILABILITY</span>
          </div>
        </div>
      </div>
    </section>

    {/* Bento Grid */}
    <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 bg-surface-container-low p-12 flex flex-col justify-between min-h-[300px] border-t border-primary/5">
          <div>
            <Globe className="text-primary mb-6 w-8 h-8" />
            <h3 className="text-white font-headline text-2xl mb-4">24/7 Access</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">Your workflow doesn't adhere to a clock. Enter the sanctuary whenever inspiration strikes, fully secure and supported.</p>
          </div>
        </div>
        <div className="bg-surface-container-high p-8 flex flex-col justify-end">
          <Armchair className="text-primary mb-4 w-6 h-6" />
          <h3 className="text-white font-headline text-lg mb-2">Ergonomic Furniture</h3>
          <p className="text-on-surface-variant font-body text-xs tracking-wide">Herman Miller seating and height-adjustable oak desks.</p>
        </div>
        <div className="bg-surface-container-high p-8 flex flex-col justify-end">
          <Coffee className="text-primary mb-4 w-6 h-6" />
          <h3 className="text-white font-headline text-lg mb-2">Coffee & Snacks</h3>
          <p className="text-on-surface-variant font-body text-xs tracking-wide">Artisan roasts and curated nutritious provisions.</p>
        </div>
        <div className="md:col-span-4 bg-surface-container-highest p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
          <div className="max-w-xl">
            <h3 className="text-white font-headline text-3xl mb-4">Receptionist Support</h3>
            <p className="text-on-surface-variant font-body">Our professional concierge team manages your mail, greets your guests, and ensures the infrastructure remains invisible so you can remain focused.</p>
          </div>
          <Headset className="text-primary w-16 h-16 opacity-20" />
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="bg-surface-container-low py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">Membership Tiers</span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tighter">Flexible Access.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Day Pass', price: '1,500', desc: 'Full access to open workspaces for 24 hours. Ideal for visiting architects.', features: ['High-speed Wifi', 'Unlimited Coffee', 'Lounge Access'] },
            { name: 'Weekly', price: '7,500', desc: 'Five consecutive days of sanctuary. Perfect for project sprints.', features: ['Dedicated Support', 'Meeting Room Credit', '24/7 Access'] },
            { name: 'Monthly', price: '18,000', desc: 'Your permanent base of operations. The ultimate commitment to focus.', features: ['Mailing Address', 'Priority Booking', 'Guest Passes'] },
          ].map((tier) => (
            <div key={tier.name} className="bg-surface p-12 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <h3 className="font-label text-xs tracking-widest text-primary uppercase mb-8">{tier.name}</h3>
              <div className="mb-8">
                <span className="font-headline text-5xl font-bold text-white">{tier.price}</span>
                <span className="text-on-surface-variant font-label text-xs ml-2 uppercase tracking-widest">ETB</span>
              </div>
              <p className="text-on-surface-variant text-sm mb-10 leading-relaxed">{tier.desc}</p>
              <ul className="space-y-4 mb-12">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-white text-xs font-label tracking-wide">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-outline/30 group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-all rounded font-label text-[10px] uppercase tracking-widest font-bold text-white">
                Select Tier
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const PrivateOfficesPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex-grow"
  >
    <section className="relative min-h-[90vh] overflow-hidden flex items-center px-6 md:px-12 pt-32 pb-24 topo-lines">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Premium Private Office Interior" 
          className="w-full h-full object-cover brightness-[0.4]" 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
      </div>
      <div className="relative z-10 max-w-4xl">
        <p className="font-label text-primary text-sm tracking-[0.2em] mb-4">EXCLUSIVE QUARTERS</p>
        <h1 className="font-headline text-6xl md:text-8xl font-bold text-white tracking-tighter leading-tight mb-8">
          The Monolith <br/>of Focus.
        </h1>
        <div className="flex items-center gap-6">
          <div className="h-[1px] w-24 bg-outline-variant"></div>
          <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
            A sanctuary for the digital architect. Fully furnished, sound-isolated, and architecturally inspired private environments for teams of 1 to 20.
          </p>
        </div>
      </div>
    </section>

    {/* Feature List */}
    <section className="bg-surface-container-low py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <h2 className="font-headline text-4xl font-bold text-white mb-6">Designed for <br/>Deep Work.</h2>
          <p className="text-on-surface-variant leading-relaxed mb-12">Every element within our private offices is curated to eliminate friction and elevate professional output.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-label tracking-widest text-primary">OPERATIONAL EXCELLENCE</span>
          </div>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/10">
          {[
            { icon: Key, title: '24/7 Access', desc: "Your workflow isn't bound by time. Full biometric access to your sanctuary, any hour of any day." },
            { icon: Armchair, title: 'Ergonomic Furniture', desc: 'Outfitted with Herman Miller Aeron chairs and custom walnut height-adjustable workstations.' },
            { icon: Coffee, title: 'Coffee & Snacks', desc: 'Artisanal roast coffee and locally sourced healthy nutrition stocked daily in the lounge.' },
            { icon: Headset, title: 'Receptionist Support', desc: 'A dedicated concierge to handle mail, greeting guests, and administrative logistics.' },
          ].map((item) => (
            <div key={item.title} className="p-12 bg-surface-container-high group hover:bg-surface-container-highest transition-colors">
              <item.icon className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-headline text-xl text-white mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Office Pricing */}
    <section className="bg-surface py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">Executive Solutions</span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tighter">Private Quarters.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Focus Studio', cap: '1-4 Persons', price: '4,000', period: 'day', desc: 'A secluded environment for small teams requiring absolute concentration.' },
            { name: 'Strategy Suite', cap: '5-10 Persons', price: '8,000', period: 'day', desc: 'Expansive space for growing teams with dedicated infrastructure.' },
            { name: 'Enterprise Wing', cap: '11-20 Persons', price: '15,000', period: 'day', desc: 'A full-service executive wing with private lounge and meeting room.' },
          ].map((office) => (
            <div key={office.name} className="bg-surface-container-low p-12 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline text-2xl text-white mb-1">{office.name}</h3>
                  <p className="font-label text-[10px] tracking-widest text-primary uppercase">{office.cap}</p>
                </div>
              </div>
              <div className="mb-8">
                <span className="font-headline text-4xl font-bold text-white">{office.price}</span>
                <span className="text-on-surface-variant font-label text-xs ml-2 uppercase tracking-widest">ETB / {office.period}</span>
              </div>
              <p className="text-on-surface-variant text-sm mb-12 leading-relaxed">{office.desc}</p>
              <button className="w-full py-4 bg-primary-container text-white hover:bg-primary hover:text-on-primary transition-all rounded font-label text-[10px] uppercase tracking-widest font-bold">
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar activePage={page} setPage={setPage} />
      
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          {page === 'home' && <HomePage key="home" setPage={setPage} />}
          {page === 'meeting-rooms' && <MeetingRoomsPage key="meeting-rooms" />}
          {page === 'coworking' && <CoWorkingPage key="coworking" />}
          {page === 'offices' && <PrivateOfficesPage key="offices" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
