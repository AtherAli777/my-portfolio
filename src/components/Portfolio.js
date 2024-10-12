'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioItem = ({ image, title, description, index, url }) => (
  <motion.div 
    className={`flex flex-col md:flex-row mb-20`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`w-full mb-6 md:mb-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:order-2 md:pl-8'}`}>
      <div className="image-container w-full aspect-[4/3] md:h-96 overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center 2%"
          className="w-full h-full"
        />
      </div>
    </div>
    <div className={`w-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-2 text-white font-['Playfair_Display',_serif] hover:text-[#59437a] transition-colors duration-300">
        <h3>{title}</h3>
      </a>
      <p className="text-[#59437a] mb-4 text-base md:text-lg font-['Roboto',_sans-serif]">{description}</p>
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#59437a] font-semibold uppercase tracking-wider inline-block relative group w-max font-['Roboto',_sans-serif]"
      >
        View Project
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#59437a] transition-all duration-300 group-hover:w-full"></span>
      </a>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const portfolioItems = [
    {
      image: "/images/project1.jpg",
      title: "WellBot: A cutting-edge AI-powered Mental Health chatbot",
      description: "Developed an advanced conversational AI chatbot using natural language processing and machine learning techniques. This chatbot provides intelligent responses and assists users with various tasks.",
      url: "https://wellbot.streamlit.app/"
    },
    {
      image: "/images/project2.png",
      title: "Responsive Web Design for my Company",
      description: "I was part of team who created a fully responsive website for my company with modern design principles, ensuring optimal user experience across all devices.",
      url: "https://www.smarttechdevs.com/"
    },
    // {
    //   image: "/images/app-design.jpg",
    //   title: "Mobile App Development",
    //   description: "Designed and developed a cross-platform mobile application using React Native, focusing on user-friendly interface and seamless functionality.",
    //   url: "https://github.com/yourusername/mobile-app"
    // }
  ];

  return (
    <div id="portfolio" className="bg-[#58B19F] py-16 md:py-28 relative overflow-hidden">
      {/* Background design for desktop only */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { x: 0, transition: { duration: 1, ease: "easeOut" } },
            hidden: { x: "-100%", transition: { duration: 1 } }
          }}
        >
          <svg
            viewBox="0 0 100 240"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#4CA190"
              fillOpacity="0.7"
              d="M0,0 C55.228,0 100,44.772 100,100 C100,155.228 55.228,200 0,200 L0,0 Z"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-0">
        <div className="md:mr-64 md:ml-16" ref={ref}>
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-8 md:mb-16 text-white text-center font-['Playfair_Display',_serif]"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Portfolio
          </motion.h1>
          <motion.p 
            className="text-white mb-2 max-w-2xl mx-auto text-center text-base md:text-lg font-['Roboto',_sans-serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Showcasing my latest projects in Generative AI, web development, and Illustrations.
          </motion.p>
          <motion.p 
            className="text-white mb-12 md:mb-20 max-w-2xl mx-auto text-center text-base md:text-lg font-['Roboto',_sans-serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Explore my diverse portfolio of innovative solutions and cutting-edge technologies.
          </motion.p>
          
          <div className="space-y-12 md:space-y-20">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;