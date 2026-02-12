"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import NeuralCanvas from "@/components/ui/NeuralCanvas";

const letterAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.03,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function HeroSection() {
  const line1 = "Soluciones de IA que";
  const line2 = "Generan Resultados";
  const line3 = "Reales";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network canvas */}
      <NeuralCanvas />

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(238,118,94,0.3) 0%, transparent 70%)",
            animation: "glow-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(244,162,97,0.3) 0%, transparent 70%)",
            animation: "glow-pulse 10s ease-in-out infinite 3s",
          }}
        />
        <div
          className="absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(129,178,154,0.3) 0%, transparent 70%)",
            animation: "glow-pulse 12s ease-in-out infinite 5s",
          }}
        />
      </div>

      {/* Top fade for navbar blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-950 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Main heading with per-letter animation */}
        <h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5.2rem] lg:leading-[1.05]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="block mb-2">
            {line1.split("").map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block gradient-text">
            {line2.split("").map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                custom={i + line1.length}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block gradient-text">
            {line3.split("").map((char, i) => (
              <motion.span
                key={`l3-${i}`}
                custom={i + line1.length + line2.length}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-xl text-base text-dark-400 sm:text-lg leading-relaxed font-light"
        >
          Desarrollamos sistemas de inteligencia artificial a la medida que
          automatizan procesos, revelan informaci&oacute;n clave y aceleran el
          crecimiento de tu negocio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="primary" href="https://cal.com/clickrick/30min" className="text-base px-8 py-4 group">
            Comienza ahora
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" href="#casos-de-exito" className="text-base px-8 py-4">
            Conoce nuestro trabajo
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-dark-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
