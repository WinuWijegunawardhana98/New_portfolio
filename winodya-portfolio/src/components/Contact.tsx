'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';

const Contact = () => {
  // Using a ref without inView to track section visibility
  useInView({
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

  // These are already rendered directly in the JSX, no need to define them as variables
  // Removing the unused variables

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
    <SectionWrapper id="contact" className="bg-[#0a0a0a] py-16 md:py-20">
      <SectionTitle 
        title="Get In Touch" 
        highlightedText="Touch"
        subtitle="Have a project in mind or want to work together? Feel free to reach out!"
      />
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left side - Contact info */}
        <div className="lg:col-span-5">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-400 text-sm">Fill out the form or get in touch directly using the contact details below. I am always open to discussing new projects, creative ideas or opportunities.</p>
          </div>
          
          {/* Contact details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Email</h4>
                <a href="mailto:winodyawijegunawardhana@gmail.com" className="text-gray-300 hover:text-[#00ff88] transition-colors duration-300">
                  winodyawijegunawardhana@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Phone</h4>
                <a href="tel:+94771783672" className="text-gray-300 hover:text-[#00ff88] transition-colors duration-300">
                  078 557 5691
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Address</h4>
                <p className="text-gray-300">
                  575/5A 3rd Kurana, Negombo, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Contact form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-[#111] rounded-lg p-6 border border-[#2a2a2a] space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Full Name</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full bg-[#080808] border ${formErrors.name ? 'border-red-500' : 'border-[#222]'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/20 transition-all duration-300`}
                placeholder="Your name"
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.name}
                </p>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Email Address</h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full bg-[#080808] border ${formErrors.email ? 'border-red-500' : 'border-[#222]'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/20 transition-all duration-300`}
                placeholder="your.email@example.com"
              />
              {formErrors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.email}
                </p>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Subject</h3>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-[#080808] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/20 transition-all duration-300"
                placeholder="Project inquiry"
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Message</h3>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={`w-full bg-[#080808] border ${formErrors.message ? 'border-red-500' : 'border-[#222]'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88]/20 transition-all duration-300`}
                placeholder="Your message..."
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.message}
                </p>
              )}
            </div>
            
            <div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full px-6 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300
                  ${formStatus === 'submitting' ? 'bg-[#2a2a2a] text-gray-400 cursor-wait' : 'bg-[#00ff88] text-black hover:shadow-lg hover:shadow-[#00ff88]/20'}`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>
            </div>
            
            {/* Form submission status messages */}
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-green-500/10 text-green-400 px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle size={20} />
                  <span>Your message has been sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-red-500/10 text-red-400 px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle size={20} />
                  <span>Something went wrong! Please try again later.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
