"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import {
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CoupleNames } from "../home/dummydata";
import { Gift, Heart, CreditCard } from "lucide-react";

const PaymentContainer = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  // ✅ stable reference (VERY IMPORTANT)
  const [txRef] = useState(
    `wedding-${Date.now()}-${Math.floor(Math.random() * 1000000)}`
  );

  const disabled =
    !form.name ||
    !form.email ||
    !form.phone ||
    !form.amount ||
    Number(form.amount) < 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fwConfig = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
    tx_ref: txRef,
    amount: Number(form.amount),
    currency: "NGN",
    payment_options: "card,banktransfer,ussd",

    customer: {
      email: form.email,
      phone_number: form.phone,
      name: form.name,
    },

    customizations: {
      title: "Wedding Gift",
      description: `Gift for ${CoupleNames}`,
      logo: "/images/wedding_ring.png",
    },

    text: "Complete Payment",

    callback: async (response: any) => {
      closePaymentModal();

      try {
        const res = await fetch("/api/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            transaction_id: response.transaction_id,
          }),
        });

        const data = await res.json();

        if (data.success) {
          toast.success("Payment verified 🎉");
          router.push(`/payments/${response.tx_ref}`);
        } else {
          toast.error("Payment verification failed");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    },

    onClose: () => {
      toast.error("Payment cancelled ❌");
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/me_and_mine.png"
          alt="Couple"
          fill
          className="object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">
          <div className="bg-background/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12">

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-linear-to-br from-[#c8aa78] to-[#8a6a3f] rounded-full mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold mb-3">
                Gift {CoupleNames}
              </h1>

              <p className="text-muted-foreground text-lg">
                Your love and support mean the world to us
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div>
                <Label>Full Name</Label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Amount (₦)</Label>
                <Input
                  name="amount"
                  type="number"
                  min="100"
                  value={form.amount}
                  onChange={handleChange}
                />
              </div>

              {/* Payment Button */}
              <FlutterWaveButton
                {...fwConfig}
                disabled={disabled}
                className="w-full h-12 text-white text-base bg-linear-to-r from-[#c8aa78] to-[#8a6a3f] rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <Heart className="w-5 h-5" />
                Continue to Payment
              </FlutterWaveButton>

              {/* Footer */}
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground pt-4">
                <CreditCard className="w-4 h-4" />
                Secure payment powered by Flutterwave
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentContainer;

// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import React from "react";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
// import { toast } from "sonner";
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { CoupleNames } from "../home/dummydata";
// import { Gift, Heart, CreditCard } from "lucide-react";

// const PaymentContainer = () => {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     amount: "",
//   });

//   const disabled = !form.name || !form.email || !form.amount || !form.phone;

//   const generateReference = () => {
//     const timestamp = new Date().getTime();
//     const randomNum = Math.floor(Math.random() * 1000000);
//     return `wedding-${timestamp}-${randomNum}`;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 👉 Flutterwave config (must be inside to use latest form values)
//   const flutterwaveConfig = {
//     public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
//     tx_ref: generateReference(),
//     amount: Number(form.amount || 0),
//     currency: "NGN",
//     payment_options: "card,banktransfer,ussd",
//     customer: {
//       email: form.email,
//       phone_number: form.phone,
//       name: form.name,
//     },
//     customizations: {
//       title: "Wedding Gift",
//       description: `Gift for ${CoupleNames}`,
//       logo: "/images/wedding_ring.png",
//     },
//   };

//   const fwConfig = {
//     ...flutterwaveConfig,
//     text: "Complete Payment",
//     callback: async (response: any) => {
//       closePaymentModal();

//       if (response.status !== "successful") {
//         toast.error("Payment was not successful");
//         return;
//       }

//       try {
//         const res = await fetch("/api/verify-payment", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             transaction_id: response.transaction_id,
//           }),
//         });

//         const data = await res.json();

//         if (data.success) {
//           toast.success("Payment verified 🎉");
//           router.push(`/payments/${response.tx_ref}`);
//         } else {
//           toast.error("Payment verification failed");
//         }
//       } catch {
//         toast.error("Something went wrong");
//       }
//     },
//     onClose: () => {
//     toast.error("Payment cancelled");
//   },
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/me_and_mine.png"
//           alt="Couple"
//           fill
//           className="object-cover grayscale opacity-20"
//         />
//         <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
//       </div>

//       <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
//         <div className="w-full max-w-2xl">
//           {/* FORM */}
//           <div className="bg-background/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12">
//             <div className="text-center mb-8">
//               <div className="inline-block p-4 bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full mb-4">
//                 <Gift className="w-8 h-8 text-white" />
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-3">
//                 Gift {CoupleNames}
//               </h1>
//               <p className="text-muted-foreground text-lg">
//                 Your love and support mean the world to us
//               </p>
//             </div>

//             {/* Inputs */}
//             <div className="space-y-6">
//               <div>
//                 <Label>Full Name</Label>
//                 <Input name="name" value={form.name} onChange={handleChange} />
//               </div>

//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <Label>Amount (₦)</Label>
//                 <Input
//                   name="amount"
//                   type="number"
//                   value={form.amount}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* FLUTTERWAVE BUTTON */}
//               <FlutterWaveButton
//                 {...fwConfig}
//                 disabled={disabled}
              
//                 className="w-full h-12 text-white text-base bg-linear-to-r from-[#0a0f1f] via-[#1a2a4a] to-[#c8aa78] rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
//               >
//                 <Heart className="w-5 h-5" />
//                 Continue to Payment
//               </FlutterWaveButton>

//               <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground pt-4">
//                 <CreditCard className="w-4 h-4" />
//                 Secure payment powered by Flutterwave
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentContainer;
