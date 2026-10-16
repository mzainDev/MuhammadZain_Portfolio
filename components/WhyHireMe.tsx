import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Network,
  Container,
  Gauge,
  ArrowUpRight,
} from 'lucide-react';
import myImg from '../assets/Myimg.jpeg';


const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'Building scalable web applications using React, Next.js, Node.js, and TypeScript with clean, maintainable code.',
  },
  {
    icon: Network,
    title: 'System Design & Scalability',
    desc: 'Designing reliable backend architectures, efficient REST APIs, and scalable systems built to handle growing workloads.',
  },
  {
    icon: Container,
    title: 'Containerization & Deployment',
    desc: 'Containerizing applications with Docker and configuring Nginx for reverse proxy, load balancing, and efficient traffic management.',
  },
  {
    icon: Gauge,
    title: 'Performance & Optimization',
    desc: 'Optimizing frontend rendering, backend APIs, and application infrastructure for speed, reliability, and maintainability.',
  },
];

const WhyHireMe: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* Visual */}
        <div className="relative lg:w-2/5 flex justify-center order-2 lg:order-1">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[400px]"
          >
            <div className="rounded-[32px] overflow-hidden border border-black/5 bg-orange-primary">
              <img
                src={myImg}
                alt="Muhammad Zain"
                className="w-full h-full object-cover object-top aspect-[3/4]"
              />
            </div>

            <div className="absolute bottom-6 left-6 bg-white px-6 py-5 rounded-2xl border border-orange-primary/20 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="text-4xl font-black text-[#111111] leading-none">
                3+
              </div>
              <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mt-1">
                Years Experience
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text */}
        <div className="lg:w-3/5 space-y-12 order-1 lg:order-2 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left w-full"
          >
            <p className="font-mono text-orange-primary text-xs uppercase tracking-[0.3em]">
              The Developer
            </p>

            <h2 className="text-6xl md:text-8xl font-black leading-tight text-[#111111] tracking-tighter">
              About <span className="text-orange-primary">Me</span>
            </h2>

            <p className="text-gray-500 text-xl leading-relaxed">
              I'm Muhammad Zain, Full Stack Developer with 3+ years of
              experience building modern, scalable web applications. I specialize in React, Next.js, TypeScript,
              with hands-on experience in Node.js, REST
              APIs, and modern UI development. I focus on turning ideas and
              designs into fast, responsive, and user-friendly products that
              deliver real value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-5"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-orange-primary shrink-0">
                  <item.icon size={24} />
                </div>

                <div>
                  <h4 className="text-lg font-black text-[#111111]">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex px-8 py-4 rounded-full bg-orange-primary hover:bg-orange-600 text-white text-lg font-black transition-all items-center gap-3 uppercase tracking-tighter"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;