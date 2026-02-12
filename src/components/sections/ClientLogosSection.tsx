"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function ClientLogosSection() {
  // Double the logos for seamless loop
  const allLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-xs font-medium tracking-[0.2em] uppercase text-dark-500"
        >
          Empresas que conf&iacute;an en nosotros
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-dark-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-dark-950 to-transparent z-10" />

        <div className="marquee-track">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 mx-8 sm:mx-12 flex items-center gap-2 opacity-25 hover:opacity-50 transition-opacity duration-500 select-none"
            >
              <span
                className="text-lg sm:text-xl font-bold text-dark-300 tracking-tight whitespace-nowrap"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
