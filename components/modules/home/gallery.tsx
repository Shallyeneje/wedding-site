"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryImages } from "./dummydata";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const firstSix = GalleryImages.slice(0, 6);
  const remaining = GalleryImages.slice(6);

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-[0.08em] mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our beautiful journey together
          </p>
        </div>

        {/* 💎 LUXURY LAYOUT */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* HERO IMAGE */}
          <motion.div
            className="relative h-125 md:h-162.5 rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => setSelected(firstSix[0])}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={firstSix[0]}
              alt=""
              fill
              className="object-cover object-[center_30%] scale-110 transition-transform duration-700 group-hover:scale-125"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-80" />

            {/* Glow */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/grain.png')]" />
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-4">
            {firstSix.slice(1).map((img, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  i === 2 ? "row-span-2" : "h-50"
                }`}
                onClick={() => setSelected(img)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-90 transition" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/grain.png')]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 💫 SEE MORE */}
        {remaining.length > 0 && !showAll && (
          <div className="text-center mt-14">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(true)}
              className="px-10 py-6 text-base tracking-wide hover:bg-primary hover:text-white transition-all"
            >
              View Full Gallery ({remaining.length}+)
            </Button>
          </div>
        )}

        {/* EXPANDED */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {remaining.map((img, i) => (
                <motion.div
                  key={i}
                  className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelected(img)}
                >
                  <Image
                    src={img}
                    alt=""
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-90 transition" />
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/grain.png')]" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🖼 LIGHTBOX */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-6"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="max-w-5xl w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <Image
                  src={selected}
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-3xl object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GallerySection;
// "use client";

// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { GalleryImages } from "./dummydata";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { motion, useInView } from "framer-motion";

// const GallerySection = () => {
//   const displayFirstSeven = GalleryImages.slice(0, 7);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <section
//       ref={ref}
//       id="gallery"
//       className="py-20 bg-background text-foreground"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Gallery
//           </motion.h2>
//           <motion.p
//             className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             A glimpse into our beautiful journey together through cherished
//             moments
//           </motion.p>
//         </div>

//         {/* Bento Grid Gallery */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
//           {/* Large Featured Image - Top Left */}
//           <motion.div
//             className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={
//               isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
//             }
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Image
//               src={displayFirstSeven[0]}
//               alt="Gallery image 1"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
//           </motion.div>

//           {/* Top Right - Medium */}
//           <motion.div
//             className="col-span-2 md:col-span-1 relative rounded-2xl overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={
//               isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
//             }
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Image
//               src={displayFirstSeven[1]}
//               alt="Gallery image 2"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
//           </motion.div>

//           {/* Top Right - Small Tall */}
//           <motion.div
//             className="col-span-2 md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={
//               isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
//             }
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <Image
//               src={displayFirstSeven[2]}
//               alt="Gallery image 3"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
//           </motion.div>

//           {/* Middle Row - Two Small Images */}
//           <motion.div
//             className="col-span-1 relative rounded-2xl overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={
//               isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
//             }
//             whileHover={{ scale: 1.03, rotate: 0.3 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <Image
//               src={displayFirstSeven[3]}
//               alt="Gallery image 4"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
//           </motion.div>

//           <motion.div
//             className="col-span-1 relative rounded-2xl overflow-hidden group"
//             // initial={{ opacity: 0, scale: 0.9 }}
//             // animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
//             animate={
//               isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}
//             }
//             whileHover={{ scale: 1.03, rotate: 0.3 }}
//             transition={{ duration: 0.5, delay: 0.7 }}
//           >
//             <Image
//               src={displayFirstSeven[4]}
//               alt="Gallery image 5"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
//           </motion.div>

//           {/* Show remaining images */}
//           <>
//             <motion.div
//               className="col-span-2 relative rounded-2xl overflow-hidden group"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={
//                 isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
//               }
//               transition={{ duration: 0.5, delay: 0.8 }}
//             >
//               <Image
//                 src={displayFirstSeven[5]}
//                 alt="Gallery image 6"
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
//             </motion.div>

//             {displayFirstSeven.slice(6).map((image, index) => (
//               <motion.div
//                 key={index + 6}
//                 className="col-span-1 relative rounded-2xl overflow-hidden group"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={
//                   isInView
//                     ? { opacity: 1, scale: 1 }
//                     : { opacity: 0, scale: 0.9 }
//                 }
//                 transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
//               >
//                 <Image
//                   src={image}
//                   alt={`Gallery image ${index + 7}`}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
//               </motion.div>
//             ))}
//           </>
//         </div>

//         {/* See More Button */}
//         {GalleryImages.length > 7 && (
//           <motion.div
//             className="text-center mt-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 1 }}
//           >
//             <Button
//               size="lg"
//               variant="outline"
//               className="px-8 text-base"
//               asChild
//             >
//               <Link href="/gallery">
//                 See More ({GalleryImages.length - 7} more photos)
//               </Link>
//             </Button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default GallerySection;
