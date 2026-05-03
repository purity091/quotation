import React from 'react';
import { Quote } from "lucide-react";
import { Testimonial, ThemeConfig, AspectRatio } from "../types";
import './TestimonialsCarousel.css';

interface ExtendedTestimonialProps {
  testimonials: Testimonial[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  theme: ThemeConfig;
  aspectRatio: AspectRatio;
}

export const TestimonialsCarousel: React.FC<ExtendedTestimonialProps> = ({
  testimonials,
  activeIndex,
  onIndexChange,
  theme,
  aspectRatio,
}) => {
  const currentTestimonial = testimonials[activeIndex];
  if (!currentTestimonial) return null;

  const isStory = aspectRatio === 'story';
  const text = currentTestimonial.text || '';

  const getTextFontSize = () => {
    if (text.length === 0) return isStory ? '4rem' : '2.8rem';
    if (text.length < 40)  return isStory ? '4.2rem' : '2.8rem';
    if (text.length < 100) return isStory ? '3.5rem' : '2.2rem';
    if (text.length < 200) return isStory ? '2.8rem' : '1.8rem';
    return isStory ? '2.2rem' : '1.4rem';
  };

  const logoFilter =
    theme.cardBg.includes('rgba') ||
    theme.cardBg.startsWith('#f') ||
    theme.cardBg === '#ffffff'
      ? 'brightness(0)'
      : 'invert(1) brightness(1.5)';

  return (
    /*
     * The wrapper is a simple block that grows to fill the parent's width.
     * The card inside uses aspect-ratio to enforce dimensions.
     * This is reliable in all modern browsers and works cleanly with html-to-image.
     */
    <div style={{ width: '100%' }}>
      {currentTestimonial.customCss && (
        <style>{currentTestimonial.customCss}</style>
      )}

      {/* ── The card: fixed aspect ratio, all content inside ── */}
      <div
        className="testimonial-card"
        data-card="true"
        style={{
          width: '100%',
          aspectRatio: isStory ? '9 / 16' : '1 / 1',
          backgroundColor: theme.cardBg,
          borderRadius: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 30px 60px -12px rgba(0,0,0,0.15), 0 18px 36px -18px rgba(0,0,0,0.2)',
        }}
      >
        {/* Gradient blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-4rem',
            left: '-4rem',
            width: isStory ? '40rem' : '20rem',
            height: isStory ? '40rem' : '20rem',
            borderRadius: '9999px',
            background: `radial-gradient(circle, ${theme.primary}, transparent)`,
            filter: isStory ? 'blur(150px)' : 'blur(100px)',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-4rem',
            right: '-4rem',
            width: isStory ? '40rem' : '20rem',
            height: isStory ? '40rem' : '20rem',
            borderRadius: '9999px',
            background: `radial-gradient(circle, ${theme.secondary}, transparent)`,
            filter: isStory ? 'blur(150px)' : 'blur(100px)',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        />

        {/* ── Centre content ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isStory ? '5rem 3.5rem 13rem' : '3rem 4rem 9rem',
            boxSizing: 'border-box',
            gap: isStory ? '2rem' : '1.2rem',
          }}
        >
          {/* Quote icon */}
          <div style={{ color: theme.primary, opacity: 0.7, flexShrink: 0 }}>
            <Quote
              size={isStory ? 96 : 52}
              className="fill-current"
            />
          </div>

          {/* Quote text */}
          <p
            dir="rtl"
            style={{
              color: theme.textColor,
              fontSize: getTextFontSize(),
              fontWeight: 700,
              lineHeight: 1.45,
              textAlign: 'center',
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              letterSpacing: '-0.01em',
              width: '88%',
              margin: '0 auto',
              overflowWrap: 'break-word',
              flexShrink: 1,
              /* Ensures text never collapses the layout */
              minHeight: '1em',
            }}
          >
            {text ? `"${text}"` : ''}
          </p>

          {/* Avatar + info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: isStory ? '1.2rem' : '0.8rem',
              flexShrink: 0,
            }}
          >
            {/* Avatar ring + image */}
            <div style={{ position: 'relative' }}>
              {/* Gradient ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '9999px',
                  background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
                  filter: 'blur(4px)',
                  opacity: 0.4,
                }}
              />
              <img
                src={currentTestimonial.avatarUrl}
                alt={currentTestimonial.name}
                style={{
                  position: 'relative',
                  width: isStory ? '13rem' : '8rem',
                  height: isStory ? '13rem' : '8rem',
                  borderRadius: '9999px',
                  objectFit: 'cover',
                  objectPosition: `${(currentTestimonial.avatarX || 0) + 50}% ${(currentTestimonial.avatarY || 0) + 50}%`,
                  transform: `scale(${currentTestimonial.avatarScale || 1})`,
                  border: `4px solid ${theme.cardBg}`,
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.15)',
                  display: 'block',
                }}
              />
            </div>

            {/* Name & role */}
            <div style={{ textAlign: 'center' }}>
              <h3
                style={{
                  color: theme.textColor,
                  fontSize: isStory ? '2.4rem' : '1.4rem',
                  fontWeight: 700,
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  margin: 0,
                }}
              >
                {currentTestimonial.name}
              </h3>
              <p
                style={{
                  color: theme.textColor,
                  fontSize: isStory ? '1.5rem' : '0.95rem',
                  fontWeight: 500,
                  opacity: 0.8,
                  margin: '0.3rem 0 0',
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {currentTestimonial.role}
                {currentTestimonial.companyOrCity && (
                  <>
                    {' '}•{' '}
                    <span style={{ color: theme.primary, fontWeight: 700 }}>
                      {currentTestimonial.companyOrCity}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* ── Branding footer ── */}
        <div
          style={{
            position: 'absolute',
            bottom: isStory ? '2.5rem' : '1.8rem',
            left: '2.5rem',
            right: '2.5rem',
            display: 'flex',
            flexDirection: isStory ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isStory ? 'center' : 'space-between',
            gap: isStory ? '0.8rem' : '0',
            zIndex: 20,
          }}
        >
          {/* Logo + brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} dir="rtl">
            <img
              src={theme.logoUrl || "/logos/Logo (2).svg"}
              alt="Logo"
              style={{ width: '40px', height: '40px', objectFit: 'contain', filter: logoFilter, flexShrink: 0 }}
            />
            <div
              style={{
                borderRight: isStory ? 'none' : `1px solid ${theme.primary}44`,
                paddingRight: isStory ? '0' : '1rem',
                textAlign: 'right',
              }}
            >
              <span
                style={{
                  display: 'block',
                  color: theme.primary,
                  fontSize: isStory ? '1.6rem' : '1.1rem',
                  fontWeight: 900,
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  lineHeight: 1.1,
                }}
              >
                منصة المستثمر الاقتصادية
              </span>
              <span
                style={{
                  display: 'block',
                  color: theme.textColor,
                  fontSize: isStory ? '1rem' : '0.65rem',
                  fontWeight: 700,
                  opacity: 0.4,
                  letterSpacing: '0.06em',
                }}
              >
                في رحلة لتطوير الاقتصاد العربي
              </span>
            </div>
          </div>

          {/* Domain */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isStory ? 'center' : 'flex-end' }}>
            <span
              dir="ltr"
              style={{
                color: theme.primary,
                fontSize: isStory ? '1.2rem' : '0.8rem',
                fontWeight: 900,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.7,
              }}
            >
              AL-INVESTOR<span style={{ opacity: 0.35 }}>.COM</span>
            </span>
            <div
              style={{
                height: '2px',
                width: '2rem',
                borderRadius: '9999px',
                backgroundColor: theme.primary,
                opacity: 0.6,
                marginTop: '0.25rem',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
