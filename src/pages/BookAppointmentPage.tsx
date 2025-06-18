import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  CheckCircle,
  Globe,
  GraduationCap,
  Briefcase,
  Plane
} from 'lucide-react';
import { sendBookingConfirmationSMS } from '../services/smsService';

interface AppointmentForm {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  countryOfInterest: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
}

const BookAppointmentPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentForm>();

  const serviceTypes = [
    { value: 'recruitment', label: 'Job Recruitment', icon: Briefcase },
    { value: 'study-abroad', label: 'Study Abroad Consultation', icon: GraduationCap },
    { value: 'visa-services', label: 'Visa Services', icon: Globe },
    { value: 'travel-arrangements', label: 'Travel Arrangements', icon: Plane },
    { value: 'document-processing', label: 'Document Processing', icon: CheckCircle },
    { value: 'general-consultation', label: 'General Consultation', icon: MessageSquare }
  ];

  const countries = [
    'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
    'United Kingdom', 'United States', 'Canada', 'Germany', 'Australia', 
    'Turkey', 'Belgium', 'China', 'Japan', 'Other'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const onSubmit = async (data: AppointmentForm) => {
    setIsSubmitting(true);
    try {
      // Generate appointment reference
      const reference = `VA${Date.now()}`;
      
      // Send SMS to user
      await sendBookingConfirmationSMS(data.phone, {
        service: data.serviceType,
        date: data.preferredDate,
        time: data.preferredTime,
        reference: reference
      });

      // Send notification to admin (you would implement this)
      console.log('Admin notification:', {
        type: 'new_appointment',
        data: { ...data, reference },
        timestamp: new Date().toISOString()
      });

      toast.success('Appointment booked successfully! You will receive a confirmation SMS shortly.');
      reset();
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to book appointment. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <Calendar className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule a consultation with our experts to discuss your career goals and opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Your Consultation</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary-500" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        {...register('phone', { required: 'Phone number is required' })}
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country of Interest
                    </label>
                    <select
                      {...register('countryOfInterest')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-primary-500" />
                  Service Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Service Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceTypes.map((service) => (
                      <label
                        key={service.value}
                        className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          {...register('serviceType', { required: 'Service type is required' })}
                          type="radio"
                          value={service.value}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-3">
                          <service.icon className="h-5 w-5 text-primary-500" />
                          <span className="text-sm font-medium text-gray-900">{service.label}</span>
                        </div>
                        <div className="absolute inset-0 border-2 border-transparent rounded-lg peer-checked:border-primary-500 peer-checked:bg-primary-50"></div>
                      </label>
                    ))}
                  </div>
                  {errors.serviceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                  )}
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                  Appointment Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      {...register('preferredDate', { required: 'Preferred date is required' })}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      {...register('preferredTime', { required: 'Preferred time is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary-500" />
                  Additional Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us more about your requirements or any specific questions you have..."
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <input
                    {...register('consent', { required: 'You must agree to the terms' })}
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I agree to receive SMS and email notifications regarding my appointment and consent to the processing of my personal data for consultation purposes. I understand that Vandy Recruitment Agency will contact me to confirm my appointment details.
                  </label>
                </div>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="h-5 w-5" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-blue-100 mb-6">
              Can't wait for an appointment? Contact us directly for immediate support
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="tel:+233555012965"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>🇬🇭 +233 555 012 965</span>
                </div>
              </a>
              <a
                href="tel:+971559850526"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>🇦🇪 +971 559 850 526</span>
                </div>
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://wa.me/233555012965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp: +233 555 012 965</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointmentPage;