'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceItem = ({ period, title, description, location, delay }) => {
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

  return (
    <motion.div
      ref={ref}
      className="mb-8 md:mb-12 flex flex-col md:flex-row"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.7, delay: delay * 0.2 }}
    >
      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-8">
        <p className="text-base md:text-lg text-[#59437a]">{period}</p>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-['Playfair_Display',_serif]">{title}</h3>
        <p className="text-base md:text-lg text-[#59437a] mb-2">{description}</p>
        <p className="text-sm md:text-base text-[#59437a]">{location}</p>
      </div>
    </motion.div>
  );
};

const ExperienceSection = ({ title, experiences }) => {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 font-['Playfair_Display',_serif]">{title}</h2>
      <div className="space-y-6 md:space-y-8">
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceItem {...experience} delay={index} />
            {index < experiences.length - 1 && (
              <motion.hr 
                className="border-[#59437a] mt-8 md:mt-14 border-t-[2px] md:border-t-[2.5px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 + (index + 1) * 0.2 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
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

  const professionalExperiences = [
    {
      period: "January, 2023 - Present",
      title: "Full Stack AI Engineer",
      description: "Developing advanced LLM RAG chatbots using Django, Flask, and Streamlit. Leveraged Langchain with Pinecone and other databases to create knowledge bases, reducing hallucination and boosting accuracy by 70% for client businesses. Implemented custom AI solutions that enhanced customer engagement and operational efficiency across diverse industries.",
      location: "SmartTech Devs / Gilgit"
    },
    {
      period: "May, 2023 - July, 2023",
      title: "AI Emotion Detection Specialist (Freelance)",
      description: "Developed an advanced emotion detection system for healthcare professionals using OpenAI and ParlAI. Implemented machine learning models that improved emotion recognition accuracy by 50%. This solution enhanced patient-doctor communication and treatment personalization in mental health settings.",
      location: "Remote"
    },
    {
      period: "November, 2021 - December, 2022",
      title: "Full Stack Web Developer",
      description: "Led development of 10+ full-stack web applications using Django, Flask, React, and Tailwind CSS. Optimized site performance, reducing load times by 25% and significantly enhancing user experience. Implemented efficient coding practices and responsive designs, resulting in a 40% increase in client satisfaction ratings.",
      location: "SmartTech Devs / Gilgit"
    }
  ];

  const voluntaryExperiences = [
    {
      period: "2005 - Present",
      title: "Boy Scout",
      description: "Since the age of 8, I have dedicated 6 hours per week to community development as a scout. During this time, I have earned numerous badges, and developed skills in leadership, teamwork, and problem-solving. My efforts have contributed to local community, demonstrating my commitment to making a positive impact.",
      location: "Islamabad / Gilgit"
    },
    {
      period: "June, 2022 - December, 2022",
      title: "Tech Mentor",
      description: "Mentoring aspiring developers in web and AI technologies. Conducted weekly workshops, improving participants' coding skills by an average of 40%. Organized hackathons that increased community engagement by 60%.",
      location: "Local Coding Bootcamp / Islamabad"
    }
  ];
  

  return (
    <section id="experience" className="bg-[#58B19F] py-16 md:py-24 relative overflow-hidden">
      {/* Semi-circle background for desktop only */}
      <div className="hidden md:block absolute top-0 right-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-full h-full overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { x: 0, transition: { duration: 1.5, ease: "easeInOut" } },
            hidden: { x: "100%" }
          }}
        >
          <svg
            viewBox="0 0 100 220"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#4CA190"
              fillOpacity="0.7"
              d="M100,0 C55,0 20,45 20,100 C20,155 55,200 100,200 L100,0 Z"
            />
          </svg>
        </motion.div>
      </div>
      <div className="container mx-auto relative px-4 md:px-0">
        <div className="md:mr-64 md:ml-16" ref={ref}>
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-8 md:mb-16 text-white text-center relative z-10 font-['Playfair_Display',_serif]"
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 }
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Experience
          </motion.h1>
         
          <div className="relative z-10">
            <ExperienceSection title="Professional Experience" experiences={professionalExperiences} />
            <ExperienceSection title="Voluntary Experience" experiences={voluntaryExperiences} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;