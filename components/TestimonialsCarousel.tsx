import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial, ThemeConfig } from "../types";
import './TestimonialsCarousel.css';

interface ExtendedTestimonialProps {
  testimonials: Testimonial[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  theme: ThemeConfig;
}

export const TestimonialsCarousel: React.FC<ExtendedTestimonialProps> = ({
  testimonials,
  activeIndex,
  onIndexChange,
  theme,
}) => {
  const handleNext = () => {
    onIndexChange((activeIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    onIndexChange(
      (activeIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  if (!currentTestimonial) return null;

  return (
    <div
      className="testimonial-wrapper aspect-square mx-auto"
      style={{ width: '100%', maxWidth: '1080px' }}
    >
      {/* Dynamic Slide CSS */}
      {currentTestimonial.customCss && (
        <style>{currentTestimonial.customCss}</style>
      )}

      {/* Main Card */}
      <div
        className="testimonial-card relative flex flex-col w-full h-full overflow-hidden rounded-3xl"
        style={{ backgroundColor: theme.cardBg }}
      >
        {/* Decorative Elements */}
        <div
          className="deco-circle deco-circle-top"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="deco-circle deco-circle-bottom"
          style={{ backgroundColor: theme.secondary }}
        ></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-10 md:p-14 pb-32 md:pb-48 text-center pt-16 md:pt-20">
          {/* Quote Icon */}
          <div
            className="quote-icon mb-4 md:mb-8"
            style={{ color: theme.primary }}
          >
            <Quote size={64} className="fill-current opacity-70" />
          </div>

          {/* Testimonial Content */}
          <div className="w-full flex-1 flex flex-col items-center justify-center transition-all duration-300">
            <p
              className="testimonial-text w-[90%] md:w-[85%] mx-auto"
              dir="rtl"
              style={{ color: theme.textColor }}
            >
              "{currentTestimonial.text}"
            </p>

            <div className="flex flex-col items-center space-y-4 md:space-y-6 mt-8 md:mt-12">
              {/* Profile Avatar */}
              <div className="profile-avatar-wrapper group">
                <div
                  className="profile-avatar-ring"
                  style={{
                    background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
                  }}
                ></div>
                <img
                  src={currentTestimonial.avatarUrl}
                  alt={currentTestimonial.name}
                  className="profile-avatar"
                  style={{ borderColor: theme.cardBg }}
                />
              </div>

              {/* Profile Details */}
              <div className="profile-info space-y-1 md:space-y-2">
                <h3
                  className="profile-name"
                  style={{ color: theme.textColor }}
                >
                  {currentTestimonial.name}
                </h3>
                <p
                  className="profile-meta"
                  style={{ color: theme.textColor }}
                >
                  {currentTestimonial.role} •{" "}
                  <span style={{ color: theme.primary, fontWeight: "bold" }}>
                    {currentTestimonial.companyOrCity}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Branding Branding */}
        <div className="branding-container flex items-center justify-between w-full p-6  absolute bottom-0 left-0 right-0">
          {/* Left side: Domain name */}
          <span

            dir="ltr"
            className="brand-en text-sm md:text-base font-bold tracking-widest  opacity-80"
            style={{ color: theme.primary }}
          >
            al-investor.com
          </span>

          {/* Right side: Arabic logo & text */}
          <div className="flex items-center justify-end gap-4" dir="rtl">
            <div
              className="flex items-center justify-center bg-white rounded-lg shadow-sm"
              style={{ width: '64px', height: '64px', aspectRatio: '1/1', border: `2px solid ${theme.primary}` }}
            >
              <img
                src={theme.logoUrl || "/alinvestor white.svg"}
                alt="Logo"
                className="w-10 h-10 object-contain"
                style={{ filter: theme.cardBg === '#1e293b' ? 'invert(1)' : 'brightness(0)' }}
              />
            </div>
            <div className="flex flex-col text-right">
              <span
                className="text-base md:text-lg font-bold leading-tight tracking-tight"
                style={{ color: theme.primary }}
              >
                منصة المستثمر الاقتصادية
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

