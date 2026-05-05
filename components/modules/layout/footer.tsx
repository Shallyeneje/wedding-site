"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#0f172a]" />
        <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/wedding_ring.png"
              alt="Logo"
              width={40}
              height={40}
            />
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              MimS 2026
            </h3>
          </div>

          {/* Message */}
          <p className="text-gray-300 max-w-xl text-sm md:text-base">
            Thank you for being part of our love story. We can’t wait to celebrate
            this special day with you.
          </p>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#our-story"
              className="text-gray-400 hover:text-white transition"
            >
              Our Story
            </Link>
            <Link
              href="#rsvp"
              className="text-gray-400 hover:text-white transition"
            >
              RSVP
            </Link>
            <Link
              href="#gallery"
              className="text-gray-400 hover:text-white transition"
            >
              Gallery
            </Link>
            <Link
              href="#event-details"
              className="text-gray-400 hover:text-white transition"
            >
              Event Details
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Shallyeneje. All rights reserved.</p>

          <p className="text-center">
            Made with ❤️ for a beautiful beginning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// "use client";
// import Link from "next/link";

// const links = [
//   { title: "Our Story", href: "#our-story" },
//   { title: "RSVP", href: "#rsvp" },
//   { title: "Gift Registry", href: "#gift-the-couple" },
//   { title: "Gallery", href: "#gallery" },
//   { title: "Event Details", href: "#event-details" },
// ];

// export default function FooterSection() {
//   return (
//     <footer className="border-b bg-white py-12 dark:bg-transparent">
//       <div className="mx-auto max-w-5xl px-6">
//         <div className="flex flex-wrap justify-between gap-6">
//           <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
//             © {new Date().getFullYear()} Shallyeneje, All rights reserved
//           </span>
//           <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
//             {links.map((link, index) => (
//               <Link
//                 key={index}
//                 href={link.href}
//                 className="text-muted-foreground hover:text-primary block duration-150"
//               >
//                 <span>{link.title}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

