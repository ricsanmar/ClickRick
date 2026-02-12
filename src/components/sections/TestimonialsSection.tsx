"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24 sm:mb-32" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Testimonios"
          title="Lo que Dicen Nuestros Clientes"
          subtitle="La confianza de nuestros clientes es nuestro mayor logro."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className={`group relative rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 sm:p-8 hover:border-brand-500/10 transition-all duration-500 ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-500/0 to-transparent group-hover:from-brand-500/[0.02] transition-all duration-700" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-accent-warm fill-accent-warm"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-dark-300 leading-relaxed text-[15px] font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  {/* Avatar placeholder */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-warm/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-brand-300">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                      <p className="text-xs text-dark-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
