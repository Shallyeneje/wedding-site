"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../layout/navbar";
import FooterSection from "../layout/footer";
import { GalleryImages } from "../home/dummydata";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Create a larger gallery by duplicating images for demo
  const allImages = [...GalleryImages, ...GalleryImages];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? allImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-32 pb-16 px-6 text-center bg-linear-to-b from-primary/5 to-background">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Our Gallery
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Capturing the beautiful moments of Nonso & Adanna's journey together
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openImage(index)}
            >
              <div className="relative">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Dialog/Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
          <VisuallyHidden>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden>
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center p-12">
                <Image
                  src={allImages[selectedImage]}
                  alt={`Gallery image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <p className="text-white text-sm font-medium">
                  {selectedImage + 1} / {allImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <FooterSection />
    </div>
  );
};

export default Gallery;