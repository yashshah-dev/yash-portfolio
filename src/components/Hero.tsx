import { ArrowDown, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-width">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Cloud-Savvy Software Architect & Senior Developer
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              11+ years experience | AWS Certified | Microservices | Real-Time Data | Java, Spring, React, Node.js
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Delivering robust, scalable, and high-performance solutions for financial, enterprise, and cloud-native systems.<br />
              Currently open for freelance and contract opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="/Yash_Shah_Software_Architect.pdf"
              download
              className="btn-primary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-secondary flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/yash-shah-java-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yashshah-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <a
              href="#about"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
