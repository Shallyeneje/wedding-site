"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GalleryImages } from "./dummydata";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const GallerySection = () => {
  const displayFirstSeven = GalleryImages.slice(0, 7);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  
  return (
    <section ref={ref} id="gallery" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A glimpse into our beautiful journey together through cherished
            moments
          </motion.p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large Featured Image - Top Left */}
          <motion.div 
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={displayFirstSeven[0]}
              alt="Gallery image 1"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </motion.div>

          {/* Top Right - Medium */}
          <motion.div 
            className="col-span-2 md:col-span-1 relative rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={displayFirstSeven[1]}
              alt="Gallery image 2"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </motion.div>

          {/* Top Right - Small Tall */}
          <motion.div 
            className="col-span-2 md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={displayFirstSeven[2]}
              alt="Gallery image 3"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </motion.div>

          {/* Middle Row - Two Small Images */}
          <motion.div 
            className="col-span-1 relative rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src={displayFirstSeven[3]}
              alt="Gallery image 4"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </motion.div>

          <motion.div 
            className="col-span-1 relative rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Image
              src={displayFirstSeven[4]}
              alt="Gallery image 5"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </motion.div>

          {/* Show remaining images */}
          <>
            <motion.div 
              className="col-span-2 relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                src={displayFirstSeven[5]}
                alt="Gallery image 6"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </motion.div>

            {displayFirstSeven.slice(6).map((image, index) => (
              <motion.div
                key={index + 6}
                className="col-span-1 relative rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 7}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </>
        </div>

        {/* See More Button */}
        {GalleryImages.length > 7 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-base"
              asChild
            >
              <Link href="/gallery">
                See More ({GalleryImages.length - 7} more photos)
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
