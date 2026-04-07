"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gift, Heart, CreditCard } from "lucide-react";
import { motion, useInView } from "framer-motion";

const GiftTheCouple = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section ref={ref} id="gift-the-couple" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div 
            className="relative h-100 sm:h-125 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/gift_image.jpg"
              alt="Gift the couple"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-6 h-6 fill-current text-pink-400" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
                  Your Generosity
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Help Us Start Our Journey
              </h3>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-950 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Gift className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-semibold text-pink-700 dark:text-pink-300">
                Gift Registry
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Gift the Couple
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your presence at our wedding is the greatest gift of all. However,
              if you wish to honor us with a gift, we have set up a simple way
              for you to contribute to our new life together.
            </motion.p>

            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">
                    Monetary Gifts
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Your contributions will help us build our dream home and
                    create unforgettable memories on our honeymoon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">
                    From the Heart
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Every gift, no matter the size, is deeply appreciated and
                    brings us closer to our dreams.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button asChild size="lg" className="px-8 text-base w-full sm:w-auto">
                <Link href="/payments">
                  <Gift className="w-5 h-5" />
                  <span>Send a Gift</span>
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Secure payment processing • All major payment methods accepted
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftTheCouple;