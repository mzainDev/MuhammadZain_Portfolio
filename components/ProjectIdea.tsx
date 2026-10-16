import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Award,
  Star,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { Github, Linkedin } from './icons/SocialIcons';

const ProjectIdea: React.FC = () => {
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mzaindev/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/mzainDev',
      icon: Github,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/923410344402',
      icon: MessageCircle,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-[80px] font-black leading-[0.85] text-[#111111] tracking-tighter">
            Let's Build Something
            <br />
            <span className="text-orange-primary">Great Together</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            I'm open to Frontend, Full Stack, and Software Engineering
            opportunities. Let's connect and create something impactful.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-7 py-4 bg-white border-2 border-gray-100 rounded-full font-black text-[#111111] hover:border-orange-primary hover:bg-orange-primary  transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10"
              >
                <Icon className="w-5 h-5" />

                <span>{social.label}</span>

                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            );
          })}

       
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 pt-8">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-orange-primary/10 transition-colors">
              <Star className="w-6 h-6 fill-[#111111] text-[#111111]" />
            </div>

            <span className="font-black text-lg tracking-tight">
              50+ Projects Delivered
            </span>
          </div>

          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-orange-primary/10 transition-colors">
              <Award className="w-6 h-6 fill-[#111111] text-[#111111]" />
            </div>

            <span className="font-black text-lg tracking-tight">
              3+ Years Experience
            </span>
          </div>

          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-orange-primary/10 transition-colors">
              <CheckCircle className="w-6 h-6 fill-[#111111] text-[#111111]" />
            </div>

            <span className="font-black text-lg tracking-tight">
              React & Next.js Expert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;