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
        {/* Decorative Elements (Apple Mesh Gradient Style) */}
        <div
          className="deco-circle deco-circle-top"
          style={{ 
            background: `radial-gradient(circle at center, ${theme.primary}, transparent)`,
            filter: 'blur(100px)',
            opacity: 0.2
          }}
        ></div>
        <div
          className="deco-circle deco-circle-bottom"
          style={{ 
            background: `radial-gradient(circle at center, ${theme.secondary}, transparent)`,
            filter: 'blur(100px)',
            opacity: 0.2
          }}
        ></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-10 md:p-14 pb-32 md:pb-48 text-center pt-16 md:pt-20">
          {/* Quote Icon */}
          <div
            className="quote-icon mb-2 md:mb-4"
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

        {/* Ultra-Minimalist Branding Footer */}
        <div className="branding-container absolute bottom-12 left-12 right-12 flex items-center justify-between z-20 transition-all duration-500">

          {/* Modern Branding Section (Swapped: Logo Right, Text Left) */}
          <div className="flex items-center gap-4 group" dir="rtl">
            <div
              className="relative flex items-center justify-center bg-transparent"
              style={{ width: '55px', height: '55px' }}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-5 rounded-full blur-xl transition-opacity" style={{ color: theme.primary }}></div>

              <img
                src={theme.logoUrl || "/logos/Logo (2).svg"}
                alt="Logo"
                className="w-10 h-10 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  filter: (theme.cardBg.includes('rgba') || theme.cardBg.startsWith('#f') || theme.cardBg === '#ffffff') 
                    ? 'brightness(0)' 
                    : 'invert(1) brightness(1.5)'
                }}
              />
            </div>

            <div className="flex flex-col text-right border-r-[1px] pr-6" style={{ borderColor: `${theme.primary}33` }}>
              <span
                className="text-2xl font-black tracking-tight leading-none mb-2"
                style={{ color: theme.primary }}
              >
                منصة المستثمر الاقتصادية
              </span>
              <span 
                className="text-[10px] md:text-[18px] font-bold uppercase tracking-[0.1em] opacity-40"
                style={{ color: theme.textColor }}
              >
                في رحلة لتطوير الاقتصاد العربي
              </span>
            </div>
          </div>

          {/* Right side: Domain name (LTR) */}
          <div className="flex flex-col items-end">
             <span
              dir="ltr"
              className="text-base md:text-xl font-black tracking-[0.2em] uppercase opacity-70"
              style={{ color: theme.primary }}
            >
              AL-INVESTOR<span className="opacity-30">.COM</span>
            </span>
            <div 
              className="h-[2px] w-10 mt-1.5 rounded-full" 
              style={{ backgroundColor: theme.primary, opacity: 0.6 }}
            ></div>
          </div>

        </div>
      </div>
    </div>
  );
};

