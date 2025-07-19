import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree integration
    try {
      const response = await fetch('https://formspree.io/f/mrblezpb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      } else {
        alert('Sorry, there was a problem sending your message. Please try again later.');
      }
    } catch (error) {
      alert('Sorry, there was a problem sending your message. Please try again later.');
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "yashshah.aug92@gmail.com",
      href: "mailto:yashshah.aug92@gmail.com"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Pune, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/yashshah-dev"
    },
    // {
    //   icon: <Github size={20} />,
    //   label: "GitHub Alt",
    //   href: "https://github.com/yushah8892"
    // },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yash-shah-java-developer/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              {/* Replace 'yourFormId' with your Formspree form ID after signup: https://formspree.io */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Let's work together!
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  I'm currently available for freelance work and exciting full-time opportunities.
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Stylish Toast Popup */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
          <Send size={20} />
          <span>Thank you for your message! I'll get back to you soon.</span>
        </div>
      )}
    </section>
  );
}

export default Contact;
