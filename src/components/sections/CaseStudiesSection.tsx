"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const caseVisuals: Record<string, { gradient: string; pattern: React.ReactNode }> = {
  "Asistentes IA": {
    gradient: "from-brand-500/30 via-accent-warm/20 to-brand-700/30",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
        <defs>
          <pattern id="dots-ai" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="rgba(244,162,97,0.6)" />
          </pattern>
        </defs>
        <rect fill="url(#dots-ai)" width="200" height="200" />
        <circle cx="100" cy="85" r="25" fill="none" stroke="rgba(238,118,94,0.4)" strokeWidth="1" />
        <circle cx="100" cy="85" r="8" fill="rgba(238,118,94,0.3)" />
        <line x1="100" y1="110" x2="100" y2="150" stroke="rgba(238,118,94,0.3)" strokeWidth="1.5" />
        <line x1="75" y1="125" x2="125" y2="125" stroke="rgba(244,162,97,0.3)" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="3" fill="rgba(244,162,97,0.4)" />
        <circle cx="140" cy="60" r="3" fill="rgba(244,162,97,0.4)" />
        <line x1="60" y1="60" x2="80" y2="75" stroke="rgba(238,118,94,0.2)" strokeWidth="0.5" />
        <line x1="140" y1="60" x2="120" y2="75" stroke="rgba(238,118,94,0.2)" strokeWidth="0.5" />
      </svg>
    ),
  },
  "E-Commerce": {
    gradient: "from-accent-green/25 via-accent-cyan/15 to-accent-green/20",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
        <defs>
          <pattern id="grid-ec" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="rgba(129,178,154,0.4)" />
          </pattern>
        </defs>
        <rect fill="url(#grid-ec)" width="200" height="200" />
        <line x1="30" y1="160" x2="60" y2="90" stroke="rgba(129,178,154,0.4)" strokeWidth="1.5" />
        <line x1="60" y1="90" x2="90" y2="120" stroke="rgba(129,178,154,0.4)" strokeWidth="1.5" />
        <line x1="90" y1="120" x2="120" y2="60" stroke="rgba(110,198,200,0.4)" strokeWidth="1.5" />
        <line x1="120" y1="60" x2="150" y2="80" stroke="rgba(110,198,200,0.4)" strokeWidth="1.5" />
        <line x1="150" y1="80" x2="180" y2="40" stroke="rgba(129,178,154,0.6)" strokeWidth="1.5" />
        <circle cx="120" cy="60" r="3" fill="rgba(129,178,154,0.6)" />
        <circle cx="180" cy="40" r="4" fill="rgba(110,198,200,0.8)" />
      </svg>
    ),
  },
  "Agentes de Voz": {
    gradient: "from-accent-warm/25 via-brand-500/15 to-accent-warm/20",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(244,162,97,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(244,162,97,0.4)" strokeWidth="1" />
        <circle cx="100" cy="100" r="5" fill="rgba(244,162,97,0.5)" />
        <path d="M85,90 L85,110 Q85,120 95,120 L105,120 Q115,120 115,110 L115,90 Q115,75 100,75 Q85,75 85,90Z" fill="none" stroke="rgba(238,118,94,0.3)" strokeWidth="1" />
        <line x1="100" y1="120" x2="100" y2="140" stroke="rgba(238,118,94,0.3)" strokeWidth="1" />
        <path d="M80,140 L120,140" stroke="rgba(244,162,97,0.3)" strokeWidth="1" />
        <path d="M70,95 Q60,95 60,105" stroke="rgba(238,118,94,0.2)" strokeWidth="0.8" fill="none" />
        <path d="M130,95 Q140,95 140,105" stroke="rgba(238,118,94,0.2)" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
};

export default function CaseStudiesSection() {
  return (
    <section id="casos-de-exito" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24 sm:mb-32" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Portafolio"
          title="Casos de &Eacute;xito"
          subtitle="Resultados reales que demuestran el poder de la inteligencia artificial aplicada a los negocios."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {CASE_STUDIES.map((study) => {
            const visual = caseVisuals[study.tag] || caseVisuals["E-Commerce"];
            return (
              <motion.article
                key={study.title}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.04] bg-white/[0.015] hover:border-white/[0.08] transition-all duration-500"
              >
                {/* Abstract visual header */}
                <div className={`relative h-52 bg-gradient-to-br ${visual.gradient} overflow-hidden`}>
                  {visual.pattern}
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 shimmer" />
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-950 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-0 -mt-4 relative z-10">
                  <span className="inline-block rounded-full bg-white/[0.06] border border-white/[0.06] px-3 py-1 text-[11px] font-medium text-dark-300 tracking-wide uppercase">
                    {study.tag}
                  </span>
                  <h3
                    className="mt-4 text-lg font-semibold text-white leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm text-dark-400 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Result */}
                  <a
                    href="https://cal.com/clickrick/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-accent-green">
                      {study.result}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-dark-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
