import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '+233555012965';
  const defaultMessage = 'Hello! I would like to inquire about your recruitment services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const contactNumbers = [
    { label: 'Ghana Office', number: '+233555012965', flag: '🇬🇭' },
    { label: 'Ghana Office 2', number: '+233548356290', flag: '🇬🇭' },
    { label: 'UAE Office', number: '+971559850526', flag: '🇦🇪' },
    { label: 'UAE Office 2', number: '+971559135285', flag: '🇦🇪' }
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-80 border"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Vandy Support</p>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700">
                  Hi there! 👋<br />
                  How can we help you today?
                </p>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  {contactNumbers.map((contact) => (
                    <a
                      key={contact.number}
                      href={`tel:${contact.number}`}
                      className="bg-primary-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-primary-600 transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>{contact.flag}</span>
                      <Phone className="h-3 w-3" />
                    </a>
                  ))}
                </div>
                
                <div className="text-center pt-2 border-t">
                  <p className="text-xs text-gray-500">
                    Available 24/7 for emergency support
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 20px rgba(34, 197, 94, 0)'],
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity },
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </>
  );
};

export default WhatsAppButton;