'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const BlogItem = ({ image, title, date, excerpt, url }) => (
  <motion.div 
    className="flex flex-col md:flex-row mb-12 md:mb-20"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
      <div className="image-container w-full aspect-[4/3] md:h-96 overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-2">
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
    <div className="md:w-1/2 flex flex-col justify-center">
      <Link 
        href={url}
        className="text-2xl md:text-3xl font-bold mb-2 text-white font-['Merriweather', serif] hover:text-[#59437a] transition-colors duration-300"
      >
        <h3>{title}</h3>
      </Link>
      <p className="text-[#59437a] mb-2 text-sm md:text-lg font-['Open Sans', sans-serif]">{date}</p>
      <p className="text-white mb-4 text-base md:text-lg font-['Open Sans', sans-serif]">{excerpt}</p>
      <Link 
        href={url}
        className="text-[#59437a] font-semibold uppercase tracking-wider inline-block relative group w-max font-['Open Sans', sans-serif]"
      >
        Read More
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#59437a] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </div>
  </motion.div>
);

const Blog = () => {
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

  const blogPosts = [
    {
      image: "/images/blog1.png",
      title: "Mastering Langchain: The Ultimate Beginner's Guide to Supercharging Your LLM Projects",
      date: "May 15, 2023",
      excerpt: "Wellbot is a Retrieval-Augmented Generation (RAG) based chatbot project that uses Langchain and Streamlit to create an interactive AI assistant. The chatbot, embodying the role of Dr. Alina, a professional therapist, provides empathetic responses and support to users.",
      url: "https://medium.com/@athergenius777/mastering-langchain-the-ultimate-beginners-guide-to-supercharging-your-llm-projects-f67bbcee7e91"
    },
    {
      image: "/images/blog2.jpg",
      title: "Revolutionizing Mental Health Support: Building WellBot with AI, RAG, and Langchain",
      date: "June 2, 2023",
      excerpt: "An innovative AI-powered mental health chatbot leveraging Retrieval-Augmented Generation (RAG) and Langchain for accurate, context-aware support.",
      url: "https://medium.com/@athergenius777/revolutionizing-mental-health-support-building-wellbot-with-ai-rag-and-langchain-047caca5981f"
    },
    {
      image: "/images/blog3.jpg",
      title: "Building AI-Powered Applications with AWS Bedrock: A Step-by-Step Guide",
      date: "June 20, 2023",
      excerpt: "Unlock the power of generative AI with AWS Bedrock in this comprehensive guide. Learn how to build scalable, serverless AI applications using Lambda functions and API Gateway. Follow our step-by-step tutorial to create cutting-edge AI solutions, from setting up IAM roles to deploying your first AI-powered API.",
      url: "https://medium.com/@athergenius777/building-ai-powered-applications-with-aws-bedrock-a-step-by-step-guide-a1c60960220a"
    }
  ];

  return (
    <section id="blog" className="bg-[#58B19F] py-16 md:py-28 relative overflow-hidden">
      {/* Animated Semi-circle background - hidden on mobile */}
      <div className="hidden md:block">
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
            viewBox="0 0 100 260"
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

      <div className="container mx-auto relative px-4 md:px-0">
        <div className="md:mr-64 md:ml-16" ref={ref}>
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-8 md:mb-16 text-white text-center relative z-10 font-['Merriweather', serif]"
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 }
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-white mb-12 md:mb-20 max-w-2xl mx-auto text-center relative z-10 text-base md:text-lg font-['Open Sans', sans-serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Stay updated with the latest trends and insights in web development and design.
          </motion.p>
          
          <div className="space-y-12 md:space-y-20 relative z-10">
            {blogPosts.map((post, index) => (
              <BlogItem key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;