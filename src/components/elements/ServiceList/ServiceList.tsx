"use client";
import { motion } from "framer-motion";
import { AnimatedDot } from "../AnimatedDot/AnimatedDot";

const services = [
  { title: "Projektowanie systemów" },
  { title: "Montaż i konfiguracja" },
  { title: "Serwis i konserwacja" },
  { title: "Doradztwo i szkolenia" },
];

export const ServiceList = () => {
  return (
    <section
      aria-label="Etapy naszej pracy"
      role="region"
      className="relative  mx-auto py-4 bg-[var(--panel-light)]"
    >
      <ul
        role="list"
        className="flex flex-col items-center justify-center gap-8 font-semibold p-2"
      >
        {services.map((item, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-3 justify-center w-full max-w-sm"
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15, // kaskada
              ease: [0.45, 0.05, 0.55, 0.95],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatedDot />
            <span className="text-center">{item.title}</span>
          </motion.li>
        ))}
      </ul>

      <span
        aria-hidden
        className="absolute -top-2  left-1/8 transform -translate-x-1/2 w-[2px] h-full bg-blue-300 dark:bg-blue-700"
      />
      <span
        aria-hidden
        className="absolute -top-2 left-7/8 transform -translate-x-1/2 w-[2px] h-full bg-blue-300 dark:bg-blue-700"
      />
    </section>
  );
};
