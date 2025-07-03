'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';
import AnimatedButton from './UI/AnimatedButton';
import AnimatedIcon from './UI/AnimatedIcon';

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
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+94 771 783 672",
      href: "tel:+94771783672",
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "winodyawijegunawardhana@gmail.com",
      href: "mailto:winodyawijegunawardhana@gmail.com",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "159/4/1, Weralugaslanda, Ellakkala, Sri Lanka",
      href: "#",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      username: "WinuWijegunawardhana98",
      href: "https://github.com/WinuWijegunawardhana98",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      username: "winodya-wijegunawardhana",
      href: "https://www.linkedin.com/in/winodya-wijegunawardhana",
      color: "hover:text-blue-400"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "Portfolio",
      username: "winodya.dev",
      href: "#",
      color: "hover:text-[#00ff88]"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="bg-[#0a0a0a]">
      <SectionTitle 
        title="Get In Touch" 
        highlightedText="Touch"
        subtitle="Let's connect to discuss opportunities and collaborations"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left side - Contact info */}
        <div className="lg:col-span-2 space-y-6">
          <Card theme="mixed" className="overflow-hidden">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              {/* Contact details */}
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`p-3 rounded-lg ${item.color} text-white flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">{item.label}</h4>
                      <p className="text-white group-hover:text-[#00ff88] transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="pt-6 border-t border-[#3a3a3a]">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + idx * 0.2 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`text-white ${social.color} transition-all duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          
          {/* Map or additional info */}
          <Card theme="green" className="p-4 flex flex-col items-center justify-center min-h-[200px] overflow-hidden">
            <div className="text-center space-y-3">
              <h3 className="text-lg font-bold">Looking for new opportunities</h3>
              <p className="text-sm text-gray-300">Open to full-time positions and freelance projects</p>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-4xl">👨‍💻</span>
              </motion.div>
            </div>
          </Card>
        </div>
        
        {/* Right side - Contact form */}
        <Card className="lg:col-span-3">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>
            <p className="text-gray-400">I'd love to hear from you! Send me a message and I'll respond as soon as possible.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name <span className="text-[#00ff88]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full bg-[#1a1a1a] border ${formErrors.name ? 'border-red-500' : 'border-[#3a3a3a]'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/50 transition-all duration-300`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle size={12} /> {formErrors.name}
                  </motion.p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email <span className="text-[#00ff88]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full bg-[#1a1a1a] border ${formErrors.email ? 'border-red-500' : 'border-[#3a3a3a]'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/50 transition-all duration-300`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle size={12} /> {formErrors.email}
                  </motion.p>
                )}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/50 transition-all duration-300"
                placeholder="What would you like to discuss?"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message <span className="text-[#00ff88]">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={`w-full bg-[#1a1a1a] border ${formErrors.message ? 'border-red-500' : 'border-[#3a3a3a]'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/50 transition-all duration-300`}
                placeholder="Your message here..."
              ></textarea>
              {formErrors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-xs text-red-400 flex items-center gap-1"
                >
                  <AlertCircle size={12} /> {formErrors.message}
                </motion.p>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-between"
            >
              <p className="text-xs text-gray-400">
                <span className="text-[#00ff88]">*</span> Required fields
              </p>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300
                  ${formStatus === 'submitting' ? 'bg-[#2a2a2a] text-gray-400 cursor-wait' : 'bg-[#00ff88] text-black hover:shadow-lg hover:shadow-[#00ff88]/20 hover:translate-y-[-2px]'}`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </motion.div>
            
            {/* Form submission status messages */}
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle size={20} />
                  <span>Your message has been sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle size={20} />
                  <span>Something went wrong! Please try again later.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
