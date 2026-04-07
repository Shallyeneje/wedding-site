"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "../layout/navbar";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-11-22T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
        }}
      />
      <Navbar />
      <main className="min-h-screen flex items-center pt-22">
        <section className="w-full h-screen flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <motion.div 
            className="relative hidden md:block w-full md:w-1/2 h-64 md:h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              className="object-cover"
              src="/images/me_and_mine.png"
              alt="Beautiful couple"
              fill
              priority
            />
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 relative">
            {/* Wedding Ring Decoration */}
            <motion.div 
              className="absolute -right-20 top-1/4 w-120 h-120 opacity-20 pointer-events-none z-0"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 0.2, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <Image
                className="object-contain"
                src="/images/wedding_ring.png"
                alt="Wedding Ring"
                fill
                priority
              />
            </motion.div>

            <div className="max-w-xl z-10">
              {/* Couple Names */}
              <motion.div 
                className="flex p-2 px-3 border rounded-full w-fit items-center mb-2 border-card-foreground/30 mx-auto md:mx-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/images/wedding_ring.png"
                  alt="Wedding Ring"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="ml-2 text-sm font-semibold text-muted-foreground">
                  Nonso & Adanna
                </p>
              </motion.div>
              <motion.div 
                className="text-center md:text-left mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-6xl sm:text-8xl md:text-7xl lg:text-8xl font-gothic font-light text-gradient mb-2">
                  Nonso & Adanna
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                  <div className="h-px w-12 bg-linear-to-r from-transparent to-yellow-600"></div>
                  <p className="text-base md:text-lg lg:text-xl tracking-widest text-gray-300 uppercase">
                    November 22, 2025
                  </p>
                  <div className="h-px w-12 bg-linear-to-l from-transparent to-yellow-600"></div>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p 
                className="text-lg md:text-xl text-center md:text-left font-light text-gray-200 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                "Two hearts, one love, forever united. Join us as we celebrate
                the beginning of our forever."
              </motion.p>

              {/* Countdown Timer */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-sm text-gray-400 text-center mb-3 uppercase tracking-wider">
                  Counting Down To
                </p>
                <div className="flex justify-center gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient">
                      {timeLeft.days}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">Days</div>
                  </div>
                  <div className="text-3xl text-gray-600">:</div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">
                      {timeLeft.hours}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">Hours</div>
                  </div>
                  <div className="text-3xl text-gray-600">:</div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">Mins</div>
                  </div>
                  <div className="text-3xl text-gray-600">:</div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">Secs</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="px-8 text-base w-full sm:w-auto"
                >
                  <Link href="#rsvp">
                    <span>RSVP Now</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 text-base w-full sm:w-auto bg-transparent border-white/30 hover:bg-white/10"
                >
                  <Link href="#event-details">
                    <span>Event Details</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
