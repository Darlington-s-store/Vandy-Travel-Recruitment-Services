import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, CheckCircle, Star } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'Fully licensed recruitment agency with all necessary certifications',
      badge: 'ISO 9001:2015'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Winner of Best Recruitment Agency Award 2023',
      badge: 'Award Winner'
    },
    {
      icon: Users,
      title: 'Trusted by Thousands',
      description: 'Over 10,000 successful placements worldwide',
      badge: '10K+ Placements'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partnerships with employers in 50+ countries',
      badge: '50+ Countries'
    }
  ];

  const partnerships = [
    {
      name: 'UAE Ministry of Labour',
      logo: '🇦🇪',
      description: 'Authorized recruitment partner'
    },
    {
      name: 'Saudi HRDF',
      logo: '🇸🇦',
      description: 'Approved training provider'
    },
    {
      name: 'Qatar Ministry of Labour',
      logo: '🇶🇦',
      description: 'Licensed recruitment agency'
    },
    {
      name: 'Kuwait PACI',
      logo: '🇰🇼',
      description: 'Registered service provider'
    }
  ];

  const testimonialStats = [
    { label: 'Average Rating', value: '4.9/5', icon: Star },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Users },
    { label: 'Repeat Clients', value: '85%', icon: Award }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Trust Vandy Recruitment?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your success is our reputation. Here's why thousands trust us with their career journey.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="h-8 w-8 text-white" />
              </div>
              <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                {cert.badge}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Government Partnerships */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Government Partnerships & Approvals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-blue-100 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Process</h4>
            <p className="text-gray-600 text-sm">
              All documents and personal information are handled with the highest security standards
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Verified Employers</h4>
            <p className="text-gray-600 text-sm">
              We only work with verified, reputable employers who meet our strict standards
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h4>
            <p className="text-gray-600 text-sm">
              24/7 support throughout your journey and even after successful placement
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;