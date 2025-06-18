// Payment Service using Paystack API
const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_your-paystack-public-key';
const PAYSTACK_SECRET_KEY = import.meta.env.VITE_PAYSTACK_SECRET_KEY || 'sk_test_your-paystack-secret-key';

interface PaymentData {
  email: string;
  amount: number; // in kobo (multiply by 100)
  currency?: string;
  reference?: string;
  callback_url?: string;
  metadata?: {
    service: string;
    applicant_name: string;
    phone: string;
    [key: string]: any;
  };
}

interface PaymentResponse {
  success: boolean;
  message: string;
  data?: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export const initializePayment = async (paymentData: PaymentData): Promise<PaymentResponse> => {
  try {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
      body: JSON.stringify({
        email: paymentData.email,
        amount: paymentData.amount,
        currency: paymentData.currency || 'GHS',
        reference: paymentData.reference || `VR_${Date.now()}`,
        callback_url: paymentData.callback_url || `${window.location.origin}/payment/callback`,
        metadata: paymentData.metadata,
      }),
    });

    const data = await response.json();
    
    if (response.ok && data.status) {
      return {
        success: true,
        message: 'Payment initialized successfully',
        data: data.data,
      };
    } else {
      throw new Error(data.message || 'Failed to initialize payment');
    }
  } catch (error) {
    console.error('Payment initialization error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to initialize payment',
    };
  }
};

export const verifyPayment = async (reference: string): Promise<PaymentResponse> => {
  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    });

    const data = await response.json();
    
    if (response.ok && data.status) {
      return {
        success: true,
        message: 'Payment verified successfully',
        data: data.data,
      };
    } else {
      throw new Error(data.message || 'Failed to verify payment');
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to verify payment',
    };
  }
};

// Service fees configuration
export const SERVICE_FEES = {
  APPLICATION_PROCESSING: 5000, // 50 GHS in pesewas
  VISA_CONSULTATION: 10000, // 100 GHS in pesewas
  DOCUMENT_PROCESSING: 3000, // 30 GHS in pesewas
  TRAVEL_BOOKING: 2000, // 20 GHS in pesewas
  PREMIUM_SUPPORT: 15000, // 150 GHS in pesewas
};

export const processApplicationPayment = async (
  email: string,
  applicantName: string,
  phone: string,
  service: string = 'Application Processing'
): Promise<PaymentResponse> => {
  const paymentData: PaymentData = {
    email,
    amount: SERVICE_FEES.APPLICATION_PROCESSING,
    metadata: {
      service,
      applicant_name: applicantName,
      phone,
      type: 'application_fee',
    },
  };

  return await initializePayment(paymentData);
};

export const processServicePayment = async (
  email: string,
  amount: number,
  service: string,
  customerName: string,
  phone: string
): Promise<PaymentResponse> => {
  const paymentData: PaymentData = {
    email,
    amount: amount * 100, // Convert to pesewas
    metadata: {
      service,
      customer_name: customerName,
      phone,
      type: 'service_fee',
    },
  };

  return await initializePayment(paymentData);
};

// Paystack Popup Integration (for frontend)
export const openPaystackPopup = (
  email: string,
  amount: number,
  onSuccess: (reference: string) => void,
  onClose: () => void
) => {
  // This would typically use the Paystack inline script
  // For now, we'll redirect to the payment page
  const handler = (window as any).PaystackPop?.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100,
    currency: 'GHS',
    ref: `VR_${Date.now()}`,
    callback: (response: any) => {
      onSuccess(response.reference);
    },
    onClose,
  });

  if (handler) {
    handler.openIframe();
  } else {
    console.error('Paystack script not loaded');
  }
};