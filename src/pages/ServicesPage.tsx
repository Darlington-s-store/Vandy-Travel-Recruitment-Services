import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Shield, 
  Plane, 
  Building, 
  FileText, 
  Hotel,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Globe,
  Phone
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Users,
      title: 'Manpower Recruitment',
      description: 'Connect skilled and unskilled workers with employers worldwide through our extensive network.',
      features: [
        'Skilled Labor Recruitment',
        'Unskilled Labor Supply',
        'Professional Positions',
        'Temporary & Permanent Roles',
        'Industry-Specific Matching',
        'Background Verification'
      ],
      process: [
        'Initial Consultation',
        'Skill Assessment',
        'Job Matching',
        'Interview Coordination',
        'Placement Confirmation'
      ]
    },
    {
      icon: Shield,
      title: 'Visa Services',
      description: 'Complete visa assistance from application to approval with expert legal guidance.',
      features: [
        'Visit Visa Processing',
        'Employment Visa Conversion',
        'Document Authentication',
        'Legal Compliance Check',
        'Embassy Coordination',
        'Status Tracking'
      ],
      process: [
        'Document Review',
        'Application Preparation',
        'Embassy Submission',
        'Follow-up & Tracking',
        'Visa Collection'
      ]
    },
    {
      icon: Plane,
      title: 'Travel Arrangements',
      description: 'End-to-end travel solutions including flights, accommodation, and ground transfers.',
      features: [
        'Flight Booking & Ticketing',
        'Airport Pickup Services',
        'Hotel Reservations',
        'Travel Insurance',
        'Ground Transportation',
        '24/7 Travel Support'
      ],
      process: [
        'Travel Planning',
        'Booking Confirmation',
        'Pre-departure Briefing',
        'Travel Coordination',
        'Arrival Support'
      ]
    },
    {
      icon: Building,
      title: 'Corporate Services',
      description: 'Specialized recruitment solutions for companies seeking international talent.',
      features: [
        'Bulk Recruitment',
        'Staff Augmentation',
        'Compliance Management',
        'Onboarding Support',
        'Performance Monitoring',
        'Contract Management'
      ],
      process: [
        'Requirement Analysis',
        'Candidate Sourcing',
        'Screening & Selection',
        'Documentation',
        'Deployment'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: 'Documentation Services',
      description: 'Professional handling of all required documents and certifications.',
      features: ['Document Authentication', 'Attestation Services', 'Translation Services']
    },
    {
      icon: Hotel,
      title: 'Accommodation Services',
      description: 'Comfortable and affordable accommodation solutions for travelers.',
      features: ['Hotel Booking', 'Short-term Rentals', 'Corporate Housing']
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs.',
      features: ['Emergency Assistance', 'Multi-language Support', 'Real-time Updates']
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: '15+ years of experience in international recruitment and travel services.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive network across 50+ countries with local partnerships.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times with efficient processing systems.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: '98% success rate with secure document handling and legal compliance.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive recruitment and travel solutions designed to connect talent with opportunities worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600">{service.description}</p>
                  
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Process */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, stepIndex) => (
                        <div
                          key={step}
                          className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"
                        >
                          <span className="bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/apply"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184465' : 
                        index === 1 ? '4386366' : 
                        index === 2 ? '2026324' : '416405'
                      }/pexels-photo-${
                        index === 0 ? '3184465' : 
                        index === 1 ? '4386366' : 
                        index === 2 ? '2026324' : '416405'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vandy Recruitment?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for reliable, smooth, and accurate recruitment services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your recruitment and travel needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;