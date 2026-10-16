import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Product Manager at TechFlow',
    text: 'Muhammad Zain transformed our web application with his expertise in React and Next.js. His clean code architecture and attention to performance optimization resulted in a 40% improvement in load times. Working with him was seamless and professional.',
    active: false,
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO at Digital Innovations',
    text: 'We hired Muhammad Zain to build our AI-powered dashboard, and he exceeded all expectations. His ability to integrate complex AI features while maintaining excellent UI/UX is remarkable. The project was delivered on time with zero compromises on quality.',
    active: true,
  },
  {
    name: 'David Rodriguez',
    role: 'CTO at StartupHub',
    text: "Muhammad Zain is one of the best front-end developers I've worked with. His scalable component architecture and performance optimization skills helped us scale from 1K to 100K users without any issues. Highly recommend him for any serious project.",
    active: false,
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('');

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#111111] rounded-[36px] sm:rounded-[50px] md:rounded-[80px] py-20 md:py-32 px-4 sm:px-6 mx-2 sm:mx-4 overflow-hidden relative">
      
      <motion.div
        animate={{ opacity: [0.08, 0.25, 0.08], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-16 md:top-24 left-[8%] md:left-[15%] pointer-events-none"
      >
        <Star
          fill="white"
          className="w-10 h-10 md:w-14 md:h-14 text-white"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-orange-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-5 md:mb-6"
        >
          Client feedback
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-[38px] sm:text-5xl md:text-6xl font-black mb-7 md:mb-10 leading-[0.95] md:leading-none tracking-tighter"
        >
          Testimonials That
          <br />
          Speak to{' '}
          <span className="text-orange-primary">
            My Results
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto mb-12 md:mb-20 text-base sm:text-lg md:text-xl leading-relaxed px-2"
        >
          Don't just take my word for it — hear from the people I've
          collaborated with.
        </motion.p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[40px] border relative transition-all duration-500 group md:hover:-translate-y-2 ${
                t.active
                  ? 'bg-white/[0.07] border-white/15'
                  : 'bg-white/[0.03] border-white/[0.06]'
              }`}
            >
              
              {/* Quote Icon */}
              <Quote
                className="absolute top-6 right-6 md:top-8 md:right-8 text-white/5 w-12 h-12 md:w-16 md:h-16 group-hover:text-orange-primary/10 transition-colors"
                fill="currentColor"
              />

              {/* Person */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-8 relative z-10">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-orange-primary/15 border border-orange-primary/30 flex items-center justify-center text-orange-primary font-black text-xs md:text-sm shrink-0">
                  {initials(t.name)}
                </div>

                <div className="text-left min-w-0">
                  <h4 className="text-white font-black text-base md:text-lg leading-none mb-1">
                    {t.name}
                  </h4>

                  <p className="text-gray-500 text-[9px] md:text-[11px] font-black uppercase tracking-[0.12em] md:tracking-[0.15em] leading-relaxed">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-5 md:mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-3.5 h-3.5 md:w-4 md:h-4 fill-orange-primary text-orange-primary"
                  />
                ))}

                <span className="text-white font-black ml-2 text-sm md:text-base">
                  5.0
                </span>
              </div>

              {/* Testimonial */}
              <p className="text-gray-400 text-left leading-relaxed text-sm md:text-base relative z-10 group-hover:text-gray-300 transition-colors">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;