"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { EventDetails as EventData } from "./dummydata";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Heart,
  Sparkles,
  Church,
  PartyPopper,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section ref={ref} id="event-details" className="py-20 bg-muted/30">
      <div className="max-w-[95%] md:max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Event Information
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            When & Where
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us in celebrating the union of {EventData.couple}
          </motion.p>
        </div>

        {/* Main Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Church Ceremony Card */}
          <motion.div 
            className="bg-background rounded-3xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Church className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Church Ceremony</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Date</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{EventData.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Time</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{EventData.time.church}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Venue</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{EventData.churchVenue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div 
            className="bg-background rounded-3xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <PartyPopper className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Reception</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Date</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{EventData.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Time</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{EventData.time.reception}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Venue</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{EventData.receptionVenue}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Chief Host */}
          <motion.div 
            className="bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Background Icon */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-5 pointer-events-none text-primary">
              <Heart className="w-full h-full" />
            </div>
            
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <Heart className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-base sm:text-lg">Chief Host</h4>
            </div>
            <p className="text-sm sm:text-base text-foreground/90 relative z-10">{EventData.chiefHost}</p>
          </motion.div>

          {/* Color of the Day */}
          <motion.div 
            className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Background Icon */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-5 pointer-events-none">
              <Sparkles className="w-full h-full text-purple-600 dark:text-purple-400" />
            </div>
            
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h4 className="font-bold text-base sm:text-lg">Color of the Day</h4>
            </div>
            <p className="text-sm sm:text-base text-foreground/90 relative z-10">{EventData.colorOfTheDay}</p>
          </motion.div>

          {/* RSVP Contacts */}
          <motion.div 
            className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-6 border border-green-200 dark:border-green-800 relative overflow-hidden sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {/* Background Icon */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-5 pointer-events-none">
              <Phone className="w-full h-full text-green-600 dark:text-green-400" />
            </div>
            
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h4 className="font-bold text-base sm:text-lg">RSVP Contacts</h4>
            </div>
            <div className="space-y-1 relative z-10">
              {EventData.rsvpcontacts.map((contact, index) => (
                <p key={index} className="text-sm sm:text-base text-foreground/90">
                  {contact}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Toast Message */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg border border-border max-w-3xl mx-auto relative overflow-hidden">
            {/* Watermark Background Image */}
            <div className="absolute bottom-0 left-0 w-40 h-40 opacity-5 pointer-events-none">
              <Image
                src="/images/wedding_ring.png"
                alt="Watermark"
                fill
                className="object-contain grayscale"
              />
            </div>
            
            <div className="mb-4 relative z-10">
              <Heart className="w-10 h-10 text-primary mx-auto fill-current" />
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed relative z-10">
              {EventData.toastmessage.trim()}
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4 relative z-10">— Ruth 1:16</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;