'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const AboutMe = () => {
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

  const personalInfo = [
    { label: "NAME", value: "Ather Ali" },
    { label: "BIRTHDAY", value: "13. 12. 1997." },
    { label: "ROLE", value: "Full Stack AI Engineer" },
    { label: "EMAIL", value: "athergenius777@gmail.com" },
    { label: "PHONE", value: "(+92) 347 564 6617 " },
    { label: "WEBSITE", value: "www.smarttechdevs.com", isLink: true },
    { label: "LOCATION", value: "Gilgit, Pakistan" },
    { label: "INTERESTS", value: "Books, Scouting, Movies" },
  ];

  return (
    <div id="about" className="bg-[#58B19F] py-12 md:py-24 relative overflow-hidden">
      {/* Animated Semi-circle background - hidden on mobile */}
      <motion.div 
        className="absolute top-0 right-0 w-full h-full overflow-hidden hidden md:block"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { y: 0, transition: { duration: 1, ease: "easeOut" } },
          hidden: { y: "100%", transition: { duration: 1 } }
        }}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 h-full w-3/4"
          preserveAspectRatio="none"
        >
          <path
            fill="#4CA190"
            fillOpacity="0.7"
            d="M100,0 A50,50 0 0,0 50,50 A50,50 0 0,0 100,100 L100,0 Z"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto relative z-10 px-4 md:px-0">
        <div className="md:mr-64 md:ml-16" ref={ref}>
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-8 md:mb-16 text-white text-center relative z-10 font-serif"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About Me
          </motion.h1>

          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Left column */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="space-y-4 text-white">
                {personalInfo.map((item, index) => (
                  <div key={index}>
                    <h2 className="text-sm tracking-[4px] italic mb-1">{item.label}</h2>
                    {item.isLink ? (
                      <Link 
                        href={`https://${item.value}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-base md:text-lg hover:underline"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-base md:text-lg">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="bg-[#58B19F] p-6 md:p-8 rounded-lg w-full flex flex-col">
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#59437a] mb-3">Education</h2>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">Air University Islamabad</h3>
                    <p className="text-base md:text-lg text-white italic">Bachelor of Science in Computer Sciences</p>
                    <p className="text-[10px] md:text-[14px] text-white">Specialized in Natural Language Processing</p>
                    <p className="text-base md:text-lg text-white">2018 - 2022</p>
                    <Link href="https://www.au.edu.pk" target="_blank" rel="noopener noreferrer" className="text-[#59437a] hover:underline text-sm">www.au.edu.pk</Link>
                  </div>
                </div>
                <div className="space-y-4 mb-8 text-white">
                  <h2 className="text-lg md:text-xl font-bold text-[#59437a]">Professional Journey</h2>
                  <p className="text-sm md:text-base">
                    I graduated with a degree in Computer Science in 2022 and began my tech career in 2021 while still studying. During this time, I gained valuable experience working with tech companies and freelancing, where I helped clients achieve their goals. These roles were essential in building my ability to navigate, solve diverse technical challenges and consistently delivering results.
                  </p>
                  <p className="text-sm md:text-base">
                    Building on this foundation, my focus has naturally shifted to generative AI research, where I'm passionate about creating ethical AI systems that make technology more accessible and solve key social issues. This work aligns with my desire to use technology for positive change, and I'm eager to continue applying my skills in this area.
                  </p>
                  <p className="text-sm md:text-base">
                    Ultimately, I aspire to lead research teams, connecting new ideas with practical, real-world solutions, just as I've done in my professional journey so far.
                  </p>
                  <h2 className="text-lg md:text-xl font-bold text-[#59437a] mt-6">Beyond Tech</h2>
                  <p className="text-sm md:text-base">
                    Beyond tech, my experience as a Boy Scout and volunteer has shaped my problem-solving and leadership skills, instilling a strong sense of community and responsibility. Combined with my technical background, this equips me to contribute meaningfully to computer science research. I'm committed to continuous learning and driving impactful change in this evolving field.
                  </p>
                </div>
                <button className="bg-[#c262af] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300 w-full mt-auto text-sm md:text-base font-semibold">
                  DOWNLOAD CV
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;