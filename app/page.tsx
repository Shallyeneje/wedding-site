"use client";
import EventDetails from "@/components/modules/home/event-details";
import GalleryStore from "@/components/modules/home/gallery";
import GiftTheCouple from "@/components/modules/home/gift-the-couple";
import HeroSection from "@/components/modules/home/hero";
import OurStorySection from "@/components/modules/home/our-story";
import RSVPSection from "@/components/modules/home/rsvp";
import WeddingDivider from "@/components/modules/layout/divider";
import FooterSection from "@/components/modules/layout/footer";
import Navbar from "@/components/modules/layout/navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <OurStorySection />
      <WeddingDivider />
      <GalleryStore />
      <WeddingDivider />
      <GiftTheCouple />
      <WeddingDivider />
      <EventDetails />
      <RSVPSection />
      <FooterSection />
    </div>
  );
}
