"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { verifyPaystackPayment } from "@/actions/paystack";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  Loader2,
  Heart,
  Home,
  Gift,
  Calendar,
  Mail,
  User,
  Phone,
} from "lucide-react";
import { CoupleNames } from "../home/dummydata";

interface PaymentData {
  reference: string;
  amount: number;
  status: string;
  paidAt: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  gateway_response: string;
}

const PaymentConfirmation = () => {
  const params = useParams();
  const router = useRouter();
  const reference = params?.ref as string;

  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!reference) {
      setError("No transaction reference provided");
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const result = await verifyPaystackPayment(reference);

        if (result.success && result.data) {
          const customerName =
            result.data.metadata?.custom_fields?.find(
              (field) => field.variable_name === "name"
            )?.value || "Guest";

          const customerPhone =
            result.data.metadata?.custom_fields?.find(
              (field) => field.variable_name === "phone"
            )?.value || "";

          setPaymentData({
            reference: result.data.reference,
            amount: result.data.amount / 100, // Convert from kobo to naira
            status: result.data.status,
            paidAt: result.data.paid_at,
            customerEmail: result.data.customer.email,
            customerName,
            customerPhone,
            gateway_response: result.data.gateway_response,
          });
        } else {
          setError(result.message || "Payment verification failed");
        }
      } catch (err) {
        setError("An unexpected error occurred");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [reference]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - Grayscale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/me_and_mine.png"
          alt="Couple"
          fill
          className="object-cover grayscale opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">
          {loading ? (
            /* Loading State */
            <div className="bg-background/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-12 text-center">
              <div className="inline-block p-4 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full mb-6 animate-pulse">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Verifying Payment
              </h2>
              <p className="text-muted-foreground">
                Please wait while we confirm your transaction...
              </p>
            </div>
          ) : error ? (
            /* Error State */
            <div className="bg-background/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-linear-to-br from-red-500 via-rose-500 to-pink-500 rounded-full mb-6">
                  <XCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-red-500">
                  Payment Failed
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{error}</p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => router.push("/payments")}
                  className="w-full h-12 text-base text-white bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
                >
                  <Gift className="mr-2 w-5 h-5" />
                  Try Again
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="w-full h-12 text-base"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Back to Home
                </Button>
              </div>
            </div>
          ) : paymentData?.status === "success" ? (
            /* Success State */
            <div className="bg-background/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-linear-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full mb-6 animate-pulse">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-500">
                  Payment Successful!
                </h2>
                <p className="text-lg text-muted-foreground mb-2">
                  Thank you for your generous gift to
                </p>
                <p className="text-2xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  {CoupleNames}
                </p>
              </div>

              {/* Payment Details */}
              <div className="space-y-4 mb-8">
                <div className="bg-linear-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl p-6 border-2 border-green-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-muted-foreground">
                      Amount Paid
                    </span>
                    <span className="text-3xl font-bold text-green-500">
                      ₦{paymentData.amount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-3">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold">{paymentData.customerName}</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{paymentData.customerEmail}</p>
                  </div>
                </div>

                {paymentData.customerPhone && (
                  <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold">
                        {paymentData.customerPhone}
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Transaction Date
                    </p>
                    <p className="font-semibold">
                      {formatDate(paymentData.paidAt)}
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Transaction Reference
                  </p>
                  <p className="font-mono text-sm font-semibold break-all">
                    {paymentData.reference}
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="font-semibold text-green-500 capitalize">
                    {paymentData.gateway_response}
                  </p>
                </div>
              </div>

              {/* Thank You Message */}
              <div className="bg-linear-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl p-6 border border-purple-500/20 mb-8">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Your Gift Means the World to Us!
                    </h3>
                    <p className="text-muted-foreground">
                      Your generous contribution will help us start our new
                      journey together. We're incredibly grateful for your love
                      and support. A receipt has been sent to your email
                      address.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => router.push("/")}
                  className="w-full h-12 text-base text-white bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Back to Wedding Website
                </Button>
              </div>
            </div>
          ) : (
            /* Other Status */
            <div className="bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-linear-to-br from-yellow-500 via-orange-500 to-amber-500 rounded-full mb-6">
                  <XCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-500">
                  Payment Pending
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your payment is being processed. Please check back later.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => window.location.reload()}
                  className="w-full h-12 text-base text-white bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
                >
                  <Loader2 className="mr-2 w-5 h-5" />
                  Refresh Status
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="w-full h-12 text-base"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
