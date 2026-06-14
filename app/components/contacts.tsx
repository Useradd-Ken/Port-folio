"use client";

import { motion } from "framer-motion";
import {

  Mail,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

export default function Contacts() {
  return (
    <section
      id="Contacts"
      className="px-4 md:px-8 py-20 bg-[#0A0A0A]"
    >
      <div className="relative overflow-hidden rounded-[40px] bg-black border border-white/10 min-h-[700px]">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02]" />

        {/* Huge Background Name */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
          absolute
          top-0
          left-0
          text-[7rem]
          sm:text-[10rem]
          md:text-[16rem]
          lg:text-[20rem]
          font-black
          tracking-tighter
          leading-none
          text-white/5
          select-none
          pointer-events-none
          "
        >
          KEN
        </motion.h1>

        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
          absolute
          bottom-[-40px]
          right-[-10px]
          text-[7rem]
          sm:text-[10rem]
          md:text-[16rem]
          lg:text-[20rem]
          font-black
          tracking-tighter
          leading-none
          text-white/5
          select-none
          pointer-events-none
          "
        >
          ROD
        </motion.h1>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[700px] p-8 md:p-16">
          
          {/* Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
              Contact
            </p>

            <h2 className="text-white text-4xl md:text-7xl font-bold max-w-4xl">
              Building digital solutions through
              <span className="text-zinc-500"> code, data, and design.</span>
            </h2>
          </motion.div>

          {/* Bottom */}
          <div className="grid md:grid-cols-4 gap-10 mt-20">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-zinc-400 text-sm mb-4">
                Information Technology student passionate about web
                development, quality assurance, and data-driven systems.
              </p>

              <p className="text-zinc-600 text-xs">
                © 2026 Ken Rod Babatido
              </p>
            </motion.div>

            {/* Github */}
            <motion.a
  href="https://github.com/Useradd-Ken"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5 }}
  className="group"
>
  <div className="flex items-center gap-3 mb-2">
    <Image
      src="/tech/github.svg"
      alt="GitHub"
      width={18}
      height={18}
      className="invert"
    />

    <ArrowUpRight
      size={16}
      className="text-zinc-500 group-hover:text-white transition"
    />
  </div>

  <h3 className="text-white font-semibold">
    GitHub
  </h3>

  <p className="text-zinc-500 text-sm">
    Useradd-Ken
  </p>
</motion.a>

            {/* Email */}
            <motion.a
              href="mailto:kenrdwork@gmail.com"
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-white" size={18} />
                <ArrowUpRight
                  size={16}
                  className="text-zinc-500 group-hover:text-white transition"
                />
              </div>

              <h3 className="text-white font-semibold">
                Email
              </h3>

              <p className="text-zinc-500 text-sm break-all">
                kenrdwork@gmail.com
              </p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
  href="https://www.linkedin.com/in/krbwork"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5 }}
  className="group"
>
  <div className="flex items-center gap-3 mb-2">
    <Image
      src="/tech/linkedin.svg"
      alt="LinkedIn"
      width={18}
      height={18}
      className="invert"
    />

    <ArrowUpRight
      size={16}
      className="text-zinc-500 group-hover:text-white transition"
    />
  </div>

  <h3 className="text-white font-semibold">
    LinkedIn
  </h3>

  <p className="text-zinc-500 text-sm">
    Connect with me
  </p>
</motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}