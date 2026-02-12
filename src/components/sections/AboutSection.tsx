"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS, ABOUT_FEATURES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24 sm:mb-32" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Nosotros"
          title="&iquest;Por qu&eacute; Click Rick?"
          subtitle="Combinamos experiencia t&eacute;cnica con visi&oacute;n de negocio para entregar soluciones de IA que realmente impactan."
        />

        {/* Two-column layout: features + stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {ABOUT_FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-accent-green/10 flex items-center justify-center group-hover:bg-accent-green/20 transition-colors duration-300">
                  <Check size={14} className="text-accent-green" strokeWidth={2.5} />
                </div>
                <p className="text-dark-300 leading-relaxed text-[15px]">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="relative group rounded-2xl border border-white/[0.04] bg-white/[0.02] p-6 text-center hover:border-brand-500/15 hover:bg-white/[0.04] transition-all duration-500"
              >
                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-transparent group-hover:from-brand-500/[0.03] transition-all duration-700" />

                <div className="relative z-10">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-3xl font-bold gradient-text sm:text-4xl block"
                  />
                  <p className="mt-2 text-xs text-dark-500 tracking-wide uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
