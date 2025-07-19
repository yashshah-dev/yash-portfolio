import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Image } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "fraud-detection-engine",
    description: "Enterprise fraud detection logic and engine (Java)",
    technologies: ["Java", "Spring", "Fraud Detection"],
    githubUrl: "https://github.com/yashshah-dev/fraud-detection-engine",
    liveUrl: "",
    imageUrl: "/yash-portfolio/Real-time-fraud-detection.png",
  },
  {
    title: "card-ml-model",
    description: "Machine learning model for card fraud (Python)",
    technologies: ["Python", "ML", "Fraud Detection"],
    githubUrl: "https://github.com/yashshah-dev/card-ml-model",
    liveUrl: "",
    imageUrl: "/yash-portfolio/card transaction analysis.png",
  },
  {
    title: "rule-builder-ui",
    description: "UI for rule-based fraud detection (JavaScript)",
    technologies: ["JavaScript", "React", "UI"],
    githubUrl: "https://github.com/yashshah-dev/rule-builder-ui",
    liveUrl: "",
  },
  {
    title: "Microservice",
    description: "Event booking platform using Node.js, GraphQL, and React",
    technologies: ["Node.js", "GraphQL", "React"],
    githubUrl: "https://github.com/yushah8892/Microservice",
    liveUrl: "",
  },
  {
    title: "BookMyEvents",
    description: "Event booking web app (Node.js, GraphQL, React)",
    technologies: ["Node.js", "GraphQL", "React"],
    githubUrl: "https://github.com/yushah8892/BookMyEvents",
    liveUrl: "",
  },
  {
    title: "burger-builder-react",
    description: "Burger builder web app (React)",
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/yushah8892/burger-builder-react",
    liveUrl: "",
  },
  {
    title: "Certification-network-Hyperledger",
    description: "Blockchain certification network (Shell)",
    technologies: ["Shell", "Hyperledger", "Blockchain"],
    githubUrl: "https://github.com/yushah8892/Certification-network-Hyperledger",
    liveUrl: "",
  },
  {
    title: "Hyperledger_Distributed_Profiles",
    description: "Distributed customer profiles on Hyperledger Fabric",
    technologies: ["JavaScript", "Hyperledger", "Blockchain"],
    githubUrl: "https://github.com/yushah8892/Hyperledger_Distributed_Profiles",
    liveUrl: "",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in full-stack development.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image or Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title + ' preview'}
                      className="max-h-44 w-auto mx-auto object-contain"
                      style={{ maxHeight: '11rem' }}
                      loading="lazy"
                    />
                  ) : (
                    <Image size={48} className="text-white/70" />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
