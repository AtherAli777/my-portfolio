import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe'
import Services from '../components/Services.js'
import Portfolio from '../components/Portfolio.js'
import Experience from '../components/Experience.js'
import Skills from '../components/Skills.js'
import Blog from '../components/Blog.js'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
      {/* Add other sections here */}
    </main>
  );
}