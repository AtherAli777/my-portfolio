'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="bg-[#58B19F] pt-20 md:pt-12 pb-12 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="px-4 md:mr-64 md:ml-16">
          <motion.div 
            className="flex flex-col md:flex-row md:items-center md:justify-between relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <motion.div
              className="relative z-10 mb-8 md:mb-0 w-full md:w-auto order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative w-full aspect-[1/1] md:w-[580px] md:h-[700px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/ather.png"
                  alt="Ather Ali"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center 2%"
                  className="rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="z-20 max-w-full md:max-w-2xl order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight mb-4 font-serif">
                <span className="block">Hello</span>
                <span className="block">I'm Ather</span>
                <span className="block">Ali</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mt-6">
                Full Stack AI Engineer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;