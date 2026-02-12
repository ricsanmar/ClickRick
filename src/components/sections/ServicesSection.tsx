"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Servicios"
          title="Lo que hacemos"
          subtitle="Soluciones integrales de inteligencia artificial para cada etapa de la transformaci&oacute;n digital de tu empresa."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <div className="glass-card group relative rounded-2xl p-6 sm:p-8 h-full cursor-default">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-accent-warm/0 group-hover:from-brand-500/[0.04] group-hover:to-accent-warm/[0.02] transition-all duration-700" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 relative">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/8 text-brand-400 group-hover:text-brand-300 group-hover:bg-brand-500/15 transition-all duration-500">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      {/* Glow behind icon on hover */}
                      <div className="absolute -inset-2 rounded-xl bg-brand-500/0 group-hover:bg-brand-500/5 blur-xl transition-all duration-700" />
                    </div>

                    {/* Number */}
                    <span className="text-[10px] font-mono tracking-widest text-dark-600 mb-3 block">
                      0{index + 1}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-lg font-semibold text-white mb-3 group-hover:text-brand-100 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-dark-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Hover arrow */}
                    <div className="flex items-center gap-1 text-brand-400 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-xs font-medium">Saber m&aacute;s</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
