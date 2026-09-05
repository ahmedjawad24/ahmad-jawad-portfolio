"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolioData";

// 5 sets provide a seamless buffer for rapid clicks and continuous forward/backward looping
const EXTENDED_TESTIMONIALS = [
  ...TESTIMONIALS.map((t) => ({ ...t, setKey: "s0" })),
  ...TESTIMONIALS.map((t) => ({ ...t, setKey: "s1" })),
  ...TESTIMONIALS.map((t) => ({ ...t, setKey: "s2" })),
  ...TESTIMONIALS.map((t) => ({ ...t, setKey: "s3" })),
  ...TESTIMONIALS.map((t) => ({ ...t, setKey: "s4" })),
];

const BASE_INDEX = TESTIMONIALS.length * 2; // Index 12 (Set 2, Card 0)

export default function TestimonialsSection() {
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(BASE_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardStep, setCardStep] = useState(414); // Fallback: 390 card + 24 gap

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Measure card width + gap dynamically
  const measureCard = useCallback(() => {
    if (trackRef.current) {
      const firstCard = trackRef.current.querySelector<HTMLElement>(
        "[data-review-card]"
      );
      if (firstCard) {
        setCardStep(firstCard.offsetWidth + 24);
      }
    }
  }, []);

  useEffect(() => {
    measureCard();
    window.addEventListener("resize", measureCard);
    return () => window.removeEventListener("resize", measureCard);
  }, [measureCard]);

  // Handle seamless circular reset when moving too far into outer sets
  const handleTransitionEnd = () => {
    // If user scrolled past Set 3, silently jump back to Set 2 without transition
    if (currentIndex >= TESTIMONIALS.length * 3) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - TESTIMONIALS.length);
    }
    // If user scrolled into Set 0, silently jump forward to Set 2 without transition
    else if (currentIndex < TESTIMONIALS.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + TESTIMONIALS.length);
    }
  };

  // Re-enable transition after silent position reset
  useEffect(() => {
    if (!isTransitioning) {
      const id1 = requestAnimationFrame(() => {
        const id2 = requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
        return () => cancelAnimationFrame(id2);
      });
      return () => cancelAnimationFrame(id1);
    }
  }, [isTransitioning]);

  // Advance smoothly forward into next testimonial
  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Move smoothly backward into previous testimonial
  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -40) {
      scrollNext();
    } else if (diff > 40) {
      scrollPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="py-16 sm:py-24 border-b border-slate-800/80 relative overflow-hidden"
      id="testimonials"
    >
      {/* Backwards-compatible anchor for #reviews */}
      <span id="reviews" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold theme-badge-secondary mb-3">
              <Sparkles size={14} className="theme-text-accent" />
              <span>Client Testimonials & Recommendations</span>
            </div>
            <h2 className="section-header-title text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              What Clients & Engineering Teams Say.
            </h2>
            <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Real feedback from founders, medical directors, and engineering leads who trusted me to build and deploy their machine learning models and web apps.
            </p>
          </div>

          {/* Quick Summary Badge */}
          <div className="p-3.5 sm:p-4 rounded-2xl theme-surface border flex items-center gap-3.5 shadow-sm shrink-0">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <div className="border-l border-slate-700/60 pl-3">
              <div className="text-xs sm:text-sm font-bold text-white">4.9 / 5.0 Rating</div>
              <div className="text-[11px] text-slate-400">99% Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          ref={containerRef}
          className="overflow-hidden w-full py-4 -my-4 select-none"
        >
          {/* Smooth Continuous Infinite Track */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${currentIndex * cardStep}px)`,
              transition: isTransitioning
                ? "transform 480ms cubic-bezier(0.2, 0.8, 0.2, 1)"
                : "none",
            }}
            className="flex gap-6 will-change-transform"
          >
            {EXTENDED_TESTIMONIALS.map((review, idx) => {
              const isSelected = selectedReviewId === review.id;
              return (
                <div
                  key={`${review.id}-${review.setKey}-${idx}`}
                  data-review-card
                  onClick={() =>
                    setSelectedReviewId(isSelected ? null : review.id)
                  }
                  className={`w-[85vw] sm:w-[380px] md:w-[410px] shrink-0 theme-surface p-6 rounded-3xl border transition-all flex flex-col justify-between cursor-pointer group select-none ${
                    isSelected
                      ? "border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/10"
                      : "hover:border-slate-500 shadow-sm"
                  }`}
                >
                  <div>
                    {/* Top: Reviewer Name, Role, Avatar & Country */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--accent-primary)] shrink-0 bg-slate-800 shadow-sm">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            sizes="44px"
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-white truncate group-hover:theme-text-accent transition-colors">
                            {review.name}
                          </h3>
                          <p className="text-xs text-slate-400 truncate">
                            {review.role} · {review.company}
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium theme-card-inner border text-slate-300 shrink-0">
                        <span className="text-sm leading-none">{review.flag}</span>
                        <span className="text-[11px] font-semibold">{review.country}</span>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-2 mb-3.5 pb-3 border-b border-slate-700/50">
                      <div className="flex items-center gap-0.5">
                        {[...Array(Math.floor(review.rating))].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            className="text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Feedback / Review Quote */}
                    <div className="mb-5 relative">
                      <Quote
                        size={20}
                        className="theme-text-accent/30 mb-2 rotate-180"
                      />
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                        &ldquo;{review.feedback}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Project Delivered (No Date or Year) */}
                  <div className="pt-3.5 border-t border-slate-700/50 flex items-center text-[11px]">
                    <span className="theme-text-accent font-semibold flex items-center gap-1.5 truncate">
                      <CheckCircle2 size={13} className="shrink-0" />
                      <span className="truncate">{review.project}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls: Exactly ONE Pair of Buttons Centered in Middle of Section, No Finite Count/Dots */}
        <div className="flex items-center justify-center gap-3 pt-8">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="group flex items-center gap-2 px-5 py-3 rounded-2xl theme-surface theme-surface-hover border border-slate-700 hover:border-[var(--accent-primary)] text-slate-300 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer font-medium text-xs sm:text-sm"
            title="Previous review"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Previous</span>
          </button>

          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="group flex items-center gap-2 px-5 py-3 rounded-2xl theme-surface theme-surface-hover border border-slate-700 hover:border-[var(--accent-primary)] text-slate-300 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer font-medium text-xs sm:text-sm"
            title="Next review"
          >
            <span>Next</span>
            <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
