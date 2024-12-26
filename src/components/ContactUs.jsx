import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
  AlertCircle,
  Loader2,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Optimize animation variants by reducing complexity
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

const ContactForm = () => {
  const WEB3FORMS_API_KEY = '7b7f830a-9a11-433c-ade7-ff1a7129773d';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9461677122",
      contact: "+91 8949342270",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@seocialmedia.in",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur, Rajasthan, 302019",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/seocial-media",
      gradient: "from-blue-500 to-cyan-500",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/seocialmedia",
      gradient: "from-purple-500 to-pink-500",
      label: "Twitter"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/seocialmedia",
      gradient: "from-orange-500 to-red-500",
      label: "Instagram"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_API_KEY,
          ...formData
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to submit form. Please try again.'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
              Get in Touch
            </span>
            <h1 className="mt-6 pb-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Ready to elevate your digital presence? Reach out to SEOcial Media Solutions 
              and let's discuss how we can help grow your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-5 rounded-xl`} />
                <div className="relative flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-r ${info.gradient} p-3 rounded-xl mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{info.title}</h3>
                  <p className="mt-2 text-gray-600">{info.details}</p>
                  {info.contact && <span className="text-gray-600">{info.contact}</span>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <AnimatePresence mode="wait">
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-800">Message sent successfully! We'll be in touch soon.</p>
                  </motion.div>
                )}
                
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-800">{status.error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all hover:-translate-y-0.5"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all hover:-translate-y-0.5"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all hover:-translate-y-0.5"
                  />
                  <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all hover:-translate-y-0.5"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all hover:-translate-y-0.5 resize-none"
                />

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 hover:-translate-y-0.5"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="images/contact-us.jpg"
                  alt="Contact illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`bg-gradient-to-r ${social.gradient} p-2 rounded-lg transform transition-transform hover:scale-110`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;