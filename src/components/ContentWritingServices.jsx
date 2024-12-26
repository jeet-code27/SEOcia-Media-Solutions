import React from 'react';
import { 
  PenTool, 
  BookOpen, 
  Edit, 
  FileText, 
  Mail, 
  Globe,
  Share2 
} from 'lucide-react';
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

const ContentWritingServices = () => {
  const features = [
    { 
      name: "Blog Writing", 
      category: "Content Creation",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      name: "Copywriting", 
      category: "Marketing",
      icon: <Edit className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "Technical Writing", 
      category: "Documentation",
      icon: <FileText className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      name: "Email Writing", 
      category: "Communication",
      icon: <Mail className="w-6 h-6 text-white" />,
      gradient: "from-red-500 to-pink-500"
    },
    { 
      name: "SEO Content", 
      category: "Optimization",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Content Strategy", 
      category: "Planning",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-red-500"
    },
    { 
      name: "Brand Story", 
      category: "Storytelling",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const services = [
    {
      title: "Website Content",
      description: "Engaging and SEO-optimized content that converts visitors into customers.",
      image: "/images/website-content.jpg"
    },
    {
      title: "Blog Management",
      description: "Regular, high-quality blog posts that establish your authority in your industry.",
      image: "/images/blog-management.png"
    },
    {
      title: "Technical Content",
      description: "Clear and accurate technical documentation, guides, and tutorials.",
      image: "/images/technical-content.jpg"
    },
    {
      title: "Marketing Copy",
      description: "Persuasive copy for advertisements, emails, and marketing materials.",
      image: "/images/marketing.jpg"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-full font-medium">
              Professional Content Writing Services
            </span>
            <h1 className="mt-6 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent md:text-6xl">
              Words That Drive Results
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Create compelling content that engages your audience and drives your business forward
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {feature.category}
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
              <h2 className="text-4xl font-bold mb-4">Our Writing Services</h2>
              <p className="text-xl text-gray-600">Expert content solutions for every need</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Ready to Transform Your Content?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Let's create content that connects and converts
                </p>
                <div className="mt-8 space-x-4">
                  <Link
                   to="/contact"  
                   className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300">
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

export default ContentWritingServices;