'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon, title, description, frameworks, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#59437a] p-6 sm:p-8 rounded-2xl shadow-lg text-center h-full flex flex-col justify-between relative overflow-hidden group"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            delay: delay * 0.2
          }
        },
        hidden: { opacity: 0, y: 50, rotate: -5 }
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered(!isHovered)}
    >
      <div>
        <div className="text-white text-4xl sm:text-5xl mb-4 sm:mb-6" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
        <p className="text-white text-sm sm:text-base opacity-90">{description}</p>
      </div>
      <motion.div 
        className="absolute inset-0 bg-[#4a3663] p-4 sm:p-6 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-white text-lg sm:text-xl font-bold mb-4">Expertise</h4>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {frameworks.map((framework, index) => (
            <span 
              key={index} 
              className="bg-[#59437a] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full"
            >
              {framework}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: "🤖",
      title: "Generative AI",
      description: "I harness the power of cutting-edge AI to create innovative solutions. From natural language processing to image generation, I bring AI-driven ideas to life.",
      frameworks: ["Python", "Langchain", "Vector DBs", "AWS Bedrock", "PyTorch", "TensorFlow"]
    },
    {
      icon: "🌐",
      title: "Full Stack Web/AI Development",
      description: "I create end-to-end SaaS solutions that seamlessly integrate front-end aesthetics with robust back-end functionality. I build responsive, scalable, and user-friendly web and AI SaaS applications.",
      frameworks: ["Langchain", "Vector DBs", "React", "Next.js", "Django", "Flask", "Streamlit"]
    },
    {
      icon: "⚙️",
      title: "Web Development",
      description: "I develop powerful and efficient front-end and server-side solutions. I architect design, databases, APIs, and server logic to ensure your applications run smoothly and securely at scale.",
      frameworks: ["React", "Next.js", "Django", "Flask", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: "🎨",
      title: "Illustration Design",
      description: "I bring ideas to life with custom illustrations. From digital art to brand mascots, I create unique visuals that capture attention and convey your message effectively.",
      frameworks: ["Illustrator", "Procreate", "Figma", "Sketch", "Photoshop"]
    }
  ];

  return (
    <section id="services" className="bg-[#58B19F] py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-4 md:px-0">
        <div className="md:mr-64 md:ml-16" ref={ref}>
          <motion.h2
            className="text-5xl md:text-8xl font-bold mb-8 md:mb-16 text-white text-center relative z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            My Services
          </motion.h2>
          <motion.p
            className="text-white mb-12 sm:mb-16 text-center text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I leverage cutting-edge technologies and creative expertise to deliver exceptional solutions across various domains. From AI integration to stunning visual designs, I&apos;m here to bring your vision to reality.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;