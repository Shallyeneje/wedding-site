"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CouplesEmail } from "./dummydata";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attendance: "",
    dietaryRestrictions: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("RSVP Form Data:", formData);
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="rsvp" className="relative min-h-screen flex items-center py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bento1.jpg"
          alt="Wedding background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Join Our Celebration
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We would be honored by your presence as we celebrate our special day.
            Please RSVP by November 15, 2025.
          </p>
        </div>

        {/* RSVP Form */}
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-12"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            {/* Attendance and Guests */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="attendance" className="text-lg font-medium">
                  Will you attend? *
                </Label>
                <Select
                  value={formData.attendance}
                  onValueChange={(value) => handleChange("attendance", value)}
                  required
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your response" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">
                      ✓ Joyfully Accept
                    </SelectItem>
                    <SelectItem value="no">
                      ✗ Regretfully Decline
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-lg font-medium">
                  Number of Guests
                </Label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => handleChange("guests", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Dietary Restrictions */}
            <div className="space-y-2">
              <Label htmlFor="dietary" className="text-lg font-medium">
                Dietary Restrictions or Allergies
              </Label>
              <Input
                id="dietary"
                type="text"
                placeholder="e.g., Vegetarian, Gluten-free, None"
                value={formData.dietaryRestrictions}
                onChange={(e) =>
                  handleChange("dietaryRestrictions", e.target.value)
                }
                className="h-12"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg font-medium">
                Special Message (Optional)
              </Label>
              <Textarea
                id="message"
                placeholder="Share your wishes or any special requests..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="min-h-32 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-semibold"
            >
              Submit RSVP
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8 text-gray-200">
          <p className="text-sm">
            Having trouble? Contact us at{" "}
            <a
              href="mailto:wedding@nonsoandadanna.com"
              className="text-white underline hover:text-gray-300"
            >
              {CouplesEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;