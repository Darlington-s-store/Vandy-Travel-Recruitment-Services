import { SMS_CONFIG } from '../config/smsConfig';

const ARKESEL_API_KEY = SMS_CONFIG.apiKey;
const ARKESEL_BASE_URL = SMS_CONFIG.baseUrl;

interface SMSResponse {
  success: boolean;
  message: string;
  data?: {
    status?: string;
    message?: string;
    error?: string;
  };
}

export const sendWelcomeSMS = async (phoneNumber: string): Promise<SMSResponse> => {
  try {
    const message = `Welcome to Vandy Recruitment Agency! 🌟 
    
Thank you for visiting our website. We're here to help you find amazing job opportunities worldwide.

Need assistance? Contact us:
📞 Ghana: +233 555 012 965
📞 UAE: +971 559 850 526
💬 WhatsApp: wa.me/233555012965

Your journey to success starts here!`;

    const response = await fetch(ARKESEL_BASE_URL + '/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': ARKESEL_API_KEY,
      },
      body: JSON.stringify({
        sender: 'VandyRecruit',
        message: message,
        recipients: [phoneNumber],
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'SMS sent successfully',
        data: data,
      };
    } else {
      throw new Error(data.message || 'Failed to send SMS');
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send SMS',
    };
  }
};

export const sendBookingConfirmationSMS = async (
  phoneNumber: string,
  bookingDetails: {
    service: string;
    date: string;
    time: string;
    reference: string;
  }
): Promise<SMSResponse> => {
  try {
    const message = `Appointment Confirmed! ✅

Service: ${bookingDetails.service}
Date: ${bookingDetails.date}
Time: ${bookingDetails.time}
Reference: ${bookingDetails.reference}

We'll contact you 24hrs before your appointment.

Questions? 
📞 Ghana: +233 555 012 965
📞 UAE: +971 559 850 526

Vandy Recruitment Agency`;

    const response = await fetch(ARKESEL_BASE_URL + '/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': ARKESEL_API_KEY,
      },
      body: JSON.stringify({
        sender: 'VandyRecruit',
        message: message,
        recipients: [phoneNumber],
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'Booking confirmation SMS sent successfully',
        data: data,
      };
    } else {
      throw new Error(data.message || 'Failed to send SMS');
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send SMS',
    };
  }
};

export const sendApplicationStatusSMS = async (
  phoneNumber: string,
  status: 'received' | 'processing' | 'approved' | 'rejected',
  applicantName: string
): Promise<SMSResponse> => {
  try {
    let message = '';
    
    switch (status) {
      case 'received':
        message = `Hi ${applicantName}! 👋

Your job application has been received successfully. 

Application ID: VA${Date.now()}

We'll review your application and get back to you within 48 hours.

Contact us:
📞 Ghana: +233 555 012 965
📞 UAE: +971 559 850 526

Vandy Recruitment Agency`;
        break;
      case 'processing':
        message = `Update: Your application is being processed! ⏳

Hi ${applicantName}, we're currently reviewing your documents and matching you with suitable opportunities.

Expected response: 2-3 business days

Vandy Recruitment Agency`;
        break;
      case 'approved':
        message = `Congratulations ${applicantName}! 🎉

Your application has been approved! We have exciting opportunities for you.

Next steps:
1. We'll call you within 24hrs
2. Prepare for interview
3. Document verification

Vandy Recruitment Agency`;
        break;
      case 'rejected':
        message = `Hi ${applicantName},

Thank you for your interest. Unfortunately, we don't have suitable matches at this time.

We'll keep your profile and contact you when relevant opportunities arise.

Vandy Recruitment Agency`;
        break;
    }

    const response = await fetch(ARKESEL_BASE_URL + '/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': ARKESEL_API_KEY,
      },
      body: JSON.stringify({
        sender: 'VandyRecruit',
        message: message,
        recipients: [phoneNumber],
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'Application status SMS sent successfully',
        data: data,
      };
    } else {
      throw new Error(data.message || 'Failed to send SMS');
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send SMS',
    };
  }
};

// Admin notification SMS for new applications
export const sendAdminApplicationNotificationSMS = async (
  adminPhoneNumber: string,
  applicationData: {
    applicantName: string;
    email: string;
    phone: string;
    jobCategory: string;
    preferredCountry: string;
    applicationId: string;
  }
): Promise<SMSResponse> => {
  try {
    const message = `🚨 NEW JOB APPLICATION

Name: ${applicationData.applicantName}
Email: ${applicationData.email}
Phone: ${applicationData.phone}
Job: ${applicationData.jobCategory}
Country: ${applicationData.preferredCountry}
ID: ${applicationData.applicationId}

Login to admin panel to review.

Vandy Recruitment Agency`;

    const response = await fetch(ARKESEL_BASE_URL + '/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': ARKESEL_API_KEY,
      },
      body: JSON.stringify({
        sender: 'VandyRecruit',
        message: message,
        recipients: [adminPhoneNumber],
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'Admin notification SMS sent successfully',
        data: data,
      };
    } else {
      throw new Error(data.message || 'Failed to send SMS');
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send SMS',
    };
  }
};

// Admin notification SMS for new appointments
export const sendAdminAppointmentNotificationSMS = async (
  adminPhoneNumber: string,
  appointmentData: {
    clientName: string;
    email: string;
    phone: string;
    serviceType: string;
    preferredDate: string;
    preferredTime: string;
    reference: string;
  }
): Promise<SMSResponse> => {
  try {
    const message = `📅 NEW APPOINTMENT BOOKING

Name: ${appointmentData.clientName}
Email: ${appointmentData.email}
Phone: ${appointmentData.phone}
Service: ${appointmentData.serviceType}
Date: ${appointmentData.preferredDate}
Time: ${appointmentData.preferredTime}
Ref: ${appointmentData.reference}

Please confirm appointment.

Vandy Recruitment Agency`;

    const response = await fetch(ARKESEL_BASE_URL + '/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': ARKESEL_API_KEY,
      },
      body: JSON.stringify({
        sender: 'VandyRecruit',
        message: message,
        recipients: [adminPhoneNumber],
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'Admin appointment notification SMS sent successfully',
        data: data,
      };
    } else {
      throw new Error(data.message || 'Failed to send SMS');
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send SMS',
    };
  }
};