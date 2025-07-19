import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={24} />,
    skills: [
      "Amazon Web Services (AWS)", "Kubernetes", "Docker", "EKS", "CI/CD", "Linux", "Cost Optimization"
    ]
  },
  {
    title: "Backend Development",
    icon: <Database size={24} />,
    skills: [
      "Java", "Spring", "Node.js", "Python", "Microservices", "Apache Kafka", "RESTful APIs", "API-driven Development"
    ]
  },
  {
    title: "Frontend & UI",
    icon: <Code size={24} />,
    skills: [
      "React Js", "JavaScript", "GraphQL", "UI Design"
    ]
  },
  {
    title: "Databases & Blockchain",
    icon: <Database size={24} />,
    skills: [
      "Oracle", "Postgres", "Cassandra", "SQL", "Hyperledger", "Blockchain"
    ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I work with a wide range of technologies to build scalable, efficient, and user-friendly applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: (index * 0.1) + (skillIndex * 0.05)
                      }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Bars */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Technical Proficiency
            </h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { skill: "Frontend Development", level: 95 },
                { skill: "Backend Development", level: 90 },
                { skill: "Database Design", level: 85 },
                { skill: "DevOps & Cloud", level: 80 },
                { skill: "UI/UX Design", level: 75 },
                { skill: "Mobile Development", level: 70 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.skill}
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    />
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

export default Skills;
