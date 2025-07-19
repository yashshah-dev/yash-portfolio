import { Download, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                <img
                  src="/yash-portfolio/Yash_Shah-image.png"
                  alt="Yash Shah profile portrait"
                  className="w-full h-full object-cover rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <MapPin size={20} />
                <span>Pune, India</span>
                <Calendar size={20} />
                <span>11+ Years Experience</span>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Cloud-savvy architect with proven expertise in AWS, EKS, microservices, and distributed systems. Currently leading cloud transformation for enterprise-grade fraud management at NICE Ltd. Skilled in cloud infrastructure, cost optimization, containerization, and API-driven development.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Core Values
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Clean, maintainable code
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    User-centered design thinking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Continuous learning and improvement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Collaborative team work
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Amazon Web Services</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Kubernetes</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Apache Kafka</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Microservices</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Restful APIs</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Java & Spring</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Oracle</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Postgres</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Cassandra</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Node Js</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">React Js</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Languages</h3>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">English</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hobbies</h3>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Culinary Creativity</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Reading productivity and psychology books</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Master of Science in Computer Science, Liverpool John Moores University, London (2021-2022)</li>
                  <li>PG Diploma in Software Development, IIIT Bangalore (2018-2019)</li>
                  <li>Bachelor of Engineering in Electronics & Communications, Gujarat Technological University, Ahmedabad (2009-2013)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>AWS Certified Solution Architect (2024-2027)</li>
                </ul>
              </div>

              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
