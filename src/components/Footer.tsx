import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/yashshah-dev",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/yash-shah-java-developer",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:yashshah.aug92@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-width">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Yash Shah</h3>
              <p className="text-gray-400 leading-relaxed">
                Full-Stack Software Engineer passionate about creating innovative solutions
                and building exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>Pune, India</p>
                <a
                  href="mailto:yashshah.aug92@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  yashshah.aug92@gmail.com
                </a>
                <a
                  href="tel:+917795816405"
                  className="hover:text-white transition-colors"
                >
                  +91 77958 16405
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Yash Shah. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
