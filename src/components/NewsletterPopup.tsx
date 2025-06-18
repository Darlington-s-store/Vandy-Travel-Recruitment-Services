import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface NewsletterForm {
  email: string;
  name: string;
  interests: string[];
}

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterForm>();

  const interests = [
    'Job Opportunities',
    'Visa Updates',
    'Study Abroad',
    'Travel Tips',
    'Country Guides'
  ];

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('newsletter-popup-shown');
    if (!hasSeenPopup && !hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const onSubmit = async (data: NewsletterForm) => {
    try {
      // Here you would typically send to your newsletter service
      console.log('Newsletter subscription:', data);
      toast.success('Thank you for subscribing! Check your email for a welcome message.');
      localStorage.setItem('newsletter-popup-shown', 'true');
      setIsVisible(false);
      reset();
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-shown', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-md w-full p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Exclusive Updates!
              </h3>
              <p className="text-gray-600">
                Subscribe to receive job alerts, visa updates, and exclusive opportunities directly in your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Interests (optional):</p>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 text-sm">
                      <input
                        {...register('interests')}
                        type="checkbox"
                        value={interest}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;