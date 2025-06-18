import { SMS_CONFIG } from '../config/smsConfig';

export interface SMSResponse {
  success: boolean;
  message: string;
  data?: {
    status?: string;
    message?: string;
    error?: string;
  };
}

export interface SMSOptions {
  phoneNumber: string;
  message: string;
  senderId?: string;
}

export const sendSMS = async (options: SMSOptions): Promise<SMSResponse> => {
  try {
    const response = await fetch(SMS_CONFIG.baseUrl + '/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': SMS_CONFIG.apiKey,
      },
      body: JSON.stringify({
        sender: options.senderId || SMS_CONFIG.senderId,
        message: options.message,
        recipients: [options.phoneNumber],
        route: SMS_CONFIG.route
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
      throw new Error(data.error || data.message || 'Failed to send SMS');
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send SMS: Unknown error',
    };
  }
};
