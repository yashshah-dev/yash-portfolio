import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, TrendingUp, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projectLinks?: { label: string; url: string }[];
}

const experiences: Experience[] = [
  {
    title: "Specialist Software Architect",
    company: "NICE System Ltd, Pune",
    period: "Oct 2023 - Present",
    description: "Leading cloud transformation and architecture for enterprise-grade Fraud Management product.",
    achievements: [
      "Architected a near real-time data aggregation service for financial analytics.",
      "Designed a consortium-based data intelligence platform for secure insight sharing.",
      "Built online machine learning pipeline for real-time fraud detection.",
      "Integrated Kafka messaging, reducing system response time by 25%."
    ],
    technologies: ["AWS", "EKS", "Kafka", "Java", "Spring", "Microservices", "Machine Learning"],
    projectLinks: [
      { label: "Fraud Detection Engine", url: "https://github.com/yashshah-dev/fraud-detection-engine" },
      { label: "card-ml-model", url: "https://github.com/yashshah-dev/card-ml-model" }
    ]
  },
  {
    title: "Specialist Software Developer",
    company: "NICE System Ltd, Pune",
    period: "Aug 2019 - Oct 2023",
    description: "Developed and maintained Actimize Intelligent Server platform, enhancing scalability and reliability.",
    achievements: [
      "Optimized Java code, reducing memory footprint by 20%.",
      "Improved system efficiency by 30% using JVisualVM and Java Mission Control."
    ],
    technologies: ["Java", "Spring", "Performance Tuning", "Actimize"],
    projectLinks: []
  },
  {
    title: "Senior System Engineer",
    company: "Edgeverve System Ltd, Bengaluru",
    period: "Jul 2016 - Aug 2019",
    description: "Implemented SWIFT cross-border payment system for multiple banks.",
    achievements: [
      "Automated troubleshooting with Linux scripting, reducing resolution time by 40%.",
      "Collaborated with clients for requirements and design documents."
    ],
    technologies: ["Linux", "SWIFT", "Java", "SQL", "System Integration"],
    projectLinks: []
  },
  {
    title: "Technical Engineer Service",
    company: "Quess Corp, Bengaluru",
    period: "Apr 2014 - Jul 2016",
    description: "Developed and maintained USSD/SMS services for telecom operators (Airtel, Vodafone).",
    achievements: [
      "Supported millions of users with zero downtime during upgrades.",
      "Enhanced USSD workflows and optimized features."
    ],
    technologies: ["Java", "SQL", "Telecom", "USSD/SMS"],
    projectLinks: []
  }
];

const CareerHighlights = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Career Highlights
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-white dark:border-gray-900 rounded-full z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Building size={20} className="text-blue-500" />
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </span>
                      </div>

                      <button
                        className="w-full flex justify-between items-center py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => handleToggle(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`exp-details-${index}`}
                      >
                        <span>{exp.title} <span className="text-xs font-normal">({exp.period})</span></span>
                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>

                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            id={`exp-details-${index}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <div className="flex items-center gap-2 mb-4">
                              <Calendar size={16} className="text-gray-400" />
                              <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {exp.description}
                            </p>
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <TrendingUp size={16} className="text-green-500" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            {exp.projectLinks && exp.projectLinks.length > 0 && (
                              <div className="mb-2">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                  <ExternalLink size={16} className="text-blue-500" />
                                  Related Projects
                                </h4>
                                <ul className="space-y-1">
                                  {exp.projectLinks.map((proj, i) => (
                                    <li key={i}>
                                      <a
                                        href={proj.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                      >
                                        {proj.label} <ExternalLink size={14} />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHighlights;
