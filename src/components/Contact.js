'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaGoodreadsG } from 'react-icons/fa';
import { sendForm } from '@emailjs/browser';

const ContactForm = ({ delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSent(false);
    setErrorMessage('');

    try {
      const result = await sendForm(
        'service_kmo0s8f',
        'template_90thviv',
        formRef.current,
        'NDdFK5JMG9cSZXktP'
      );
      console.log(result.text);
      setIsSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error.text);
      setErrorMessage('There was an error sending the email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      ref={ref}
      className="bg-[#59437a] p-6 sm:p-10 rounded-3xl shadow-lg w-full max-w-md mx-auto"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
      }}
      transition={{ duration: 0.7, delay: delay * 0.1 }}
    >
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-6 sm:mb-8">
          <label htmlFor="name" className="block text-white text-base sm:text-lg mb-2 sm:mb-3 font-['Open Sans', sans-serif]">Name</label>
          <input 
            type="text" 
            id="name"
            name="from_name"
            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-[#58B19F] transition duration-300 font-['Open Sans', sans-serif]"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label htmlFor="email" className="block text-white text-base sm:text-lg mb-2 sm:mb-3 font-['Open Sans', sans-serif]">Email</label>
          <input 
            type="email" 
            id="email"
            name="from_email"
            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-[#58B19F] transition duration-300 font-['Open Sans', sans-serif]"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label htmlFor="subject" className="block text-white text-base sm:text-lg mb-2 sm:mb-3 font-['Open Sans', sans-serif]">Subject</label>
          <input 
            type="text" 
            id="subject"
            name="subject"
            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-[#58B19F] transition duration-300 font-['Open Sans', sans-serif]"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-8 sm:mb-10">
          <label htmlFor="message" className="block text-white text-base sm:text-lg mb-2 sm:mb-3 font-['Open Sans', sans-serif]">Message</label>
          <textarea 
            id="message"
            name="message"
            rows="4"
            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-[#58B19F] transition duration-300 resize-none font-['Open Sans', sans-serif]"
            required
            aria-required="true"
          ></textarea>
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-[#59437a] py-3 sm:py-4 px-6 rounded-full font-bold uppercase tracking-wider hover:bg-[#58B19F] hover:text-white transition duration-300 font-['Open Sans', sans-serif] disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {isSent && <p className="mt-4 text-green-500">Your message has been sent successfully!</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </motion.div>
  );
};

const ContactInfo = ({ delay }) => {
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
      className="text-white"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.7, delay: delay * 0.1 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-['Merriweather', serif]">Let's Connect and Create Something Amazing Together</h2>
      <p className="mb-6 sm:mb-8 text-sm sm:text-base font-['Open Sans', sans-serif]">I'm passionate about bringing innovative ideas to life through collaboration. Whether you have a specific project in mind or simply want to discuss the latest trends in AI & web development, I'm eager to connect. My expertise is at your disposal, so don't hesitate to reach out. Let's create something extraordinary together!</p>
      <div className="mb-4 sm:mb-5 text-sm sm:text-base font-['Open Sans', sans-serif]">
        <strong>Name:</strong> Ather Ali
      </div>
      <div className="mb-4 sm:mb-5 text-sm sm:text-base font-['Open Sans', sans-serif]">
        <strong>Address:</strong> Gilgit, Pakistan
      </div>
      <div className="mb-4 sm:mb-5 text-sm sm:text-base font-['Open Sans', sans-serif]">
        <strong>Phone:</strong> (+92) 347 564 6617
      </div>
      <div className="mb-4 sm:mb-5 text-sm sm:text-base font-['Open Sans', sans-serif]">
        <strong>Hours:</strong> 9:00 am - 7:00 pm
      </div>
      <div className="flex space-x-4 sm:space-x-6 mt-8 sm:mt-10">
        <a href="https://web.facebook.com/ather.ali.587/" target="_blank" rel="noopener noreferrer" className="text-[#59437a] hover:text-white transition-colors duration-300">
          <FaFacebookF className="text-2xl sm:text-3xl" aria-label="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/ather-ali-1ba022123/" target="_blank" rel="noopener noreferrer" className="text-[#59437a] hover:text-white transition-colors duration-300">
          <FaLinkedinIn className="text-2xl sm:text-3xl" aria-label="LinkedIn" />
        </a>
        <a href="https://github.com/AtherAli777" target="_blank" rel="noopener noreferrer" className="text-[#59437a] hover:text-white transition-colors duration-300">
          <FaGithub className="text-2xl sm:text-3xl" aria-label="GitHub" />
        </a>
        <a href="https://www.goodreads.com/user/show/58216702-ather-ali" target="_blank" rel="noopener noreferrer" className="text-[#59437a] hover:text-white transition-colors duration-300">
          <FaGoodreadsG className="text-2xl sm:text-3xl" aria-label="Goodreads" />
        </a>
      </div>
    </motion.div>
  );
};


const Contact = () => {
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

  return (
    <section id="contact" className="bg-[#58B19F] py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Animated Semi-circle background - hidden on mobile */}
      <div className="hidden md:block">
        <motion.div 
          className="absolute top-0 right-0 w-full h-full overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { y: 0, transition: { duration: 1, ease: "easeOut" } },
            hidden: { y: "100%", transition: { duration: 1 } }
          }}
        >
          <svg
            viewBox="0 0 100 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#4CA190"
              fillOpacity="0.7"
              d="M100,0 C44.772,0 0,44.772 0,100 C0,155.228 44.772,200 100,200 L100,0 Z"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="md:mr-64 md:ml-16" ref={ref}>
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-10 sm:mb-16 md:mb-20 text-white text-center relative z-10 font-['Merriweather', serif]"
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 }
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>

          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <ContactForm delay={1} />
            </div>
            <div className="w-full md:w-1/2">
              <ContactInfo delay={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;