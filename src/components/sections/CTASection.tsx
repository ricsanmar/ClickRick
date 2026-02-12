"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function CTASection() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24 sm:mb-32" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600" />

          {/* Animated mesh */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(244,162,97,0.4) 0%, transparent 60%)",
                animation: "float-slow 15s ease-in-out infinite",
              }}
            />
            <div
              className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)",
                animation: "float-slow 18s ease-in-out infinite 3s",
              }}
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.07]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect fill="url(#cta-grid)" width="100%" height="100%" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              &iquest;Listo para transformar
              <br className="hidden sm:block" />
              tu negocio con IA?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-5 max-w-lg text-base text-white/70 leading-relaxed"
            >
              Agenda una consulta gratuita con nuestro equipo de expertos y
              descubre c&oacute;mo la IA puede impulsar tu empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <a
                href="mailto:contact@clickrick.ai"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-700 transition-all duration-300 hover:bg-white/95 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                Agenda una consulta gratuita
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
