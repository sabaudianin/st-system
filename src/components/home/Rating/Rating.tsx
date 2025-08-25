"use client";
import { motion, type Variants, cubicBezier } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ease = cubicBezier(0.45, 0.05, 0.55, 0.95);

const star: Variants = {
  hidden: { scale: 1, opacity: 1 },
  visible: {
    scale: [1, 1.25, 1],
    transition: { duration: 0.45, ease },
  },
};

export const Rating = () => (
  <section className="bg-[var(--garish-bg)] p-4 text-center">
    <div className="flex flex-col items-center gap-4">
      <motion.ul
        className="flex justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.li
            key={i}
            variants={star}
            className="text-yellow-400 inline-block mx-1 list-none"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 17.27l-5.18 3.04c-.74.44-1.64-.21-1.48-1.06l1-5.82-4.22-4.11c-.63-.62-.28-1.69.59-1.82l5.83-.85 2.61-5.29a1 1 0 0 1 1.8 0l2.61 5.29 5.83.85c.87.13 1.22 1.2.59 1.82l-4.22 4.11 1 5.82c.16.85-.74 1.5-1.48 1.06L12 17.27z" />
            </svg>
          </motion.li>
        ))}
      </motion.ul>

      <p className="font-semibold text-white/95">
        Ponad 1000 instalacji i niemal 100% zadowolonych klientów to najlepsza
        rekomendacja.
      </p>
    </div>
  </section>
);
