"use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Navbar from "../layout/navbar";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);

//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     setMounted(true);

//     const weddingDate = new Date("2026-05-09T00:00:00").getTime();

//     const updateCountdown = () => {
//       const now = new Date().getTime();
//       const distance = weddingDate - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       }
//     };

//     const interval = setInterval(updateCountdown, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   if (!mounted) return null; // 🔥 fixes hydration error

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
//       {/* 🌌 BACKGROUND GLOW */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: `
//             radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,170,120,0.12), transparent 70%),
//             radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,40,80,0.25), transparent 70%)
//           `,
//         }}
//       />

//       <Navbar />

//       <main className="min-h-screen flex items-center pt-24">
//         <section className="w-full h-screen flex flex-col md:flex-row">
//           {/* 🖼 LEFT IMAGE */}
//           <motion.div
//             className="relative hidden md:block w-full md:w-[55%] h-full overflow-hidden"
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/images/doc5.jpg"
//               alt="Beautiful couple"
//               fill
//               priority
//               sizes="(max-width: 768px) 100vw, 55vw"
//               className="object-cover object-[center_35%]"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-linear-to-r from-background/40 to-transparent" />

//             {/* Grain (optional – ensure file exists in /public) */}
//             <div className="absolute inset-0 opacity-[0.03] bg-[url('/grain.png')]" />
//           </motion.div>

//           {/* 💎 RIGHT CONTENT */}
//           <div className="w-full md:w-[45%] flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 relative">
//             {/* Glow Effects */}
//             <div className="absolute w-72 h-72 bg-accent/10 blur-3xl rounded-full top-20 right-10" />
//             <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full bottom-20 left-10" />

//             {/* RING DECOR */}
//             <motion.div
//               className="absolute -right-20 top-1/4 w-112.5 h-112.5 opacity-5"
//               initial={{ opacity: 0, rotate: -180 }}
//               animate={{ opacity: 0.05, rotate: 0 }}
//               transition={{ duration: 1.2 }}
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src="/images/wedding_ring.png"
//                   alt=""
//                   fill
//                   sizes="(max-width: 768px) 100vw, 40vw"
//                   className="object-contain"
//                 />
//               </div>
//             </motion.div>

//             <div className="max-w-lg z-10">
//               {/* NAMES BADGE */}
//               <motion.div
//                 className="flex p-2 px-4 border border-border rounded-full w-fit items-center mb-4 mx-auto md:mx-0 bg-card/40 backdrop-blur-md"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 <Image
//                   src="/images/wedding_ring.png"
//                   alt=""
//                   width={18}
//                   height={18}
//                 />
//                 <p className="ml-2 text-sm text-muted-foreground">
//                   Miracle & Shalom
//                 </p>
//               </motion.div>

//               {/* HEADING */}
//               <motion.div
//                 className="text-center md:text-left mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif tracking-wide mb-2 bg-linear-to-r from-accent via-white to-accent bg-clip-text text-transparent">
//                   Miracle & Shalom
//                 </h1>

//                 <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
//                   <div className="h-px w-12 bg-linear-to-r from-transparent to-accent" />
//                   <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
//                     May 09, 2026
//                   </p>
//                   <div className="h-px w-12 bg-linear-to-l from-transparent to-accent" />
//                 </div>
//               </motion.div>

//               {/* TAGLINE */}
//               <motion.p
//                 className="text-lg text-center md:text-left text-muted-foreground mb-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//               >
//                 Two becoming one; one heart, one mind, one love — forever.
//                 Join us as we begin this journey of a lifetime.
//               </motion.p>

//               {/* ⏳ COUNTDOWN */}
//               <motion.div
//                 className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-border"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//               >
//                 <p className="text-xs text-muted-foreground text-center mb-3 uppercase tracking-widest">
//                   Counting Down To
//                 </p>

//                 <div className="flex justify-center gap-6 text-center">
//                   {Object.entries(timeLeft).map(([key, value], i) => (
//                     <div key={i}>
//                       <div className="text-3xl font-bold text-accent">
//                         {value}
//                       </div>
//                       <div className="text-xs text-muted-foreground uppercase">
//                         {key}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* CTA */}
//               <motion.div
//                 className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 <Button className="px-8 w-full sm:w-auto bg-primary text-primary-foreground shadow-lg hover:opacity-90">
//                   <Link href="#rsvp">RSVP Now</Link>
//                 </Button>

//                 <Button
//                   variant="outline"
//                   className="px-8 w-full sm:w-auto border-accent text-accent hover:bg-accent/10"
//                 >
//                   <Link href="#event-details">Event Details</Link>
//                 </Button>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// "use client";

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
    const weddingDate = new Date("2026-05-09T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-200"
    style={{
  background: `
    radial-gradient(circle at 20% 30%, rgba(200,170,120,0.06), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(30,60,120,0.35), transparent 55%),
    radial-gradient(circle at 50% 100%, rgba(10,15,31,0.9), transparent 60%),
    #070b17
  `,
}}>
      {/* 🌌 NAVY + GOLD LUXURY GLOW */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
    radial-gradient(circle at 20% 30%, rgba(200,170,120,0.08), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(30,60,120,0.25), transparent 50%),
    #0a0f1f
  `,
        }}
      />

      <Navbar />

      <main className="min-h-screen flex items-center pt-22">
        <section className="w-full h-screen flex flex-col md:flex-row">
          {/* 🖼 LEFT IMAGE */}
          <motion.div
            className="relative hidden md:block w-full md:w-1/2 h-full overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/doc5.jpg"
              alt="Beautiful couple"
              fill
              priority
              className="object-cover object-[center_35%] scale-110"
            />

            {/* DARK GRADIENT OVERLAY */}
            {/* <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1f]/80 via-[#0a0f1f]/30 to-transparent" /> */}
<div className="absolute inset-0 bg-linear-to-r from-[#070b17]/90 via-[#070b17]/50 to-transparent" />
            {/* FILM GRAIN */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/grain.png')]" />
          </motion.div>

          {/* 💎 RIGHT CONTENT */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 relative">
            {/* SOFT GOLD GLOW */}
            <div className="absolute w-72 h-72 bg-[#c8aa78]/10 blur-3xl rounded-full top-20 right-10" />
            <div className="absolute w-72 h-72 bg-[#1a2a4a]/20 blur-3xl rounded-full bottom-20 left-10" />

            {/* RING DECOR */}
            <motion.div
              className="absolute -right-20 top-1/4 w-120 h-120 opacity-5"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 0.05, rotate: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/images/wedding_ring.png" alt="" fill />
            </motion.div>

            <div className="max-w-xl z-10">
              {/* NAMES BADGE */}
              <motion.div
                className="flex p-2 px-4 border border-white/10 rounded-full w-fit items-center mb-4 mx-auto md:mx-0 bg-white/5 backdrop-blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Image
                  src="/images/wedding_ring.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <p className="ml-2 text-sm text-gray-300">Miracle & Shalom</p>
              </motion.div>

              {/* HEADING */}
              <motion.div
                className="text-center md:text-left mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-6xl sm:text-8xl md:text-7xl lg:text-8xl font-gothic font-light tracking-[0.02em] leading-[1.1] mb-2 bg-linear-to-r from-[#c8aa78] via-[#e7d3a3] to-[#c8aa78] bg-clip-text text-transparent">
                  Miracle & Shalom
                </h1>

                <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                  <div className="h-px w-12 bg-linear-to-r from-transparent to-[#c8aa78]" />
                  <p className="text-base md:text-lg tracking-[0.25em] uppercase text-gray-400">
                    May 09, 2026
                  </p>
                  <div className="h-px w-12 bg-linear-to-l from-transparent to-[#c8aa78]" />
                </div>
              </motion.div>

              {/* TAGLINE */}
              <motion.p
                className="text-lg md:text-xl text-center md:text-left text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Two becoming one; one heart, one mind, one love; forever. Join
                us as we begin this journey of a lifetime.
              </motion.p>

              {/* ⏳ COUNTDOWN */}
              <motion.div
                className="bg-white/4 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-2xl p-6 mb-8 "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-sm text-gray-400 text-center mb-3 uppercase tracking-wider">
                  Counting Down To
                </p>

                <div className="flex justify-center gap-4 text-center">
                  {Object.entries(timeLeft).map(([key, value], i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-[#c8aa78]">
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Button asChild size="lg" className="px-8 w-full sm:w-auto">
                  <Link href="#rsvp">RSVP Now</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 w-full sm:w-auto border-[#c8aa78]/40 text-[#c8aa78] hover:bg-[#c8aa78]/10"
                >
                  <Link href="#event-details">Event Details</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Navbar from "../layout/navbar";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const weddingDate = new Date("2026-05-09T00:00:00").getTime();

//     const updateCountdown = () => {
//       const now = new Date().getTime();
//       const distance = weddingDate - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     updateCountdown();
//     const interval = setInterval(updateCountdown, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black text-white">
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
//         }}
//       />
//       <Navbar />
//       <main className="min-h-screen flex items-center pt-22">
//         <section className="w-full h-screen flex flex-col md:flex-row">
//           {/* Left Side - Image */}
//           <motion.div
//             className="relative hidden md:block w-full md:w-1/2 h-64 md:h-full"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               className="object-cover"
//               src="/images/doc5b.png"
//               alt="Beautiful couple"
//               fill
//               priority
//             />
//           </motion.div>

//           {/* Right Side - Content */}
//           <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 relative">
//             {/* Wedding Ring Decoration */}
//             <motion.div
//               className="absolute -right-20 top-1/4 w-120 h-120 opacity-20 pointer-events-none z-0"
//               initial={{ opacity: 0, rotate: -180 }}
//               animate={{ opacity: 0.2, rotate: 0 }}
//               transition={{ duration: 1.2, delay: 0.5 }}
//             >
//               <Image
//                 className="object-contain"
//                 src="/images/wedding_ring.png"
//                 alt="Wedding Ring"
//                 fill
//                 priority
//               />
//             </motion.div>

//             <div className="max-w-xl z-10">
//               {/* Couple Names */}
//               <motion.div
//                 className="flex p-2 px-3 border rounded-full w-fit items-center mb-2 border-card-foreground/30 mx-auto md:mx-0"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Image
//                   src="/images/wedding_ring.png"
//                   alt="Wedding Ring"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//                 <p className="ml-2 text-sm font-semibold text-muted-foreground">
//                   Miracle & Shalom
//                 </p>
//               </motion.div>
//               <motion.div
//                 className="text-center md:text-left mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//               >
//                 <h1 className="text-6xl sm:text-8xl md:text-7xl lg:text-8xl font-gothic font-light text-gradient mb-2">
//                   Miracle & Shalom
//                 </h1>
//                 <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
//                   <div className="h-px w-12 bg-linear-to-r from-transparent to-yellow-600"></div>
//                   <p className="text-base md:text-lg lg:text-xl tracking-widest text-gray-300 uppercase">
//                     May 09, 2026
//                   </p>
//                   <div className="h-px w-12 bg-linear-to-l from-transparent to-yellow-600"></div>
//                 </div>
//               </motion.div>

//               {/* Tagline */}
//               <motion.p
//                 className="text-lg md:text-xl text-center md:text-left font-light text-gray-200 mb-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//               >
//                 "Two hearts, one love, forever united. Join us as we celebrate
//                 the beginning of our forever."
//               </motion.p>

//               {/* Countdown Timer */}
//               <motion.div
//                 className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//               >
//                 <p className="text-sm text-gray-400 text-center mb-3 uppercase tracking-wider">
//                   Counting Down To
//                 </p>
//                 <div className="flex justify-center gap-4 text-center">
//                   <div>
//                     <div className="text-3xl font-bold text-gradient">
//                       {timeLeft.days}
//                     </div>
//                     <div className="text-xs text-gray-400 uppercase">Days</div>
//                   </div>
//                   <div className="text-3xl text-gray-600">:</div>
//                   <div>
//                     <div className="text-3xl font-bold text-gradient">
//                       {timeLeft.hours}
//                     </div>
//                     <div className="text-xs text-gray-400 uppercase">Hours</div>
//                   </div>
//                   <div className="text-3xl text-gray-600">:</div>
//                   <div>
//                     <div className="text-3xl font-bold text-gradient">
//                       {timeLeft.minutes}
//                     </div>
//                     <div className="text-xs text-gray-400 uppercase">Mins</div>
//                   </div>
//                   <div className="text-3xl text-gray-600">:</div>
//                   <div>
//                     <div className="text-3xl font-bold text-gradient">
//                       {timeLeft.seconds}
//                     </div>
//                     <div className="text-xs text-gray-400 uppercase">Secs</div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* CTA Buttons */}
//               <motion.div
//                 className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//               >
//                 <Button
//                   asChild
//                   size="lg"
//                   className="px-8 text-base w-full sm:w-auto"
//                 >
//                   <Link href="#rsvp">
//                     <span>RSVP Now</span>
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   size="lg"
//                   variant="outline"
//                   className="px-8 text-base w-full sm:w-auto bg-transparent border-white/30 hover:bg-white/10"
//                 >
//                   <Link href="#event-details">
//                     <span>Event Details</span>
//                   </Link>
//                 </Button>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
