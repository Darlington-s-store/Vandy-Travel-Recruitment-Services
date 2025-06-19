import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Globe,
  Clock,
  Shield,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Apply', href: '/apply' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Manpower Recruitment',
    'Visa Services',
    'Travel Arrangements',
    'Airport Services',
    'Documentation',
    'Hotel Booking',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-secondary-500 to-accent-500 p-3 rounded-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vandy Travel</h3>
                <p className="text-blue-200"> & Recruitment Services</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              We are dealers in recruiting and supplying manpower from all countries to companies worldwide. 
              Your trusted partner for reliable, smooth, and accurate recruitment & travel services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 group-hover:scale-125 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-blue-100 text-sm flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">+233 555 012 965</p>
                  <p className="text-blue-100 text-sm">🇦🇪 +971 559 850 526</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">info@vandyrecruitment.com</p>
                  <p className="text-blue-100 text-sm">apply@vandyrecruitment.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                <p className="text-blue-100 text-sm">
                Feyiase,behind jusbro filling station,<br />
                near New Hope Baptist Educational Complex, Kumasi, Ghana
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">Mon - Fri: 8:00 - 18:00</p>
                  <p className="text-blue-100 text-sm">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Globe className="h-8 w-8 text-secondary-400" />
              </div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-blue-200 text-sm">Countries Served</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-secondary-400" />
              </div>
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-blue-200 text-sm">Jobs Placed</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Shield className="h-8 w-8 text-secondary-400" />
              </div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-blue-200 text-sm">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Award className="h-8 w-8 text-secondary-400" />
              </div>
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-blue-200 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2025 Vandy Travel Recruitment Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;