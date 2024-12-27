import React from 'react';
import { Code, Globe, Server, Database, Cloud, ShoppingCart, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const WebDevelopment = () => {
  const technologies = [
    { 
      name: "HTML5", 
      category: "Frontend",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-red-500"
    },
    { 
      name: "React.js", 
      category: "Frontend Framework",
      icon: <Code className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Node.js", 
      category: "Backend",
      icon: <Server className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "WordPress", 
      category: "CMS",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Shopify", 
      category: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-teal-500"
    },
    { 
      name: "MongoDB", 
      category: "Database",
      icon: <Database className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-green-500"
    },
    { 
      name: "AWS", 
      category: "Cloud Platform",
      icon: <Cloud className="w-6 h-6 text-white" />,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored solutions built from scratch to meet your unique business requirements.",
      image: "/images/custom.jpg"  // Add your image path here
    },
    {
      title: "E-commerce Solutions",
      description: "Build and scale your online store with our expert e-commerce development.",
      image: "/images/ecommerce.jpg"  // Add your image path here
    },
    {
      title: "CMS Development",
      description: "Custom WordPress and other CMS solutions for content-driven websites.",
      image: "/images/cms.jpg"  // Add your image path here
    },
    {
      title: "Management System",
      description: "Scalable and reliable management system for your business.",
      image: "/images/management-system.jpg"  // Add your image path here
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
              Expert Web Development Services
            </span>
            <h1 className="mt-6 text-4xl pb-3 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
              Transform Your Digital Presence
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              We build powerful web solutions using cutting-edge technologies that drive growth and deliver results
            </p>
          </motion.div>

          {/* Technologies Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${tech.gradient} p-3 rounded-xl`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {tech.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Section */}
          <div className="py-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive web development solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Ready to Transform Your Web Presence?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Let's create something amazing together
                </p>
                <div className="mt-8 space-x-4">
                <Link
                   to="/contact" 
                   className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;