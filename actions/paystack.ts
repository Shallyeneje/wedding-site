"use server";

interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string | null;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: {
      custom_fields: Array<{
        display_name: string;
        variable_name: string;
        value: string;
      }>;
    };
    customer: {
      id: number;
      first_name: string | null;
      last_name: string | null;
      email: string;
      customer_code: string;
      phone: string | null;
      metadata: any;
      risk_action: string;
    };
  };
}

export async function verifyPaystackPayment(reference: string) {
  const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

  if (!PAYSTACK_SECRET_KEY) {
    return {
      success: false,
      message: "Payment configuration error. Secret key is missing.",
      data: null,
    };
  }

  const baseUrl = "https://api.paystack.co";
  const url = `${baseUrl}/transaction/verify/${reference}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      cache: "no-store", // Don't cache payment verification
    });

    if (response.status === 200) {
      const result: PaystackVerifyResponse = await response.json();
      return {
        success: result.status,
        message: result.message,
        data: result.data,
      };
    }

    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message || "Payment verification failed",
      data: null,
    };
  } catch (error) {
    console.error("Error verifying payment:", error);
    return {
      success: false,
      message: "An error occurred while verifying the payment.",
      data: null,
    };
  }
}
