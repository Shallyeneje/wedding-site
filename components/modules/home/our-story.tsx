"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OurStory, OurStoryImages } from "./dummydata";
import ShowMoreButton from "@/components/custom/showmorebtn";
import { motion, useInView } from "framer-motion";

const OurStorySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const paragraphs = OurStory.trim().split("\n\n");
  const previewParagraphs = paragraphs.slice(0, 3);

  return (
    // 
    <section
  ref={ref}
  id="our-story"
  className="relative py-24 overflow-hidden text-gray-200"
  style={{
    background: `
      radial-gradient(circle at 20% 20%, rgba(200,170,120,0.06), transparent 45%),
      radial-gradient(circle at 80% 70%, rgba(30,60,120,0.35), transparent 55%),
      radial-gradient(circle at 50% 100%, rgba(10,15,31,0.95), transparent 60%),
      #070b17
    `,
  }}
>
      {/* 🌙 subtle navy glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-125 h-125 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* HEADER BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full  bg-white/4 backdrop-blur-2xl border border-white/10">
            <Image
              src="/images/wedding_ring.png"
              alt=""
              width={18}
              height={18}
            />
            <p className="text-xs uppercase tracking-widest text-gray-300">
              Our Story
            </p>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          className="text-center text-4xl md:text-6xl font-serif text-[#e7d3a3] mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          How It All Began
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              {(isExpanded ? paragraphs : previewParagraphs).map((p, i) => (
                <motion.p
                  key={i}
                  className="text-sm md:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-6" onClick={() => setIsExpanded(!isExpanded)}>
              <ShowMoreButton isExpanded={isExpanded} />
            </div>
          </motion.div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4 h-105">

            {/* LARGE IMAGE */}
            <motion.div
              className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
            >
              <Image
                src={OurStoryImages[0]}
                alt=""
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* TOP RIGHT */}
            <motion.div
              className="relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
            >
              <Image
                src={OurStoryImages[1]}
                alt=""
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-b from-[#070b17]/10 via-[#070b17]/40 to-[#070b17]/90" />
            </motion.div>

            {/* BOTTOM RIGHT */}
            <motion.div
              className="relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
            >
              <Image
                src={OurStoryImages[2]}
                alt=""
                fill
                className="object-cover object-[center_25%] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;