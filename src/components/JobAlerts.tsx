import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Bell, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

interface JobAlertForm {
  email: string;
  jobCategory: string;
  preferredCountry: string;
  salaryRange: string;
  experienceLevel: string;
}

const JobAlerts: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<JobAlertForm>();

  const jobCategories = [
    'Information Technology',
    'Healthcare & Medical',
    'Engineering',
    'Construction',
    'Hospitality & Tourism',
    'Education',
    'Finance & Banking',
    'Sales & Marketing',
    'Manufacturing',
    'Transportation',
    'Domestic Services',
    'Any'
  ];

  const countries = [
    'United Arab Emirates',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
    'Any Gulf Country',
    'Other'
  ];

  const salaryRanges = [
    'Below $1,000',
    '$1,000 - $2,000',
    '$2,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $8,000',
    'Above $8,000',
    'Negotiable'
  ];

  const experienceLevels = [
    'Fresh Graduate (0-1 years)',
    'Entry Level (1-3 years)',
    'Mid Level (3-5 years)',
    'Senior Level (5-10 years)',
    'Expert Level (10+ years)',
    'Any Level'
  ];

  const onSubmit = async (data: JobAlertForm) => {
    try {
      // Here you would typically send to your backend
      console.log('Job alert subscription:', data);
      toast.success('Job alerts activated! You\'ll receive notifications for matching opportunities.');
      setIsSubscribed(true);
      reset();
    } catch (error) {
      toast.error('Failed to set up job alerts. Please try again.');
    }
  };

  if (isSubscribed) {
    return (
      <motion.div
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bell className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Job Alerts Activated!</h3>
        <p className="text-green-700">
          You'll receive email notifications when new jobs matching your criteria become available.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-6">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bell className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Set Up Job Alerts</h3>
        <p className="text-gray-600">
          Get notified when new jobs matching your preferences become available
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="inline h-4 w-4 mr-1" />
              Job Category
            </label>
            <select
              {...register('jobCategory', { required: 'Job category is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select category</option>
              {jobCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {errors.jobCategory && (
              <p className="mt-1 text-sm text-red-600">{errors.jobCategory.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Preferred Country
            </label>
            <select
              {...register('preferredCountry', { required: 'Country is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            {errors.preferredCountry && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredCountry.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="inline h-4 w-4 mr-1" />
              Salary Range
            </label>
            <select
              {...register('salaryRange')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any salary</option>
              {salaryRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Experience Level
            </label>
            <select
              {...register('experienceLevel')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any level</option>
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Bell className="h-5 w-5" />
          <span>Activate Job Alerts</span>
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        You can unsubscribe from job alerts at any time. We'll only send relevant opportunities.
      </p>
    </motion.div>
  );
};

export default JobAlerts;