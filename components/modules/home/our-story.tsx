"use client";

import React, { useState } from "react";
import Image from "next/image";
import { OurStory, OurStoryImages } from "./dummydata";
import ShowMoreButton from "@/components/custom/showmorebtn";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurStorySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // Split the story into paragraphs
  const paragraphs = OurStory.trim().split("\n\n");
  const previewParagraphs = paragraphs.slice(0, 3); // Show first 3 paragraphs initially

  return (
    <section
      ref={ref}
      id="our-story"
      className="py-16 bg-background "
    >
      <div className="mx-auto max-w-6xl text-foreground relative overflow-hidden">
        {/* Watermark Background Image */}
        <div className="absolute bottom-1/2 left-0 md:bottom-0 w-100 h-100 opacity-10 pointer-events-none">
          <Image
            src="/images/wedding_ring.png"
            alt="Watermark"
            fill
            className="object-contain grayscale"
          />
        </div>

        <div className="m-auto max-w-7xl px-6 py-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex p-2 px-3 border rounded-full mx-auto w-fit items-center mb-6 bg-card/50 border-card-foreground/30">
              <Image
                src="/images/wedding_ring.png"
                alt="Auxano 2025 Logo"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="ml-2 text-sm font-semibold text-muted-foreground">
                Our Love story so far
              </p>
            </div>
          </motion.div>
          <motion.h1
            className="mb-8 text-4xl sm:text-5xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Story
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            {/* Left Side - Story Text */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-lg sm:text-xl font-semibold text-muted-foreground">
                Our Love story so far
              </div>
              <div
                id="expandable-content"
                className="text-sm sm:text-base leading-relaxed space-y-4"
              >
                {(isExpanded ? paragraphs : previewParagraphs).map(
                  (paragraph, index) => (
                    <motion.p
                      key={index}
                      className="text-foreground/90"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  )
                )}
              </div>

              <div className="pt-4 flex justify-center md:justify-start">
                <div onClick={() => setIsExpanded(!isExpanded)}>
                  <ShowMoreButton isExpanded={isExpanded} />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Bento Grid */}
            <div className="grid grid-cols-2 gap-4 h-100 sm:h-112.5 md:h-100">
              {/* Large Image - Takes full height on left */}
              <motion.div
                className="relative row-span-2 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Image
                  src={OurStoryImages[0]}
                  alt="Our story image 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Top Right Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src={OurStoryImages[1]}
                  alt="Our story image 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Image
  src={OurStoryImages[2]}
  alt="Our story image 3"
  fill
  className="object-cover object-[center_25%] scale-100 hover:scale-105 transition-transform duration-500"
/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
