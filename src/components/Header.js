'use client';
import React, { useState, useEffect,useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
    const menuItems = useMemo(() => [
      'Home', 'About', 'Services', 'Portfolio', 'Experience', 'Skills', 'Blog', 'Contact'
    ], []);

  const [activeSection, setActiveSection] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
    if (isMobile) {
      toggleMenu();
    }
  };

  const renderNavItems = () => (
    <ul className={`${isMobile ? "space-y-4" : "text-left"} font-['Poppins', sans-serif]`}>
      {menuItems.map((item, index) => (
        <li key={index} className={isMobile ? "" : "mb-3"}>
          <Link
            href={`#${item.toLowerCase()}`}
            className={`text-base uppercase ${isMobile && isMenuOpen
              ? 'text-white'
              : 'text-[#59437a]'
            } relative group transition-colors`}
            onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
          >
            {item}
            <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${activeSection === item ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`fixed z-30 ${isMobile ? 'top-0 left-0 w-full' : 'right-8 flex flex-col items-start w-48'}`} style={isMobile ? {} : { top: '38vh' }}>
      {isMobile ? (
        <>
          <div className="flex justify-between items-center p-4 bg-[#c262af]">
            <h2 className="text-xl font-['Poppins', sans-serif] text-[#59437a]">Ather Ali</h2>
            <button onClick={toggleMenu} className="text-2xl text-[#59437a]">
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 h-full w-3/4 bg-[#c262af] p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-['Poppins', sans-serif] text-white">Ather Ali</h2>
                  <button onClick={toggleMenu} className="text-2xl text-[#59437a]">×</button>
                </div>
                {renderNavItems()}
              </motion.nav>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <div className="mb-8 w-full">
            <h2 className="text-xl font-['Poppins', sans-serif] font-bold text-[#59437a]">
              <span className="border-b-2 border-[#59437a] pb-1">Ather Ali</span>
            </h2>
          </div>
          <nav className="w-full">
            {renderNavItems()}
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;