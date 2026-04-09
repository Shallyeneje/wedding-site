"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import React from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CoupleNames } from "../home/dummydata";
import { Gift, Heart, CreditCard, ArrowLeft } from "lucide-react";

const PaymentContainer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);
  const [componentProps, setComponentProps] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);
  const disabled = !form.name || !form.email || !form.amount || !form.phone;

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generateReference = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000000);
    return `ref-${timestamp}-${randomNum}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicKey) {
      toast.error("Payment configuration error. Public key is missing.");
      return;
    }

    try {
      const reference = generateReference();
      setComponentProps({
        email: form.email,
        amount: Number(form.amount) * 100, // Convert to kobo
        currency: "NGN",
        reference,
        metadata: {
          custom_fields: [
            {
              display_name: "Name",
              variable_name: "name",
              value: form.name,
            },
            {
              display_name: "Phone",
              variable_name: "phone",
              value: form.phone,
            },
          ],
        },
        publicKey,
        text: "Complete Payment",
        onSuccess: () => router.push(`/payments/${reference}`),
        onClose: () =>
          toast.error("Transaction was not completed, window closed."),
      });

      setShowPaymentConfirmation(true);
    } catch (error) {
      console.error("Error creating transaction:", error);
      toast.error("An error occurred while creating the transaction.");
    }
  };

  const handleBack = () => {
    setShowPaymentConfirmation(false);
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
          {!showPaymentConfirmation ? (
            /* Payment Form */
            <div className="bg-background/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  Gift {CoupleNames}
                </h1>
                <p className="text-muted-foreground text-lg">
                  Your love and support mean the world to us
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 000 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-base">
                    Gift Amount (₦)
                  </Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="5000"
                    min="100"
                    value={form.amount}
                    onChange={handleChange}
                    className="h-12 text-base"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Minimum amount: ₦100
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={disabled}
                  className="w-full h-12 text-white text-base bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
                >
                  Continue to Payment
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <span>•</span>
                  <span>Powered by Paystack</span>
                </div>
              </div>
            </div>
          ) : (
            /* Payment Confirmation */
            <div className="bg-background/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-linear-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full mb-4 animate-pulse">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Confirm Your Gift
                </h2>
                <p className="text-muted-foreground">
                  Please review your details before proceeding
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-semibold">{form.name}</span>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-semibold">{form.email}</span>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-muted-foreground">Phone</span>
                  <span className="font-semibold">{form.phone}</span>
                </div>
                <div className="bg-linear-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl p-6 border-2 border-purple-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-muted-foreground">
                      Gift Amount
                    </span>
                    <span className="text-3xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      ₦{Number(form.amount).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {componentProps && isClient && (
                  <PaystackButton
                    {...componentProps}
                    className="w-full h-14 text-base font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Complete Payment with Paystack
                  </PaystackButton>
                )}
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="w-full h-12 text-base"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Edit Details
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground">
                  🔒 Your payment is secured with 256-bit SSL encryption
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentContainer;
