'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ skill, percentage, delay, barHeight = "h-4" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`,
      transition: { 
        duration: 1.5,
        delay: delay * 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="mb-4"
      initial="hidden"
      animate={controls}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs md:text-sm font-medium text-white">{skill}</span>
        <span className="text-xs md:text-sm font-semibold text-[#59437a]">{percentage}%</span>
      </div>
      <div className="w-full bg-white bg-opacity-20 rounded-full">
        <motion.div
          className={`bg-[#59437a] ${barHeight} rounded-full`}
          variants={barVariants}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, delay, barHeight }) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay * 0.2 }}
    >
      <h3 className="text-lg md:text-xl font-bold mb-4 text-white">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill.name} percentage={skill.percentage} delay={index} barHeight={barHeight} />
      ))}
    </motion.div>
  );
};

const Skills = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    const controls = useAnimation();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: 'Python', percentage: 90 },
        { name: 'C++ and C#', percentage: 70 },
        { name: 'JavaScript', percentage: 75 },
        { name: 'React', percentage: 75 },
        { name: 'Django', percentage: 85 },
        { name: 'Flask', percentage: 90 },
        { name: 'Streamlit', percentage: 95 },
        { name: 'RAG', percentage: 75 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: 'Langchain', percentage: 88 },
        { name: 'AWS Cloud', percentage: 80 },
        { name: 'Azure Cloud', percentage: 50 },
        { name: 'TensorFlow ', percentage: 70 },
        { name: 'PyTorch', percentage: 55 },
        { name: 'Pinecone, ChromaDB', percentage: 85 },
        { name: 'FAISS, PGVector', percentage: 90 },
      ]
    },
    {
      title: "Domains",
      skills: [
        { name: 'Generative AI', percentage: 80 },
        { name: 'Machine Learning', percentage: 85 },
        { name: 'Deep Learning', percentage: 75 },
        { name: 'Full Stack Web Development', percentage: 85 },
        { name: 'Adobe Illustration', percentage: 90 },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: 'Communication', percentage: 95 },
        { name: 'Problem Solving', percentage: 90 },
        { name: 'Team Collaboration', percentage: 85 },
        { name: 'Adaptability', percentage: 88 },
      ]
    }
  ];

  return (
    <div id="skills" className="bg-[#58B19F] py-16 md:py-24 relative overflow-hidden">
      {/* Animated background circle */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { scale: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
          hidden: { scale: 0, opacity: 0 }
        }}
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 h-full w-full md:block hidden"
        >
          <circle cx="100" cy="100" r="80" fill="#4CA190" fillOpacity="0.6" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="md:mr-64 md:ml-16" ref={ref}>
          <motion.h1
            className="text-4xl md:text-8xl font-bold mb-8 md:mb-16 text-white text-center relative z-10 font-serif"
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 }
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Skills
          </motion.h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-8">
                <SkillCategory title={category.title} skills={category.skills} delay={index} barHeight="h-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;